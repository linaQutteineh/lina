import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given('The user navigate to W3Schools website', () => {
  cy.visit('https://W3Schools.com/');
});
Then('The item links are available', () => {
  cy.get('.ga-nav').then((links) => {
    for (let i = 0; i < links.length; i++) {
      cy.wrap(links[i])
        .invoke('text')
        .then((links) => {
          cy.log(links);
        });
    }
  });
});