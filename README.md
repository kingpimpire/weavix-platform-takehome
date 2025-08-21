# weavix-platform-takehome
This is the platform interview take home project.  It is purposefully broad! We want to see what you choose to focus on and how you handle some common scenarios.  Be prepared to explain your rationale for the choices you make while implementing these example scenarios.  You should spend no more than 5 hours on this project.

## Intro
This repo contains a simple express http server that has one GET endpoint `/hello` which returns a greeting.  You can run it with the following commands.

```
// install dependencies
yarn

// start the server
yarn start

// test the endpoint
curl localhost:3000/hello

// run the unit tests
yarn test
```

We would like you to __fork__ this repo, and build infrastructure to satisfy the following goals. This will demonstrate your ability when building CI/CD pipelines, provisioning infrastructure, and orchestrating services.

## Goal 1
Using github actions, (or a CI/CD platform you're comfortable with) create a set of automations that do the following:
- Build the app and run tests when a new pull request is created. Merging the PR should be blocked until tests pass and the app builds successfully.
- Create a workflow for releasing this app to a deployed environment.  This should include simple controls that allow users to safely and reliably build and deploy the app to a test environment and a production environment.

## Goal 2
The aforementioned release process should deploy this application to a cloud environment of your choice.  The `/hello` endpoint should be publicly accessible.  Show how this infrastructure can be maintained and evolve over time.

## Submitting your work
Once you're done, add a section to this README file explaining your approach, providing any details you see fit and the rationale for the decisions you made while putting this together.  Feel free to add notes about what you omitted and would have included in a real-world implementation.  Finally, send us a link to your repo and we will ask questions and provide feedback.