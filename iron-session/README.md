# Part 2 – Cypress E2E Testing with Iron-Session

This part of the project focuses on **end-to-end (E2E) testing** using **Cypress**, based on the `iron-session` login demo provided in the [WEB422 course](https://webprogrammingforappsandservices.sdds.ca/).

---

## ✅ Project Setup Summary

### 📦 Installed Dependencies

```bash
npm install --save-dev cypress
```

---

## ⚙️ Scripts Configuration

In your `package.json`, add the following:

```json
"scripts": {
  "dev": "next dev",
  "cypress": "cypress open",
  "cypress:headless": "cypress run"
}
```

---

## 🗂 Folder & File Structure

### 📁 cypress/
- `e2e/spec.cy.js` → Contains E2E tests copied from the course

### 🛠 cypress.config.js

Include your test configuration, such as:

```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  video: true, // enables video recordings of test runs
});
```

---

## 🚀 Running the Tests

### 1. Start your app

In Terminal 1 (Git Bash):

```bash
npm run dev
```

### 2. Run Cypress UI (interactive)

In Terminal 2:

```bash
npm run cypress
```

- Choose **E2E Testing**
- Pick a browser (e.g. **Chrome**)
- Run the test file `spec.cy.js`

---

### 3. Run Cypress in **headless mode** (no popup):

```bash
npm run cypress:headless
```

- Tests run in the terminal output
- Videos saved in `/cypress/videos` if `video: true` is enabled

---

## 📝 Step-by-Step Recap

### Initial Setup
- Installed Cypress dev dependency
- Added Cypress run commands to `package.json`
- Created `cypress.config.js` and set base URL

### Test Integration
- Copied test file from course into `cypress/e2e/spec.cy.js`
- Used two Git Bash terminals:
  - One for running the app (`npm run dev`)
  - One for running Cypress (`npm run cypress`)

### Enhancements
- Added `cypress:headless` script
- Enabled video recording in test runs

---

## ✅ Goals Achieved

- ✔️ Cypress fully integrated
- ✔️ E2E testing runs via UI or terminal
- ✔️ Browser selection enabled
- ✔️ Base URL configured for local app
- ✔️ Test video recording activated

---
