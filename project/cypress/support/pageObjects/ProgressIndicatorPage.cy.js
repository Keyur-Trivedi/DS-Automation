export class DesignSystemHomePage{

    navigate(url){
        cy.visit(url)
    }

    getH2()
    {
        return cy.get('.h2')
    }

    getGettingStarted()
    {
        return cy.get('#gettingStartedNavAccordian_header > .nav-header-header > h2')
    }

    getComponents()
    {
        return cy.get('#progressIndicatorPageNavItem > :nth-child(1) > a')
    }

    getHideConfigurations()
    {
        return cy.get('#accordion-button-open-InteractiveDemoComponentAcccordion')
    }
    
    getShowConfigurations()
    {
        return cy.get('#accordion-button-close-InteractiveDemoComponentAcccordion')
    }

    getCompleted()
    {
        return cy.get('#progress_indicator_step1 > .tag-container')
    }
    
    getInProgress()
    {
        return cy.get('#progress_indicator_step2 > .tag-container')
    }

    getError()
    {
        return cy.get('#progress_indicator_step3 > .tag-container')
    }

    getNotStarted()
    {
        return cy.get('#progress_indicator_step4 > .tag-container')
    }

    getSmall()
    {
        return cy.get('#size0')
    }

    getHtml()
    {
        return cy.get('#html')
    }

    getTypeScript()
    {
        return cy.get('#ts')
    }

    getLarge()
    {
        return cy.get('#size1')
    }

    getHideCode()
    {
        return cy.get('#accordion-button-open-codeViewerTabsCccordion')
    }

    getscrollIntoView()
    {
        return cy.get('#header_langToggle')
    }

    getHedar2()
    {
        return cy.get('.h2')
    }

    getCommencer()
    {
        return cy.get('#gettingStartedNavAccordian_header > .nav-header-header > h2')
    }

    getComposants()
    {
        return cy.get('#componentNavAccordian_header > .nav-header-header > h2')
    }

    getIndicateurdeprogrès()
    {
        return cy.get('#progressIndicatorPageNavItem > :nth-child(1) > a > p')
    }

    getIntractiveDemo()
    {
        return cy.get('#d-mo-interactive > strong')
    }

    getComplété()
    {
        return cy.get('#progress_indicator_step1 > .tag-container')
    }

    getEncours()
    {
        return cy.get('#progress_indicator_step2 > .tag-container')
    }

    getErreur()
    {
        return cy.get('#progress_indicator_step3 > .tag-container')
    }

    getPascommencé()
    {
        return cy.get('#progress_indicator_step4 > .tag-container')
    }

    getMasquerlesconfigurations()
    {
        return cy.get('#accordion-button-open-InteractiveDemoComponentAcccordion > .button-content-container > .text')
    }

    getAfficherlesconfigurations()
    {
        return cy.get('#accordion-button-close-InteractiveDemoComponentAcccordion > .button-content-container > .text')
    }

    getTaille()
    {
        return cy.get(':nth-child(1) > form.small > ircc-cl-lib-label')
    }

    getPetit()
    {
        return cy.get(':nth-child(1) > form.small > .radio-buttons > :nth-child(1) > .small_label')
    }

    getGrand()
    {
        return cy.get('#size1')
    }

    getMiseenpage()
    {
        return cy.get(':nth-child(2) > form.small > ircc-cl-lib-label')
    }

    getMasquelecode()
    {
        return cy.get('#accordion-button-open-codeViewerTabsCccordion > .button-content-container > .text')
    }

}