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
  });

  it('Add users', () => {
    addUser.add();
    addUser.addExisting();
  });

  it('List users', () => {
    listUser.list();
  });

  it.only('Add products', () => {
     addProduct.add();
  });

  it.only('List products', () => {
    listProducts.list();
  });

})