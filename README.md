# Playwright E2E Automation Framework

## Overview

This project is an End-to-End (E2E) Test Automation Framework built using Playwright and JavaScript. The framework follows the Page Object Model (POM) design pattern to ensure maintainability, scalability, and reusability of test cases.

## Tech Stack

* Playwright
* JavaScript (ES6+)
* Node.js
* Page Object Model (POM)
* Allure Reporting
* Git & GitHub

## Project Structure

```text
PlaywrightE2E
│
├── pages/                 # Page Object classes
├── tests/                 # Test cases
├── playwright.config.js   # Playwright configuration
├── package.json
├── package-lock.json
├── .gitignore
└── LICENSE
```

## Features Covered

### Authentication

* User Registration
* User Login
* Validation Testing
* Negative Test Scenarios

### Product Search

* Search by Full Product Name
* Search by Partial Product Name
* Search with Invalid Keywords
* Search Result Validation

### Product Validation

* Product Name Verification
* Product Price Verification
* Product Visibility Validation

### Cart & Checkout

* Add to Cart
* Cart Validation
* Checkout Flow Testing

## Design Pattern

This framework follows the **Page Object Model (POM)** design pattern.

Benefits:

* Better code reusability
* Easier maintenance
* Cleaner test scripts
* Improved scalability

## Installation

Clone the repository:

```bash
git clone https://github.com/TheSourav-001/PlaywrightE2E.git
```

Navigate to the project directory:

```bash
cd PlaywrightE2E
```

Install dependencies:

```bash
npm install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js
```

## Generate Allure Report

Generate report:

```bash
allure generate ./allure-results --clean
```

Open report:

```bash
allure open
```

## Reporting

This framework supports Allure Reports for detailed test execution analysis, including:

* Test Status
* Execution History
* Failure Details
* Screenshots
* Step-by-Step Execution Logs

## Author

**Sourav Dipto Apu**

GitHub: https://github.com/TheSourav-001

## License

This project is licensed under the MIT License.
