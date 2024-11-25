const el = require ('../../attributes/Customer/shoppingList-attributes').ELEMENTS
const data = require ('../../../fixtures/Customer/shoppingList-data.json')
import productPage from './productPage-class'
import '../../commands'

class shoppingList {
    emptyList(){
        cy.loginCustomer();
        cy.wait(2000);
        cy.visit('/minhaListaDeProdutos');
        cy.wait(2000);
        cy.get(el.emptyMessage).should('contain', data.emptyMessage);
        cy.get(el.homeButton).click();
    }

    addProduct(){
        productPage.validate();
        productPage.addProduct();
        cy.wait(2000);
        cy.get(el.productName).should('contain', data.productName);
        cy.contains(data.productPrice).should('be.visible');
    }

    changeQuantity(){
        cy.get(el.quantity).should('contain', data.quantity);
        cy.get(el.increaseButton).click();
        cy.get(el.quantity).should('contain', data.newQuantity);
        cy.get(el.decreaseButton).click();
        cy.get(el.quantity).should('contain', data.quantity);
        cy.get(el.clearButton).click();
        cy.get(el.emptyMessage).should('be.visible');
    }
}

export default new shoppingList();