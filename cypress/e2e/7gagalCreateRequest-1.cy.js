import login from "../integration/Login";
describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
    const Login = new login()
    Login.loginStaff1();
  })
  it('passes', () => {
    cy.get('.margin-left-m').click()
    cy.get("div[id='ListInvoices_NewInvoice'] button[type='button']").click()
    cy.get("button[type='submit']").click()
  })
})