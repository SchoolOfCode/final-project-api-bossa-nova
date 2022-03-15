# Bossa Nova Job Tracker

## Table of Contents

- [How to Install and Run Project](#how-to-install-and-run)
- [How to run Tests](#how-to-run-tests)
- [Project Description](#project-description)
- [Development Process](#development-process)
- [Contributing Guidelines](#contributing-guidelines)
- [Authors info](#authors-info)

## How to Install and Run

Clone the repo down open the terminal in the root directory and install all dependecies by running

```bash
npm i
```

Once all dependencies are installed, run

```bash
npm run dev
```

This will open the project on localhost:8000 unless you specify a different PORT variable in your .env file.

This script will use nodemon, so it will watch your files for changes, and it will re-start the server whenever a change occurs.

Now your project will be running but you still won't be able to connect to the mongoDB, because you are missing the necessary database credentials.

If you want to connect to a database, first create a mongoDB database [here](https://www.mongodb.com/atlas/database).

Once you have created a database, grab the database URL, create .env file in your root directory and assign the database URL value to a variable called DATABASE_URL like so:

```bash
DATABASE_URL = mysupersecretdatabaseurl
```

you also might want to assign a different port in the .env file, like so:

```bash
PORT = 5000
```

If you want to run tests you will need an additional database (just for testing purposes) and you will need to add a final env variable in your .env file like so:

```bash
TEST_DATABASE_URL = mysupersecrettestingdatabaseurl
```

If you have done all of the following things, stop your server and start it again (nodemon doesn't detect changes to your .env file) and it should all be working fine.

## How to Run Tests

We have a total of 2 test suites and 18 tests, using jest and supertest for end-to-end testing, if you have set up a testing database, you can run the tests by executing the command

```bash
npm t
```

You will see the results in the terminal.

## Project Description

## Front/Back End Description

## Development Process

We used an Agile approach (1 week sprints, small manageable tickets, Jira board), and applied CI/CD principles.

We used a dev branch for development and a stable main branch for deployment.
Main and Dev branch are protected by enforced code reviews (you need 1 approval to merge into dev and 2 approvals to merge into main). Every new feature is developed by branching off the main branch and giving the branch a meaningful name and then making a pull requests to the dev branch again, once the dev branch is stable then it gets merged into the main branch as well.

We used pair-programming heavily thoughout the whole project.

### Tech Stack

- Node.js
- Express.js
- Nodemon
- Jest
- Supertest
- MongoDB
- Mongoose

## Contributing Guidelines

## Authors info
