import { valid, invalid } from '../fixtures/testInputs.json';

describe('table generator', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('should display Page title and description', () => {
    cy.contains("Table Generation")
    cy.contains("Because writing table codes is too mainstream")
  });
  valid.forEach(input => {
    it(`should preview table with ${input.columns} columns and ${input.rows} rows`, () => {
      cy.enter({ field: 'columns', value: input.columns })
      cy.enter({ field: 'rows', value: input.rows })

      cy.contains("Preview Table")
      cy.contains("Show source code")

      cy.assertColumn({ expectedLength: input.columns })
      cy.assertRow({ expectedLength: input.rows })
    })
  });
  it('should preview table with header', () => {
    cy.get('input[type="checkbox"]')
      .check()

    cy.enter({ field: 'columns', value: 2 })
    cy.enter({ field: 'rows', value: 2 })

    cy.contains("Header Title")
    cy.get('th')
      .should('have.length', 2)
  });
  invalid.forEach(input => {
    it(`should not display table with invalid inputs col-${input.columns} row-${input.columns}`, () => {
      cy.enter({ field: 'columns', value: input.columns })
      cy.enter({ field: 'rows', value: input.rows })

      input.columns || cy.get('table')
        .find('td')
        .should('not.exist')

      input.rows || cy.get('table')
        .find('tr')
        .should('not.exist')
    });
  });
  it('should show source code on click button', () => {
    cy.enter({ field: 'columns', value: 2 })
    cy.enter({ field: 'rows', value: 3 })
    cy.contains('Show source code').click()
    cy.contains('Below is the source code of the generated table:')
    cy.contains("<table class='table is-bordered is-fullwidth'><tbody><tr><td><input class='input' type='text' /></td><td><input class='input' type='text' /></td></tr><tr><td><input class='input' type='text' /></td><td><input class='input' type='text' /></td></tr><tr><td><input class='input' type='text' /></td><td><input class='input' type='text' /></td></tr></tbody></table>")
    cy.contains('COPY')
  });
});