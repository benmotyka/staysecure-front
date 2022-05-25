/// <reference types="cypress" />

const translation = require('../../public/locales/en/translation.json')

describe('check homepage', () => {
  beforeEach(() => {
    cy.setLang('en')
  })

  it('check hero', () => {
    cy.visit('http://localhost:3000')
    cy.getTestElement('hero').children('h1').should('have.text', translation.heroHeader)
    cy.getTestElement('hero').children('button').should('have.text', translation.register)
    cy.getTestElement('previewItems__courses').find('h2').should('have.text', translation.lastCourses)

    cy.getTestElement('previewItems__courses').find('a').should('have.length', 3)

    cy.getTestElement('previewItems__articles').find('a').should('have.length', 6)

    cy.getTestElement('previewItems__courses').find('a').each(($item) => {
      cy.wrap($item).should('have.attr', 'href')
    })

  })

})
