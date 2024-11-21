const el = require ('../../attributes/Customer/home-attributes').ELEMENTS
const data = require ('../../../fixtures/Customer/home-data.json')
import '../../commands'

class home {
    validate(){
        cy.loginCustomer();
        cy.wait(2000);
        cy.visit('/home')
        cy.wait(2000);
        cy.get(el.productList).should('be.visible');
        cy.get(el.search).should('be.visible');
        cy.get(el.searchButton).should('be.visible');
    }

    searchProduct(){
        cy.loginCustomer();
        cy.wait(2000);
        cy.visit('/home')
        cy.wait(2000);
        cy.get(el.search).type(data.productName);
        cy.get(el.searchButton).click();
        cy.wait(1000);
        cy.contains(data.productName).should('be.visible');
        cy.contains(data.productPrice).should('be.visible');
    }
}

export default new home();