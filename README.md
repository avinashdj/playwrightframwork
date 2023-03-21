# playwrightframwork
Playwright framework

unzip the folder downloaded
open the folder in vs code
hit ctrl + shift + p - search Terminal: Select Defualt profile - click on init
select Git Bash 

enter the below command
- npm init --yes - to initialize the node module package
- npm install @playwright/test prettier
- npx playwright install - to install browsers
- npx playwright test - to run the test

- report is configured to be html

to see the report run - npx playwright show-report

Allure reports
npm i -D allure-playwright
npm i -D allure-commandline

to see the trace -
a. open trace.playwright.dev in browser
b. open the trace zip file (to be downloaded from the html report generated using npx playwright show-report)


add the following to package.json script section for other commands

  "scripts": {
    "tests:chrome": "playwright test --config playwright.config.ts --project Chromium --headed",
    "tests:firefox": "playwright test --config playwright.config.ts --project Firefox",
    "tests:e2e": "playwright test --config e2e.config.ts --project Chromium --headed",
    "tests:e2e:allure": "playwright test --config e2e.config.ts --project Chromium --headed --reporter=allure-playwright",
    "allure-reports": "allure genreate "
  },

  After adding to scripts use the command - npm run tests:chrome
