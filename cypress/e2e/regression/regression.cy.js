/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays two todo items by default', () => {
    cy.get('.todo-list li').should('have.length', 3)
    cy.get('.todo-list li .todo-content').first().should('have.text', 'Sweep the floor')
    cy.get('.todo-list li .todo-content').last().should('have.text', 'Empty garbage')
  })

  it('can add new todo items', () => {
    const newItem = 'Feed the cat'
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    cy.get('.todo-list li .todo-content')
      .should('have.length', 4)
      .last()
      .should('have.text', newItem)
  })

  it('can check off an item as completed', () => {
    cy.contains('Sweep the floor')
      .parent()
      .find('input[type=checkbox]')
      .check()

    cy.contains('Sweep the floor')
      .parent()
      .find('[data-test=todo-label]')
      .should('have.class', 'checked-item')
  })

  it('can filter for uncompleted tasks', () => {

    cy.contains('Sweep the floor')
    .parent()
    .find('input[type=checkbox]')
    .check()

    cy.contains('checked').click()

    // After filtering, we can assert that there is now two
    // incomplete item in the list.
    cy.get('.todo-list li .checked-item')
      .should('have.length', 2)
      .first()
      .should('have.text', 'Sweep the floor')
  })
})
