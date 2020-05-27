---
slug: 'linux-utils'
title: Linux Resumo de utilitários e utilidades
tags:
  - Linux
  - Utilidades
  - bash
  - command
  - Utilitários
  - Fedora
excerpt: |
  Snippets, utilidades no Linux
---

### Usuários

- `w`: Informações gerais sobre usuários logados e seus processos.
- `who`: Informações dos usuários atuais (do utmp)
- `last`: Listagem do histórico de logins (/var/log/wtmp)
- `lastlog`: Retorna informações sobre últimos logins.

### Processos

- `jobs`: Lista as tarefas rodando em fore/background.
- `ps -auxw`: Lista todos os processos do sistema:
- Quando iniciamos um aplicativo através do seu comando, o terminal fica bloqueado, impedindo sua utilização. Para liberar o terminal e fazer com que o programa passe a ser executado em background
  - Pressionar `Ctrl + z` e executar o comando `$ bg`
- Para ver os processos que estão pausados ou sendo executados em segundo plano no bash em que estamos
  - `$ jobs`

### Utilitários

- `whatis/apropos`: Descrição do programa.
- `bc`: Calculadora (ex: echo "scale=2;1/10"|bc //scale são as casas decimais).
