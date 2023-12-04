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

    getOverview()
    {
        return cy.get('#overviewPageNavItem > :nth-child(1) > a')
    }

    getComponents()
    {
        return cy.get('#progressIndicatorPageNavItem > :nth-child(1) > a')
    }

    getFoundations()
    {
        return cy.get('#foundationsNavAccordian_header > .nav-header-header')
    }

    getUtilities()
    {
        return cy.get('#utilPageNavItem > :nth-child(1) > a')
    }

    getComponents()
    {
        return cy.get('#componentNavAccordian_header > .nav-header-header')
    }

    getBanners()
    {
        return cy.get('#bannerPageNavItem > :nth-child(1) > a')
    }

    getDatePicker()
    {
        return cy.get('#datePickerPageNavItem > :nth-child(1)')
    }

    getSubmitARequest()
    {
        return cy.get('#requestFormPageNavItem > :nth-child(1) > a')
    }

    getFooter()
    {
        return cy.get('.grid-container')
    }
    






}