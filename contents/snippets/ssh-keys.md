---
slug: 'ssh-keys'
title: 'Linux: Gerar chaves públicas e privadas com ssh'
tags:
  - ssh
  - ssh-keygen
  - chave
  - pública
  - privada
  - Linux
  - Fedora
excerpt: |
  Como gerar chaves públicas e privadas no linux com ssh-keygen
---

### SSH Chaves públicas e privadas

**Gerar chaves pública e privada no diretório corrente**

```bash
ssh-keygen -t rsa -b 4096 -f <key-name> -C <user>
```

**Conectar em um host utilizando a chave**

```bash
ssh -i <key-name> <user>@<host-address>
```
