# Virtual Labs Online Experiment Authoring Environment

## Introduction

The Virtual Labs Online Experiment Authoring Environment is a web-based Experiment Authoring environment designed to facilitate the authoring and creation of virtual experiments. It offers a minimal, user-friendly interface that allows users to create & modify experiments without the need to download the VS Code app on a local system. With this extension, experiment creators can easily build and modify virtual experiments on any system with access to a stable internet connection. This extension is available to download on vscode.dev.

## Target Audience

The Virtual Labs Online Experiment Authoring Environment primarily aims to help Virtual Labs content creators with minimum software development knowledge. This extension provides them a means to carry out all the steps involved in the extension authoring process in an intergrated extension. This allows them to develop experiments without the compulsion of setting up the VS Code app. This also facilitates continuity in the development process across all devices, as changes are saved on GitHub and not locally.

## Feature List

The key features of Virtual Labs Content Development Platform include:

- Documentation and help resources: Provides help to guide users through the experiment creation process.
- Security and Authentication: Requires sign up using GitHub credentials and a personal access token.
- User-Friendly Interface: The platform offers an simple and minimal interface toolbar that lists each functionality in order it's typically executed. This allows users to navigate through the process easily. It maintains similar format to that of the app extension to the authoring environmemnt, providing a sense of familarity and continuity to old users. 
- Experiment Opening: After login, experiment creators need only to enter the precise name of the experiment. This opens the repository directly into the dev branch, where experiment creators can carry out changes and modification. 
- Save progress: This directs users to save any changes made, before they can choose to view it or validate it. 
- Validate: This validates the experiment as its in the dev branch. It also allows the error logs to be displayed- if the user would like to they could view these to gain more information. 
- Real-Time Deployment: The extension ensures that any changes made to experiments saved using 'Save progress' are deployed in real-time to GitHub Pages. Experiment creators can instantly see the updated version of their experiments and observe how the changes impact the overall experience.
- Saving Previous Instance: The extension saves the previous instances of the logs to provide user a choice to access the logs again incase they closed them.

## DOCS

| DOCUMENT                                      | DESCRIPTION                                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [User document](./docs/USER_README.md)          | A comprehensive documentation for users of Virtual Labs Online Experiment Authoring Environment                                       |
| [Developer document](./docs/DEVELOPER_README.md) | A comprehensive development documentation for developers working on the Virtual Labs Online Experiment Authoring Environment. |
| [Client document](./docs/CLIENT_README.md)      | A comprehensive documentation for clients of Virtual Labs Online Experiment Authoring Environment.                                    |


## Developer Support
If you face any difficulty in using this extension or find any bug then you can perform the following steps
1. Take a screenshot of the bug you encountered or the problem you got.
2. Explain in brief the steps you performed before encountering the bug/problem and attach a screenshot of the same.
3. Email us at dev-support@vlabs.ac.in.