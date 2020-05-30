---
slug: 'linux-pdf'
title: 'Linux: Merge e compressão de PDFs'
tags:
  - Linux
  - Fedora
  - PDF
  - Arquivos
excerpt: |
  Como realizar o merge e compressão de PDFs no Linux
---

### Merge com qpdf

Caso não tenha instalado, `sudo dnf install qpdf`

**Especificando as páginas**

```bash
qpdf --empty --pages A.pdf 2-5,8-10 B.pdf 3-4,16,15,14,17-18,25 A.pdf 7 B.pdf 19-23 C.pdf 13 B.pdf 28 C.pdf 3-10,12,15,17-22,24-26,56 -- output.pdf
```

**Todas as páginas em um arquivo**

```bash
qpdf --empty --pages *.pdf -- out.pdf
```

**Arquivos**

```bash
qpdf --linearize input.pdf output.pdf
```

### Compressão Ghostscript (Nativo)

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=out.pdf in.pdf
```

**-dPDFSETTINGS podem ser:**

-`/screen`: saída de baixa resolução, menor tamanho final do arquivo
-`/ebook` : saída de média resolução, tamanho médio
-`/printer ou /prepress`: alta resolução, maior tamanho final do arquivo

