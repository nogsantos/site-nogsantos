---
slug: 'vagrant'
title: Vagrant small cheat sheet
tags:
  - Vagrant
  - Virtual
excerpt: |
  Basico cheat sheet vagrant comandos
---

Digitando `vagrant` na linha de comando, será exibido uma lista de todos os comandos disponíveis.

> Dica: Certifique-se de estar no mesmo diretório que o arquivo `Vagrant` ao executar os comandos

# Criando uma máquina virtual

- `vagrant init` -- Inicializa o Vagrant com um arquivo `Vagrantfile`
- `vagrant init <boxpath>` -- Inicializa o vagrant especificando um box. Para encontrar, a lista com as opções disponíveis [catalogo público Vagrant boxes](https://app.vagrantup.com/boxes/search). Quando encontrar o que procura, subistitua no local do boxpath. Exemplo, `vagrant init ubuntu/trusty64`.

# Iniciando uma máquina virtual

- `vagrant up` -- inicia o ambiente vagrant (na primeira execução, provisiona o box)
- `vagrant resume` -- resume uma máquina suspensa
- `vagrant provision` -- força o reprovisionamento de uma máquina já provisionada
- `vagrant reload` -- reinicia uma máquina virtual, carregando as novas configurações no Vagrantfile
- `vagrant reload --provision` -- reinicia uma máquina virtual forçando o provisionamento

# Acessando uma máquina virtual

- `vagrant ssh` -- conecta a uma máquia vua SSH
- `vagrant ssh <boxname>` -- informando o box name

# Finalizando uma máquina virtual

- `vagrant halt` -- finaliza uma máquina virtual
- `vagrant suspend` -- suspende uma máquina virtual (relembrando o último estado)

# Remove uma máquina virtual

- `vagrant destroy` -- finaliza e deleta uma máquina virtual
- `vagrant destroy -f` -- o mesmo acima, sem necessidade de confirmação

# Rsync

- `vagrant rsync-auto <name>` -- ativa auto rsync

# Boxes

- `vagrant box list` -- lista os box instalados no host
- `vagrant box add <name> <url>` -- download da imagem de um box para o computador
- `vagrant box outdated` -- verifica por atualizações de um box
- `vagrant boxes remove <name>` -- deleta o box do computador
- `vagrant package` -- empacota um ambiente em execução do virtualbox em um box reutilizá-vel

# Salvando o progresso

-`vagrant snapshot save [options] [vm-name] <name>` -- vm-name o valor padrão é `default`. Permite criar um snapshot de um box

# Dicas

- `vagrant -v` -- versão do vagrant instalada
- `vagrant status` -- estado atual das máquinas virtuais, local
- `vagrant global-status` -- estado atual de todas a máquinas virtuais no sistema
- `vagrant global-status --prune` -- mesmo do global, suprimindo as entradas inválidas
- `vagrant provision --debug` -- aumenta a verbosidade da saída
- `vagrant push` -- [deploy do code](http://docs.vagrantup.com/v2/push/index.html)!
- `vagrant up --provision | tee provision.log` -- executa `vagrant up`, força o provisionamento e loga toda as saídas no arquivo especificado

# Monta o sistema de arquivos remotos sobre o SSH

Ativar `sshfs`

```bash
vagrant sshfs [target]
```

# Desativar e remover a interface de rede

Para remover uma interface que está sendo utilizada por uma máquina virtual, é necessário desativá-la para então removê-la.

```bash
sudo ip link set [target] down
sudo brctl delbr [target]
```

# Plugins

- [vagrant-hostsupdater](https://github.com/cogitatio/vagrant-hostsupdater) : `$ vagrant plugin install vagrant-hostsupdater` para atualiza seu arquivo `/etc/hosts` automaticamente, todas as vezes que iniciar/finalizar o vagrant box

# Notas

- Se estiver utilizando [VVV](https://github.com/varying-vagrant-vagrants/vvv/), você pode ativar o xdebug executando `vagrant ssh` e então `xdebug_on`.
