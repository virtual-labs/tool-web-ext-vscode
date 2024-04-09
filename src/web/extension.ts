/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
// import axios from 'axios';
// import { StatusCodes } from 'http-status-codes';
import { Octokit } from 'octokit';

// common css
const commonCss = `h1 {
	text-align: center;
}

.Organization {
	margin: auto;
	width: 60%;
	border: 3px solid #73AD21;
	padding: 10px;
	font-weight: bold;
	margin-bottom: 1px;
}

.Experiment {
	margin: auto;
	width: 60%;
	border: 3px solid #73AD21;
	padding: 10px;
	font-weight: bold;
	margin-bottom: 1px;
	text-align: left;
}

.Branch {
	margin: auto;
	width: 60%;
	border: 3px solid #73AD21;
	padding: 10px;
	font-weight: bold;
}

.token{
		margin: auto;
		width: 60%;
		border: 3px solid #73AD21;
		padding: 10px;
		font-weight: bold;
}

.bigButton {
	margin: 0;
	position: relative;
	top: 50%;
	left: 50%;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	color: white;
	background-color: #03b1fc;
	border: none;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	border-radius: 12px;
	margin-top: 60px;

	/* shift the button downwards */

}

.smallButton {
	background-color: #03b1fc;
	color: white;
	border-radius: 8px;
	border: none;
	cursor: pointer;
}

.Name {
	text-align: center;
	width: 35%;
	padding: 10px;
	margin-right: 0.5%;
}

div {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	text-align: center;
}

/* label {
	margin-right: auto;
} */

/* input {
	margin-right: 10px;
} */

/* button {
	margin-left: 10px;
} */

.select-container {
	background-color: grey;
	margin-right: 10%;
}

#experimentName {
	margin-right: 10%;
}


#commitMessage{
	display:block;
	resize: vertical;
	height:45px;
	width: 30%;
	margin-right: 10%;
}

#description{
	display:block;
	resize: vertical;
	height:45px;
	width: 30%;
	margin-right: 10%;
}


#userName{
	width: 30%;
	margin-right: 10%;
}


#title{
	width: 30%;
	margin-right: 10%;
}

#personalAccessToken{
	width: 30%;
	margin-right: 10%;
}

.instructions {
	margin-bottom: 10px;
}

img {
	margin: 20px auto;
	max-width: 50%;
}

.push-dev_container {
	display: block;
    flex-direction: initial;
    justify-content: initial; 
    align-items: initial;
    text-align: initial;
	border: 2px solid green; /* First set of instructions with green border */
}

.push-dev_container:last-child {
	border-color: red; /* Last set of instructions with red border */
}

.blue-background {
	background-color: #2ea5cd; /* Blue color */
	color: white;
	padding: 5px;
	border-radius: 5px;
}`;


// Helper function to get webview(panel) content (html and scripts)
function getPanel1Content() {
	return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<style>
			.sideButton{
				background-color: #03b1fc;
				margin: 5px;
				text-align: center;
				width: 70%;
				height: 100%;
				font-size: 1em;
				color: black;
				cursor: pointer;
				border-radius: 8px;
				align-items: center;
				margin-left: 15%;
			}
			.loader {
				border: 16px solid #f3f3f3;
				border-top: 16px solid #3498db;
				border-radius: 50%;
				width: 50px;
				height: 50px;
				animation: spin 2s linear infinite;
				display: none;
				position: absolute;
				top: 40%;
				left: 30%;
				transform: translate(-50%, -50%);
				}
				@keyframes spin {
				0% { transform: rotate(0deg); }
				100% { transform: rotate(360deg); }
			  }
			  
			</style>
			</head>
		<body>
		<div class="loader" id="loader"></div>
		<div class="command1">
		<button class="sideButton" id="command1">Initialize Experiment</button>
		</div>
		<div class="command2">
			<button class="sideButton" id="command2">save Progress</button>
		</div>
		<div class="command3">
			<button class="sideButton" id="command3">Validate</button>
		</div>
		<div class="command4">
			<button class="sideButton" id="command4">View Current Experiment</button>
		</div>
		<div class="command5">
			<button class="sideButton" id="command5">Submit for Review</button>
		</div>
		<div class="command6">
			<button class="sideButton" id="command6">Help</button>
		</div>
		</body>
		<script>
		const vscode = acquireVsCodeApi();

		document.addEventListener('DOMContentLoaded', function () {
			const command1 =  document.getElementById('command1');
			const command2 = document.getElementById('command2');
			const command3 = document.getElementById('command3');
			const command4 = document.getElementById('command4');
			const command5 = document.getElementById('command5');
			const command6 = document.getElementById('command6');

		command1.addEventListener('click', () => {
				vscode.postMessage({
					command: 'command1'
				});
			});
		command3.addEventListener('click', async () => {
			await vscode.postMessage({
				command: 'command3'
			});
			command1.disabled = true;
			command2.disabled = true;
			command3.disabled = true;
			command4.disabled = true;
			command5.disabled = true;
			command6.disabled = true;
			const loader = document.getElementById("loader");

			loader.style.display = "block";

			setTimeout(function() {
				command1.disabled = false;
				command3.disabled = false;
				command2.disabled = false;
				command4.disabled = false;
				command5.disabled = false;
				command6.disabled = false;

				loader.style.display = 'none';
			}, 35000);
		});
		command2.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command2'
			});
		});
		command4.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command4'
			});
		});
		command5.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command5'
			});
		});
		command6.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command6'
			});
		});
		});
		</script>
		</html>
		`;
}

function getWebviewContent(context: vscode.ExtensionContext) {	// const config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));
	// const branches = config.branches;
	// const organizations = config.organizations;
	// const branchOptions = branches.map(branch => `<option value="${branch}">${branch}</option>`).join('');
	const branchOptions = "dev";
	const organizationOptions = "virtual-labs";
	// const organizationOptions = organizations.map(organization => `<option value="${organization}">${organization}</option>`).join('');


	return `
	<!DOCTYPE html>
		<html lang="en">

		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<style>
			`+ commonCss + `
			</style>
			</head>

		<body>
			<h1>Virtual Labs Experiment Authoring Environment</h1>
			<div class="Organization">
				<label for="organization">Organization</label>
				<div class="select-container">
				<input id="organization" name="organization" type="text" value="${organizationOptions}" disabled>
				</div>
			</div>
			<div class="Experiment">
				<label for="experimentName">Experiment Repository Name</label>
				<input type="text" id="experimentName" name="experimentName">
			</div>
			<div class="Branch">
				<label for="branch">Branch</label>
				<div class="select-container">
				<input id="branch" name="branch" type="text" value="${branchOptions}" disabled>
				</div>
			</div>
			<div class="token">
				<label for="token">Token</label>
				<div class="select-container">
				<input id="token" name="token" type="text" value="${context.globalState.get('accesstoken') === undefined ? "" :  context.globalState.get('accesstoken')}">
				</div>
			</div>
			<button id="submit" class="bigButton">Submit</button>
			<script>
			const vscode = acquireVsCodeApi();

			function clone() {
			const experimentName = document.getElementById("experimentName").value;
			const organization = document.getElementById("organization").value;
			const branch = document.getElementById("branch").value;
			const token = document.getElementById("token").value;
			vscode.postMessage({
				command: 'clone',
				experimentName: experimentName,
				organization: organization,
				branch: branch,
				token: token
			});
			}
			const submitButton = document.getElementById('submit');
			submitButton.addEventListener('click', clone);
			</script>
		</body>

		</html>`;
}

function getPushInstructions() {
	return `
	<!DOCTYPE html>
		<html lang="en">

		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<style>
			`+ commonCss + `
		</style>
		</head>

		<body>
			<h1>Instructions</h1>
			<div class="push-dev_container">
				<!-- <img src="image1.png" alt="Image 1"> -->
				<h4> A panel should appear on the left-hand side similar to this one with the <span class="blue-background">   Commit & Push  </span>   button and a text box above this button.</h4>
				<h4> It shows all the changes (additions, modifications, deletions) made to the files done by you.</h4> 
			</div>

			<br>
			<br>

			<div class="push-dev_container">
				<!-- <img src="image2.png" alt="Image 2"> -->
				<h4> Add your commit message in the text box as shown. </h4>
				<h4> Press push and commit.</h4>
			</div>

			<h3> <div class="instructions" style="color: red;">Warning: Please ensure you have write permissions to the repository or contact the owner or team at virtual labs via their email virtuallabs@gmail.com</div> </h3>
		</body>
		</html>`;
}

function getPullInstructions() {
	return `
	<!DOCTYPE html>
		<html lang="en">

		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<style>
			`+ commonCss + `
			</style>
			</head>

		<body>
			<h1>Virtual Labs Experiment Authoring Environment</h1>
			<div class="Organization">
				<label for="userName">Pull Request Title</label>
				<input type="text" id="title" name="userName">

			</div>
			<div class="Experiment">
				<label for="personalAccessToken">Personal Access Token</label>
				<input type="text" id="personalAccessToken" name="personalAccessToken">
			</div>
			<div class="Branch">
				<label for="commitMessage">Description</label>
				<textarea id="description" name="commitMessage" ></textarea>
			</div>
			<button id="pr" class="bigButton">Submit</button>
			<script>
			const vscode = acquireVsCodeApi();
			function pullRequest() {
			const title = document.getElementById("title").value;
			const personalAccessToken = document.getElementById("personalAccessToken").value;
			const description = document.getElementById("description").value;
			vscode.postMessage({
				command: 'pr',
				title: title,
				personalAccessToken: personalAccessToken,
				description: description
			});
			}
			const submitButton = document.getElementById('pr');
			submitButton.addEventListener('click', pullRequest);
			
			</script>
			</body>
			
			</html>`;
		}
		
		function ViewCurrentExperimentHTML() {
			return `
			<!DOCTYPE html>
			<html lang="en">
			
			<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<style>
			`+ commonCss + `
			</style>
			</head>
			
			<body>
			<h1>Virtual Labs Experiment Authoring Environment</h1>
			<div class="Organization">
			<label for="userName">Github User Name</label>
			<input type="text" id="userName" name="userName">
			</div>
			
			<div class="Branch">
			<label for="personalAccessToken">Personal Access Token</label>
			<input type="text" id="personalAccessToken" name="personalAccessToken">
			</div>
				
			<div class="Experiment">
			<label for="repoName">Experiment Repository Name</label>
			<input type="text" id="repoName" name="repoName">
			</div>
			<button id="VCE" class="bigButton">Submit</button>
			
			<script>
			const vscode = acquireVsCodeApi();
			
			function VCE() {
				
				const userName = document.getElementById("userName").value;
				const personalAccessToken = document.getElementById("personalAccessToken").value;
				const repoName = document.getElementById("repoName").value;
				vscode.postMessage({
					command: 'VCE',
					userName: userName,
					personalAccessToken: personalAccessToken,
					repoName: repoName,
				});
			}
			
			const submitButton = document.getElementById('VCE');
			submitButton.addEventListener('click', VCE);
			
			</script>
			</body>
			
			</html>`;
		}
		
let repositoryName : string | undefined = "";
let pat = "";
		// Register command to initialize experiment
vscode.commands.registerCommand('extension.initializeExperiment', async (context: vscode.ExtensionContext) => {
	const panel = vscode.window.createWebviewPanel(
		'virtualLabs',
		'Virtual Labs Experiment Authoring Environment',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
		);

		panel.webview.html = getWebviewContent(context);
		panel.webview.onDidReceiveMessage(async (message) => {
			switch (message.command) {
				case 'clone':
		{
			const experimentName = message.experimentName;
			const branch = message.branch;
			// const organization = message.organization;
			// const organization = "Dileepadari";
			const organization = "virtual-labs";
			const repoUrl = `https://github.com/${organization}/${experimentName}/tree/${branch}`;

			repositoryName = experimentName;
			context.globalState.update('key', repositoryName);
			context.globalState.update('accesstoken', message.token);
			pat = message.token;

			// open remote repository from github using Remote repository vscode api extension
			await vscode.commands.executeCommand('remoteHub.openRepository', repoUrl);
			vscode.window.showInformationMessage('Experiment initializing successfully');
			panel.dispose();
			break;
		}
		default:
			vscode.window.showErrorMessage(`Unknown command: ${message.command}`);
		}
	});
});

// Register command for validation
vscode.commands.registerCommand('extension.validate', async (context: vscode.ExtensionContext) => {
	vscode.window.showInformationMessage('Validating the experiment');
	// try {
		// run the validation script
		const actoken = context.globalState.get('accesstoken');
		pat = actoken as string; // access token is stored in global state when user
		vscode.window.showInformationMessage('Validation started successfully');
		repositoryName = context.globalState.get('key');
		const repos : string = repositoryName as string;
		const workspaceFolders = vscode.workspace.workspaceFolders;
		const octokit = new Octokit({
			auth: pat,
		});

		await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
			owner: "virtual-labs",
			repo: repos,
			// repo: 'exp-dummy-experiment1-iiith',
			workflow_id: 'validate.yml',
			ref: 'dev'
		});
		setTimeout(async () => {
		if (workspaceFolders && workspaceFolders.length > 0) {
				await vscode.commands.executeCommand('remoteHub.pull');
				vscode.window.showInformationMessage('Select lint.txt from the list to see validation results.');
				await vscode.commands.executeCommand('workbench.action.files.openFile');
			} else {
				vscode.window.showErrorMessage("No workspace folder found.");
			}
		}, 35000);
	// } catch (error) {
	// 	vscode.window.showErrorMessage('Validation failed');
	// }
});

// Register command to save experiment
vscode.commands.registerCommand('extension.saveExperiment', async () => {
	const panel = vscode.window.createWebviewPanel(
		'virtualLabs',
		'Save Progress',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);
	panel.webview.html = getPushInstructions();
	vscode.window.showInformationMessage('Please enter your commit message and push your changes');
	await vscode.commands.executeCommand('workbench.scm.focus');
	await vscode.window.showInformationMessage('Successfully saved');
});

// Register command to view current experiment
// vscode.commands.registerCommand('extension.viewCurrentExperiment', async () => {
// 	vscode.commands.executeCommand('remoteHub.pull');
// 	vscode.window.showInformationMessage('Pulling the changes');
// });


const ExecWorkflow = async (context: vscode.ExtensionContext) => {

	const panel = vscode.window.createWebviewPanel(
		'virtualLabs',
		'Virtual Labs Experiment Authoring Environment',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);
	panel.webview.html = ViewCurrentExperimentHTML();

	// let userName = "";
	panel.webview.onDidReceiveMessage(async (message) => {
		switch (message.command) {
			case 'VCE':
				{
					// userName = message.userName;
					pat = message.personalAccessToken;
					// repositoryName = "exp-dummy-experiment1-iiith";
					repositoryName = message.repoName;
					context.globalState.update('key', repositoryName);
					vscode.window.showInformationMessage(`https://virtual-labs.github.io/${{ repositoryName }}/build`);
					const repos : string = repositoryName as string;
					// open remote repository from github using Remote repository vscode api extension 
					panel.dispose();

					// repositoryName = repoUrl;
					const octokit = new Octokit({
						auth: pat,
					});

					await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
						owner: "virtual-labs",
						repo: repos,
						// repo: 'exp-dummy-experiment1-iiith',
						workflow_id: 'scripts.yml',
						ref: 'dev'
					});
					break;
				}
				default:
					break;
				}
			});
	// console.log("ExecWorkflow");
};

// Register command to submit for review
vscode.commands.registerCommand('extension.submitForReview', async () => {
	const panel = vscode.window.createWebviewPanel(
		'virtualLabs',
		'Pull Request',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);
	panel.webview.html = getPullInstructions();
	await vscode.commands.executeCommand('workbench.scm.focus');
	await vscode.window.showInformationMessage('Please enter your pull request title and personal access token');
});

// Register command for help
vscode.commands.registerCommand('extension.help', async (extensionUri: vscode.Uri) => {
	const path = vscode.Uri.joinPath(extensionUri, 'src', 'README.md');
	vscode.commands.executeCommand('markdown.showPreview', path);
});


// main code that starts everything else
function activate(context: vscode.ExtensionContext) {
	const extensionUri = context.extensionUri;
	vscode.window.registerWebviewViewProvider(
		'vlabs.experimentView',
		{
			resolveWebviewView: (view) => {
				view.webview.options = {
					enableScripts: true,
				};
				view.webview.html = getPanel1Content();
				view.webview.onDidReceiveMessage(async (message) => {
					// close webview panel after selection of a command
					switch (message.command) {
						case 'command1': // Initialize experiment
							vscode.commands.executeCommand('extension.initializeExperiment', context);
							break;
						case 'command3': // Validate
							vscode.commands.executeCommand('extension.validate', context);
							break;
						case 'command2': // Save Experiment
							vscode.commands.executeCommand('extension.saveExperiment');
							break;
						case 'command4': // View Current Experiment
							// vscode.commands.executeCommand('extension.viewCurrentExperiment');
							ExecWorkflow(context);
							break;
						case 'command5': // Submit for Review
							vscode.commands.executeCommand('extension.submitForReview');
							break;
						case 'command6': // Help
							vscode.commands.executeCommand('extension.help', extensionUri);
							break;
						default:
							break;
					}
				});
			}
		}
	);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate,
};