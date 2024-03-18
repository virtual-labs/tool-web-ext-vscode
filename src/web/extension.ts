import * as vscode from 'vscode';

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
			</style>
			</head>
		<body>
		<div class="command1">
		<button class="sideButton" id="command1">Initialize Experiment</button>
		</div>
		<div class="command2">
			<button class="sideButton" id="command2">Validate</button>
		</div>
		<div class="command4">
			<button class="sideButton" id="command4">Save Progress</button>
		</div>
		<div class="command3">
			<button class="sideButton" id="command3">View Current Experiment</button>
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
		command2.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command2'
			});
		});
		command3.addEventListener('click', () => {
			vscode.postMessage({
				command: 'command3'
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

function getWebviewContent() {	// const config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));
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
			`+ commonCss +`
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
			<button id="submit" class="bigButton">Submit</button>
			<script>
			const vscode = acquireVsCodeApi();

			function clone() {
			
			const experimentName = document.getElementById("experimentName").value;
			const organization = document.getElementById("organization").value;
			const branch = document.getElementById("branch").value;
			vscode.postMessage({
				command: 'clone',
				experimentName: experimentName,
				organization: organization,
				branch: branch
			});
			}
			const submitButton = document.getElementById('submit');
			submitButton.addEventListener('click', clone);
			</script>
		</body>

		</html>`;
}

function getWebviewFormContent() {
	return `
	<!DOCTYPE html>
		<html lang="en">

		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<style>
			`+ commonCss +`
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

function getPRContent() {
	return `
	<!DOCTYPE html>
		<html lang="en">

		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<style>
			`+ commonCss +`
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

async function cloneWebView() {
	const panel = vscode.window.createWebviewPanel(
		'virtualLabs',
		'Virtual Labs Experiment Authoring Environment',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);
	panel.webview.html = getWebviewContent();

	panel.webview.onDidReceiveMessage(async (message) => {
		switch (message.command) {
			case 'clone':
				{
						const experimentName = message.experimentName;
						const branch = message.branch;
						const organization = message.organization;
						const repoUrl = `https://github.com/${organization}/${experimentName}/tree/${branch}`;

						// open remote repository from github using Remote repository vscode api extension 
						// command: remoteHub.openRepository
						vscode.commands.executeCommand('remoteHub.openRepository', repoUrl);
						vscode.commands.executeCommand('RemoteHub.switchToBranch', )
						vscode.window.showInformationMessage('Repository clone UI verified!');
						panel.dispose();
						break;
				}
			default:
				break;
			}
	});
}

vscode.commands.registerCommand('extension.pushWithCustomMessage', async () => {
    const commitMessage = await vscode.window.showInputBox({
        prompt: 'Enter your commit message',
        placeHolder: 'Type your commit message here...',
    });

    if (commitMessage) {
        vscode.commands.executeCommand('remoteHub.openRepository', 'push', { commitMessage });
    }
	else {
		vscode.window.showInformationMessage('Enter commit message !!!');
	}
});

function buildScript(command: string) {
	switch (command) {
		case 'command2': // Validate --
			vscode.commands.executeCommand('extension.pushWithCustomMessage');
			break;
		// case 'command3': // View Current Experiment 
		// 	vscode.window.showInformationMessage('ViewCurrentExperiment');
		// 	break;
		default:
			break;
	}
}

async function pushAndMerge(view: vscode.WebviewView, extensionUri: vscode.Uri, context: vscode.ExtensionContext){
	const panel = vscode.window.createWebviewPanel(
		'vlabs.buildexp',
		'User Details',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);

	panel.webview.html = getWebviewFormContent();
	vscode.commands.executeCommand('workbench.scm.focus');
}

function raisePR(view: vscode.WebviewView, extensionUri: vscode.Uri, context: vscode.ExtensionContext){
	const panel = vscode.window.createWebviewPanel(
		'vlabs.buildexp',
		'Pull Request',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);

	panel.webview.html = getPRContent();
	panel.webview.onDidReceiveMessage(async (message) => {
		switch (message.command) {
			case 'pr':
				vscode.window.showInformationMessage('Pull request UI testing');
				panel.dispose();
				break;
		}
	}, undefined, context.subscriptions);

}


// main code that starts everything else
function activate(context: vscode.ExtensionContext){
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
							if (vscode.workspace.workspaceFolders === null){
								vscode.window.showErrorMessage("Please open a directory in vscode");
								break;
							}
							cloneWebView();
							break;
						case 'command3': // View Current Experiment
							vscode.window.showInformationMessage('Viewing Current Experiment');
							await pushAndMerge(view, extensionUri, context);
							break;
						case 'command4': // Push to dev branch
							await pushAndMerge(view, extensionUri, context);
							break;
						case 'command5': // Submit for Review
							raisePR(view, extensionUri, context);
							break;
						case 'command6': // Help
							{
								const path = 	vscode.Uri.joinPath(extensionUri, 'src', 'README.md');
								vscode.commands.executeCommand('markdown.showPreview', path);
								break;
							}
						default:
							buildScript(message.command);
							break;
					}
			});
		}}
	);

	context.subscriptions.push(
        vscode.commands.registerCommand('extension.pushWithCustomMessage', () => {
            vscode.commands.executeCommand('extension.pushWithCustomMessage');
        })
    );
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
};