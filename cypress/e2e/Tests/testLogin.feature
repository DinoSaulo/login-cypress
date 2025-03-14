Feature: Registro de novo usuário

    Scenario: Validação de campos obrigatórios
        Given que o usuário acessa a página de registro
        When o usuário tenta enviar o formulário sem preencher o campo "E-mail"
        Then o usuário deve ver uma mensagem de erro informando que o campo é obrigatório
        When o usuário tenta enviar o formulário sem preencher o campo "Senha"
        Then o usuário deve ver uma mensagem de erro informando que o campo é obrigatório
        When o usuário tenta enviar o formulário sem preencher o campo "Confirmar Senha"
        Then o usuário deve ver uma mensagem de erro informando que o campo é obrigatório

    Scenario: Confirmação de senha inválida
        Given que o usuário acessa a página de registro
        And o usuário preenche o campo E-mail com um e-mail válido
        And o usuário preenche o campo Senha com uma senha válida
        And o usuário preenche o campo Confirmação de Senha uma senha válida diferente
        When o usuário submete o formulário de registro
        Then o usuário recebe uma mensagem de erro informando que as senhas não coincidem

    Scenario: Sucesso no registro de um novo usuário
        Given que o usuário acessa a página de registro
        And o usuário preenche o campo E-mail com um e-mail válido
        And o usuário preenche o campo Senha com uma senha válida
        And o usuário preenche o campo Confirmação de Senha com a mesma senha válida
        When o usuário submete o formulário de registro
        Then o usuário deve ser redirecionado para a página de confirmação de registro

    Scenario: Login com o novo usuário registrado
        Given que o usuário acessa a página de registro
        And o usuário cria um novo registro com email e senha validos
        And o usuário é redirecionado para a pagina de login
        When o usuário preenche o campo de email e senha com o email e senha cadastrados
        And o usuário clica no botão de login
        Then o usuário é redirecionado para a página de dashboard
        And o usuário recebe uma mensagem de boas-vindas


