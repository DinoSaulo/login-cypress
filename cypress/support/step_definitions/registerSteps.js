import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegisterPage from '../page_objects/registerPage';

const registerPage = new RegisterPage();
import { faker } from '@faker-js/faker';

Given("o usuário preenche o campo E-mail com um e-mail válido", () => {
    registerPage.fillEmailInput(faker.internet.email());
});

Given("o usuário preenche o campo Senha com uma senha válida", () => {
    registerPage.fillPasswordInput("senha@123");
});

Given("o usuário preenche o campo Confirmação de Senha uma senha válida diferente", () => {
    registerPage.fillConfirmPasswordInput("senha@1235");
});

Given("o usuário preenche o campo Confirmação de Senha com a mesma senha válida", () => {
    registerPage.fillConfirmPasswordInput("senha@123");
});

When("o usuário submete o formulário de registro", () => {
    registerPage.clickOnRegisterButton();
});

Then("o usuário recebe uma mensagem de erro informando que as senhas não coincidem", () => {
    registerPage.validDifferentPassworldMessage();
});

Then("o usuário deve ser redirecionado para a página de confirmação de registro", function () {
    registerPage.validateRedirectionAfterRegister();
});

Then("o usuário deve ver uma mensagem de sucesso informando que o registro foi concluído", function () {
    
});





