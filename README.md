# cypress-scouts
 Cypress basics from scratch

![E2E Tests](https://github.com/vgurinenko/cypress-scouts/actions/workflows/ci.yaml/badge.svg)

## Project Description

This is a demo project created for test-driving certain features of Cypress and trying out various testing practices on a demo site. Can be used for learning E2E testing using Cypress.

The demo website is [Demoblaze](https://www.demoblaze.com/). It's an online store where user can look up and purchase various electronics like phones, computers, tablets, etc.

## Content

1. Test cases for testing the purchase, feedback, and login functionality.
2. CI workflow with GitHub Actions for triggering the tests automatically by schedule or upon certain events like when new code is pushed to the repository.

## Deploying and running

### System requirements

https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

### Steps

1. Clone the **cypress-scouts** repository.
```
git@github.com:vgurinenko/cypress-scouts.git
```

Install Cypress using the npm locally as a dev dependency from your project root
```
npm install
```

Open the Cypress for running and debugging tests in headed mode from your project root
```
npx cypress open
```

- Choose E2E Testing (Note! Using Cypress for the first time add and set up configuration files)
- Choose one of compatible browsers Cypress found on your system and click on "Start E2E testing in ..."
- To run any test click on them.

Open the Cypress for running and debugging tests in headless mode from your project root
```
npx cypress run
```

Questions? 
- Email me at vgurinenko at gmail dot com
