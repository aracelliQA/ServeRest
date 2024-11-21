
const el = require ('../support/attributes/Admin/login-attributes').ELEMENTS;

Cypress.Commands.add('loginCustomer', (
    username = 'novaes.aracelli@gmail.com', 
    password = 'teste123.' ) => {
        cy.session([username, password], () => {
           
            cy.visit('/')
            cy.get(el.username).type(username);
            cy.get(el.password).type(password);
            cy.get(el.loginButton).click();
            cy.wait(3000)
          })
}
      )

      Cypress.Commands.add('loginAdmin', (
        username = 'aracellieng@gmail.com', 
        password = 'teste123.' ) => {
            cy.session([username, password], () => {
               
                cy.visit('/')
                cy.get(el.username).type(username);
                cy.get(el.password).type(password);
                cy.get(el.loginButton).click();
                cy.wait(3000)
              })
    }
          )