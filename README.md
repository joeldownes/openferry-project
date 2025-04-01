Open Ferry Test Automation Task 

This project contains automated tests for the OpenFerry website.

## Prerequisites 

- Node.js 
- Cypress (https://docs.cypress.io/app/get-started/install-cypress)
- Git 

Installation 

1. Clone this repository:

git clone https://github.com/joeldownes/openferry-project.git
cd openferry-project

2. Install dependencies:

    npm install

Run the tests: 
1. Open terminal and navigate to the project folder
2. Run the tests using : 

npx cypress open 

3. This will open the cypress test runner, where you can select the test file to run. 

If you want to run the tests run without cypress UI, you can run in headless mode:

npx cypress run 


Folder Structure:

Openferry-project/ 
│── cypress/
│   ├── e2e/                # Test cases
│   │   ├── UI/             
│   ├── support/            # Custom commands
│   ├── fixtures/           # Test data
│   ├── downloads/          # Downloaded files
├── cypress.config.ts       # Cypress configuration file
├── package.json            # Dependencies and scripts
├── package-lock.json       # Lock file for dependencies
├── tsconfig.json           # TypeScript configuration
├── README.md               # Project documentation
├── .gitignore              # Files to exclude from Git


If I had extra time: 

1. Enhanced Route Search
- Currently, the test selects routes from the dropdown but does not interact with the date selection.

- Future improvements could include verifying route-specific search options like "Dover → Calais" via the "routes" when searching Dover for example.

2. Testing Date and Time Selection
- If a ferry timetable were available, tests could verify ticket searches for specific departure times and dates.

- The test functions are structured in a way that adding date-based searches would be straightforward.

3. Improve Test Performance: 
- I would optimise the tests by removing waits and replacing them with more API assertions. I have added one as an example but I would need extra time to go through the API responses in more detail. 