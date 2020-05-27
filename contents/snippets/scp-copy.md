---
slug: 'scp-copy'
title: SCP Transferir arquivos arquivos de forma segura
tags:
  - scp
  - Cópia
  - Arquivos
excerpt: |
  Snippets, como copiar arquivos entre hosts de forma segura com SCP
---

### SCP: Secury copy 

Transferencia de arquivos segura. [Referência](http://www.hypexr.org/linux_scp_help.php)

O scp permite que os arquivos sejam copiados entre hosts diferentes. Ele usa o `ssh` para transferência de dados e fornece a mesma autenticação e o mesmo nível de segurança.

**Copiar arquivo**

```bash
scp -i [chave-privada] [nome-do-arquivo] [usuario]@[ip-publico]:[local-em-que-sera-salvo]
```
