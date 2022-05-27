import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import todoPage from '../pages/todo.page';

Given('I open the app', () => {
  todoPage.visit();
});

Then('I should see environment variables loaded correctly', () => {
  cy.wrap(Cypress.env('TEST')).should('equal', 'test');
});
