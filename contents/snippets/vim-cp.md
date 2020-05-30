---
slug: 'vim-cp'
title: 'Linux: Colar textos no vim sem perder a formatação'
tags:
  - Vim
  - Editor
  - Linux
  - Fedora
excerpt: |
  Como colar um texto no vim sem perder a formatação ativando o paste mode
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
