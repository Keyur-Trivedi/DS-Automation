import {DesignSystemHomePage} from "../support/pageObjects/DsHomePage.cy"

let DsHomePage = new DesignSystemHomePage()
describe('Design System', () => {
it ('DS Home Page', () => {

    DsHomePage.navigate('https://d1s9e8bsxk9i2m.cloudfront.net');
    const imageAltText = 'Symbol of the Government of Canada';
    cy.get('header img').should('be.visible').and('have.attr', 'alt', imageAltText);
    DsHomePage.getH2()
    .should('contain.text','IRCC Design System');
    DsHomePage.getGettingStarted()
    .should('contain.text', 'Getting started');
    DsHomePage.getOverview().should('contain.text', 'Overview');
    cy.get('.lib-button').should('contain.text', 'Copy URL')
    cy.get('.for-designers > a').should('contain.text', 'Get started').click()
    cy.get('#for-designers > strong').should('contain.text', 'For designers')
    cy.get('#nav-item-about-the-design-library > :nth-child(1) > a.ng-star-inserted > .ng-star-inserted').should('exist')
    cy.contains('Figma usage guidelines').scrollIntoView().should('exist').click()
    DsHomePage.getOverview().click()
    cy.get('.for-devs > a').should('contain.text', 'Get started').click()
    cy.get('#nav-item-usage > :nth-child(1) > a.ng-star-inserted').should('exist').click()
    cy.get(':nth-child(28)').should('contain.text', 'full release:').click()
    DsHomePage.getFoundations().should('exist')
    DsHomePage.getUtilities().should('exist').click()
    cy.get('#nav-item-breakpoints > :nth-child(1) > a.ng-star-inserted').should('exist').click()
    DsHomePage.getComponents().should('exist').click()
    cy.contains('Spinner').scrollIntoView().should('exist').click()
    DsHomePage.getBanners()
    cy.contains('Banners').scrollIntoView().click()
    DsHomePage.getDatePicker().click()
    cy.get('.block__intro').should('exist')
    cy.get('#nav-item-design-guidelines > :nth-child(1) > a.ng-star-inserted').click()
    cy.contains('Use horizontal layout when you have the room').click()

})
})

