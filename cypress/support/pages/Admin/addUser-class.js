const el = require ('../../attributes/Admin/addUser-attributes').ELEMENTS
const data = require ('../../../fixtures/Admin/addUser-data.json')
import '../../commands'

class addUser {
    add(){
        cy.login();
        cy.wait(2000);
        cy.visit('/admin/cadastrarusuarios');
        cy.wait(2000);
        cy.get(el.title).should('be.visible').and('contain',data.title);
        cy.get(el.name).type(data.name);
        cy.get(el.email).type(data.email);
        cy.get(el.password).type(data.password);
        cy.get(el.addButton).click();
    }
}

export default new addUser();