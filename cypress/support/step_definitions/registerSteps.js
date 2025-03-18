import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegisterPage from '../page_objects/registerPage';
import LoginPage from '../page_objects/loginPage';
import RegisterGenerator from '../../plugins/registerGenerator'

const registerPage = new RegisterPage();
const loginPage = new LoginPage();

const registerGenerator = new RegisterGenerator();

let register = registerGenerator.generateRegister()

Given("o usuário preenche o campo E-mail com um e-mail válido", () => {
    registerPage.fillEmailInput(registerGenerator.generateRegister().email);
});

Given("o usuário preenche o campo Senha com uma senha válida", () => {
    cy.fixture('userCredentials.json').then((userCredentials) => {
        registerPage.fillPasswordInput(userCredentials.generalPassword);
    });
    
});

Given("o usuário preenche o campo Confirmação de Senha uma senha válida diferente", () => {
    cy.fixture('userCredentials.json').then((userCredentials) => {
        registerPage.fillConfirmPasswordInput(userCredentials.generalWrongPassword);
    });
});

Given("o usuário preenche o campo Confirmação de Senha com a mesma senha válida", () => {
    cy.fixture('userCredentials.json').then((userCredentials) => {
        registerPage.fillConfirmPasswordInput(userCredentials.generalPassword);
    });
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

Given("o usuário cria um novo registro com email e senha validos", () => {
    registerPage.fillEmailInput(register.email);
    registerPage.fillPasswordInput(register.password);
    registerPage.fillConfirmPasswordInput(register.password);
    registerPage.clickOnRegisterButton();
});

Given("o usuário é redirecionado para a pagina de login", () => {
    registerPage.validateRedirectionAfterRegister();
});

When("o usuário preenche o campo de email e senha com o email e senha cadastrados", () => {
    loginPage.fillEmailInput(register.email);
    loginPage.fillPasswordInput(register.password);
});

Given("que usuário já está registrado", () => {
    register = registerGenerator.generateRegister();

    cy.visit('http://localhost:8080/register');
    registerPage.fillEmailInput(register.email);
    registerPage.fillPasswordInput(register.password);
    registerPage.fillConfirmPasswordInput(register.password);
    registerPage.clickOnRegisterButton();
});

Given("o usuário acessa a página de registro", () => {
    cy.visit('http://localhost:8080/register');
});

When("o usuário tenta se registrar com o e-mail já utilizado no cadastro", () => {
    registerPage.fillEmailInput(register.email);
    registerPage.fillPasswordInput(register.password);
    registerPage.fillConfirmPasswordInput(register.password);
    registerPage.clickOnRegisterButton();
});

When("o usuário deve ver uma mensagem de erro informando que o e-mail já está em uso", () => {
    registerPage.validEmailAlreadInUseMessage();
});