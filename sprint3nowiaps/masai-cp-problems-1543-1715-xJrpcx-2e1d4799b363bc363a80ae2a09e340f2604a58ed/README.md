### Use of Chakra UI is compulsory in this Assignment

## React Chakra UI Job Application

#### Problem Statement

Create the following application with the boilerplate code provided.

## Submission Instructions [Please note]

## Maximum Marks - 18

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Should have the title visible in the navbar - 1 marks
 ✅ Checks for the initial store state - 1 mark
 ✅ Checks the reducer function for GET_JOBS_REQUEST state - 1 mark
 ✅ Checks reducer function for GET_JOBS_SUCCESS  - 2 marks
 ✅ Checks reducer function for GET_JOBS_FAILURE - 1 mark
 ✅ Should show loading skeleton while data is loading - 2 marks
 ✅ Should have pagination buttons visible in the dom - 1 marks
 ✅ Should show correct jobs information for page - 1 - 2 marks
 ✅ Should show correct jobs information for page - 3 - 2 mark
 ✅ Should have a modal open when Apply Now button is clicked for a job - 1 - 2 marks
 ✅ Should have a modal open when Apply Now button is clicked for a job - 2 - 2 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install --engine-strict`
  - `npm start`
  - `npm run server` to start server
- **_Note_**:

1. Make sure that the json-server is up and running at port `8080`
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server URL where ever you use `http://localhost:8080`

 <h3 style = "color:red">Not following the above instructions will lead your test cases to fail</h3>

## Problem

**_Note_**: Make sure you start `json-server` on the `8080` port with provided `db.json` file, then only you will be able to fetch data on this website.

## Understanding Component Structure

```
src/
├── Components/
│   ├── Dashboard/
│   │   ├── actionCreators.js
│   │   ├── actionTypes.js
│   │   ├── Dashboard.jsx
│   │   ├── initialState.js
│   │   └── reducer.js
│   ├── JobCard.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   └── SuccessModal.jsx
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js

```

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json]
  - Initial Jobs Details should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and don't create new data. Changing data might result in giving you zero marks`

## Query Params

- Paginate
  - Use `_page` and `_limit` to paginate returned data.
  - fetch `4` objects on every page

```

GET /jobs?_page=1&_limit=4

```

## Note

- Use `useReducer` hook to manage data for API requests
- Use Axios to make the API request
- Pass below `headers` object with axios

```
{
  headers: {
      "Cache-Control": "no-cache",
  },
}
```

- Only use Chakra UI Components

## Features to build

Create a react application for applying for job

- The user should be able to show all the job details in card format.
- The user should be able to apply for a job.
- After applying for a job user can see a success message modal

### App.js

- Import Navbar and Dashboard from Components folder

### Navbar.jsx

- Import `Flex` component from chakra ui and give it a class name `navbar`
- Inside `Flex` Create a title `Chakra UI Job Application` inside the `Heading` component

### Dashboard.jsx

- On load make a GET request to the `/jobs` endpoint for page 1 with a limit of 4
- Manage the state of the data fetched from the API and fetch call status (Request, Success, Failure) in the reducer. (use useReducer hook)
- The initialState should be

  ```
  const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  };

  The above initial state is already mentioned in the initialState.js file in the boilerplate.
  ```

- reducer.js file is provided in the boilerplate, complete the reducer function and import to Dashboard
- Action types are already provided in `actionTypes.js`
- Create action creators (functions) inside `actionCreators.js` or you can dispatch directly inside `Dashboard.jsx`
- Maintain the Request, Success, and Failure status API using the following action types
  - "GET_JOBS_REQUEST"
  - "GET_JOBS_SUCCESS"
  - "GET_JOBS_FAILURE"

#### Make sure to use the above action types as it is (no spelling mistakes or case change)

- dispatch `GET_JOBS_REQUEST` when the API request is made.
- dispatch `GET_JOBS_SUCCESS` along with the payload when the API call is successful.
- dispatch `GET_JOBS_FAILURE` when the API call is failure/unsuccessful.

- Update the reducer state(status of isLoading, data and isError) as well, with the appropriate data in case of REQUEST, SUCCESS, or FAILURE of the GET request.
- After a successful GET request, map through the data present in the reducer.
- Every job has the following information:

```
id
title
company
location
description
requirements
responsibilities
createdAt
updatedAt
```

- While data is loading show a loading skeleton from chakra ui (4 skeletons in SimpleGrid)
- SimpleGrid is already given boilerplate with class name
- Use conditional rendering to render `Skeleton` if condition is true then show 4 skeletons (inside react fragments)
- Whenever the isLoading is true, the `Skeleton` component from Chakra UI should be displayed(as shown in the bewlow image) else the data in `Card` format should be displayed.

<img src="https://i.imgur.com/FH3rmaU.png" width="100%"/>

- After the data is loaded display all the details of jobs in card format (use Chakra UI card)

<img src="https://i.imgur.com/sJorqSI.png" width="100%"/>

## JobCard.jsx

- Receive jos details as props from `Dashboard.jsx` and show all information inside chakra ui `Card`
- Import `Card` from chakra ui and this card should have `CardHeader`, `CardBody` and `CardFooter`
- Inside `CardHeader` show the job title inside the `Heading` component
- Inside `CardBody` show the following information
  - Company name inside `Heading` component
  - Location inside `Text` component with className `location`
  - Description inside `Text` component with className `description`
  - Requirements inside the `Text` component with className `requirements`
  - Responsibilities inside the `Text` component with className `responsibilities`
- Inside `CardFooter` create a `Button` with text `Apply Now`
- Import `SuccessModal.jsx` below it and pass required `props` to show modal

## Pagination.jsx

- This component should `not be visible` while data is loading and skeleton showing (use conditional rendering)
- It should receive the required props for setting up pagination from `Dashboard` component
- There should be `3` page (limit=4) as there are `10` objects on json-server
- Create buttons with className `pagination_btn` inside the given component

<img src="https://i.imgur.com/WBr5HrD.png" width="100%"/>

## SuccessModal.jsx

- On clicking on the `Apply Now` button a `Modal` should open with a congratulations message
- This component will receive the job `title`, `company` name and required props
- Show `title` inside `ModalHeader`
- Show a message to the user `Congratulation on Your Application Submitted At {company name} For {job title} Role.` inside `ModalBody` in `Text` component with class name `apply_message`.

<img src="https://i.imgur.com/BwJlCuK.png" width="100%"/>

## Tested on cp.masaischool.com

<img src="https://i.imgur.com/y01I2OI.png" width="100%"/>

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use the `<componentName>.module.css` convention for CSS in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this is used by testing tools to test your code, and removal of this will lead to a low score.
3. Make sure you use only the given components and don't create new files and folders as changing component names, and structures might result in giving you zero marks
4. Make sure you use only the given data and don't create new data, as changing data might result in giving you zero marks.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
