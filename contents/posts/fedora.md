---
slug: 'fedora'
title: Fedora workstation
tags:
  - Linux
  - Fedora
  - Workstation
  - RPM
  - grouplist
  - groupinstall
excerpt: |
  Fedora workstation dicas
---

## Fedora grouplist

Prepare seu ambiente grouplist

```bash
sudo dnf grouplist
```

```bash
sudo dnf groupinstall "Development Tools" -y
```

```bash
sudo dnf groupinstall "D Development Tools and Libraries" -y
```

```bash
sudo dnf groupinstall "C Development Tools and Libraries" -y
```

```bash
sudo dnf groupinstall "Administration Tools" -y
```

```bash
sudo dnf groupinstall "Development and Creative Workstation" -y
```

```bash
sudo dnf groupinstall "Infrastructure Server" -y
```

```bash
sudo dnf groupinstall "System Tools" -y
```

## Criação de atalhos por comando

Em: `~/.local/share/applications` Criar um arquivo: `[programa].desktop` Conteúdo exemplo:

```
[Desktop Entry]
Version=1.0
Type=Application
Name=Postman
Icon=/usr/local/src/Postman/postman-logo.png
Exec="/usr/local/src/Postman/Postman" %f
Comment=Make api requests
Categories=Development;IDE;
Terminal=false
```
Testar se é necessário tornar o arquivo executável:

```bash
chmod +x
```

## RPM

O rpm é um poderoso gerenciador de pacotes para Red Hat, Suse e Fedora Linux. Ele pode ser usado para criar, instalar, consultar, verificar, atualizar e remover/apagar pacotes de software individuais. Um pacote consiste em um arquivo morto de arquivos e informações do pacote, incluindo nome, versão e descrição:

**Instalando um pacote**

```bash
rpm -ivh {rpm-file}
Ex.:
rpm -ivh mozilla-mail-1.7.5-17.i586.rpm
rpm -ivh --test mozilla-mail-1.7.5-17.i586.rpm
```

**Atualizando um pacote**

```bash
rpm -Uvh {rpm-file}
Ex.:
rpm -Uvh mozilla-mail-1.7.6-12.i586.rpm
rpm -Uvh --test mozilla-mail-1.7.6-12.i586.rpm
```

**Apagar/Remover um pacote instalado**

```bash
rpm -ev {package}
Ex.:
rpm -ev mozilla-mail
```

**Apagar/Remover um pacote instalado sem validar suas dependências**

```bash
rpm -ev --nodeps {package}
Ex.:
rpm -ev --nodeps mozilla-mail
```

**Listar todos os pacotes instalados no sistema**

```bash
rpm -qa
rpm -qa | less
```

**Exibir informações instaladas junto com a versão do pacote e uma breve descrição**

```bash
rpm -qi {package}
Ex.:
rpm -qi mozilla-mail
```

**Descubra a que pacote pertence um arquivo**

```bash
rpm -qf {/path/to/file}
Ex.:
rpm -qf /etc/passwd
rpm -qf /bin/bash
```

**Exibir lista de arquivos de configuração para um pacote**

```bash
rpm -qc {pacakge-name}
Ex.:
rpm -qc httpd
```

**Exibir lista de arquivos de configuração para um comando**

```bash
rpm -qcf {/path/to/file}
Ex.:
rpm -qcf /usr/X11R6/bin/xeyes
```

**Exibir lista de todos os RPMs instalados recentemente**

```bash
rpm -qa --last
rpm -qa --last | less
rpm -qpR {.rpm-file}
```

**Descubra quais dependências um arquivo rpm possui**

```bash
rpm -qR {package}
Ex.:
rpm -qpR mediawiki-1.4rc1-4.i586.rpm
rpm -qR bash
```
