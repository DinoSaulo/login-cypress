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
        And o usuário deve ver uma mensagem de sucesso informando que o registro foi concluído

