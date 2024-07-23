# Virtual Labs Online Experiment Authoring Environment- Developer Documentation

This document serves as a guide for developers working on the Virtual Labs Content Development Platform project. It provides an overview of the project, development guidelines, design choices and deployment instructions. 

## Table of contents
- [Virtual Labs Online Experiment Authoring Environment- Developer Documentation](#virtual-labs-online-experiment-authoring-environment--developer-documentation)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Environment](#environment)
  - [Developer Instructions](#developer-instructions)
    - [How to Run and Compile](#how-to-run-and-compile)
    - [How to test](#how-to-test)
      - [For testing in local environment:](#for-testing-in-local-environment)
      - [For testing in production environment in vscode.dev :](#for-testing-in-production-environment-in-vscodedev-)
  - [Functionalities](#functionalities)
    - [Initialize Experiment](#initialize-experiment)
    - [Validate](#validate)
    - [View Current Experiment](#view-current-experiment)
    - [Save Progress](#save-progress)
    - [Help](#help)
    - [Submit for Review](#submit-for-review)
  - [Technologies or libraries used](#technologies-or-libraries-used)
    - [Github Worflows](#github-worflows)
    - [Octokit](#octokit)
    - [Remote Repositories](#remote-repositories)
  - [Technologies rejected or unable to implement](#technologies-rejected-or-unable-to-implement)
    - [Direct use of node modules](#direct-use-of-node-modules)
    - [GitHub Codespaces](#github-codespaces)
    - [Isomorphic git](#isomorphic-git)
    - [File system](#file-system)


## Introduction 
The Virtual Labs Expeirment Authoring Web-Extension is designed to allow experiment authors to be able to create, manage,and modify experiments. This can be done with a ease via the lightweight vscode.dev browser environment, from where the extension can be accessed. Integrations with GitHub promotes security and prevents the need for the end-user to use storage space locally. It utilises TypeScript, HTML, CSS along with VS code API and GitHub Actions. 

## Environment
At the time of the writing, this works only on vscode.dev as it only has web entry point. 
Different from the app extension- which is built for the same purpose, but certain differences in features and functions. 

## Developer Instructions

These are instructions to develop the extension, to test if any further modifications are there. These are useful to refer during further development. 

### How to Run and Compile
1. Clone the extension repository on your local system 
2. Go to the same folder/location where step 1. was done, i.e where the repository has been cloned
2. Install node modules using the command `npm install`
4. Compile the extension using `npm run compile-web`

### How to test
After the compilation process is completed sucessfully
#### For testing in local environment: 
- Run in the cloned repository dev mode using `npm run dev`

#### For testing in production environment in vscode.dev : 
- Ensure the availability of mkcert (if not installed : `brew install mkcert` or `choco install mkcert` or `apt-get install mkcert`)
- Then run `npm run generate-certificate` to generate the certificate for localhost (needed for only first time of testing).
- Run production using `npm run start-vscode-server`
- Now paste the localhost link in the vscode.dev at workspace option (developer: install) and install the extension.
- Note: The compilation should be done before running the extension. If you encounter any error, make sure that you have compiled the code first.

## Functionalities

### Initialize Experiment

- Requires Sign In with valid Github credentials
- Allows opening of an experiment repository 
- The current user implementation involves pre-defining the link to open Virtual Labs repositories
- The user enters the name to 
- Makes use of available API functions provided by Github through a VSCode API execute command

### Validate 
- Validates the experiment
- contains the error logs for the same in lint.txt
- Done by using a GitHub workflow to run the npm module that carries out validate

### View Current Experiment

- Deploys the experiment to the testing branch
- This creates an experiment using the files of the experiment repository, which is displayed to the user
- Done by  using a Github workflow to set up the relevant experiment pages 

### Save Progress
- Opens up a window instigating the user to save progress so far
- Progress to be saved to the dev branch

### Help
- Standard help page with basic User Documentation
- Contains Instructions regarding how to use the web-extension and contact details for further support

### Submit for Review
-  Raises a pull request to main branch of the experiment repository

## Technologies or libraries used
This section covers the technologies used in the experiment. They are maintained and developed externally, accordingly relavent links are included.

### Github Worflows
As defined in the GitHub website, a workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

This extension makes use of a workflow to carry out the following functionality:
- Validate 
    - workflow name: validate.yml
    - trigger: workflow_dispatch- this allows a manual trigger fom GitHub Actions UI, makes use of an octokit request
    - triggered via octokit on click of button
    - summary of action/jobs: 
        -  fetches code from the experiment repository
        - runs a series of commands to run the virtual-labs buildexp package i.e virtual-labs/buildexp validate; this lints the code
- View Current Experiment
    - workflow name: deployment-script.yml
    - Trigger: workflow disptach
    - Triggered via octokit on click of button
For further details, clink on this [link](https://docs.github.com/en/actions/using-workflows)


### Octokit
- Octokit is a set of client libraries for interacting with the GitHub API. It provides convenient methods and utilities to make it easier for developers to integrate GitHub's functionality into their applications or scripts.

- Using this, it is possible to perform various actions programmatically, such as creating repositories, managing issues, commenting on pull requests, and more.

- Octokit allowed us to make use of GitHubAPI via a supported pure javascript implementation

- Used in multiple functionalities such as:
    - [Validate](#validate)
    - [View Experiment](#view-current-experiment)
    - [Submit for Review](#submit-for-review)

### Remote Repositories
These is the extension that must be installed for the functionality to work. Is specified in the package-json as a development dependency. 

Needed for functionality:
- [Initialize Experiment](#initialize-experiment)
- [Save progress](#save-progress)


## Technologies rejected or unable to implement
These are some of the technologies that we attempted to make use but found they were not suitable for the system and design.

More information is available in [supporting documents](./design_doc_limitations_web_environment_doc.md)

### Direct use of node modules
- The direct use of node modules was not used in the web
- This is as the web extension doesn't module loading 
- This prevented the use of modules such as simplegit and shelljs used in app extension to be used here. 

### GitHub Codespaces
- Github codespaces is a system complete with backend allowing code execution
- This however, has a number of limitations
- Using codespaces could provide similar options to running on local system 
- However works on a freemium model and app extension already available there

### Isomorphic git
- Isomorphic git is a pure javascript implementation 
- Lack of robust [file system](#file-system) in the dev environment was an issue
- Even commands not involving file system was unable to work, leading to isomorphic git not being used.
- For further information, refer to [supporting doc on git functionality](./design_doc_git_related_functionality)

### File system 
- Lack of robust file in the dev environment was an issue- only a virtual file system was available
- Even for considering other options such as persistent storage on browser such as cache, this proved difficult to implement.

