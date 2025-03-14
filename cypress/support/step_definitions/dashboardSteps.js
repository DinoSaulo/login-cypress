import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import DashboardPage from '../page_objects/dashboardPage';

const dashboardPage = new DashboardPage();

Then("o usuário é redirecionado para a página de dashboard", () => {
    dashboardPage.validateRedirectedPage();
});

Then("o usuário recebe uma mensagem de boas-vindas", () => {
    dashboardPage.validateLoginMessage();
})
