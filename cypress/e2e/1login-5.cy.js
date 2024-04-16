import login from "../integration/Login";
describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
  })
  it('passes', () => {
    const Login = new login()
    Login.loginFinance();
  })
})