import RegisterElements from "../elements/registerElements"

const registerElements = new RegisterElements();

class RegisterPage {
    clickOnRegisterButton(){
        cy.intercept('POST', '/register').as('registerRequest');
        cy.get(registerElements.btnSubmitRegister()).click(); // Clica no botão de registro
    }

    assertValidationMessageOnInput(input_name){
        let inputLocator = ""
        if(input_name == "E-mail"){
            inputLocator = registerElements.inputEmail();

        } else if(input_name == "Senha"){
            inputLocator = registerElements.inputPassword();
            cy.get(registerElements.inputEmail()).type('email@email.com');
        } else if(input_name == "Confirmar Senha"){
            cy.get(registerElements.inputPassword()).type('password');
            inputLocator = registerElements.inputConfirmPassword();
        } else {
            new Error(`Opção inválida: ${input_name}`);
        }

        cy.fixture('messages.json').then((messagesFixture) => {
            cy.get(inputLocator)
                .invoke('prop', 'validationMessage')
                .then((message) => {
                    expect(message).to.satisfy((msg) =>
                        msg === messagesFixture.alertFillInputIn || msg === messagesFixture.alertFillInputOut
                    );
                });
        });
    };

    fillEmailInput(email){
        cy.get(registerElements.inputEmail()).type(email);
    }

    fillPasswordInput(email){
        cy.get(registerElements.inputPassword()).type(email);
    }

    fillConfirmPasswordInput(email){
        cy.get(registerElements.inputConfirmPassword()).type(email);
    }

    validDifferentPassworldMessage(){
        cy.fixture('messages.json').then((messagesFixture) => {
            cy.get(registerElements.alertMessage())
                .invoke('text')
                .should('equal', messagesFixture.differentPassword);
        });
    };

    validEmailAlreadInUseMessage(){
        cy.fixture('messages.json').then((messagesFixture) => {
            cy.get(registerElements.alertMessage())
                .invoke('text')
                .should('equal', messagesFixture.emailAlreadyInUse);
        });
    };

    validateRedirectionAfterRegister() {
        cy.url().should('include', '/login');

        cy.wait('@registerRequest').its('response.statusCode').should('eq', 302); // Aguarda a resposta 302
    }
}

export default RegisterPage