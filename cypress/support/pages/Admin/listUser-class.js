const el = require ('../../attributes/Admin/listUser-attributes').ELEMENTS
const data = require ('../../../fixtures/Admin/listUser-data.json')
import '../../commands'

class listUser {
    list(){
        cy.loginAdmin();
        cy.wait(2000);
        cy.visit('/admin/listarusuarios');
        cy.wait(2000);
        cy.contains(data.name).should('exist');
        cy.contains(data.email).should('exist');
        cy.contains(data.password).should('exist');
        cy.wait(3000);
    }

 
}

export default new listUser();