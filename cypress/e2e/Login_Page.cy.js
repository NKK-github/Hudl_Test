describe('Login flow for normal user', () => {

  it('Verifies User Login and Logout', () => {
    cy.login('normal_user')
    // Verify the Logged in user is redirected to '/home'.
    cy.url().should('include', '/home')
    // Validate the user is redirected to the home page after succesfull logout.
    cy.get('.hui-globaluseritem__email').should('contain', Cypress.env('normal_user_email'));
    cy.logout()
    cy.url().should('eq', Cypress.config('baseUrl'))
   })

  it('No Password Login attempt', () => {
    cy.login('normal_user', true)
    // Verify the Login link is disabled after no password is entered
    cy.get('button[data-qa-id=login-btn]').should('be.disabled')
   })

  it('Wrong Email Login attempt', () => {
    cy.login('wrong_user')
    // Verify the Login link is disabled after no password is entered
    cy.get('button[data-qa-id=login-btn]').should('be.disabled')
  })

  it('Need Help Link', () => {
    cy.visit('/login');
    // Verify the Login link contains a valid Help link
    cy.get('[data-qa-id="need-help-link"]').then ((link) => {
    cy.request(link.prop('href')).its ('status'). should('eq',200)
    })
    cy.get('[data-qa-id="need-help-link"]').click();
    cy.url().should('contain', Cypress.config('HelpLink'))
   
  })
})
