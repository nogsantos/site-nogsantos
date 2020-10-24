---
slug: 'docker'
title: Docker containers, imagens e rede
tags:
  - Docker
  - Containers
excerpt: |
  Lista com os comandos básicos para criação de containers, imagens e rede
---

## Containers

Cria um contêiner e inicializa apenas o shell. Após a criação, automaticamente já estamos acessando o shell.

```bash
docker run -it -p [porta] [image] []
Ex.:
docker run -it -p 8080:80 debian:8 /bin/bash
```

Sai do contêiner sem finalizá-lo, deixando-o ativo. (Dentro do contêiner)

```bash
Teclas: Ctrl + P + Q
```

Encerra o contêiner (Dentro do contêiner)

```bash
Teclas: Ctrl + D
```

Retorna para o contêiner caso tenha saído e o conteiner não tenha sido finalizado

```bash
docker attach (conteiner_id)
```

Verifica o que foi feito no contêiner. Atualizações, exclusões etc...

```bash
docker diff (conteiner_id)
```

Lista os processos (contêiner) ativos

```bash
docker ps
```

Parando todos os container ativos de uma vez

```bash
docker stop $(docker ps -q)
```

Remover todos os containers

```bash
docker container prune
```

```bash
docker rm $(docker ps -a -q)
```

Remover somente conteiners com status `exited`

```bash
docker rm $(docker ps -q -f status=exited)
```

Para que tudo o que foi feito não se perca, é necessário realizar o commit do conteiner, caso não seja feito, todas as atualizações realizadas serão perdidas.

Versionamento dos contêiners

```bash
docker commit [conteiner_id] [nome do conteiner]
Ex.:
docker commit 8c1a nogsantos/debian:8
```

Executa um comando no host dentro do contêiner informado.

```bash
docker exec (conteiner_id) (comando)
Ex.:
docker exec 8c1a ps -ef
```

É possível ver detalhes referênte ao contêiner em execução.

```bash
docker inspect (conteiner_id)
Ex.:
docker inspect 8c1a
```

Informa o quanto o contêiner está consumindo de recursos na máquina

```bash
docker stats (conteiner_id)
Ex.:
docker stats 8c1a71e75f65
```

Inicia um contêiner que foi finalizado

```bash
docker start (conteiner_id)
```

Finaliza um contêiner sem perder o que foi criado.

```bash
docker stop (conteiner_id)
```

Linkar um contêiner ao outro

```bash
docker run -it --name [alias] --link [nome]:[alias] [contêiner] /bin/bash
```

## Imagens

Lista as imagens criadas na máquina

```bash
docker images
```

Cria um contêiner rodando a imagem informada.

```bash
docker run -it -p 8080:80 nogsantos/nginx-debian:8 /bin/bash
```

Remover uma imagem

```bash
docker -rmi [imagem]
```

Remover todas as imagens do tipo `<none>`

```bash
docker rmi -f (docker images -f "dangling=true" -q)
```

## Rede

Por default, ao subir um container, a rede criada e associada a eles pelo docker é a `bridge`.

Pela rede default, quando um container tenta acessar o outro através do nome, não é possível, acesso somente pelo endereço IP, porém, como os endereços são dinâmicos, ao finalizar e subir novamente o container, a probabilidade de mudança de endereço é grande.

Quando há a necessidade de acesso de um conteiner ao outro, a melhor opção é a de se criar uma rede, pois assim, dentro dessa rede, os conteiners poderão se comunicar utilizando apenas o nome.

Listar os dispositivos de redes

```bash
docker network ls
```

Criar uma rede

```bash
docker network create --driver [driver] [nome]

Ex.:

docker network create --driver bridge nogsantos
```

Inspecionar a rede criada

```bash
docker network inspect nogsantos

[
    {
        "Name": "nogsantos",
        "Id": "e82ce14498e82334cde106c3cedfa2d994342a60f87f7ef4173d88e9c2c18158",
        "Created": "2019-01-19T16:23:56.881347678Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "6e8d4a1b4e912f508c8cec76c0c4fa73545e2420a9c075999fd9153b5cc2b001": {
                "Name": "network-test",
                "EndpointID": "042d8daaf4604de9705580042793d3f796de8acb569b79946f1e159a12f46c49",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
```

Rodar um container dentro da rede específica

```bash
docker run -it --name [nome] --network [nome-rede] [imagem]

Ex.:

docker run -it --name meu-container --network nogsantos nogsantos/ubuntu
```

Visualizar o ip do container

```bash
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' meu-container
```

Visualizar dados da rede do container

```bash
 docker inspect --format="{{json .NetworkSettings.Networks }}" network-test

 {
   "nogsantos": {
     "IPAMConfig":null,
     "Links":null,
     "Aliases":["6e8d4a1b4e91"],
     "NetworkID":"e82ce14498e82334cde106c3cedfa2d994342a60f87f7ef4173d88e9c2c18158","EndpointID":"042d8daaf4604de9705580042793d3f796de8acb569b79946f1e159a12f46c49",
     "Gateway":"172.18.0.1",
     "IPAddress":"172.18.0.2",
     "IPPrefixLen":16,
     "IPv6Gateway":"",
     "GlobalIPv6Address":"",
     "GlobalIPv6PrefixLen":0,
     "MacAddress":"02:42:ac:12:00:02",
     "DriverOpts":null
    }
  }
```
