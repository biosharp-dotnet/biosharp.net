---
slug: davi-marcon-internship
title: "Projeto de estágio Bactopia DSL2"
author: Davi Marcon
author_title: Estagiário
author_url: https://github.com/mxrcon
author_image_url: https://avatars.githubusercontent.com/u/48180517?v=4
tags: [Experiência de estágio]
---

Durante meu período de estágio na Biosharp, fui convidado a adaptar o software [Bactopia](https://bactopia.github.io) para a DSL-2 do [Nextflow](https://nextflow.io).

<!--truncate-->
## Contexto

Logo após iniciar meu estágio na Biosharp, fui abientado ao fluxo de trabalho da empresa, utilizando _workflows_ de desenvolvimento baseados em _git-braches_, quando me familiarizei com as ferramentas utilizadas, fui apresentado ao software [Bactopia](https://bactopia.github.io). 
Este programa é baseado na linguagem Nextflow, e tem como objetivo o processamento automatizado de leituras de origem bacteriana, realizando diversos tipos de análise como a presença de genes de resistência a antibióticos, chamada de variantes, montagem e anotação funcional do genoma. 

Esse programa se encontrava na versão 1.6.4 e atualização para a DSL2 era uma das metas para o desenvolvimento da versão 2.0.0. Com a orientação do meu supervisor Abhinav Sharma, dei os primeiros passos para o uso da DSL2 no bactopia.

## Desenvolvimento

Inicialmente Bactopia continha todos os modulos em seu script principal `main.nf`, com o uso da DSL2 o número de linhas pode ser reduzido pois permite a modularização dos processos, com o uso da funcionalidade de importar modulos. 

### Modularização

Com o objetivo de reduzir o conteúdo do script principal, eu dividi os modulos em pastas e sub-pastas com o seguinte template:

```
modules/
├── Conjunto de módulos
│   └── Process
│       ├── process.nf
│       ├── bin
│       ├── nextflow.config
│       ├── README.md
│       ├── templates
│       ├── test_data
│       ├── test_params.yaml
```
Onde cada processo foi tornado independente, com a possibilidade de executá-los individualmente com testes e parâmetros próprios, e também com o uso de `stubs` para o teste rápido com arquivos sem conteúdo. [Bioinformatics-lab/bactopia#4](https://github.com/bioinformatics-lab/bactopia/pull/4)

Esses procedimentos permitem o desenvolvimento independente de módulos e o trabalho individualizado para cada processo, o script `main.nf` pode ficar intacto enquanto novos módulos e novas configurações são adicionados.

Aproveitando-se desse sistema de testagem individual com nextflow, Robert Petit ( O desenvolvedor da ferramenta) implementou um sistema de testagem para cada módulo com a biblioteca pytest da linguagem python.

Além da modularização, cada processo precisou ter suas intruções de entrada e saída adaptados para o novo formato de uso de `Channels` do nextflow, a atualização para esse formato só foi possível graças a testagem individualizada. 

O trabalho pode ser acompanhado na [Pull request#3](https://github.com/bioinformatics-lab/bactopia/pull/3) feita no galho de desenvolvimento da Biosharp.

## Repercussão do desenvolvimento

O objetivo do desenvolvimento de uma versão DLS2 para o bactopia era me ambientar ao uso de nextflow para criação de pipelines. Mas durante o processo de modularização e atualização para a DSL mais recente, o desenvolvedor principal da ferramenta notou o trabalho e nos contactou via Github com o desejo de utilizar as mudanças na versão 2.0.

Após o contato de Robert, Abhinav me orientou e auxiliou com o procedimento de rebase para adequação do trabalho e após os ajustes de Robert o desenvolvimento pode finalmente ser combinado para o branch principal de bactopia, e posteriormente para o desenolvimento da versão 2.0. [Bactopia#228](https://github.com/bactopia/bactopia/pull/228)
O histórico dessa 