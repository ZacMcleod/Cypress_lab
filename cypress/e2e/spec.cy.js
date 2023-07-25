describe('cypress lab 1', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('p').should('exist');
  })
})

describe('cypress lab 2', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('a.App-link', 'Learn React');
  })
})

describe('cypress lab 3', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').should('exist');
  })
})

describe('cypress lab 4', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').click()
  })
})