describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running')
  })

  it('enter valid isbn', () => {
    cy.visit('/')
    cy.get('#isbn-input').type('user@email.com')
  })
})
