import home from '../support/pages/Customer/home-class'
import productPage from '../support/pages/Customer/productPage-class'
import shopList from '../support/pages/Customer/shopList-class'

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


 it('Shop List', () => {
  shopList.emptyList();
  cy.log('Empty list validated.');
  shopList.addProduct();
  shopList.changeQuantity();
  cy.log('Shop List validated.');

});

it('Logout', () => {
  home.logout();
  cy.log('Logout finished.');

});



})