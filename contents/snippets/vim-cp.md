---
slug: 'vim-cp'
title: Vim Colar textos sem perder a formatação
tags:
  - Vim
  - Editor
excerpt: |
  Snippets, como colar um texto no vim sem perder a formatação ativando o paste mode
---

### VIM: Copiar e colar facilmente

**Ativar**

```bash
:set paste
```
**Desativar**

```bash
:set nopaste
```

**Criar atalho para ativar desativar**

```bash
:set pastetoggle=<F3>
```

**Bônus: eliminar linhas em branco  em um arquivo**

```bash
:g/^$/d
```
