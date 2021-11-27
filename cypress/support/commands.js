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

Cypress.Commands.add('enter', ({ field, value }) => {
  cy.get(element(field))
    .type(value)
})
Cypress.Commands.add('assertRow', ({ expectedLength }) => {
  cy.get('table')
    .find('tr')
    .should('have.length', expectedLength)
})
Cypress.Commands.add('assertColumn', ({ expectedLength }) => {
  cy.get('table')
    .find('tr')
    .first()
    .find('td')
    .should('have.length', expectedLength)
})

function element(name) {
  return `[data-test="${name}"]`
}