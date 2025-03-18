import DashboardElements from "../elements/dashboardElements"

const dashboardElements = new DashboardElements();

class DashboardPage {
    validateRedirectedPage() {
        cy.url().should('include', '/dashboard'); // Verifica se houve o redirecionamento
    }

    validateLoginMessage(){
        cy.fixture('messages.json').then((messagesFixture) => {
            cy.get(dashboardElements.msgLogin())
                .invoke('text')
                .should('equal', messagesFixture.logginMessage);
        });
    }
}

export default DashboardPage