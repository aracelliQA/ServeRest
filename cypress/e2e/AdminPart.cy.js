/*
The Admin part testing includes the follow functionalities:
1.	Login;
2.	Validate HomePage;
3.	Create user;
4.	List user;
5.	Create products;
6.	List products.
*/

import home from '../support/pages/Admin/home-class'
import addUser from '../support/pages/Admin/addUser-class'
import listUser from '../support/pages/Admin/listUser-class'
import addProduct from '../support/pages/Admin/addProduct-class'
import listProducts from '../support/pages/Admin/listProducts-class'


describe('ServeRest - Admin user', () => {

  before(()=>{
    cy.clearAllCookies();
  })
  
  it('Homepage', () => {
     home.validate();
     cy.log('Homepage validated.');
  });

  it('Add users', () => {
    addUser.add();
    addUser.addExisting();
    cy.log('Adding users validated.');
  });

  it('List users', () => {
    listUser.list();
    cy.log('User list validated.');
  });

  it.only('Add products', () => {
     addProduct.add();
     cy.log('Adding products validated.');
  });

  it.only('List products', () => {
    listProducts.list();
    cy.log('Products list validated.');
  });

})