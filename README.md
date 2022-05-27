# cypress-cucumber-example

Example repo for E2E test automation with Cypress, Cucumber and Typescript

Application under test: **Cypress Kitchen Sink** - [example.cypress.io](https://example.cypress.io)  
This is an example app used to showcase [Cypress.io](https://www.cypress.io/) testing.  
For a full reference of Cypress documentation, go to [docs.cypress.io](https://docs.cypress.io/)

Test spec `todo.spec.ts` is the enhanced Cypress `todo.spec.js` example, adopted to Page Object pattern.

### How to run tests locally

- run `npm install`
- rename `.env.example` to `.env`
- run `npm run test` or `npx cypress open`

### Cucumber

[cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

### Reporting

Reporter: [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)  
Report file: `/reports/index.html`

### GitHub Actions

[E2E tests workflow](https://github.com/vit-ganich/cypress-example/actions/workflows/ci.yml)
