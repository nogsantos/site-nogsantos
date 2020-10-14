---
slug: 'gitlab-ci-runner'
title: Registrar Gitlab ci runner via docker local
tags:
  - gitlab
  - gitlab ci
  - ci
  - gitlab communit
  - communit
  - runner
  - docker
excerpt: |
  Registrar runners locais com docker no gitlab ci
---

**Registrar o runner e criar o container para execução**

```bash
docker run -it --name <container-name> \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  gitlab/gitlab-runner register
```

Após responder as questões informando endereço e token 

**Iniciar o container**

```bash
docker start <container-name> 
```

**Executar comandos do runner no container**

```bash
docker exec -it <container-name> gitlab-runner <comando>

# Ex.:

docker exec -it <container-name> gitlab-runner start
```
