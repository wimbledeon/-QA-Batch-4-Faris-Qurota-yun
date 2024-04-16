import login from "../integration/Login";
describe('template spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-11')
    const Login = new login()
    Login.loginFinance();
  })
  it('passes', () => {
    cy.get('.margin-left-m').click()
    cy.get('#Input_SearchKeyword').type('HRF-003')
    cy.wait(1000)
    cy.get("td[data-header='Invoice'] a span").click()
    cy.wait(1000)
    cy.get("button[type='button']").click()
    cy.wait(2000)
    cy.get('#Input_HolderName').type('Faris Qurotayun')
    cy.get('#Input_CardNumber').type('12345') 
    cy.get("#Input_ExpMonth").click()
    cy.get("div[class='scrollable-list scrollable-list-with-scroll'] div:nth-child(5)").click()
    cy.get("#Input_ExpYear").click()
    cy.get("div[class='scrollable-list scrollable-list-with-scroll'] div:nth-child(5)").click()
    cy.get("#Input_CVV").type("31")
    cy.get("#CreditCardForm_Btn").click("")
  })
})