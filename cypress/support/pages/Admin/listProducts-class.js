const el = require ('../../attributes/Admin/listProducts-attributes').ELEMENTS
const data = require ('../../../fixtures/Admin/listProducts-data.json')
import '../../commands'

class listProducts {
    list(){
        cy.loginAdmin();
        cy.wait(2000);
        cy.visit('/admin/listarprodutos');
        cy.wait(2000);
        cy.contains(data.name).should('exist');
        cy.contains(data.price).should('exist');
        cy.contains(data.description).should('exist');
        
    }

 
}

export default new listProducts();