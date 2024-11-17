
const el = require ('../support/attributes/Admin/login-attributes').ELEMENTS;

Cypress.Commands.add('login', (
    username = 'novaes.aracelli@gmail.com', 
    password = 'dumont112' ) => {
        cy.session([username, password], () => {
           
            cy.visit('/')
            cy.get(el.username).type(username);
            cy.get(el.password).type(password);
            cy.get(el.loginButton).click();
            cy.wait(3000)
          })
}
      )