# Hudl Login Page Tests #

These tests use the Cypress test framework. The can be run locally, or as part of a CI pipeline.

## Running tests ##

To run tests locally you first need to install Cypress on your local machine. The steps to do this are detailed in the Cypress 
documentation at [Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing).

If you already have npm install you can just run 'npm install' from the directory where this repo is cloned.

Once installed go to the directory corresponding to the environment you wish to test. From there you can run tests 
in a headless browser using the command 'npx cypress run' or you can start the Cyress UI using the command 'npx cypress open'. 

## Defining your test user data.

I have ignored the cypress.env.json file using .gitignore as I do not want
to expose test data to public. This also allows indivual test runners to use their own username and password depending on the environment.

To set up environment variable, create cypress.env.json at the root level 
and create the following json content based on the user details you prefer.

```JSON
{
  "normal_user_email": "E-mail you wish to use",
  "normal_user_password": "Password of the above user",
  "wrong_user_email" : "abc@gmail.com",
  "wrong_user_password" : "wqeq344"
}
```
