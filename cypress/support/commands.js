// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (type, no_password = false) => {

  // Default user credntials.
  let email = Cypress.env('normal_user_email')
  let password = Cypress.env('normal_user_password')

  // Override with username/pass for different login types
  if (type == 'normal_user') {
    email = Cypress.env('normal_user_email');
    password = Cypress.env('normal_user_password');
  }
  else if (type == 'wrong_user') {
      email = Cypress.env('wrong_user_email');
      password = Cypress.env('wrong_user_password');
    }


  cy.visit('/login')
  cy.get('input[name=email]').type(email, { log: false });

  if (!no_password) {
    cy.get('input[name=password]').type(password, { log: false });
    cy.get('button[data-qa-id=login-btn]').click();
  }
  
  else {
    // Click the login link without entering a password.
    cy.get('button[data-qa-id=login-btn]').click();
    cy.contains('We didn\'t recognize that email and/or password.')
  }
  })

Cypress.Commands.add('logout', () => {
  cy.visit('/logout')
})