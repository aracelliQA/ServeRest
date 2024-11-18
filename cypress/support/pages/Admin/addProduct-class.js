const el = require ('../../attributes/Admin/addProducts-attributes').ELEMENTS
const data = require ('../../../fixtures/Admin/addProduct-data.json')
import '../../commands'

class addProducts {
    add(){
        cy.login();
        cy.wait(2000);
        cy.visit('/admin/cadastrarprodutos');
        cy.wait(2000);
        cy.get(el.name).type(data.name);
        cy.get(el.price).type(data.price);
        cy.get(el.description).type(data.description);
        cy.get(el.quantity).type(data.quantity);
        cy.get(el.image).selectFile('./cypress/support/importFiles/image.png');
        cy.get(el.addButton).click();
        cy.wait(3000);
    }

 
}

export default new addProducts();