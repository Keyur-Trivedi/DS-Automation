import {DesignSystemHomePage} from "../support/pageObjects/SubmitARequestPage.cy"

let SubmitARequestPage = new DesignSystemHomePage()
describe('Components', () => {
it ('Submit A Request', () => {

    SubmitARequestPage.navigate('https://d1s9e8bsxk9i2m.cloudfront.net');
    const imageAltText = 'Symbol of the Government of Canada';
    cy.get('header img').should('be.visible').and('have.attr', 'alt', imageAltText);
    SubmitARequestPage.getH2()
    .should('contain.text','IRCC Design System');
    SubmitARequestPage.getComponents()
    .should('contain.text', 'Submit a request').click();
    cy.get('#submit-a-request > strong').should('contain.text', 'Submit a request')
    cy.get('.h1-heading-type > .primary > .lib-button').should('contain.text', 'Copy URL');
    cy.get('.banner-content').should('include.text', 'This form is submitted');
    cy.get('.request-criteria').should('include.text', 'Useful', 'Unique')
    cy.get('#request-form > strong').should('contain.text', 'Request Form')
    SubmitARequestPage.getTypeOfRequest()
    SubmitARequestPage.getChangeRequestRadio().should('include.text', 'Change request')
    cy.get('#radio-request-type0')
    cy.get('#radio-request-type0').then(($radio) => {
        if ($radio.prop('checked')) {cy.get('#use-case-text-area_label').should('exist');}
        else {cy.get('#use-case-text-area_label').should('not.exist');}});

    SubmitARequestPage.getFeatureRequestRadio().should('include.text', 'Feature request')
    cy.get('#radio-request-type1').check()
    cy.get('#radio-request-type1').then(($radio) => {
        if ($radio.prop('checked')) {cy.get('#use-case-text-area_label').should('exist');}
        else {cy.get('#use-case-text-area_label').should('not.exist');}});
    SubmitARequestPage.getBugRadio().should('include.text', 'Bug')
    cy.get('#radio-request-type2')
    cy.get('#radio-request-type2').then(($radio) => {
        if ($radio.prop('checked')) {cy.get('#use-case-text-area_label').should('not.exist');}
        else {cy.get('#use-case-text-area_label').should('exist');}});
    
    SubmitARequestPage.getRequestTitle()
    cy.get('#request-title-text-area_label > .input-desc').should('contain.text', 'Enter a brief title');
    cy.get('#request-title-text-area').type('Change personal information.');
    //cy.get('#request-title-text-area').click();
    cy.get('#request-details-text-area').click();
    cy.get('#request-title-text-area').then(($textArea) => {
        if (!$textArea.val().trim()) {cy.get('#request-title-text-area_error0')
        .should('exist'),('have.text', 'This field is required.'); }
        else {cy.get('#request-title-text-area').should('have.value', 'Change personal information.'); }});

    SubmitARequestPage.getRequestDetails()
    cy.get('#request-details-text-area_label > .input-desc').should('contain.text', 'Describe the feature')
    //cy.get('#request-details-text-area').type('Country of birth is incorrect in my application.')
    //cy.get('#request-details-text-area').click();
    cy.get('#use-case-text-area').click();
    cy.get('#request-details-text-area').then(($textArea) => {
        if (!$textArea.val().trim()) {cy.get('#request-details-text-area_error0')
        .should('exist'),('have.text', 'This field is required.'); }
        else {cy.get('#request-details-text-area').should('have.value', 'Country of birth is incorrect in my application.'); }});

    SubmitARequestPage.getUseCases()
    cy.get('#use-case-text-area_label > .input-desc').should('contain.text', 'Describe the use case(s)')
    cy.get('#use-case-text-area').type('Scrolling by keyboard is not as accurate as it would by mouse.')
    cy.get('#use-case-text-area').click();
    cy.get('#references-text-area').click();
    cy.get('#use-case-text-area').then(($textArea) => {
        if (!$textArea.val().trim()) {cy.get('#use-case-text-area_error0')
        .should('exist'),('have.text', 'This field is required.'); }
        else {cy.get('#use-case-text-area').should('have.value', 'Scrolling by keyboard is not as accurate as it would by mouse.'); }});
    
    SubmitARequestPage.getReferences()
    cy.get('#references-text-area_label > .input-desc').should('contain.text', 'Include any URLs you may have')
    cy.get('.input-hint').should('contain.text', 'We currently are unable to support attachments')
    cy.get('#references-text-area').type('Supporting document is attached.')

 if (SubmitARequestPage.getUrgentYes().check()) 
    {cy.get('.urgent-request-radio-container > ircc-cl-lib-radio-input > .ng-invalid > .radio-buttons > :nth-child(1) > .small_label').should('contain.text', 'Yes');
    SubmitARequestPage.getCompletedDate();
    const year = '2024'; // Replace with your desired year
    const month = 'January'; // Replace with your desired month
    const day = '25'; // Replace with your desired day

    cy.get('#date-requested-datepicker_yearControl').select(year);
    cy.contains('.select-option', year);
    cy.get('#date-requested-datepicker_monthControl').select(month);
    cy.contains('.select-option', month);
    cy.get('#date-requested-datepicker_dayControl').select(day);
    cy.contains('.select-option', day);
}

                                                                                    // When executing the positive secenario...comment the below IF condition
                                                                                    // When executing the negetive secenario...comment the above IF condition

 //if (!SubmitARequestPage.getUrgentNo().check());

    SubmitARequestPage.getEmail().type('Keyur.Trivedi@cic.gc.ca');
    cy.get('#submit-request-btn').click();
})    
    
    
    
    
    
    
    
    
    
    
    
    
    
/*if (SubmitARequestPage.getUrgentYes()) {
    // If 'Yes' is selected
    cy.get('.urgent-request-radio-container > ircc-cl-lib-radio-input > .ng-touched > .radio-buttons > :nth-child(2)').should('contain.text', 'No').click();
    
    SubmitARequestPage.getUrgentReason();
    cy.get('#urgent-details-text-area').type('Urgent Passport application');

    SubmitARequestPage.getCompletedDate();
    const year = '2024'; // Replace with your desired year
    const month = 'January'; // Replace with your desired month
    const day = '25'; // Replace with your desired day
    
    // Click on the year dropdown
    cy.get('#date-requested-datepicker_yearControl').select(year);
    cy.contains('.select-option', year);
    
    // Click on the month dropdown
    cy.get('#date-requested-datepicker_monthControl').select(month);
    cy.contains('.select-option', month);
    
    // Click on the day dropdown
    cy.get('#date-requested-datepicker_dayControl').select(day);
    cy.contains('.select-option', day);

    SubmitARequestPage.getEmail().type('Keyur.Trivedi@cic.gc.ca');
    cy.get('#submit-request-btn').click();
} else {
    // If 'No' is selected
    SubmitARequestPage.getUrgentNo().check();
    SubmitARequestPage.getEmail().type('Keyur.Trivedi@cic.gc.ca');
    cy.get('#submit-request-btn').click();
}*/
    
    
    
    
    
    
    /*//SubmitARequestPage.getUrgentYes().check()
    SubmitARequestPage.getUrgentNo().check()
    //cy.get('#radio-request-urgent0').check()
    //const isYesSelected = () => {cy.get("label[for='radio-request-urgent0']").should('contain.text', 'Yes')
    //.then(function(){if(isYesSelected){
        //return
    cy.get('.urgent-request-radio-container > ircc-cl-lib-radio-input > .ng-invalid > .radio-buttons > :nth-child(1) > .small_label').should('contain.text', 'No');
    
    
    
        //SubmitARequestPage.getUrgentReason();
        //cy.get('#urgent-details-text-area').type('Urgent Passport application');}
       
    SubmitARequestPage.getCompletedDate();
        const year = '2024'; // Replace with your desired year
        const month = 'January'; // Replace with your desired month
        const day = '25'; // Replace with your desired day
        
        // Click on the year dropdown
        cy.get('#date-requested-datepicker_yearControl').select(year);
        cy.contains('.select-option', year);
        
        // Click on the month dropdown
        cy.get('#date-requested-datepicker_monthControl').select(month);
        cy.contains('.select-option', month);
        
        // Click on the day dropdown
        cy.get('#date-requested-datepicker_dayControl').select(day);
        cy.contains('.select-option', day);

    SubmitARequestPage.getEmail().type('Keyur.Trivedi@cic.gc.ca');
        cy.get('#submit-request-btn').click()
    });*/
})
/*


   {return cy.get('.urgent-request-radio-container > ircc-cl-lib-radio-input > .ng-invalid > .radio-buttons > :nth-child(1) > .small_label').should('contain.text', 'Yes')}
  

    SubmitARequestPage.getUrgentYes().click()
    cy.get('#radio-request-urgent0').click()

    SubmitARequestPage.getUrgentReason()
    cy.get('#urgent-details-text-area').type('Urgent Passport application')
    
    SubmitARequestPage.getCompletedDate()
    const year = '2023'; // Replace with your desired year
    const month = 'December'; // Replace with your desired month
    const day = '25'; // Replace with your desired day
    
    // Click on the year dropdown
    cy.get('#date-requested-datepicker_yearControl').select(year);
    cy.contains('.select-option', year);
    
    // Click on the month dropdown
    cy.get('#date-requested-datepicker_monthControl').select(month);
    cy.contains('.select-option', month);
    
    // Click on the day dropdown
    cy.get('#date-requested-datepicker_dayControl').select(day);
    cy.contains('.select-option', day);

    SubmitARequestPage.getEmail()
    cy.get('#emailconfig').type('Keyur.Trivedi@cic.gc.ca')
    cy.get('#submit-request-btn').click()*/
