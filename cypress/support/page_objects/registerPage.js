import RegisterElements from "../elements/registerElements"

const registerElements = new RegisterElements();

class RegisterPage {
    clickOnRegisterButton(){
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
                .should('equal', messagesFixture.alertFillInput);
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
    }
}

export default RegisterPage