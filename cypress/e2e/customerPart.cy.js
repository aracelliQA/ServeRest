/*
The Customer part testing includes the follow functionalities:
1.	Login;
2.	Validate the HomePage;
3.	Search a product;
4.	Validate the Product Page;
5.	Add a product to shop list;
6.	Validate the shopping list.
*/

import home from '../support/pages/Customer/home-class'
import productPage from '../support/pages/Customer/productPage-class'
import shoppingList from '../support/pages/Customer/shoppingList-class'

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


 it('Shopping List', () => {
  shoppingList.emptyList();
  cy.log('Empty list validated.');
  shoppingList.addProduct();
  shoppingList.changeQuantity();
  cy.log('Shopping List validated.');

});

it('Logout', () => {
  home.logout();
  cy.log('Logout finished.');

});



})