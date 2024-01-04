export class DesignSystemHomePage{

    navigate(url){
        cy.visit(url)
    }

    getH2()
    {
        return cy.get('.h2')
    }

    getComponents()
    {
        return cy.get('#requestFormPageNavItem > :nth-child(1) > a')
    }

    getTypeOfRequest()
    {
        return cy.get('#radio-request-type_label > .label > .label_field_container > .required-field-container')
    }

    getChangeRequestRadio()
    {
        return cy.get('.type-request-radio-container > ircc-cl-lib-radio-input > form.small > .radio-buttons > :nth-child(1)')
    }

    getFeatureRequestRadio()
    {
        return cy.get('.type-request-radio-container > ircc-cl-lib-radio-input > form.small > .radio-buttons > :nth-child(2) > .small_label')
    }
    getBugRadio()
    {
        return cy.get('.radio-buttons > :nth-child(3)')
    }

    getRequestTitle()
    {
        return cy.get('#request-title-text-area_label')
    }

    getRequestDetails()
    {
        return cy.get('#request-details-text-area_label')
    }

    getUseCases()
    {
        return cy.get('#use-case-text-area_label > .label > .label_field_container > .required-field-container')
    }

    getReferences()
    {
        return cy.get('#references-text-area_label > .label > .label_field_container > div')
    }

    getUrgentRadio()
    {
        return cy.get('.urgent-request-radio-container > ircc-cl-lib-radio-input > .ng-invalid')
    }
    getUrgentYes()
    {
        return cy.get('#radio-request-urgent0')
    }

    getUrgentNo()
    {
        return cy.get('#radio-request-urgent1')
    }

    getUrgentReason()
    {
        return cy.get('#urgent-details-text-area_label > .label > .label_field_container > .required-field-container')
    }

    getCompletedDate()
    {
        return cy.get('.all-select-container')
    }

    getEmail()
    {
        return cy.get('#emailconfig_label > .label > .label_field_container > div')
    }
}