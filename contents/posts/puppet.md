---
slug: 'puppet'
title: Puppet, instalação e comandos básicos para o ambiente de desenvolvimento
tags:
  - Puppet
  - Automação
excerpt: |
  Puppet é uma ferramenta e plataforma Open Source para automação e gerenciamento de configuração de servidores e infraestrutura
---

Essa página é um resumo da apostila [Puppet-BR](https://github.com/puppet-br/apostila-puppet), abordando a questão de instalação e configurações básicas.

## Instalação e configuração do ambiente de desenvolvimento

Base criada no CentOS-7, utilizado máquina virtual com Vagrant. Como sugestão, utilizar o ambiente já configurado [puppet-toolkit](https://github.com/instruct-br/puppet-toolkit) para aprendizado.

> Comandos executados como sudo `sudo -i`

### puppet-server

Máquina Master

**Definição do hostname**

```bash
hostnamectl set-hostname puppet
```

> confirmar a atualização, execute `hostname`

**Adicionando o repositório da Puppet**

```bash
rpm -ivh http://yum.puppetlabs.com/puppetlabs-release-pc1-el-7.noarch.rpm
```

**Instalando o puppet server**

```bash
yum install -y puppetserver
```

No ambiente de testes, pode ser alterado as configurações da JVM, reduzindo a alocação de memória do sistema.

```bash
vi /etc/sysconfig/puppetserver
```

Alterar a linha com o parâmetro `JAVA_ARGS` as propriedades `Xms` e `Xmx` para valores menores do padrão, de `g` para `m`, como no exemplo:

```bash
JAVA_ARGS="-Xms256m -Xmx512m ..."
```

Com esta configuração será alocado 512 MB para uso da JVM usada pelo Puppet Server. Por padrão, são alocados 2 GB de memória.

Após a configuração:

- inicializar e definir na inicialização do sistema

```bash
puppet resource service puppetserver ensure=running enable=true
```

- visualizar o status

```bash
systemctl status puppetserver.service -l
```

- Desabilitando o firewall, no ambiente de desenvolvimento, não é necessário

```bash
puppet resource service firewalld ensure=stopped
```

> Gerar um certificado no server
>
> ```bash
> puppet cert generate <hostname-fqdn>
>
> # Consulta ao fqdn: hostname --fqdn
> ```

Gerar o link para desenvolvimento e execução dos fatos. Mapeando o host com a máquina virtual

```bash
cd /etc/puppetlabs/code/environments/
ln -s /vagrant/control-repo production
```

> Certifique-se de que, o diretório do control-repo está compartilhado dentro do diretório do vagrant

Para que seja possível a comunicação dos clientes com o master, a porta 8140/TCP deve estar liberada e disponível

- verificar a porta no master

```bash
netstat -na | grep 8140
# Out
tcp6       0      0 :::8140                 :::*                    LISTEN
```

### Instalação e configuração puppet-agent na máquina cliente (node)

Definir o hostname para identificação no master. A resolução de nomes dos agentes via DNS, não é requisito para o funcionamento do Puppet, mas é considerada como uma boa prática.

> Para resolução de nomes, configure corretamente o arquivo `/etc/resolv.conf` com os parâmetros: `nameserver`, `domain` e `search`. Esses parâmetros devem conter a informação do(s) servidor(es) DNS e do domínio de sua rede. O arquivo `/etc/hosts` deve possuir pelo menos o nome do próprio host em que o agente está instalado. Neste arquivo deve existir uma entrada que informe o seu IP, FQDN e depois o hostname.
>
> Exemplo: 192.168.1.10 node1.domain.com.br node1.
>
> No Debian/Ubuntu, o hostname é cadastrado no arquivo /etc/hostname. No CentOS/Red Hat, o hostname /etc/sysconfig/network. é cadastrado na variável HOSTNAME do arquivo
>
> _Fonte: Puppet-BR apostila Puppet_

**Adicionar endereço do puppet server aos hosts**

> O único requisito de fato é que o host consiga resolver o nome do servidor Puppet Master. Por padrão, o agente vai usar o FQDN do host como o CN-Common Name para identificá-lo durante a criação do certificado SSL. Entretanto, é possível usar o Puppet em situações que seja necessário que o CN do certificado não possua nenhuma relação com o DNS.

**Visualizar a configuração de nome e domínio do sistema operacional**

```bash
echo "$(hostname) >> $(hostname --fqdn) >> $(hostname --domain)"
```

```bash
vi /etc/hosts
```

Adicionar ao final do arquivo a linha que resolve para o endereço do `puppetserver` exe.:

endereço | hostnames

```bash
...
172.22.3.100 puppetserver.local puppet puppet-master
```

**Adicionando o repositório da Puppet**

```bash
rpm -ivh http://yum.puppetlabs.com/puppetlabs-release-pc1-el-7.noarch.rpm
```

**Instalando o agent**

```bash
yum install -y puppet-agent
```

Com o agente instalado, é possível realizar as configurações utilizando o `puppet resource`

- Desabilitando o firewall, no ambiente de desenvolvimento, não é necessário

```bash
puppet resource service firewalld ensure=stopped
```

- Iniciar o agente do Puppet como serviço e habilitá-lo para ser executado após o boot do sistema operacional

```bash
puppet resource service puppet ensure=running enable=true
```

> Em um host em que o agente está instalado, precisamos configurá-lo para que ele saiba quem é o Master.
> No arquivo /etc/puppetlabs/puppet/puppet.conf, adicione as linhas:
>
> ```bash
> [main]
> certname = <hostname.certname>
> server = <master.hostname.fqdn>
> environment = production
>
> [agent]
> report = true
> ```

### Certificados

As conexões entre agente e servidor Puppet são realizadas usando o protocolo SSL e, através de certificados, ambos se validam.

Um servidor Master do Puppet é um CA (Certificate Authority) e implementa diversas funcionalidades como gerar, assinar, revogar e remover certificados para os agentes.

Para que o master se comunique com o nó, é necessário realizar as assinaturas dos certificados:

**No master**

Visualizar os certificados

```bash
puppet cert list --all
```

Os certificados que não estão assinados, possuem a indicação no início da linha, antes do hostname com operador `+`

ex.:

```bash
  "centos-7.local"     (SHA256) DB:EC:32:83:33:00:2F:81:55:F8:2B:A3:32:21:BC:1C:D8:5B:D2:2D:75:9A:42:5C:76:0C:9F:18:05:20:1E:F8
+ "puppetserver.local" (SHA256) B8:7A:B5:00:BE:8B:AA:41:65:E7:ED:5D:2D:17:1D:6E:E8:81:CF:D4:33:9F:A1:85:09:64:C0:4A:E5:33:3D:CD (alt names: "DNS:puppet", "DNS:puppetserver.local")
```

Para assinar, informe o hostname

```bash
puppet cert sign "centos-7.local"
```

Com o certificado assinado, a comunicação entre master e host pode ser realizada.

Para aplicar o catálogo, no cliente

```bash
puppet agent -t
```

### Removendo um certificado

- No master, remover o certificado

```bash
puppet cert clean <CERTNAME>
```

- No cliente, parar os agentes

```bash
puppet resource service puppet ensure=stopped
puppet resource service mcollective ensure=stopped
puppet resource service pxp-agent ensure=stopped
```

- No cliente, deletar o diretório SSL

```bash
rm -rf /etc/puppetlabs/puppet/ssl
```

- No cliente, remover o cache do catálogo

```bash
rm -f /opt/puppetlabs/puppet/cache/client_data/catalog/<CERTNAME>.json
```

- No cliente, reiniciar os serviços do agent e mcollective

```bash
puppet resource service puppet ensure=running
puppet resource service mcollective ensure=running
```

- No master, assinar o certificado novamente

```bash
puppet cert list --all
puppet cert sign <NAME>
```

## Comandos

### Resources

Consultar e manipular o sistema operacional via Resource Abstraction Layer (RAL)

Ex.:

**Visualizar um usuário no S.O.**

```bash
puppet resource user root

user { 'root':
  ensure             => 'present',
  comment            => 'root',
  gid                => 0,
  home               => '/root',
  password           => '$1$QDyPlph/$oaAX/xNRf3aiW3l27NIUA/',
  password_max_age   => 99999,
  password_min_age   => 0,
  password_warn_days => 7,
  shell              => '/bin/bash',
  uid                => 0,
}
```

**Criar um novo usuário**

```bash
puppet resource user username ensure=present managehome=true

Notice: /User[username]/ensure: created
user { 'username':
  ensure => 'present',
}
```

**Editar um recurso**

Na execução do resource, informar a flag `--edit`. Dessa forma, o puppet abrirá um editor, onde é possível adicionar novos valores

```bash
puppet resource user username --edit
```

**Visualizar a documentação resumida de um resource**

```bash
sudo puppet describe -s user
```

**Ações rápidas**

- Remover um usuário

```bash
puppet resource user username ensure=absent
```

- Remova o diretório

```bash
puppet resource file /home/username ensure=absent force=true
```

- Instalar a última versão de um pacote

```bash
puppet resource package nmap ensure=latest
```

- Criar um grupo de usuários

```bash
puppet resource group teste ensure=present
```

- Verificar o status de um serviço

```bash
puppet resource service ssh
```

- Criar um arquivo com conteúdo

```bash
puppet resource file /tmp/teste.txt ensure=file content='teste'
```

- Executar um ping direcionando a saída para um arquivo

```bash
puppet resource exec 'ping -c3 google.com > /tmp/ping.txt' path='/bin:/usr/bin'
```

- Aplicar um manifesto específico

```bash
puppet apply [caminho]/[nome].pp
```

- Testar o código antes de aplicar

```bash
puppet apply --noop arquivo.pp
```

- Validar o arquivo

```bash
puppet parser validate arquivo.pp
```

## Fatos

O `facter` é um comando é uma ferramenta fundamental do ecossistema do Puppet, que gera uma lista de variáveis chamadas de fatos, que contém diversas informações sobre o sistema operacional.

```bash
facter
```

Produzirá uma saída como:

```bash
aio_agent_version => 5.5.4
augeas => {
  version => "1.10.1"
}
disks => {
  sda => {
    model => "VBOX HARDDISK",
    size => "40.00 GiB",
    size_bytes => 42949672960,
    vendor => "ATA"
  }
}
...
memory => {
  swap => {
    available => "2.00 GiB",
    available_bytes => 2147209216,
    capacity => "0.01%",
    total => "2.00 GiB",
    total_bytes => 2147479552,
    used => "264.00 KiB",
    used_bytes => 270336
  },
  system => {
    available => "692.86 MiB",
    available_bytes => 726519808,
    capacity => "30.10%",
    total => "991.18 MiB",
    total_bytes => 1039327232,
    used => "298.32 MiB",
    used_bytes => 312807424
  }
}
mountpoints => {
  / => {
    available => "36.01 GiB",
    available_bytes => 38667358208,
    capacity => "9.92%",
    device => "/dev/sda1",
    filesystem => "xfs",
    options => [
      "rw",
      "seclabel",
      "relatime",
      "attr2",
      "inode64",
      "noquota"
    ],
    size => "39.98 GiB",
    size_bytes => 42927656960,
    used => "3.97 GiB",
    used_bytes => 4260298752
  },
  ...
}
networking => {
  dhcp => "10.0.2.2",
  domain => "local",
  fqdn => "centos-7.local",
  hostname => "centos-7",
  interfaces => {
    eth0 => {
      bindings => [
        {
          address => "10.0.2.15",
          netmask => "255.255.255.0",
          network => "10.0.2.0"
        }
      ],
      bindings6 => [
        {
          address => "fe80::5054:ff:fe8a:fee6",
          netmask => "ffff:ffff:ffff:ffff::",
          network => "fe80::"
        }
      ],
      dhcp => "10.0.2.2",
      ip => "10.0.2.15",
      ip6 => "fe80::5054:ff:fe8a:fee6",
      mac => "52:54:00:8a:fe:e6",
      mtu => 1500,
      netmask => "255.255.255.0",
      netmask6 => "ffff:ffff:ffff:ffff::",
      network => "10.0.2.0",
      network6 => "fe80::"
    },
    ...
  },
  ip => "10.0.2.15",
  ip6 => "fe80::5054:ff:fe8a:fee6",
  mac => "52:54:00:8a:fe:e6",
  mtu => 1500,
  netmask => "255.255.255.0",
  netmask6 => "ffff:ffff:ffff:ffff::",
  network => "10.0.2.0",
  network6 => "fe80::",
  primary => "eth0"
}
os => {
  architecture => "x86_64",
  family => "RedHat",
  hardware => "x86_64",
  name => "CentOS",
  release => {
    full => "7.8.2003",
    major => "7",
    minor => "8"
  },
  selinux => {
    config_mode => "enforcing",
    config_policy => "targeted",
    current_mode => "enforcing",
    enabled => true,
    enforced => true,
    policy_version => "31"
  }
}
...
processors => {
  count => 1,
  isa => "x86_64",
  models => [
    "Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz"
  ],
  physicalcount => 1
}
...
system_uptime => {
  days => 0,
  hours => 13,
  seconds => 48193,
  uptime => "13:23 hours"
}
timezone => UTC
virtual => virtualbox
```

**Extrair valores específicos, digite o nome do fato**

```bash
facter os
```

Out

```bash
{
  architecture => "x86_64",
  family => "RedHat",
  hardware => "x86_64",
  name => "CentOS",
  release => {
    full => "7.8.2003",
    major => "7",
    minor => "8"
  },
  selinux => {
    config_mode => "enforcing",
    config_policy => "targeted",
    current_mode => "enforcing",
    enabled => true,
    enforced => true,
    policy_version => "31"
  }
}
```

> Para definir a saída, pode se utilizar os argumentos `--json` ou `yaml` ex.: `facter os --yaml`

## Nodes

O Puppet começa a compilação da configuração de um catálogo pelo arquivo `/etc/puppetlabs/code/environments/production/manifests/site.pp`. O site.pp é o ponto de entrada do master para identificar a configuração que será enviada a um agente.

Por padrão, o nome do agente é o valor de certname presente no certificado de um agente (por padrão, o FQDN).

Caso o Puppet Master não encontre nenhuma declaração de node explícita para um agente, em última instância pode-se criar um node simplesmente chamado default, que casará apenas para os agentes que não encontraram uma definição de node.

Ex.:

```bash
node default {
  package { 'vim':
    ensure => present
  }
}
```

Para validar/simular alterações no host cliente, utilize o `--noop`

```bash
puppet agent -t --noop
```

## Monitoramento

Quando o nó cliente ativa a o envio de relatório, na configuração, `report = true` os logs gerados no master podem ser localizados em `/var/log/puppetlabs/puppetserver/puppetserver.log`

---

O código com exemplos, pode ser acessado em [Puppet-toolkit](https://github.com/nogsantos/Puppet-toolkit)
