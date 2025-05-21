# Part 1 – Unit Testing Practice with Jest & Testing Libraries

This project demonstrates testing components, pages, and API routes in a Next.js application using **Jest**, **Testing Library**, and related tools.

---

## ✅ Project Setup Summary

### 📦 Dependencies Installed

```bash
npm install --save-dev jest
npm install --save-dev jest-environment-jsdom @testing-library/react
npm install --save-dev @testing-library/user-event
npm install --save-dev node-mocks-http
```

---

## 🗂 Folder & File Structure (Created Step-by-Step)

### 📁 tests/
Contains all test files.

- `1.practice.test.js` → Basic Jest tests  
- `2.index.test.js` → Tests the default `index.js` page  
- `3.clickCounter.test.js` → Tests `<ClickCounter />` component  
- `vehicles.test.js` → Tests `pages/api/vehicles/[id].js` API route  

---

### 📁 components/
- `ClickCounter.js` → Simple counter component for testing

---

### 📁 pages/
- `index.js` → Home page including `<ClickCounter />`

---

### 📁 pages/api/vehicles/
- `[id].js` → Dynamic API route for testing mock requests

---

## 🛠 Configuration Files

### ✅ `package.json` scripts

```json
"scripts": {
  "test": "jest --watchAll"
}
```

### ✅ `jest.config.mjs`

```js
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

export default createJestConfig({
  testEnvironment: 'jest-environment-jsdom',
});
```

---

## 🚀 Running the Tests

### Step-by-Step:

1. Start your **Next.js app** in one terminal:
   ```bash
   npm run dev
   ```

2. Open a **second terminal** in VS Code and run:
   ```bash
   npm run test
   ```

> You must run both `npm run dev` and `npm run test` concurrently (in separate terminals) when testing anything related to **API routes** or **server-side logic** like `pages/api/vehicles/[id].js`.

---

## 📝 Commit Breakdown (History)

### Second/Third Commit
- Installed Jest
- Added `"test"` script in `package.json`
- Created `tests/1.practice.test.js`

### Fourth Commit
- Installed `jest-environment-jsdom`, `@testing-library/react`
- Created `jest.config.mjs`
- Wrote `tests/2.index.test.js` to test `pages/index.js`

### Fifth Commit
- Installed `@testing-library/user-event`
- Created `components/ClickCounter.js`
- Wrote `tests/3.clickCounter.test.js` for the component

### Sixth Commit
- Installed `node-mocks-http` for API testing
- Created `pages/api/vehicles/[id].js`
- Wrote `tests/vehicles.test.js` to test the API
- Added instructions to run tests & dev server in two Git Bash terminals

---

## ✅ Goals Achieved

- ✔️ Basic Jest test setup
- ✔️ Page and component testing
- ✔️ Simulated user interaction via `user-event`
- ✔️ Mocked API route testing with `node-mocks-http`
- ✔️ Structured testing folders and config

---

## 🧩 Next Steps (Ideas for Part 2)

- Add `jest.setup.js` to configure global testing utilities
- Use `supertest` or `msw` for advanced API mocking
- Add CI with GitHub Actions to run tests automatically

---