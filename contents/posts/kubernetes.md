---
slug: 'kubernetes'
title: Introdução básica ao kubernetes
tags: 
  - Kuernetes
  - ks8
  - Comandos
excerpt: |
  Básico de gerenciamento kubernetes
---

**Gerar e exportar a chave**

Para acessar o kubernetes remotamente, é necessário definir a configuração e credenciais de acesso pela variável `KUBECONFIG`. Para isso, deve ser gerado um arquivo de configuração:

- `mkdir -p $HOME/.kube`: Caso não exista, criar o diretório `.kube`
- `echo -n $KUBE_CONFIG_HOMOL | base64 -d > $HOME/.kube/config_homol`: Gerar o arquivo exportando a chave de acesso ao kubernetes, que nesse caso, está em decodificado em base64

```bash
export KUBECONFIG=~/.kube/<arquivo_gerado>
# ex.:
export KUBECONFIG=/home/nogsantos/.kube/config_homol
```

### create

**Criar um namespace**

```bash
kubectl create namespace <name-space>
```

> Após criar, para visualizar `kubectl get namespace`

**Criar deploy por arquivo yml**

```bash
kubectl create -f <file-name>.yml --validate=false
```

### get

**Visualizar os nodes**

```bash
kubectl get nodes
```

**Consultar namespaces existentes**

```bash
kubectl get namespace
```

**Consultar pods de um namespace**

> `po` serve como abreviação para `pods`

```bash
kubectl get po -n <name-space>
```

**Listar todos os pods de todos os namespaces**

```bash
kubectl get po --all-namespaces
```

**Listar o endereço de ip interno dos pods no namespace**

```bash
kubectl get po -o wide -n <name-space>
```

**Listar deployments em um namespace**

```bash
kubectl get deployments -n <name-space>
```

### describe

**Visualizar informações de um node**

```bash
kubectl describe node <node-name>
```

**Visualizar informações de um pod em um namespace**

```bash
kubectl describe pod <pod-name> -n <name-space>
```

**Visualizar informações de um pod em um namespace pelo deploymet name**

```bash
kubectl describe deployment <deployment-name> -n <name-space>
```

Ex.:

```
$ kubectl get deployments -n api-prod

NAME             DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
celery-beat      1         1         1            0           1h
celery-flower    1         1         1            0           1h
celery-worker    1         1         1            0           1h
api              1         1         1            0           1h

$ kubectl describe deployment celery-flower -n api-prod

Name:                   celery-flower
Namespace:              api-prod
CreationTimestamp:      Wed, 25 Mar 2020 09:38:58 -0300
Labels:                 <none>
Annotations:            deployment.kubernetes.io/revision: 1
Selector:               workload.user.cattle.io/workloadselector=deployment-api-prod-celery-flower
Replicas:               1 desired | 1 updated | 1 total | 0 available | 1 unavailable
...
```

### exec

**Acessar o pod via ssh**

Os passos para acessar o pod são:

- Localizar o atual nome do pod pelo name-space, que a cada deploy é alterado:

```bash
kubectl get po -o wide -n <name-space>
```

- Com o nome do pod, executar o comando:

```bash
kubectl exec -n <name-space> -it <pod-name> -- sh
```
