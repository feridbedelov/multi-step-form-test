import { errorMessages, mockFormValues } from '../../src/form/components/utils/constants';

describe('multi-step-form happy path', () => {
  it('open app and show first step title', () => {
    cy.visit('http://localhost:3000');

    cy.get('h4').should('contain', 'Personal Information');

    cy.get('button').contains('Next').should('be.disabled');

    cy.get('input[name="firstName"]').type('a').clear();
    cy.contains(errorMessages.required);

    cy.get('input[name="lastName"]').type('a').clear();
    cy.contains(errorMessages.required);

    cy.get('input[name="email"]').type('1241asfa');
    cy.contains(errorMessages.email);

    cy.get('input[name="email"]').clear();
    cy.contains(errorMessages.required);

    cy.get('input[name="phoneNumber"]').type('123asfa');
    cy.contains(errorMessages.phoneNumber);

    cy.get('input[name="phoneNumber"]').clear();
    cy.contains(errorMessages.required);

    cy.get('button').contains('Next').should('be.disabled');

    cy.get('input[name="firstName"]').type(mockFormValues.firstName);
    cy.get('input[name="lastName"]').type(mockFormValues.lastName);
    cy.get('input[name="email"]').type(mockFormValues.email);
    cy.get('input[name="phoneNumber"]').type(mockFormValues.phoneNumber);

    cy.get('button').contains('Next').should('be.enabled');

    cy.get('button').contains('Next').click();

    cy.get('h4').should('contain', 'Delivery Options');

    cy.get('button').contains('Next').should('be.disabled');

    cy.get('input[name="deliveredCountry"]').type('a').clear();
    cy.contains(errorMessages.required);

    cy.get('input[name="deliveredCity"]').type('a').clear();
    cy.contains(errorMessages.required);

    cy.get('input[name="deliveryAddress"]').type('a').clear();
    cy.contains(errorMessages.required);

    cy.get('input[name="deliveryAddressZipCode"]').type('123asfa/a');
    cy.contains(errorMessages.zipCode);

    cy.get('input[name="deliveryAddressZipCode"]').clear();
    cy.contains(errorMessages.required);

    cy.get('button').contains('Next').should('be.disabled');

    cy.get('input[name="deliveredCountry"]').type(mockFormValues.deliveredCountry);
    cy.get('input[name="deliveredCity"]').type(mockFormValues.deliveredCity);
    cy.get('input[name="deliveryAddress"]').type(mockFormValues.deliveryAddress);
    cy.get('input[name="deliveryAddressZipCode"]').type(mockFormValues.deliveryAddressZipCode);

    cy.get('button').contains('Next').should('be.enabled');
    cy.get('button').contains('Next').click();

    cy.get('h4').should('contain', 'Payment Options');

    cy.get('button').contains('Next').should('be.disabled');

    cy.get('input[name="accountHolderName"]').type('a').clear();
    cy.contains(errorMessages.required);

    cy.get('input[name="accountNumber"]').type('a121');
    cy.contains(errorMessages.accountNumber);

    cy.get('input[name="accountNumber"]').clear();
    cy.contains(errorMessages.required);

    cy.get('input[name="accountExpirationDate"]').type('a').clear();
    cy.contains(errorMessages.required);

    cy.get('input[name="accountSecurityCode"]').type('a');
    cy.contains(errorMessages.accountSecurityCode);

    cy.get('input[name="accountSecurityCode"]').clear();
    cy.contains(errorMessages.required);

    cy.get('button').contains('Next').should('be.disabled');

    cy.get('input[name="accountHolderName"]').type(mockFormValues.accountHolderName);
    cy.get('input[name="accountNumber"]').type(mockFormValues.accountNumber);
    cy.get('input[name="accountExpirationDate"]').type('01/2027');
    cy.get('input[name="accountSecurityCode"]').type(mockFormValues.accountSecurityCode);

    cy.get('button').contains('Next').should('be.enabled');
    cy.get('button').contains('Next').click();

    cy.get('h4').should('contain', 'Confirmation');

    cy.contains(`First Name: ${mockFormValues.firstName}`);
    cy.contains(`Last Name: ${mockFormValues.lastName}`);
    cy.contains(`Email: ${mockFormValues.email}`);
    cy.contains(`Phone Number: ${mockFormValues.phoneNumber}`);
    cy.contains(`Country: ${mockFormValues.deliveredCountry}`);
    cy.contains(`City: ${mockFormValues.deliveredCity}`);
    cy.contains(`Delivery Address: ${mockFormValues.deliveryAddress}`);
    cy.contains(`Zip Code: ${mockFormValues.deliveryAddressZipCode}`);
    cy.contains(`Account Holder: ${mockFormValues.accountHolderName}`);
    cy.contains(`Account Number: ${mockFormValues.accountNumber}`);
    cy.contains(`Expiration Date: ${'01/2027'}`);
    cy.contains(`CVC: ${mockFormValues.accountSecurityCode}`);

    cy.get('button').contains('Submit').should('be.enabled');
  });
});
