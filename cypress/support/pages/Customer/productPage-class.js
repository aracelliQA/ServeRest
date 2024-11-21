const el = require ('../../attributes/Customer/productPage-attributes').ELEMENTS
const data = require ('../../../fixtures/Customer/productPage-data.json')
import home from '../Customer/home-class'
import '../../commands'

class productPage {
    validate(){
        home.searchProduct();
        cy.get(el.detailsButton).click();
        cy.wait(2000);
        cy.get(el.productName).should('contain', data.productName);
        cy.contains(data.productPrice).should('be.visible');
        cy.contains(data.description).should('be.visible');
    }

    addProduct(){
        cy.get(el.addProductButton).click();
    }
}

export default new productPage();