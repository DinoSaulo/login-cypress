# login-cypress

# Accenture Desafio Técnico 2

Automação dos testes de front-end do projeto [desafioAnalistaTestes](https://github.com/rhDuxus/desafioAnalistaTestes) utilizando Cypress, Node.js, Javascript e Github Actions.

##

<!--- Utilizando o exemplos do repositório https://github.com/iuricode/readme-template para esse README.md --->

###  📝 Ferramentas utilizadas
| Linguagem     | Framework          | Ferramenta de Gerenciamento | Browser utilizado  |
|---------------|--------------------|-----------------------------|--------------------|
| Javascript    | Cypress v12.17.4   | Node v20.17.0               | Chrome v113        |

## 💻 Pré-requisitos (Execução local)

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Possuir o [Node.js](https://nodejs.org/en) instalado na versão 20.17.0 ou superior;
* Possuir o [Git](https://git-scm.com/downloads) instalado;
* Possuir o [Docker](https://www.docker.com/products/docker-desktop/) instalado; (OBS: Algumas distribuições Linux já possuem o docker instalado por padrão).

## 🚀 Clonar e executar o sistema

Para clonar o projeto, execute o seguinte comando no terminal:
``` bash
git clone https://github.com/rhDuxus/desafioAnalistaTestes.git
```
Após alguns segundos execute os seguintes comandos:
``` bash
cd desafioAnalistaTestes
docker-compose up --build
```

## ☕ Clonar e configurar a automação de testes

``` bash
git clone https://github.com/DinoSaulo/login-cypress.git
```


Após alguns segundos execute os seguintes comandos:

```bash
cd Accenture_desafio_tecnico_2
npm install
```

### 🔥 Execução dos testes

#### Via CLI

```bash
npx cypress run --reporter mochawesome
```
Após a execução do comando os testes serão executados e ao final será exibido o resumo da execução no seguinte formato
```bash
...
  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.17.4                                                                        │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v20.17.0 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          1 found (testLogin.feature)                                                    │
  │ Searched:       **/**/*.feature                                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  testLogin.feature                                                               (1 of 1)


  Registro de novo usuário
    √ Validação de campos obrigatórios (2401ms)
    √ Confirmação de senha inválida (2061ms)
    √ Sucesso no registro de um novo usuário (2310ms)
    √ Login com o novo usuário registrado (3480ms)
    √ Validação de e-mail já registrado (2944ms)


  5 passing (13s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      5                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     13 seconds                                                                       │
  │ Spec Ran:     testLogin.feature                                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
....
====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  testLogin.feature                        00:13        5        5        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:13        5        5

```

#### Via GUI

Execute o comando abaixo para que serja aberto a interface gráfica do Cypress
```bash
npx cypress open
```

###### Passos

1. Clicar no botão "E2E Testing"
2. Clicar no botão "Electron"
3. Clicar no botão "Start E2E Testing in Electron"
4. Clicar em "testLogin.feature"

Após isso a execução dos testes será iniciada como mostrada no vídeo abaixo:

![switch_de_testes](/cypress/videos/testLogin.feature.gif "Switch de testes")

<!---
#### Via Github Actions

A cada commit feito neste repositório os testes são executados automaricamente pelo Github Actions

Atualmente o status ds testes é:
![tests workflow](https://github.com/DinoSaulo/Accenture_desafio_tecnico_2/actions/workflows/ci.yml/badge.svg)
-->
## 💻 Testes

Atualmente esse projeto possui 5 testes, todos eles estão no arquvo [testLogin.feature](./cypress/e2e/Tests/testLogin.feature):

## 📶 Reports

O projeto conta com reports automatizados da execução dos testes. Os reports são feitos utilizando o [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter).

Após cada execução do testes um novo report é gerado. E eles são encontrados em `cypress/reports`, no formato html ou JSON.

![test_resport](/cypress/reports/mochawesome_print.png "Report da execução dos testes")

## ❔ Dúvidas

Pode entrar em contato comigo pelo e-mail: saulobarros1997@gmail.com ou abrir uma issue aqui 😊
