import home from '../support/pages/Customer/home-class'
import productPage from '../support/pages/Customer/productPage-class'

describe('ServeRest - Customer user', () => {

  before(()=>{
    cy.clearAllCookies();
  })
  
  it('Homepage', () => {
     home.validate();
     home.searchProduct();
     cy.log('Homepage validated.');
  });

  it('Product Page', () => {
    productPage.validate();
    productPage.addProduct();
    cy.log('Product Page validated.');
 });

})