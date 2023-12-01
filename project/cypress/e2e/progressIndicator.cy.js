import {DesignSystemHomePage} from "../support/pageObjects/ProgressIndicatorPage.cy"

let ProgressIndicatorPage = new DesignSystemHomePage()
describe('Components', () => {
it ('Progress Indicator', () => {

    ProgressIndicatorPage.navigate('https://d1s9e8bsxk9i2m.cloudfront.net');
    const imageAltText = 'Symbol of the Government of Canada';
    cy.get('header img').should('be.visible').and('have.attr', 'alt', imageAltText);
    ProgressIndicatorPage.getH2()
    .should('contain.text','IRCC Design System');
    ProgressIndicatorPage.getGettingStarted()
    .should('contain.text', 'Getting started');
    cy.get('#overviewPageNavItem > :nth-child(1) > a').should('contain.text', 'Overview');
    ProgressIndicatorPage.getComponents()
    .should('contain.text', 'Progress Indicator').click();
    cy.get('#progress-indicator > strong').should('contain.text', 'Progress Indicator')
    cy.get('.h1-heading-type > .primary > .lib-button').should('contain.text', 'Copy URL');
    cy.get('#interactive-demo > strong').should('contain.text', 'Interactive Demo');
//  cy.get('.h1-heading-type > .primary > .lib-button > .button-content-container > .text')
//   .click()
//   .then(() => {cy.assertValueCopiedToClipboard("https://d1s9e8bsxk9i2m.cloudfront.net/en/progress-indicator-documentation#progress-indicator");});

    ProgressIndicatorPage.getHideConfigurations()
    .should('contain.text','Hide configurations').click()
    ProgressIndicatorPage.getShowConfigurations()
    .should('contain.text','Show configurations').click()
    
    ProgressIndicatorPage.getCompleted()
    .should('contain.text', 'Completed');
    ProgressIndicatorPage.getInProgress()
    .should('contain.text', 'In progress');
    ProgressIndicatorPage.getError().should
    ('contain.text', 'Error');
    ProgressIndicatorPage.getNotStarted()
    .should('contain.text', 'Not started');
    ProgressIndicatorPage.getSmall()
    cy.get('#orientation1').click();
    cy.get('#orientation1').then(($radio) => 
    {if ($radio.is(':checked')) {cy.get('.vertical.main-container.small').should('exist');}
    else {cy.get('.horizontal.main-container.small').should('exist');}})
    ProgressIndicatorPage.getHtml()
    cy.get('.hljs-string').should('contain.text', 'progressIndicatorConfig');
    ProgressIndicatorPage.getTypeScript().click()
    cy.get('.hljs > :nth-child(6)').should('contain.text', 'small');
    cy.get('.hljs').should('contain.text', 'orientation');
    cy.get('.hljs > :nth-child(7)').should('contain.text', 'vertical');
    ProgressIndicatorPage.getLarge().click()
    cy.get('#orientation0').click();
    cy.get('#orientation0').then(($radio) => 
    {if ($radio.is(':checked')){cy.get('.horizontal.main-container.large').should('exist');}
    else {cy.get('.vertical.main-container.large').should('exist');}})
    ProgressIndicatorPage.getTypeScript()
    cy.get('.hljs > :nth-child(6)').should('contain.text', 'large');
    cy.get('.hljs').should('contain.text', 'orientation');
    cy.get('.hljs > :nth-child(7)').should('contain.text', 'horizontal');
    ProgressIndicatorPage.getHideCode()
    .should('contain.text', 'Hide Code').click()
    cy.get('#accordion-button-close-codeViewerTabsCccordion > .button-content-container > .text').should('contain.text', 'Show Code')
    cy.get('#accordion-button-copy > .button-content-container > .text').should('contain.text', 'Copy code')
    const footerImageSelector = ('.item2 > img');
    cy.get(footerImageSelector).should('exist');
    cy.get(footerImageSelector).should('have.attr', 'src'), ('contain.text', 'Canada wordmark');
    cy.get(footerImageSelector).should('be.visible');
    cy.contains('Français').scrollIntoView().click()
    cy.get('#indicateur-de-progr-s > strong').should('contain.text', 'Indicateur de progrès')
    ProgressIndicatorPage.getHedar2()
    .should('contain.text','Système De Conception IRCC');
    ProgressIndicatorPage.getCommencer()
    .should('contain.text', 'Commencer');
    cy.get('#overviewPageNavItem > :nth-child(1) > a').should('contain.text', 'Aperçu');
    ProgressIndicatorPage.getComposants()
    .should('contain.text', 'Composants').click();
    ProgressIndicatorPage.getIndicateurdeprogrès()
    .should('contain.text', 'Indicateur de progrès').click();
    cy.get('#indicateur-de-progr-s > strong').should('contain.text', 'Indicateur de progrès')
    cy.get('.h1-heading-type > .primary > .lib-button > .button-content-container > .text').should('contain.text', 'Copier l’URL')
    ProgressIndicatorPage.getIntractiveDemo()
    .should('contain.text', 'Démo interactive')
    ProgressIndicatorPage.getComplété()
    .should('contain.text', 'Complété')
    ProgressIndicatorPage.getEncours()
    .should('contain.text', 'En cours')
    ProgressIndicatorPage.getErreur()
    .should('contain.text', 'Erreur')
    ProgressIndicatorPage.getPascommencé()
    .should('contain.text', 'Pas commencé')
    ProgressIndicatorPage.getMasquerlesconfigurations()
    .should('contain.text','Masquer les configurations').click()
    ProgressIndicatorPage.getAfficherlesconfigurations()
    .should('contain.text','Afficher les configurations').click()
    ProgressIndicatorPage.getTaille()
    .should('contain.text', 'Taille')
    ProgressIndicatorPage.getPetit()
    .should('contain.text', 'Petit');cy.get('#orientation1').check();
    cy.get(':nth-child(2) > form.small > .radio-buttons > :nth-child(2) > .small_label').should('contain.text', 'Vertical');    
    cy.contains('HTML').scrollIntoView().click()
    cy.get('#html').should('contain.text', 'HTML')
    cy.get('#ts').should('contain.text', 'TypeScript').click();
    cy.get('.hljs').should('contain.text', 'size');
    cy.get('.hljs > :nth-child(6)').should('contain.text', 'small');
    cy.get('.hljs').should('contain.text', 'orientation');
    cy.get('.hljs > :nth-child(7)').should('contain.text', 'vertical')
    ProgressIndicatorPage.getGrand()
    .check()
    ProgressIndicatorPage.getMiseenpage()
    .should('contain.text', 'Mise en page')
    cy.get('#orientation0').check()
    cy.get(':nth-child(2) > form.small > .radio-buttons > :nth-child(1) > .small_label').should('contain.text', 'Horizontal')
    ProgressIndicatorPage.getTypeScript()
    cy.get('#ts').click();
    cy.get('.hljs').should('contain.text', 'size');
    cy.get('.hljs > :nth-child(6)').should('contain.text', 'large');
    cy.get('.hljs').should('contain.text', 'orientation');
    cy.get('.hljs > :nth-child(7)').should('contain.text', 'horizontal');
    ProgressIndicatorPage.getMasquelecode()
    .should('contain.text', 'Masquer le code').click()
    cy.get('#accordion-button-close-codeViewerTabsCccordion > .button-content-container > .text').should('contain.text', 'Afficher le code')
    cy.get('#accordion-button-copy > .button-content-container > .text').should('contain.text', 'Copier le code')
    cy.get('.date-modified').should('contain', 'Date de modification:').then(els => {
      const before = els[0].textContent;
      expect(before.length).to.be.above(1);
    cy.wait(1000)
    cy.get('.date-modified').should('contain', 'Date de modification:').then(els => {
      const after = els[0].textContent;
      expect(after.length).to.be.above(0);  })
    cy.contains('English').scrollIntoView().click()
    cy.get('#progress-indicator > strong').should('contain.text', 'Progress Indicator') })
    })
  })
