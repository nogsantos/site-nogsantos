---
slug: 'scp-copy'
title: 'Linux: Transferir arquivos arquivos de forma segura com scp'
tags:
  - scp
  - Cópia
  - Arquivos
  - Linux
  - Fedora
excerpt: |
  Como copiar arquivos entre hosts de forma segura no linux com scp
---

### SCP: Secury copy 

Transferencia de arquivos segura. [Referência](http://www.hypexr.org/linux_scp_help.php)

O scp permite que os arquivos sejam copiados entre hosts diferentes. Ele usa o `ssh` para transferência de dados e fornece a mesma autenticação e o mesmo nível de segurança.

**Copiar arquivo**

```bash
scp -i [chave-privada] [nome-do-arquivo] [usuario]@[ip-publico]:[local-em-que-sera-salvo]
```
