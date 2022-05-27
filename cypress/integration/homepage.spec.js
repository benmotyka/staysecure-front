/// <reference types="cypress" />

const translation = require('../../public/locales/en/translation.json')

describe('check homepage', () => {
  beforeEach(() => {
    cy.setLang('en')
  })

  // it('check hero', () => {
  //   cy.visit('http://localhost:3000')
  //   cy.getTestElement('hero').children('h1').should('have.text', translation.heroHeader)
  //   cy.getTestElement('hero').children('button').should('have.text', translation.register)
  //   cy.getTestElement('previewItems__courses').find('h2').should('have.text', translation.lastCourses)

  //   cy.getTestElement('previewItems__courses').find('a').should('have.length', 3)

  //   cy.getTestElement('previewItems__articles').find('a').should('have.length', 6)

  //   cy.getTestElement('previewItems__courses').find('a').each(($item) => {
  //     cy.wrap($item).should('have.attr', 'href')
  //   })
  // })

  it('check notebook', () => {
    cy.visit('http://localhost:3000')
    cy.getTestElement('notebook__icon').click()
    cy.getTestElement('notebook__wrapper').should('be.visible')
    cy.getTestElement('notebook__wrapper').children('header').should('have.text', translation.notes)
    cy.getTestElement('notebook__wrapper').children('footer').children().should('have.length', 2)
    cy.getTestElement('notebook__add_note').click()
    cy.getTestElement('notebook__new_note_wrapper').find('button').each(($el, index, $list) => {
      cy.wrap($list[0]).should('have.text', translation.add)
      cy.wrap($list[1]).should('have.text', translation.cancel)
    })
    cy.getTestElement('notebook__new_note_wrapper').find('textarea').type(`Test note`)

    cy.wait(1500)
    
  })
})
