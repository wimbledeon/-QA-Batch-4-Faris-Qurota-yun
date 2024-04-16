import login from "../integration/Login";
describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
    
  })
  it('passes', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get("button[type='submit']").click()
  })
})