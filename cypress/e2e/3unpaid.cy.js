import login from "../integration/Login";

describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
    const Login = new login()
    Login.loginHC();
  })
  it('passes', () => {
    cy.get('.margin-left-m').click()
    cy.get('#Input_SearchKeyword').type('HRF-003')
    cy.wait(1000)
    cy.get("td[data-header='Invoice'] a span").click()
    cy.wait(1000)
    cy.get("button[type='button']").click()
    cy.get('#Input_SearchKeyword').type('HRF-003')
  })
})