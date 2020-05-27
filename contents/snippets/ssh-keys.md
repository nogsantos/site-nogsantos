---
slug: 'ssh-keys'
title: SSH Gerar chaves públicas e privadas
tags:
  - ssh
  - ssh-keygen
  - chave
  - pública
  - privada
excerpt: |
  Snippets, como geração chaves públicas e privadas com ssh-keygen
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
