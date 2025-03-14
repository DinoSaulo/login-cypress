import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegisterPage from '../page_objects/registerPage';

const registerPage = new RegisterPage();


Given("o usuário preenche o campo E-mail com um e-mail válido", () => {
    registerPage.fillEmailInput("email@email.com");
});

Given("o usuário preenche o campo Senha com uma senha válida", () => {
    registerPage.fillPasswordInput("senha@123");
});

Given("o usuário preenche o campo Confirmação de Senha uma senha válida diferente", () => {
    registerPage.fillConfirmPasswordInput("senha@1235");
});

When("o usuário submete o formulário de registro", () => {
    registerPage.clickOnRegisterButton();
});

Then("o usuário recebe uma mensagem de erro informando que as senhas não coincidem", () => {
    registerPage.validDifferentPassworldMessage();
});



