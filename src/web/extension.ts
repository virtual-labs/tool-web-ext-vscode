/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
import { Octokit } from 'octokit';
import JSZip from 'jszip';
// common css
const commonCss = `h1 {
	text-align: center;
}

.Organization {
	margin: auto;
	width: 60%;
	border: 3px solid #03b1fc;
	padding: 10px;
	font-weight: bold;
	margin-bottom: 1px;
}

.Experiment {
	margin: auto;
	width: 60%;
	border: 3px solid #03b1fc;
	padding: 10px;
	font-weight: bold;
	margin-bottom: 1px;
	text-align: left;
}

.Branch {
	margin: auto;
	width: 60%;
	border: 3px solid #03b1fc;
	padding: 10px;
	font-weight: bold;
}

.token{
		margin: auto;
		width: 60%;
		border: 3px solid #03b1fc;
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
	border: 5px solid #03b1fc; /* First set of instructions with green border */
	padding: 10px;
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
				display: flex;
				background-color: #03b1fc;
				margin: 5px;
				padding: 5px;
				text-align: center;
				width: 70%;
				height: 100%;
				font-size: 1.1em;
				color: black;
				cursor: pointer;
				border: none;
				border-radius: 6px;
				justify-content: center;
				align-items: center;
				justify-self: center;
				margin-left: auto;
				margin-right: auto;
			}
			.sideButton:hover{
				background-color: #03a1e1;
			}

			.down{
				position: absolute;
				bottom: 4%;
				width: 90%;
				margin-left: 3%;
				overflow: hidden;
			}
			.down .sideButton{
				width: 70%;
			}

			</style>
			</head>
		<body>
		<div class="command1">
		<button class="sideButton" id="command1">Initialize Experiment</button>
		</div>
		<div class="command2">
			<button class="sideButton" id="command2">Save Progress</button>
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

		<div class="down">
		<div class="command7">
			<button class="sideButton" id="command7">Show Previous Validation Logs</button>
		</div>
		<div class="command8">
			<button class="sideButton" id="command8">Show Previous Build Logs</button>
		</div>
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
			const command7 = document.getElementById('command7');
			const command8 = document.getElementById('command8');

		command1.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command1'
			});
		});
		command2.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command2'
			});
		});
		command3.addEventListener('click', async () => {
			await vscode.postMessage({
				command: 'command3'
			});
			command3.disabled = true;
			setTimeout(function() {
				command3.disabled = false;
			}, 30000);
		});
		command4.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command4'
			});
			command4.disabled = true;
			setTimeout(function() {
				command4.disabled = false;
			}, 30000);
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
		command7.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command7'
			});
		});
		command8.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command8'
			});
		});
		});
		</script>
		</html>
		`;
}

function getWebviewContent(context: vscode.ExtensionContext) {
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
				<input type="text" id="experimentName" name="experimentName" value="${context.globalState.get('reponame') === undefined ? "" : context.globalState.get('reponame')}">
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
				<input id="token" name="token" type="text" value="${context.globalState.get('accesstoken') === undefined ? "" : context.globalState.get('accesstoken')}">
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

//Display for Save progress instructions
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
				<h4> A panel should appear on the left-hand side with the <span class="blue-background">Commit & Push</span> button and a text box above this button.</h4>
				<h4> The panel shows all the changes (additions, modifications, deletions) made to the files done by you.</h4> 
			</div>
			<br>
			<div class="push-dev_container">
				<h4> Add your commit message in the text box. </h4>
				<h4> Press the Commit & Push button</h4>
			</div>
			<br>
			<div class="push-dev_container">
				<h4> If the changes have been pushed, or there are no changes made, the Commit & Push button appears faded </h4>
				<h4> Additionally, the panel will be blank with no changes. </h4>
				<h4> You can close the Save progress tab </h4>
			</div>
			<br>
			<div class="push-dev_container">
				<h4> In the event that the button on the panel says <span class="blue-background">Open Remote Repository</span> , you are yet to initialize the experiment. </h4>
				<h4> Click on the Initialize Experiment button to start </h4>
			</div>

			<h3> <div class="instructions" style="color: red;">Warning: Please ensure you have write permissions to the repository or contact the owner or team at virtual labs via their email dev-support@vlabs.ac.in.</div> </h3>
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
			<div class="Branch">
				<label for="commitMessage">Description</label>
				<textarea id="description" name="commitMessage" ></textarea>
			</div>
			<button id="pr" class="bigButton">Submit</button>
			<script>
			const vscode = acquireVsCodeApi();
			function pullRequest() {
			const title = document.getElementById("title").value;
			const description = document.getElementById("description").value;
			vscode.postMessage({
				command: 'pr',
				title: title,
				description: description
			});
			}
			const submitButton = document.getElementById('pr');
			submitButton.addEventListener('click', pullRequest);
			</script>
			</body>
			</html>`;
}

function getLintResult(lint_content: string){
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
			<h1>Validation Results</h1>
			<div class="push-dev_container" style="font-size: 14px;line-height: 20px;">
			`+ lint_content +`
			</div>
			<br>
		</body>
		</html>`;
}

function getBuildLog(build_content: string){
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
			<h1>Build Logs</h1>
			<div class="push-dev_container" style="font-size: 14px;line-height: 20px;">
			`+ build_content +`
			</div>
			<br>
		</body>
		</html>`;
}

let repositoryName: string | undefined = "";
let pat: string | undefined = "";

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
					// organization name
					const organization = message.organization;
					// experiment name
					const experimentName = message.experimentName;
					repositoryName = experimentName;
					context.globalState.update('reponame', repositoryName);
					// branch name
					const branch = message.branch;
					// access token for GitHub API
					context.globalState.update('accesstoken', message.token);
					pat = message.token;

					const repoUrl = `https://github.com/${organization}/${experimentName}/tree/${branch}`;

					// open remote repository from github using Remote repository vscode api extension
					await vscode.commands.executeCommand('remoteHub.openRepository', repoUrl);
					vscode.window.showInformationMessage('Experiment initialization started');
					panel.dispose();
					break;
				}
			default:
				vscode.window.showErrorMessage(`Unknown command: ${message.command}`);
		}
	});
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
});

// Function to extract specific file from ZIP
async function extractFileFromZip(blob: Blob, type: string) {
	try {
	// Load the ZIP file
	const lintCodeBaseFile = await JSZip.loadAsync(blob);
	if(type === 'build'){
		const fileContent = await lintCodeBaseFile.file("build/4_Run git clone --depth=1 httpsgithub.comvirtual-labsph3-lab.txt")?.async("string");
		return fileContent;
	}else{
		const fileContent = await lintCodeBaseFile.file("Lint Code Base/3_Running Lint Command.txt")?.async("string");
		return fileContent;
	}
	// Extract the contents of the ZIP file
	} catch (error) {
	console.error("Error extracting file from ZIP:", error);
	}
  }

// Register command for validation
vscode.commands.registerCommand('extension.validate', async (context: vscode.ExtensionContext) => {
	vscode.window.showInformationMessage('Validating the experiment');
	// run the validation script
	const actoken = context.globalState.get('accesstoken');
	pat = actoken as string; // access token is stored in global state when user
	repositoryName = context.globalState.get('reponame');
	const repos: string = repositoryName as string;
	const workspaceFolders = vscode.workspace.workspaceFolders;
	if(pat === undefined || repos === undefined){
		vscode.window.showErrorMessage("Please initialize the experiment first");
		return;
	}
	const octokit = new Octokit({
		auth: pat,
	});
	if (workspaceFolders && workspaceFolders.length > 0) {
		await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
			owner: "virtual-labs",
			repo: repos,
			workflow_id: 'validate.yml',
			ref: 'dev'
		}).then((response) => {
			if (response.status === 204) {
				vscode.window.showInformationMessage('Validation started successfully');
				const running_status = setInterval(async () => {
					if (workspaceFolders && workspaceFolders.length > 0) {
						await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs', {
							owner: 'virtual-labs',
							repo: repos,
							workflow_id: 'validate.yml',
						}).then(async (response) => {
							if (response.status === 200 || response.status === 201) {
								const runstatus = response.data.workflow_runs[0].status;
								if (runstatus === 'completed') {
									vscode.window.showInformationMessage('Validation completed successfully');
									const actoken = context.globalState.get('accesstoken');
									pat = actoken as string; // access token is stored in global state when user
									repositoryName = context.globalState.get('reponame');
									const repos: string = repositoryName as string;
									if (workspaceFolders && workspaceFolders.length > 0) {
										const run_id = response.data.workflow_runs[0].id;
										await octokit.request('GET /repos/{owner}/{repo}/actions/runs/{workflow_id}/logs', {
											owner: "virtual-labs",
											repo: repos,
											workflow_id: run_id,
										}).then(async (response) => {
											const pattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z/g;
											const lint_content = await extractFileFromZip(response.data, "lint") as string;
											const formattedContent = lint_content.replace(/\n/g, "<br>").replace(pattern, "").replace('[36;1m', '<span style="color: blue; font-weight: bold;">').replace('[32m', '<span style="color: green;">').replace('[31m', '<span style="color: red;">').replace('[0m', '</span>');
											const panel = vscode.window.createWebviewPanel(
												'virtualLabs',
												'Validation Results',
												vscode.ViewColumn.One,
												{
													enableScripts: true
												}
												);
												panel.webview.html = getLintResult(formattedContent);
												context.globalState.update('prevlint', formattedContent);
											}).catch(error => {
												vscode.window.showErrorMessage('Validation failed:', error.message);
											});
											clearInterval(running_status);
									}
								}
								else if (runstatus === 'Failed') {
									vscode.window.showErrorMessage('Validation failed');
									clearInterval(running_status);
								}
								else {
									vscode.window.showInformationMessage('Validation in progress');
								}
							}
							else if (response.status === 403) {
								vscode.window.showErrorMessage('Validation failed due to exceeded rate limit. Please try changing your internet or come again after some time.');
								clearInterval(running_status);
							}
							else if (response.status === 404) {
								vscode.window.showErrorMessage('Validation failed due to invalid repository. It is wrongly configured');
								clearInterval(running_status);
							}
						}).catch(error => {
							vscode.window.showErrorMessage('Validation failed:', error.message);
						});
					} else {
						vscode.window.showErrorMessage("No workspace folder found.");
					}
				}, 10000);
			}
			else if (response.status === 403) {
				vscode.window.showErrorMessage('Validation failed due to exceeded rate limit. Please try changing your internet or come again after some time.');
			}
			else if (response.status === 404) {
				vscode.window.showErrorMessage('Validation failed due to invalid repository. It is wrongly configured');
			}
			else {
				vscode.window.showErrorMessage('Validation failed with code', response.status);
			}
		}).catch(error => {
			vscode.window.showErrorMessage('Validation failed:', error.message);
		});
	}
	else {
		vscode.window.showErrorMessage("No workspace folder found.");
	}
});

// Register command to view current experiment
vscode.commands.registerCommand('extension.MergeAndExec', async (context: vscode.ExtensionContext) => {
	pat = context.globalState.get('accesstoken') as string;
	repositoryName = context.globalState.get('reponame');
	const repos: string = repositoryName as string;
	const workspaceFolders = vscode.workspace.workspaceFolders;
	if(pat === undefined || repos === undefined){
		vscode.window.showErrorMessage("Please initialize the experiment first");
		return;
	}
	const octokit = new Octokit({
		auth: pat,
	});
	await octokit.request('POST /repos/{owner}/{repo}/merges', {
		owner: 'virtual-labs',
		repo: repos,
		base: 'testing',
		head: 'dev',
		commit_message: 'Merge dev and testing branches'
	}).then(async (response) => {
		if (response.status === 201) {
			vscode.window.showInformationMessage('Merge completed successfully');
			await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
				owner: "virtual-labs",
				repo: repos,
				workflow_id: 'deployment-script.yml',
				ref: 'testing'
			}).then((response) => {
				if (response.status === 204) {
					vscode.window.showInformationMessage('Build started successfully');
					const running_status = setInterval(async () => {
						if (workspaceFolders && workspaceFolders.length > 0) {
							await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs', {
								owner: 'virtual-labs',
								repo: repos,
								workflow_id: 'deployment-script.yml',
							}).then(async (response) => {
								if (response.status === 200 || response.status === 201) {
									const runstatus = response.data.workflow_runs[0].status;
									if (runstatus === 'completed') {
										const run_id = response.data.workflow_runs[0].id;
										await octokit.request('GET /repos/{owner}/{repo}/actions/runs/{workflow_id}/logs', {
											owner: 'virtual-labs',
											repo: repos,
											workflow_id: run_id,
										}).then(async (response) => {
											const pattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z/g;
											const build_content = await extractFileFromZip(response.data, "build") as string;
											const formattedContent = build_content.replace(/\n/g, "<br>").replace(pattern, "").replace('[36;1m', '<span style="color: blue; font-weight: bold;">').replace('[32m', '<span style="color: green;">').replace('[31m', '<span style="color: red;">').replace('[0m', '</span>');
											const panel = vscode.window.createWebviewPanel(
												'virtualLabs',
												'Build Results',
												vscode.ViewColumn.One,
												{
													enableScripts: true
												}
												);
												panel.webview.html = getBuildLog(formattedContent);
												context.globalState.update('prevbuild', formattedContent);
												if(formattedContent.includes("create mode")){
													vscode.window.showInformationMessage('build completed successfully');
													vscode.env.openExternal(vscode.Uri.parse(`https://virtual-labs.github.io/${repos}`));
												}
												else{
													vscode.window.showErrorMessage('build failed');
													vscode.window.showErrorMessage('Please check the logs for more details');
												}
											}).catch(error => {
												vscode.window.showErrorMessage('build failed: ', error.message);
											});
										clearInterval(running_status);
									}
									else if (runstatus === 'Failed') {
										vscode.window.showErrorMessage('build failed');
										clearInterval(running_status);
									}
									else {
										vscode.window.showInformationMessage('Build in progress');
									}
								}
								else if (response.status === 403) {
									vscode.window.showErrorMessage('build failed due to exceeded rate limit. Please try changing your internet or come again after some time.');
									clearInterval(running_status);
								}
								else if (response.status === 404) {
									vscode.window.showErrorMessage('build failed due to invalid repository. It is wrongly configured');
									clearInterval(running_status);
								}
							}).catch(error => {
								vscode.window.showErrorMessage('build failed: ', error.message);
							});
						} else {
							vscode.window.showErrorMessage("No workspace folder found.");
						}
					}, 10000);
				}
				else if (response.status === 403) {
					vscode.window.showErrorMessage('build failed due to exceeded rate limit. Please try changing your internet or come again after some time.');
				}
				else if (response.status === 404) {
					vscode.window.showErrorMessage('build failed due to invalid repository. It is wrongly configured');
				}
				else {
					vscode.window.showErrorMessage('build failed');
				}
			}).catch(error => {
				vscode.window.showErrorMessage('build failed: ', error.message);
			});
		}
		else if (response.status === 403) {
			vscode.window.showErrorMessage('Merge failed due to exceeded rate limit. Please try changing your internet or come again after some time.');
		}
		else if (response.status === 404) {
			vscode.window.showErrorMessage('Merge failed due to invalid repository. It is wrongly configured');
		}
		else if(!response.status){
			vscode.window.showErrorMessage('Merge failed as there is no change in the repository');
		}
		else {
			vscode.window.showErrorMessage('Merge failed with code', response.status);
		}
	}).catch(error => {
		vscode.window.showErrorMessage('Merge failed due to', error);
	});
});

// Register command to submit for review
vscode.commands.registerCommand('extension.submitForReview', async (context: vscode.ExtensionContext) => {
	const panel = vscode.window.createWebviewPanel(
		'virtualLabs',
		'Pull Request',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);
	panel.webview.html = getPullInstructions();
	panel.webview.onDidReceiveMessage(async (message) => {
		switch (message.command) {
			case 'pr':
				{
					const title = message.title;
					const description = message.description;
					const workspaceFolders = vscode.workspace.workspaceFolders;
					pat = context.globalState.get('accesstoken') as string;
					if(pat === undefined){
						vscode.window.showErrorMessage("Please initialize the experiment first");
						return;
					}
					if (!workspaceFolders) {
						vscode.window.showErrorMessage("No repository selected");
						return;
					}
					const octokit = new Octokit({
						auth: pat,
					});
					repositoryName = context.globalState.get('reponame') as string;
					const repos: string = repositoryName;
					vscode.window.showInformationMessage('Pull request Initiated');
					await octokit.request('POST /repos/{owner}/{repo}/pulls', {
						owner: 'virtual-labs',
						repo: repos,
						title: title,
						body: description,
						head: 'testing',
						base: 'main',
					}).then(response => {
						if (response.status === 201) {
							vscode.window.showInformationMessage('Pull request submitted successfully');
						}
						else if (response.status === 422) {
							vscode.window.showErrorMessage('Pull request already exists');
						}
						else if (response.status === 403) {
							vscode.window.showErrorMessage('Pull request failed due to exceeded rate limit. Please try changing your internet or come again after some time.');
						}
						else if (response.status === 404) {
							vscode.window.showErrorMessage('Pull request failed due to invalid repository.');
						}
						else {
							vscode.window.showErrorMessage("Failed to raise Pull request with code", response.status);
						}
					}).catch(error => {
						vscode.window.showErrorMessage('Sending pull request failed: ' + error.message);
					});
					panel.dispose();
					break;
				}
			default:
				vscode.window.showErrorMessage(`Unknown command: ${message.command}`);
		}
	});
});

// Register command for help
vscode.commands.registerCommand('extension.help', async (extensionUri: vscode.Uri) => {
	const path = vscode.Uri.joinPath(extensionUri, 'USER_README.md');
	vscode.commands.executeCommand('markdown.showPreview', path);
});


// Register command for previous logs of Lint
vscode.commands.registerCommand('extension.prevLint', async (context: vscode.ExtensionContext) => {
	const formattedContent = context.globalState.get('prevlint') as string;
	if (formattedContent === undefined) {
		vscode.window.showErrorMessage('No previous lint logs found');
		return;
	}
	const panel = vscode.window.createWebviewPanel(
		'virtualLabs',
		'Validation Results',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);
	panel.webview.html = getLintResult(formattedContent);
});

// Register command for previous logs of Build
vscode.commands.registerCommand('extension.prevBuild', async (context: vscode.ExtensionContext) => {
	const formattedContent = context.globalState.get('prevbuild') as string;
	if (formattedContent === undefined) {
		vscode.window.showErrorMessage('No previous build logs found');
		return;
	}
	const panel = vscode.window.createWebviewPanel(
		'virtualLabs',
		'Build Logs',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);
	panel.webview.html = getBuildLog(formattedContent);
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
						case 'command2': // Save Experiment
							vscode.commands.executeCommand('extension.saveExperiment');
							break;
						case 'command3': // Validate
							vscode.commands.executeCommand('extension.validate', context);
							break;
						case 'command4': // View Current Experiment
							vscode.commands.executeCommand('extension.MergeAndExec', context);
							break;
						case 'command5': // Submit for Review
							vscode.commands.executeCommand('extension.submitForReview', context);
							break;
						case 'command6': // Help
							vscode.commands.executeCommand('extension.help', extensionUri);
							break;
						case 'command7': // Previous Lint Logs
							vscode.commands.executeCommand('extension.prevLint', context);
							break;
						case 'command8': // Previous Build Logs
							vscode.commands.executeCommand('extension.prevBuild', context);
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