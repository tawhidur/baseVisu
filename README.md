# BaseVisu — UI Regression Test Suite 🔴

> **Cypress-powered end-to-end visual and functional test framework — a reusable base for UI regression testing on any web application.**

[![Cypress](https://img.shields.io/badge/Cypress-13.x-dc143c?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-dc143c?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-111111?style=for-the-badge)](LICENSE)
[![Portfolio](https://img.shields.io/badge/Portfolio-tawhidur.github.io-dc143c?style=for-the-badge&logo=github&logoColor=white)](https://tawhidur.github.io/)

---

## Overview

**BaseVisu** is a baseline Cypress test framework designed for rapid adoption across web projects. It provides the scaffolding — configuration, folder conventions, and reusable helpers — so your team can start writing meaningful E2E and visual regression tests from day one, without spending time on boilerplate.

Used internally as the starter template for UI automation initiatives in enterprise-grade QA pipelines.

---

## Features

- ⚡ **Cypress 13** with modern `defineConfig` configuration
- 📁 **Structured test organisation** — `e2e/`, `fixtures/`, `support/` conventions
- 🖼️ **Visual snapshot baseline** setup (ready for `cypress-image-snapshot` integration)
- 🔁 **Reusable `cy.` custom commands** in `support/commands.js`
- 🌐 **Environment-aware config** — switch base URLs via `cypress.env.json`
- 🚀 **CI-ready** — headless run commands preconfigured

---

## Tech Stack

[![Cypress](https://img.shields.io/badge/Cypress-13.x-dc143c?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-111111?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18+-dc143c?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-Package%20Manager-111111?style=for-the-badge&logo=npm)](https://www.npmjs.com/)

---

## Project Structure

```
baseVisu/
├── cypress/
│   ├── e2e/                    # Test specs
│   │   └── example.cy.js
│   ├── fixtures/               # Test data (JSON)
│   │   └── example.json
│   └── support/
│       ├── commands.js         # Custom cy.* commands
│       └── e2e.js              # Global hooks & imports
├── cypress.config.js           # Cypress configuration
├── package.json
├── .gitignore
└── README.md
```

---

## Prerequisites

- Node.js 18+ and npm
- A target web application URL

---

## Installation

```bash
# Clone the repository
git clone https://github.com/tawhidur/baseVisu.git
cd baseVisu

# Install dependencies
npm install
```

---

## Configuration

Set your target application URL in `cypress.config.js`:

```js
// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://your-app-url.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
  },
});
```

Or override per environment with `cypress.env.json` (excluded from git):

```json
{
  "baseUrl": "https://staging.your-app.com"
}
```

---

## Running Tests

```bash
# Open Cypress interactive runner
npx cypress open

# Run all tests headless (CI mode)
npx cypress run

# Run a specific spec
npx cypress run --spec "cypress/e2e/example.cy.js"

# Run with a custom base URL
npx cypress run --config baseUrl=https://staging.your-app.com
```

---

## Usage — Writing Your First Test

```js
// cypress/e2e/login.cy.js
describe('Login flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should log in with valid credentials', () => {
    cy.get('[data-testid="username"]').type('testuser');
    cy.get('[data-testid="password"]').type('secret{enter}');
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="welcome-banner"]').should('be.visible');
  });
});
```

---

## Screenshots / CI Artifacts

Failed tests automatically capture screenshots to `cypress/screenshots/`. To enable video recording:

```js
// cypress.config.js
video: true,
videosFolder: 'cypress/videos',
```

---

## Roadmap

- [ ] Add `cypress-image-snapshot` for pixel-level visual regression
- [ ] Integrate Allure reporting (`@shelex/cypress-allure-plugin`)
- [ ] Add GitHub Actions workflow for automated CI runs
- [ ] Implement Page Object Model (POM) pattern layer
- [ ] Add accessibility checks with `cypress-axe`

---

## Contributing

This is a personal portfolio project used as a starter template. Issues and improvement suggestions are welcome.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

**Tawhidur Rahman** — Senior SQA Lead | CSM  
🌐 [Portfolio](https://tawhidur.github.io/) · 💼 [LinkedIn](https://www.linkedin.com/in/tawhidur/) · 🐦 [@Tawhid_CSE](https://twitter.com/Tawhid_CSE) · ✉️ tawhid.cse@gmail.com

---

*Built by [Tawhidur Rahman](https://tawhidur.github.io/) — 14+ years in SQA | Samsung Research · Progoti Systems*
