import * as vscode from 'vscode';

// Helper function to get webview(panel) content (html and scripts)
function getPanel1Content(scriptUri: vscode.Uri, styleUri: vscode.Uri) {
	return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<link rel="stylesheet" href="${styleUri}">
		</head>
		<body>
		<div class="command1">
		<button class="sideButton" id="command1">Initialize Experiment</button>
		</div>
		<div class="command2">
			<button class="sideButton" id="command2">Validate</button>
		</div>
		<div class="command3">
			<button class="sideButton" id="command3">Build Local</button>
		</div>
		<div class="command4">
			<button class="sideButton" id="command4">Deploy Local</button>
		</div>
		<div class="command5">
			<button class="sideButton" id="command5">Clean</button>
		</div>
		<div class="command6">
			<button class="sideButton" id="command6">Deploy for Testing</button>
		</div>
		<div class="command7">
			<button class="sideButton" id="command7">Submit for Review</button>
		</div>
		<div class="command8">
			<button class="sideButton" id="command8">Help</button>
		</div>
		</body>
		<script src="${scriptUri}"></script>
		</html>
		`;
}

function getWebviewContent(scriptUri: vscode.Uri, styleUri: vscode.Uri) {

	// const config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));
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
			<title>Virtual Labs Experiment Authoring Environment</title>
			<link rel="stylesheet" href="${styleUri}">
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
			
			<script  src="${scriptUri}"></script>
		</body>

		</html>`;
}

function getWebviewFormContent(scriptUri: vscode.Uri, styleUri: vscode.Uri) {

	return `
	<!DOCTYPE html>
		<html lang="en">

		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<link rel="stylesheet" href="${styleUri}">
		</head>

		<body>
			<h1>Virtual Labs Experiment Authoring Environment</h1>
			<div class="Organization">
				<label for="userName">Github User Name</label>
				<input type="text" id="userName" name="userName">

			</div>
			<div class="Experiment">
				<label for="personalAccessToken">Personal Access Token</label>
				<input type="text" id="personalAccessToken" name="personalAccessToken">
			</div>
			<div class="Branch">
				<label for="commitMessage">Commit Message</label>
				<textarea id="commitMessage" name="commitMessage" ></textarea>
			</div>
			<button id="push" class="bigButton">Submit</button>

			<script  src="${scriptUri}"></script>
		</body>

		</html>`;
}

function getPRContent(scriptUri: vscode.Uri, styleUri: vscode.Uri) {
	return `
	<!DOCTYPE html>
		<html lang="en">

		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Virtual Labs Experiment Authoring Environment</title>
			<link rel="stylesheet" href="${styleUri}">
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

			<script  src="${scriptUri}"></script>
		</body>

		</html>`;
}

async function cloneWebView(view: vscode.WebviewView, extensionUri: vscode.Uri) {
	const panel = vscode.window.createWebviewPanel(
		'virtualLabs',
		'Virtual Labs Experiment Authoring Environment',
		vscode.ViewColumn.One,
		{
			enableScripts: true
		}
	);

	const scriptUri = view.webview.asWebviewUri(
		vscode.Uri.joinPath(extensionUri, 'src', 'webview.js')
	);
	const styleUri = view.webview.asWebviewUri(
		vscode.Uri.joinPath(extensionUri, 'src',  'webview.css')
	);
	panel.webview.html = getWebviewContent(scriptUri, styleUri);

	panel.webview.onDidReceiveMessage(async (message) => {
		switch (message.command) {
			case 'clone':
				{
						const experimentName = message.experimentName;
						const branch = message.branch;
						const organization = message.organization;
						const repoUrl = `https://github.com/${organization}/${experimentName}.git`;
						const folderPath = vscode.workspace.workspaceFolders![0].uri.fsPath;

						vscode.window.showInformationMessage('Repository clone UI verified!');
						vscode.window.showInformationMessage(`Experiment Link: ${repoUrl} \nFolder Link: ${folderPath} \nbranch is ${branch}`);
						panel.dispose();
						break;
				}
			default:
				break;
			}
	});
}

function buildScript(command: string) {
	switch (command) {
		case 'command2':
			vscode.window.showInformationMessage('Validation UI testing');
			break;
		case 'command3':
			vscode.window.showInformationMessage('Build local UI testing');
			break;
		case 'command4':
			vscode.window.showInformationMessage('Deploy local UI testing');
			break;
		case 'command5':
			vscode.window.showInformationMessage('Clean UI testing');
			break;
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
	const scriptUri = view.webview.asWebviewUri(
		vscode.Uri.joinPath(extensionUri, 'src', 'pr.js')
	);
	const styleUri = view.webview.asWebviewUri(
		vscode.Uri.joinPath(extensionUri, 'src',  'webview.css')
	);

	panel.webview.html = getWebviewFormContent(scriptUri, styleUri);
	panel.webview.onDidReceiveMessage(async (message) => {
		switch (message.command) {
			case 'push':
				vscode.window.showInformationMessage('push UI testing');
				panel.dispose();
				break;
		}
	}, undefined, context.subscriptions);
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
	const scriptUri = view.webview.asWebviewUri(
		vscode.Uri.joinPath(extensionUri, 'src', 'pr.js')
	);
	const styleUri = view.webview.asWebviewUri(
		vscode.Uri.joinPath(extensionUri, 'src',  'webview.css')
	);

	panel.webview.html = getPRContent(scriptUri, styleUri);
	panel.webview.onDidReceiveMessage(async (message) => {
		switch (message.command) {
			case 'pr':
				vscode.window.showInformationMessage('Pull request UI testing');
				panel.dispose();
				break;
		}
	}, undefined, context.subscriptions);

}


function activate(context: vscode.ExtensionContext){
	const extensionUri = context.extensionUri;
	vscode.window.registerWebviewViewProvider(
		'vlabs.experimentView',
		{
			resolveWebviewView: (view) => {
				view.webview.options = {
					enableScripts: true,
				};
				const scriptUri = view.webview.asWebviewUri(
					vscode.Uri.joinPath(extensionUri, 'src', 'sidebar.js')
				);
				const styleUri = view.webview.asWebviewUri(
					vscode.Uri.joinPath(extensionUri, 'src', 'sidebar.css')
				);
				view.webview.html = getPanel1Content(scriptUri, styleUri);
				view.webview.onDidReceiveMessage(async (message) => {

				// close webview panel after selection of a command
					switch (message.command) {
						case 'command1':
							if (vscode.workspace.workspaceFolders === null){
								vscode.window.showErrorMessage("Please open a directory in vscode");
								break;
							}
							cloneWebView(view, extensionUri);
							break;
						case 'command6':
							await pushAndMerge(view, extensionUri, context);
							break;
						case 'command7':
							raisePR(view, extensionUri, context);
							break;
						case 'command8':
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
}



function deactivate() {}

module.exports = {
	activate,
	deactivate,
};