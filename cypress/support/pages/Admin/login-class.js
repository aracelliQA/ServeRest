const el = require ('../../attributes/Admin/login-attributes').ELEMENTS
const data = require ('../../../fixtures/Admin/login-data.json')
import '../../commands'

class login {
    invalidUsername(){
        cy.login();
        cy.wait(2000);
        cy.visit('/admin/home');
        cy.get(el.logoutButton).click();
        cy.wait(2000);
        cy.get(el.username).type(data.invalidUsername);
        cy.get(el.password).type(data.username);
        cy.get(el.loginButton).click();
        cy.contains(data.alertEmail).should('be.visible');
    }

    invalidPassword(){
        cy.login();
        cy.wait(2000);
        cy.visit('/admin/home');
        cy.get(el.logoutButton).click();
        cy.wait(2000);
        cy.get(el.username).type(data.username);
        cy.get(el.password).type(data.invalidUsername);
        cy.get(el.loginButton).click();
        cy.contains(data.alertPassword).should('be.visible');
    }
}

export default new login();