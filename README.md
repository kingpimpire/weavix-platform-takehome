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

# Work Summary

## Goal 1a:
- Forked the weavix github repo here [https://github.com/kingpimpire/weavix-platform-takehome](https://github.com/kingpimpire/weavix-platform-takehome). Note: I'm using my personal kingpimpire github account [https://github.com/kingpimpire](https://github.com/kingpimpire) instead of my jeremytomlinson account [https://github.com/jeremytomlinson](https://github.com/jeremytomlinson) because this is a takehome test for weavix I wanted to keep it separate.
- On the forked repo I went to github settings and created a branch ruleset named "Disable merge until approved" that's applied to all branches. It requires a pull request before merging and also requires one approval.
- Created new github action named "Build and run tests" to build the branch and run the tests on a pull request. Pull request types include edited, reopened, ready_for_review, synchronize, opened.
- In Visual Studio Code I created a new branch and made some changes to the welcome message. Next, I created a pull request for the branch and the "Build and run tests" github action ran automatically, but I  was disappointed when it failed. I banged my head against the wall for a little while. After researching, I found that in my .yml file I needed to install yarn with npm and then do a yarn install before building the project. This fixed my issue!
- Created a new pull request for the branch and the "Build and run tests" github action automatically ran and successfully built the project, ran the tests, and the merge was blocked until both completed successfully. The merge was also blocked until there was one review and approval.

## Goal 1b and Goal 2:
- Signed up for a personal Azure account that came with $200 of free credits.
- Created an App Service Plan on Linux in the Central US.
- Created a Web App on Linux in the Central US that was connected to my App Service Plan.
- Downloaded the Publish Profile for the web app so I could use it in my github workflow.
- In github, created a new repository secret using the web app publish profile from azure.
- Created a new github action named "Build and deploy app to Azure" that deploys the project to azure on a push to the main branch. The .yml uses the publish profile secret that I created in github.
- Signed up for a new github user named "jeremyextra" [https://github.com/jeremyextra](https://github.com/jeremyextra) and added this user as a Collaborator for my forked "weavix-platform-takehome" repository. I wanted to verify that a collaborator could push a branch and create a pull request and that it would be successfully blocked from merging into main until there was one review and approval.
- In VS Code I created a new branch and verified the two .yml files were included in the .github/workflows directory. The .yml files are named pull_request_weavix-winning.yml and 
main_weavix-winning.yml.
- In the feature branch I made a couple of small changes to the welcome message so that I could verify a new deployment to azure was successful.
- Using my jeremyextra collaborator user, I pushed the feature branch to github and created a new pull request. The github action ran and successfully built the project and ran the tests. The pull request was blocked from merging into main until there was one review and approval. 
- Using my kingpimpire admin user, I reviewed the pull request from jeremyextra and verified the github action successfully built the project and ran the tests. Next, I added a review and approved the pull request. This unlocked the merge button and I was able to merge the branch into main.
- Once the branch was merged into main, the next github action automatically ran to "Build and deploy app to Azure".
- In Azure I verified in the web app Deployment Center that the deploy succeeded.
- I clicked the Azure web app link to view the deployed site [https://weavix-winning-bvg8cfakc2cegbha.centralus-01.azurewebsites.net/](https://weavix-winning-bvg8cfakc2cegbha.centralus-01.azurewebsites.net/) and was disappointed when it did not load the welcome message. I banged my head against the wall for a little while. Then I remembered that I needed to add the "/hello" path at the end of the url and it totally loaded at [https://weavix-winning-bvg8cfakc2cegbha.centralus-01.azurewebsites.net/hello](https://weavix-winning-bvg8cfakc2cegbha.centralus-01.azurewebsites.net/hello).

## Goal 1b multiple environments:
- After completing the above steps I had spent about 6-7 hours setting everything up and testing that it all worked successfully. Part of Goal 1b was deploying the app to a test environment and a production environment.
- In Azure, I went to the web app and was blocked from creating a new Deployment Slot until I scaled the web app up to a Production "Premium v3" service plan.
- Once the web app was scaled up, I created a Deployment Slot for "staging". Once it was ready, I downloaded the Publish Profile for the staging slot.
- In github I created a new repository secret using the staging publish profile.
- In VS Code I created a new branch and opened main_weavix-winning.yml. I changed the slot name to "staging" and changed the publish-profile to use the new github secret name.
- I committed my changes, pushed to github, and created a new pull request. 
- Once again, the github action automatically built the project and ran the tests and the pull request was blocked until I reviewed and approved it. 
- After approval I was able to merge it into main and the second github action automatically deployed the project to the azure web app.
- In Azure, I went to the staging slot and verified the deployment was successful. Next, I clicked the link to load the staging site [https://weavix-winning-staging-c3bgbyaycee4dvbp.centralus-01.azurewebsites.net/hello](https://weavix-winning-staging-c3bgbyaycee4dvbp.centralus-01.azurewebsites.net/hello) and received an Application Error.
- I started to research the error, but considering that I'm over the suggested 5-hour time limit, I decided to wrap things up so I could send to the weavix engineering team for review. I changed the slot back to Production and updated the secret to use the Publish Profile for the product web app. When I updated this ReadMe I verified that everything ran successful again.