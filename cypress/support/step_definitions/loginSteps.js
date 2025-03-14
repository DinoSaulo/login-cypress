import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../page_objects/loginPage';
import RegisterPage from '../page_objects/registerPage';

const loginPage = new LoginPage();
const registerPage = new RegisterPage();

let inputvalidado

Given("que o usuário acessa a página de registro", () => {
    cy.visit('http://localhost:8080')
    cy.wait(500);
    loginPage.clickOnRegiterAndValidateRedirection();
});

When("o usuário tenta enviar o formulário sem preencher o campo {string}", (campo) => {
    inputvalidado = campo
    cy.log(inputvalidado)
    registerPage.clickOnRegisterButton();
});

Then("o usuário deve ver uma mensagem de erro informando que o campo é obrigatório", () => {
    cy.log(inputvalidado)

    registerPage.assertValidationMessageOnInput(inputvalidado);
})

When("o usuário clica no botão de login", function () {
    registerPage.clickOnRegisterButton();
});
