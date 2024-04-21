# Virtual Labs Online Experiment Authoring Environment

## Client Document

### Introduction

The Virtual Labs Online Experiment Authoring Environment is a web-based Experiment Authoring environment designed to facilitate the authoring and creation of virtual experiments. It offers a minimal, user-friendly interface that allows users to create & modify experiments without the need to download the VS Code app on a local system. With this extension, experiment creators can easily build and modify virtual experiments on any system with access to a stable internet connection. This extension is available to download on vscode.dev.

### Need for Client Document

The Extension that is presently deployed and setup was based on some assumptions and conditions that are discussed and approved by the client. So when It is being migrated from one repo to other or from one branch to other there are some conditions that need to be followed. This document will help the client to understand the conditions and assumptions that were made during the development of the extension.

### Requirements while Experiments Setup (Not extension)

The Extension assumes that the two files given in [Workflow_templates](../workflow_templates/) are placed in .github/workflows folder in main branch of the experiment along with the initial files.    
The two files are:
1. [validate.yml](../workflow_templates/validate.yml)
2. [deployment-script.yml](../workflow_templates/deployment-script.yml)

### Conditions while Migrating

1. The extension is designed to work with github api, so mostly the content and the images comes from the github repository. So the client should ensure that the repository is public and the images are accessible to the extension.
2. The extension is made automated publish to the marketplace, so to publish the extension the client should create a release in the repository and select appropriate branch to publish.

#### Things to take care while publishing

1. The extension is published to the marketplace using the github actions. So the client should ensure that the github actions are enabled in the repository.
2. As the workflow that is being used to publish the extension is using the github secrets, the client should ensure that the secrets [Here it is named as VS_MARKETPLACE_TOKEN] are created in the repository. see the [reference](#How_to_setup_SECRET_Token)
3. As the ref is set to dev, it should be changed to required branch.
4. And the command `git push origin dev` should be changed to `git push origin [branch-name]` in the workflow file. 
5. The baseImagesUrl and baseContentUrl should be changed to the required branch in the workflow file.
6. Need to make sure that the package-it in package.json is set to the required branch.

### How to Publish in github

- Go to the extension github page https://github.com/virtual-labs/tool-web-ext-vscode       
- Click on the "Create new release" under "Releases" in the right column of the page.       
- Enter a tag, generally of the form v0.4.6 else if its a pre release then v5.6.0-beta.     
- Select a target branch.       
- If you want you can automatically generate release notes.
And then publish the release.       
- This is trigger the workflow and will release in market place

### How_to_setup_SECRET_Token

- Go to repository settings.
- Select Security and Variables.
- Select actions
- Select Repository Secrets.
- Enter required details.
- Add a repository secret
- The secret name should be VS_MARKETPLACE_TOKEN.
- The value should be the token generated from the marketplace.
- The token should have the following permissions:
  - `package:read`
  - `package:write`
  - `extension:read`
  - `extension:write`
  - `extension:publish`

### How to Renew the token

The token will be expired after an year. So the client should renew the token every year. The token can be renewed by following the below steps:

- Go to: [https://dev.azure.com/Virtual-Labs-Experiment-Authoring-Environment/_usersSettings/tokens](https://dev.azure.com/Virtual-Labs-Experiment-Authoring-Environment/_usersSettings/tokens)
- Login with the credentials.
- Select personal access token 'Virtual-labs-automate-extension-release', then click edit
- Select maximum date possible (which is one year from current date) in Expiration (UTC) section at the top and Save.

## Developer Support
If you want to test or setup the extension locally or in workplaces you can refer to the [Developer Document](./DEVELOPER_README.md).
The running instructions of the extension can be found in the [User Document](./USER_README.md).