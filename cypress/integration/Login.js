class login {
    loginHC() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('charles.estevez')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }

    loginStaff1() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('nancy.martin')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }

    loginStaff2() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('cecil.anderson')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }

    loginSuperadmin() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('Superadmin.company')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }

    loginFinance() {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(1000)
        cy.get('#Input_UsernameVal').type('angela.garcia')
        cy.get('#Input_PasswordVal').type('123456')
        cy.get("button[type='submit']").click()
    }
}

export default login