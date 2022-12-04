// A) Imports
// Step 1: add the imports------------------------------
// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// the component to test
// import Fetch from '../fetch'
import Fetch from 'node-fetch'


// Step 2: define the imports-------------------------- 
test('loads and displays greeting', async () => {
    // Arrange
    // Act
    // Assert
  })

// B) Mock
// Step 3: use the 'setupServer' function from 'msw' to mock an API request that the tested component makes\

// declare which API requests to mock
const server = setupServer(
    // capture "GET /greeting" requests
    rest.get('/greeting', (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json({greeting: 'hello there'}))
    }),
  )
  
  // establish API mocking before all tests
  beforeAll(() => server.listen())
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())
  
  // ...
  
  test('handles server error', async () => {
    server.use(
      // override the initial "GET /greeting" request handler
      // to return a 500 Server Error
      rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
  
    // ...
  })

// C) Arrange
// The render method renders a React element into the DOM.

render(<Fetch url="/greeting" />)

// D) Act
// 'fireEvent' method allows you to simulate user actions by activating events 

fireEvent.click(screen.getByText('Load Greeting'))

// wait until the `get` request promise resolves and
// the component calls setState and re-renders.
// `waitFor` waits until the callback doesn't throw an error

// eslint-disable-next-line testing-library/prefer-find-by
await waitFor(() =>
// getByRole throws an error if it cannot find an element
  screen.getByRole('heading'),
)

// E) Assert
// assert that the alert message is correct using 'toHaveTextContent': a custom matcher from jest-dom
expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')

// assert that the button is not disabled using 'toBeDisabled': a custom matcher from jest-dom.
expect(screen.getByRole('button')).not.toBeDisabled()