---
slug: davi-marcon-internship
title: "Projeto de estágio Bactopia DSL2"
author: Davi Marcon
author_title: Estagiário
author_url: https://github.com/mxrcon
author_image_url: https://avatars.githubusercontent.com/u/48180517?v=4
tags: [Estágio, Nextflow, Pipelines]
---

Durante meu período de estágio na Biosharp, Uma das minhas atividades principais foi adaptar o software [Bactopia](https://bactopia.github.io) para a DSL-2 do [Nextflow](https://nextflow.io).

<!--truncate-->
## Contexto

Logo após iniciar meu estágio na Biosharp, fui abientado ao fluxo de trabalho da empresa, utilizando _workflows_ de desenvolvimento baseados em _git-braches_, fui familiarizado com as ferramentas utilizadas como conda, Docker, Nextflow e a as plataformas de execução de pipelines em nuvel( Gooogle Life Sciences e AWS). Após essa introdção a metodologia de trabalho da empresa, fui apresentado ao software [Bactopia](https://bactopia.github.io). 
O Bactopia é baseado na linguagem Nextflow, e tem como objetivo o processamento automatizado de genomas bacterianos (_reads_ em formato _fastq_ a partir da técnica de _Whole Genome Sequencing_ - WGS), realizando diversos tipos de análises: controle de qualidade das reads, montagem contra o genoma de referência (_mapping_), montagem _de novo_, chamada de variantes (SNPs e INDELS), investigação de mutações associadas à resistência aos antimicrobianos, anotação funcional do genoma e análise filogenética. 

Apesar de todas as funcionalidades, o Bactopia estava ainda na versão 1.6.4 e atualização para a DSL2 era uma das metas para o desenvolvimento da versão 2.0.0. A atualização para DSL2 permitiria ao Bactopia a flexibilização do workflow, com o uso de módulos flexíveis e facilmente modificados no lugar de processos estáticos. O uso desses moodulos permitira que a criação de sub-workflows e o a adição de módulos fosse possível sem interromper o workflow principal, além de tornar o código mais acessível para contribuições. A partir desta problemática, sob orientação de [Abhinav Sharma](https://github.com/abhi18av), iniciei a trajetória de aplicação da DSL2 ao Bactopia.

## Desenvolvimento

Inicialmente Bactopia continha todos os processos em seu script principal `main.nf`, com o uso da DSL2 o número de linhas pode ser reduzido pois permite a modularização dos processos (pelo modulos), com o uso da funcionalidade de importar modulos. 

### Modularização

Com o objetivo de reduzir o conteúdo do script principal e permitir a modificação de modulos sem interromper o fluxo de trabalho no script principal, separando a criação do workflow em hierarquia de `workflow -> sub-workflow -> module` eu dividi os modulos em pastas e sub-pastas com o seguinte template:

```
modules/
├── Quality Control
│   └── Fastqc
│       ├── process.nf
│       ├── bin
│       ├── nextflow.config
│       ├── README.md
│       ├── templates
│       ├── test_data
│       ├── test_params.yaml
```
Nessa nova estrutura tornamos cada processo independente, com a possibilidade de executá-los individualmente com testes e parâmetros próprios, e também com o uso de `stubs` para o teste rápido com arquivos sem conteúdo. [Bioinformatics-lab/bactopia#4](https://github.com/bioinformatics-lab/bactopia/pull/4)

Esses procedimentos (combinação de DSL-2 e `stubs`) permitem o desenvolvimento independente de módulos e o trabalho individualizado para cada processo, assim, o script `main.nf` pode ficar intacto enquanto novos módulos e novas configurações são adicionados.

Aproveitando-se desse sistema de testagem individual com nextflow, [Robert Petit](https://github.com/rpetit3) ( O desenvolvedor da ferramenta) implementou um sistema de testagem para cada módulo com a biblioteca pytest da linguagem python.

Além da modularização, cada processo precisou ter suas intruções de entrada e saída adaptados para o novo formato de uso de `Channels` do Nextflow, portanto a atualização para esse formato só foi possível graças a testagem individualizada para cada módulo. 

O trabalho pode ser acompanhado na [Pull request#3](https://github.com/bioinformatics-lab/bactopia/pull/3) feita no galho de desenvolvimento da Biosharp OÜ.

## Repercussão do desenvolvimento

O objetivo do desenvolvimento de uma versão DLS2 para o bactopia era me ambientar ao uso de Nextflow para criação de pipelines. Mas durante o processo de modularização e atualização para a DSL mais recente, o desenvolvedor principal da ferramenta notou o trabalho e nos contactou via Github com o desejo de utilizar as mudanças na versão 2.0.

Após o contato de Robert, Abhinav me orientou e auxiliou com o procedimento de _git rebase_ para adequação do trabalho e após os ajustes de Robert o desenvolvimento pode finalmente ser combinado para o branch principal de bactopia, e posteriormente para o desenolvimento da versão 2.0. [Bactopia#228](https://github.com/bactopia/bactopia/pull/228)
O histórico dessa 