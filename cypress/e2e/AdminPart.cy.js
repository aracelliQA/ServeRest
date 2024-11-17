import home from '../support/pages/Admin/home-class'
import addUser from '../support/pages/Admin/addUser-class'

describe('ServeRest - Admin user', () => {

  before(()=>{
    cy.clearAllCookies();
  })
  
  it('Homepage', () => {
     home.validate();
  });

  it('Add users', () => {
    addUser.add();
  });

  it('Add products', () => {
     
  });

  it('List products', () => {
    
  });
})