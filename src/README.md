# Virtual Labs Experiment Authoring Extension- Help

## Introduction
The Virtual Labs extension is developed for authoring Virtual Labs experiments in a strealined manner. This lightweight extension operates fully within the browser, facilitating experiment development without the need for additional downloads.

## Prerequisities
To make use of the extension, the following is required:

- Github account 
- Stable internet connection

## Getting started- setup
1. Install the extension on vscode.dev from the Visual Studio Code Marketplace by searching for "Virtual Labs Experiment Authoring Environment".

2. Click on the extension icon in the left panel

3. You will see the following list of options. 
    - Initialise Experiment
    - Validate
    - View current Experiment
    - Save progress
    - Submit for Review
    - Help

Note: For these options, you may be asked to log in to GitHub if not already done so. 

## Log in 
You may either be asked via a pop-up window or you can see a blue notification appear on the accounts logo on the left hand panel.


### Incase of popup

1. Click Allow

     This may redirect you to another tab or open a window for you to sign in.
2.  You must input the credentials accordingly 

### Incase of notification 

1. Click on the Accounts logo
2. Click on the 'Sign in to ... '

    This may redirect you to another tab or open a window for you to sign in.
3.  You must input the credentials accordingly 



## Experiment Authoring

### Option 1: Initialise Experiment

#### [Must be done first]

By clicking on this you will be prompted to enter the Experiment Repository Name that you wish to initialize. Clicking on Submit will open that experiment on the dev branch. Do not atttempt to change this 

This step ususally requies a login.

For more details, view the Login section

### Option 2: Validate

This validates the code with eslint and also validates the experiment descriptor based on a schema.

### Option 3: View Experiment

Provides a link to view the experiment, including any changes you have made to the codebase. 

This effectively automates the process of building the experiment and delpoys it directly on Github Pages, accessible via a link. 

By using this link in a browser tab, can view experiment online. 

### Option 4: Save progress

Saves ur progress on dev branch. This is so that any changes made to the experiment is stored persistently across all browser environements and sessions.

### Option 5: Deploy for testing

#### [Note: requires write permission access of your account to that repository]

Pushes the experiment to testing branch of the experiment repository and deploys the experiment on the github pages of Virtual Labs.
- Github User Name - Here you have to enter your github username.
- Personal Access Token - Here you have to enter your personal access token. You can generate a personal access token by following the steps given here.
- Commit Message - Here you can enter a short message describing the summary of the work you have done.


### Option 6- Submit for Review 
Raises a pull request to the main branch of the experiment repository.
- Pull Request title - Here you have to enter the title of your pull request.
- Personal Access Token - Here you have to enter your personal access token. You can generate a personal access token by following the steps given here.
- Description - Here you can enter a short message describing the summary of the pull request you have created.

### Option 7 - Help
Explains how to to operate and use the extension. 

## Developer Support
If you face any difficulty in using this extension or find any bug then you can perform the following steps
1. Take a screenshot of the bug you encountered or the problem you got.
2. Explain in brief the steps you performed before encountering the bug/problem and attach a screenshot of the same.
3. Email us at dev-support@vlabs.ac.in.
