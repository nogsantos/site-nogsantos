---
slug: 'linux-cron'
title: Linux Configurações crontab
tags:
  - Linux
  - crontab
  - Fedora
excerpt: |
  Snippets, como configurar o crontab no linux
---

### Configurar um agendamento

Edição do arquivo

```bash
crontab -e 
```

**Formato do agendamento**

Ex.: Executar esse script todos os dias, todos os meses, todos os anos, a cada cinco minutos

```bash
# minute (m) hour (h) day of month (dom) month (mom) command

*/5 * * * * [diretorio-arquivo-executavel]
```

**Listar tasks agendadas**

```bash
crontab -l 
```
