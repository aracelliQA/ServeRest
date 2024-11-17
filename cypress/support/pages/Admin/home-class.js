const el = require ('../../attributes/Admin/home-attributes').ELEMENTS
const data = require ('../../../fixtures/Admin/home-data.json')
import '../../commands'

class home {
    validate(){
        cy.login();
        cy.wait(2000);
        cy.visit('/admin/home')
        cy.wait(2000);
        cy.get(el.header).should('be.visible');
        cy.get(el.title).should('be.visible').and('contain',data.title);
        cy.get(el.addUserButton).should('be.visible');
        cy.get(el.listUserButton).should('be.visible');
        cy.get(el.addProductsButton).should('be.visible');
        cy.get(el.listProductsButton).should('be.visible');
        cy.get(el.reportsButtons).should('be.visible');
    }
}

export default new home();