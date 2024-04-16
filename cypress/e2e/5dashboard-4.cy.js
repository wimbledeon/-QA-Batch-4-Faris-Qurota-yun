import login from "../integration/Login";

describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
    const Login = new login()
    Login.loginSuperadmin();
  })
  it('passes', () => {
    cy.get("a[href='/ClaimPortal/Dashboard']").click()
    cy.wait(1000)
    cy.get('.margin-left-m').click()
    cy.wait(1000)
    cy.get("a[href='/ClaimPortal/Dashboard']").click()
  })
})