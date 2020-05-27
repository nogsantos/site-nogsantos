---
slug: 'linux-files'
title: Linux Manipulações de arquivos
tags:
  - Linux
  - arquivos
  - manipulações
  - Fedora
excerpt: |
  Snippets, como manipular arquivos no linux
---

### Eliminar linhas em branco

Cria uma cópia do arquivo removendo as linhas em branco

```bash
sed '/^$/d' [nome-arquivo] > [novo-arquivo] 
```

```bash
awk 'NF>0' [nome-arquivo] > [novo-arquivo]
```

### Localizar texto em um arquivo


```bash
grep [param] [texto] [arquivo]

grep -ni man /var/log/packages/grep.tgz (-i : case insensitive, -n : número da linha) (use ' '(aspas simples) no [texto] para procurar palavra exata.)
```

Ex.:

```bash
grep -ni java test 
```
