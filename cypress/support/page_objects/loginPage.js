import LoginElements from "../elements/loginElements"

const loginElements = new LoginElements();

class LoginPage {
    clickOnRegiterAndValidateRedirection(){
        cy.intercept('GET', '/register').as('registerRequest'); // Intercepta a requisição

        cy.get(loginElements.btnRegister()).click(); // Clica no botão de registro

        cy.wait('@registerRequest').its('response.statusCode').should('eq', 200); // Aguarda a resposta 200

        cy.url().should('include', '/register'); // Verifica se houve o redirecionamento
    }
}

export default LoginPage