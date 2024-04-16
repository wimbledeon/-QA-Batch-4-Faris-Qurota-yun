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
    cy.get('#Input_InvoiceNumber').type('HRF-001')
    cy.get('#Input_PeriodStartDate').type('2024-04-14T08:30')
    cy.get('#Input_PeriodEndDate').type('2024-05-14T12:30')
    cy.get('#Input_Amount').type('100')
    cy.get("button[type='submit']").click()
    cy.get('#Input_SearchKeyword').type('HRF-001')
  })
})