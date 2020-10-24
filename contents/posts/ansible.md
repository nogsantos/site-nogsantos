---
slug: 'ansible'
title: Ansible, o básico
tags:
  - Ansible
excerpt: |
  O Ansible uma plataforma de automação
---

O Ansible é uma plataforma de automação. Foi criado para provisionamento de máquinas, executar comandos em outras máquinas de forma automatizada.

#### Configuração da chave privada

### `ansible.cfg`

Arquivo para configurações

Descomentar `private_key_file` e apontá-la para a chave privada:

```
private_key_file = /etc/ansible/keys/[chave]
```

Descomentar `remote_user` para definir o usuário que será utilizado na conexão ssh pelo ansible

```
remote_user = nogsantos
```

### `hosts`

Definição dos grupos e hosts para as atividades do ansible

```
[wordpress]
35.226.91.184
...
```

## Ping nos hosts

```bash
ansible all -m ping
35.226.91.184 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```

## Ansible vault

Encriptação de string, arquivos, playbooks por completo para ansible

Encriptar um arquivo

```bash
ansible-vault encrypt [arquivo.yml] --ask-vault-pass
```

Decriptar um arquivo

```bash
ansible-vault decrypt [arquivo.yml] --ask-vault-pass
```

Encriptografar string (senha)

Nesse caso, ele irá gerar um hash que deverá ser colocado no local da senha

```bash
ansible-vault encrypt_string [senha] --ask-vault-pass
!vault |
          $ANSIBLE_VAULT;1.1;AES256
          33623663313161383031633934633830663064356436353064356536626661633337656664653466
          3537363136313664643336363133613866303030616635360a336537366430313537366564346534
          33343661363834353236633536663033343561353039396433383432663034306437346462356363
          3164643763656535630a643932346534393837356534346233343330356431623465633431653461
          6633
```

Para executar, no playbook

```bash
ansible-playbook [playbook.yml] --ask-vault-pass
```

O ansible irá solicitar a senha informada na geração do hash para execução

## Galaxy

[Ansible Galaxy](https://galaxy.ansible.com/home)

Iniciar uma role utilizando a estrutura padrão

```bash
ansible-galaxy init [nome] ... [n]
Ex.:
ansible-galaxy init redis
```
