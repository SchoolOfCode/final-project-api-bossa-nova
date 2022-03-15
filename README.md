# Bossa Nova Job Tracker

Our team of 6 researched, designed and built this app from scratch in 4 weeks. We were all students at the [School of Code](https://www.schoolofcode.co.uk/).

We wanted to create a job tracker for tech workers that was better than using spreadsheets. Our app is more visually appealing, allows job filtering, has multiple fields and gives carefully selected resources for gaining a job in tech.

Our application enables the user to be authenticated via their Google account or email/password. They can add new jobs, edit and delete existing jobs, filter jobs by status and company and search for useful resources to get a tech role.

This repo is the back-end repo of our application, here you can find the [front-end repo](https://github.com/SchoolOfCode/final-project-repo-bossa-nova)

Or check out the [live site](https://bossanova.netlify.app/)

## Table of Contents

- [How to Install and Run Project](#how-to-install-and-run)
- [How to run Tests](#how-to-run-tests)
- [Project Description](#project-description)
- [Development Process](#development-process)
- [License](#license)
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

<details> 
<summary>Tech Stack</summary>

- Node.js
- Express.js
- Nodemon
- Jest
- Supertest
- MongoDB
- Mongoose
</details>

The app we built is a job-application tracking app. We needed an api that would allow us to store and retrieve information about users at all times. We initially thought about using PostgreSQL as a database because that is what we had been using up until that point on the bootcamp, but it didn't make much sense to use a relational database for our project, as we would have ended up with a huge table and countless repeated fields and some empty fields as well. So even though we didn't have any experience with non-relational tables yet, we decided we were going to use MongoDB. It took a few days of exploring and researching before we became familiar with it, but it was a an enjoyable and useful experience.

We use Mongoose to create the document schema and mongoose CRUD operations to perform actions on the database.

Each user in the database in a single document, with a unique \_id field, this \_id field is created when the user is created on the database and it will be sent from the front-end, as it will match the auth0 authentication token. Additionally each user will have an other field called "jobs" which will be an arrya of objects. Each object in this array represents a job and it has an other unique id (this time created by mongo) and additional fields that we use to store information about that job. The job document has 5 required fields and is not a strict schema, which means, new fields can be added at any time. This makes our database very flexible and if we want to add a new field there is no change needed on our api or database.

The API performs all CRUD actions for two different routes

- /api/user/ -> to interact with user info and jobs
- /api/resources/ -> to manipulate resources

## Development Process

We used an Agile approach (1 week sprints, small manageable tickets, Jira board), and applied CI/CD principles.

We used a dev branch for development and a stable main branch for deployment.
Main and Dev branch are protected by enforced code reviews (you need 1 approval to merge into dev and 2 approvals to merge into main). Every new feature is developed by branching off the main branch and giving the branch a meaningful name and then making a pull requests to the dev branch again, once the dev branch is stable then it gets merged into the main branch as well.

We used pair-programming heavily thoughout the whole project.

## Contributing Guidelines

## License

MIT

## Authors info

- Valerio Cipolla
  - Portfolio: https://valeriocipolla.netlify.app/
  - GitHub: https://github.com/ValerioCipolla
  - LinkedIn: https://www.linkedin.com/in/valerio-cipolla-software-engineer/
