---
slug: 'kubernetes'
title: Introdução básica ao kubernetes
tags:
  - Kubernetes
  - k8s
excerpt: |
  Básico de gerenciamento kubernetes
---

**Gerar e exportar a chave**

Para acessar o kubernetes remotamente, é necessário definir a configuração e credenciais de acesso pela variável `KUBECONFIG`. Para isso, deve ser gerado um arquivo de configuração:

- `mkdir -p $HOME/.kube`: Caso não exista, criar o diretório `.kube`
- `echo -n $KUBE_CONFIG_HOMOL | base64 -d > $HOME/.kube/config_homol`: Gerar o arquivo exportando a chave de acesso ao kubernetes, que nesse caso, está em decodificado em base64 - Não é um requisito, só uma opção.

```bash
export KUBECONFIG=~/.kube/<arquivo_gerado>
# ex.:
export KUBECONFIG=/home/<usuario>/.kube/config_homol
```

## Conceitos

### Namespaces

Utilizado para definição de limites no kubernets. Os projetos podem/devem ser separados e controlados por namespaces.

**Criar um namespace**

```bash
kubectl create namespace <namespace>
```

> Após criar, para visualizar `kubectl get namespace`

### Deployments

Uma unidade do kubernetes. É objeto de controle dos pods, contém todas as especificações do deploy.

**Visualizar os deployments**

```bash
kubectl get deployments -n <namespace>
```

**Criar um deployment**

```bash
kubectl run <nome> --image=<image> -n <namespace>
# Ex: Criando e habilitando uma porta
kubectl run nginx --port 80 --image=nginx -n my-namespace
```

**Expondo um deployment**

- ClusterIP

Por padrão, apenas informando o comando para expor o deployment, será criado do tipo `ClusterIP`, ou seja, somente para acesso interno no cluster.

```bash
kubectl expose deployment <nome> -n <namespace>
# Ex:
kubectl expose deployment nginx -n my-namespace
```

- NodePort

Para export o deployment, criando associando uma porta que permite o acesso externo, no browser informa-se a flag `--type=NodePort`

```bash
kubectl expose deployment <nome> --type=NodePort -n <namespace>
# Ex:
kubectl expose deployment nginx --type=NodePort -n my-namespace
```

**Visualizar as informações de um deployment**

```bash
kubectl describe deployments <nome-deploy> -n <namespace>
#Ex.:
kubectl describe deployments nginx -n my-namespace
```

**Remover um deployment**

```bash
kubectl delete deployments <nome-deploy> -n <namespace>
#Ex.:
kubectl delete deployments nginx -n my-namespace
```

**Obtendo o código de criação do deployment**

Com o código, é possível versionar, alterar, recriar o deployment mais facilmente

```bash
kubectl get deployments <nome-deploy> -o <tipo yaml|json> -n <namespace> > arquivo.<typo>
# Ex.:
kubectl get deployments nginx -o yaml -n my-namespace > arquivo.yaml
```

### Replicaset

Abaixo e sendo controlados pelo deployment, estão os replicasets, são criados juntamente com eles. Tem o objetivo de controlar a quantidade de pods.

```bash
kubectl get replicasets -n <namespace>
```

### Pods

Estão os containers enviados através de um deployment. A quantidade de pods são controladas pelo replicaset

```bash
kubectl get pods -n <namespace>
```

## Outos comandos

**Editar um serviço criado**

Com o seguinte comando é possível editar o yaml do serviço

```bash
kubectl edit service <nome> -n <namespace>
# Ex.:
kubectl edit service nginx -n my-namespace
```

**Criar deploy por arquivo yml**

```bash
kubectl create -f <file-name>.yml --validate=false
```

**Visualizar os nodes**

```bash
kubectl get nodes
```

**Consultar pods de um namespace**

> `po` serve como abreviação para `pods`

```bash
kubectl get po -n <namespace>
```

**Listar todos os pods de todos os namespaces**

```bash
kubectl get po --all-namespaces
```

**Listar o endereço de ip interno dos pods no namespace**

```bash
kubectl get po -o wide -n <namespace>
```

**Listar deployments em um namespace**

```bash
kubectl get deployments -n <namespace>
```

**Visualizar informações de um node**

```bash
kubectl describe node <node-name>
```

**Visualizar informações de um pod em um namespace**

```bash
kubectl describe pod <pod-name> -n <namespace>
```

**Visualizar informações de um pod em um namespace pelo deploymet name**

```bash
kubectl describe deployment <deployment-name> -n <namespace>
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

**Acessar o pod via ssh**

Os passos para acessar o pod são:

- Localizar o atual nome do pod pelo name-space, que a cada deploy é alterado:

```bash
kubectl get po -o wide -n <namespace>
```

- Com o nome do pod, executar o comando:

```bash
kubectl exec -n <namespace> -it <pod-name> -- sh
```
