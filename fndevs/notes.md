# NPM vs NPX

- Both

  - Node Environment
  - JS
  - Package Managers

- NPM

  - Node Package Manager
  - Default package manager for Node projects

- NPX

  - Node Package eXecute
  - NPM package runner available on the NPM registry without installing it

# serve

- Need to install and run serve

```
npm install -g serve
serve -s build
```

- Read more about it here: https://www.npmjs.com/package/serve?activeTab=readme

# Testing

## Library

- React Testing Library: solution for testing React components, provides utility
  functions on top of react-dom/test-utils

## Failed tests

```
Cannot find module 'msw' from 'src/tests/mock.test.jsx'

       6 | // import API mocking utilities from Mock Service Worker
    >  7 | import {rest} from 'msw'
```

- FIXED

---

```
Cannot find module 'axios' from 'src/tests/mock.fetch.jsx'
2 | import axios from 'axios'
```

- FIXED

---

```
  SyntaxError: Cannot use import statement outside a module
  2 | import axios from 'axios'
  18 | import Fetch from 'node-fetch';
```


TEST TEST TEST

- this didn't work, will try again
  https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module

