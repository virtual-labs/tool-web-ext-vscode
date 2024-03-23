/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(9);

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable @typescript-eslint/naming-convention */
const vscode = __importStar(__webpack_require__(1));
const axios_1 = __importDefault(__webpack_require__(2));
const http_status_codes_1 = __webpack_require__(3);
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
function getWebviewContent() {
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
			` + commonCss + `
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
			` + commonCss + `
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
			` + commonCss + `
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
// global variable to store repo name
let repositoryName = "";
async function cloneWebView() {
    const panel = vscode.window.createWebviewPanel('virtualLabs', 'Virtual Labs Experiment Authoring Environment', vscode.ViewColumn.One, {
        enableScripts: true
    });
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
                    vscode.commands.executeCommand('RemoteHub.switchToBranch');
                    vscode.window.showInformationMessage('Repository clone UI verified!');
                    panel.dispose();
                    repositoryName = repoUrl;
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
function buildScript(command) {
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
async function pushAndMerge(view, extensionUri, context) {
    const panel = vscode.window.createWebviewPanel('vlabs.buildexp', 'User Details', vscode.ViewColumn.One, {
        enableScripts: true
    });
    panel.webview.html = getWebviewFormContent();
    vscode.commands.executeCommand('workbench.scm.focus');
}
function raisePR(view, extensionUri, context) {
    const panel = vscode.window.createWebviewPanel('vlabs.buildexp', 'Pull Request', vscode.ViewColumn.One, {
        enableScripts: true
    });
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
async function getLatestWorkflowRunId(repoOwner, repoName, workflowId, token) {
    try {
        const response = await axios_1.default.get(`https://api.github.com/repos/${repoOwner}/${repoName}/actions/workflows/${workflowId}/runs`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github.v3+json",
            },
        });
        return response.data.workflow_runs[0].id;
    }
    catch (error) {
        console.error("Error getting latest workflow run ID:", error.message);
        throw error;
    }
}
const deployLab = async (req, res) => {
    const body = req.body;
    const { access_token, repoName, workflowName } = body;
    console.log("Deploying lab:", repoName, workflowName);
    const repoOwner = process.env.GITHUB_OWNER;
    const branch = "dev";
    const token = access_token;
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/actions/workflows`;
    const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
    };
    try {
        const response = await axios_1.default.get(apiUrl, { headers });
        const workflow = response.data.workflows.find((w) => w.name === workflowName);
        const workflowId = workflow.id;
        const dispatchResponse = await axios_1.default.post(`${apiUrl}/${workflowId}/dispatches`, {
            ref: branch,
        }, { headers });
        setTimeout(async () => {
            const workflowRunId = await getLatestWorkflowRunId(repoOwner, repoName, workflowId, token);
            console.log(`Workflow "${workflowName}" triggered successfully for branch "${branch}". Workflow Run ID: ${workflowRunId}`);
            return res
                .status(http_status_codes_1.StatusCodes.OK)
                .json({ message: "success", workflowRunId });
        }, 2000);
    }
    catch (error) {
        console.error("Error triggering workflow:", error.message);
        return res.status(400).json({ message: error.message });
    }
};
const ExecWorkflow = async () => {
    try {
        // Call the deployLab function with the required parameters
        const response = await deployLab({
            access_token: 'YOUR_GITHUB_ACCESS_TOKEN',
            repoName: repositoryName,
            workflowName: 'main.yml'
        }, {}); // Pass an empty object as the second argument
        console.log('Response:', response);
        // Handle the response as needed
    }
    catch (error) {
        console.error('Error:', error);
        // Handle the error as needed
    }
};
// main code that starts everything else
function activate(context) {
    const extensionUri = context.extensionUri;
    vscode.window.registerWebviewViewProvider('vlabs.experimentView', {
        resolveWebviewView: (view) => {
            view.webview.options = {
                enableScripts: true,
            };
            view.webview.html = getPanel1Content();
            view.webview.onDidReceiveMessage(async (message) => {
                // close webview panel after selection of a command
                switch (message.command) {
                    case 'command1': // Initialize experiment
                        if (vscode.workspace.workspaceFolders === null) {
                            vscode.window.showErrorMessage("Please open a directory in vscode");
                            break;
                        }
                        cloneWebView();
                        break;
                    case 'command3': // View Current Experiment
                        vscode.window.showInformationMessage('Viewing Current Experiment');
                        // await pushAndMerge(view, extensionUri, context);
                        ExecWorkflow();
                        break;
                    case 'command4': // Push to dev branch
                        await pushAndMerge(view, extensionUri, context);
                        break;
                    case 'command5': // Submit for Review
                        raisePR(view, extensionUri, context);
                        break;
                    case 'command6': // Help
                        {
                            const path = vscode.Uri.joinPath(extensionUri, 'src', 'README.md');
                            vscode.commands.executeCommand('markdown.showPreview', path);
                            break;
                        }
                    default:
                        buildScript(message.command);
                        break;
                }
            });
        }
    });
    context.subscriptions.push(vscode.commands.registerCommand('extension.pushWithCustomMessage', () => {
        vscode.commands.executeCommand('extension.pushWithCustomMessage');
    }));
}
function deactivate() { }
module.exports = {
    activate,
    deactivate,
};


/***/ }),
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Axios v1.6.8 Copyright (c) 2024 Matt Zabriskie and contributors


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : __webpack_require__.g)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (
  (product) => {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
  })(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv
});

var platform = {
  ...utils,
  ...platform$1
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);

    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils$1.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils$1.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

var cookies = platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils$1.isString(path) && cookie.push('path=' + path);

      utils$1.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var isURLSameOrigin = platform.hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils$1.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    let {responseType, withXSRFToken} = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (utils$1.isFormData(requestData)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if(platform.hasStandardBrowserEnv) {
      withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));

      if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(fullPath))) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};

utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({caseless}, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const VERSION = "1.6.8";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;

        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';

        if (!err.stack) {
          err.stack = stack;
          // match without the 2 top stack lines
        } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
          err.stack += '\n' + stack;
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils$1.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

module.exports = axios;
//# sourceMappingURL=axios.cjs.map


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCEPTED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.ACCEPTED),
/* harmony export */   BAD_GATEWAY: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.BAD_GATEWAY),
/* harmony export */   BAD_REQUEST: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.BAD_REQUEST),
/* harmony export */   CONFLICT: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.CONFLICT),
/* harmony export */   CONTINUE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.CONTINUE),
/* harmony export */   CREATED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.CREATED),
/* harmony export */   EXPECTATION_FAILED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.EXPECTATION_FAILED),
/* harmony export */   FAILED_DEPENDENCY: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.FAILED_DEPENDENCY),
/* harmony export */   FORBIDDEN: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.FORBIDDEN),
/* harmony export */   GATEWAY_TIMEOUT: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.GATEWAY_TIMEOUT),
/* harmony export */   GONE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.GONE),
/* harmony export */   HTTP_VERSION_NOT_SUPPORTED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.HTTP_VERSION_NOT_SUPPORTED),
/* harmony export */   IM_A_TEAPOT: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.IM_A_TEAPOT),
/* harmony export */   INSUFFICIENT_SPACE_ON_RESOURCE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.INSUFFICIENT_SPACE_ON_RESOURCE),
/* harmony export */   INSUFFICIENT_STORAGE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.INSUFFICIENT_STORAGE),
/* harmony export */   INTERNAL_SERVER_ERROR: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.INTERNAL_SERVER_ERROR),
/* harmony export */   LENGTH_REQUIRED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.LENGTH_REQUIRED),
/* harmony export */   LOCKED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.LOCKED),
/* harmony export */   METHOD_FAILURE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.METHOD_FAILURE),
/* harmony export */   METHOD_NOT_ALLOWED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.METHOD_NOT_ALLOWED),
/* harmony export */   MOVED_PERMANENTLY: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.MOVED_PERMANENTLY),
/* harmony export */   MOVED_TEMPORARILY: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.MOVED_TEMPORARILY),
/* harmony export */   MULTIPLE_CHOICES: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.MULTIPLE_CHOICES),
/* harmony export */   MULTI_STATUS: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.MULTI_STATUS),
/* harmony export */   NETWORK_AUTHENTICATION_REQUIRED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.NETWORK_AUTHENTICATION_REQUIRED),
/* harmony export */   NON_AUTHORITATIVE_INFORMATION: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.NON_AUTHORITATIVE_INFORMATION),
/* harmony export */   NOT_ACCEPTABLE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.NOT_ACCEPTABLE),
/* harmony export */   NOT_FOUND: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.NOT_FOUND),
/* harmony export */   NOT_IMPLEMENTED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.NOT_IMPLEMENTED),
/* harmony export */   NOT_MODIFIED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.NOT_MODIFIED),
/* harmony export */   NO_CONTENT: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.NO_CONTENT),
/* harmony export */   OK: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.OK),
/* harmony export */   PARTIAL_CONTENT: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.PARTIAL_CONTENT),
/* harmony export */   PAYMENT_REQUIRED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.PAYMENT_REQUIRED),
/* harmony export */   PERMANENT_REDIRECT: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.PERMANENT_REDIRECT),
/* harmony export */   PRECONDITION_FAILED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.PRECONDITION_FAILED),
/* harmony export */   PRECONDITION_REQUIRED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.PRECONDITION_REQUIRED),
/* harmony export */   PROCESSING: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.PROCESSING),
/* harmony export */   PROXY_AUTHENTICATION_REQUIRED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.PROXY_AUTHENTICATION_REQUIRED),
/* harmony export */   REQUESTED_RANGE_NOT_SATISFIABLE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.REQUESTED_RANGE_NOT_SATISFIABLE),
/* harmony export */   REQUEST_HEADER_FIELDS_TOO_LARGE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.REQUEST_HEADER_FIELDS_TOO_LARGE),
/* harmony export */   REQUEST_TIMEOUT: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.REQUEST_TIMEOUT),
/* harmony export */   REQUEST_TOO_LONG: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.REQUEST_TOO_LONG),
/* harmony export */   REQUEST_URI_TOO_LONG: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.REQUEST_URI_TOO_LONG),
/* harmony export */   RESET_CONTENT: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.RESET_CONTENT),
/* harmony export */   ReasonPhrases: () => (/* reexport safe */ _reason_phrases__WEBPACK_IMPORTED_MODULE_2__.ReasonPhrases),
/* harmony export */   SEE_OTHER: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.SEE_OTHER),
/* harmony export */   SERVICE_UNAVAILABLE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.SERVICE_UNAVAILABLE),
/* harmony export */   SWITCHING_PROTOCOLS: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.SWITCHING_PROTOCOLS),
/* harmony export */   StatusCodes: () => (/* reexport safe */ _status_codes__WEBPACK_IMPORTED_MODULE_1__.StatusCodes),
/* harmony export */   TEMPORARY_REDIRECT: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.TEMPORARY_REDIRECT),
/* harmony export */   TOO_MANY_REQUESTS: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.TOO_MANY_REQUESTS),
/* harmony export */   UNAUTHORIZED: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.UNAUTHORIZED),
/* harmony export */   UNPROCESSABLE_ENTITY: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.UNPROCESSABLE_ENTITY),
/* harmony export */   UNSUPPORTED_MEDIA_TYPE: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.UNSUPPORTED_MEDIA_TYPE),
/* harmony export */   USE_PROXY: () => (/* reexport safe */ _legacy__WEBPACK_IMPORTED_MODULE_3__.USE_PROXY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getReasonPhrase: () => (/* reexport safe */ _utils_functions__WEBPACK_IMPORTED_MODULE_0__.getReasonPhrase),
/* harmony export */   getStatusCode: () => (/* reexport safe */ _utils_functions__WEBPACK_IMPORTED_MODULE_0__.getStatusCode),
/* harmony export */   getStatusText: () => (/* reexport safe */ _utils_functions__WEBPACK_IMPORTED_MODULE_0__.getStatusText)
/* harmony export */ });
/* harmony import */ var _legacy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _status_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _reason_phrases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__assign(__assign({}, _legacy__WEBPACK_IMPORTED_MODULE_3__["default"]), { getStatusCode: _utils_functions__WEBPACK_IMPORTED_MODULE_0__.getStatusCode,
    getStatusText: _utils_functions__WEBPACK_IMPORTED_MODULE_0__.getStatusText }));


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCEPTED: () => (/* binding */ ACCEPTED),
/* harmony export */   BAD_GATEWAY: () => (/* binding */ BAD_GATEWAY),
/* harmony export */   BAD_REQUEST: () => (/* binding */ BAD_REQUEST),
/* harmony export */   CONFLICT: () => (/* binding */ CONFLICT),
/* harmony export */   CONTINUE: () => (/* binding */ CONTINUE),
/* harmony export */   CREATED: () => (/* binding */ CREATED),
/* harmony export */   EXPECTATION_FAILED: () => (/* binding */ EXPECTATION_FAILED),
/* harmony export */   FAILED_DEPENDENCY: () => (/* binding */ FAILED_DEPENDENCY),
/* harmony export */   FORBIDDEN: () => (/* binding */ FORBIDDEN),
/* harmony export */   GATEWAY_TIMEOUT: () => (/* binding */ GATEWAY_TIMEOUT),
/* harmony export */   GONE: () => (/* binding */ GONE),
/* harmony export */   HTTP_VERSION_NOT_SUPPORTED: () => (/* binding */ HTTP_VERSION_NOT_SUPPORTED),
/* harmony export */   IM_A_TEAPOT: () => (/* binding */ IM_A_TEAPOT),
/* harmony export */   INSUFFICIENT_SPACE_ON_RESOURCE: () => (/* binding */ INSUFFICIENT_SPACE_ON_RESOURCE),
/* harmony export */   INSUFFICIENT_STORAGE: () => (/* binding */ INSUFFICIENT_STORAGE),
/* harmony export */   INTERNAL_SERVER_ERROR: () => (/* binding */ INTERNAL_SERVER_ERROR),
/* harmony export */   LENGTH_REQUIRED: () => (/* binding */ LENGTH_REQUIRED),
/* harmony export */   LOCKED: () => (/* binding */ LOCKED),
/* harmony export */   METHOD_FAILURE: () => (/* binding */ METHOD_FAILURE),
/* harmony export */   METHOD_NOT_ALLOWED: () => (/* binding */ METHOD_NOT_ALLOWED),
/* harmony export */   MOVED_PERMANENTLY: () => (/* binding */ MOVED_PERMANENTLY),
/* harmony export */   MOVED_TEMPORARILY: () => (/* binding */ MOVED_TEMPORARILY),
/* harmony export */   MULTIPLE_CHOICES: () => (/* binding */ MULTIPLE_CHOICES),
/* harmony export */   MULTI_STATUS: () => (/* binding */ MULTI_STATUS),
/* harmony export */   NETWORK_AUTHENTICATION_REQUIRED: () => (/* binding */ NETWORK_AUTHENTICATION_REQUIRED),
/* harmony export */   NON_AUTHORITATIVE_INFORMATION: () => (/* binding */ NON_AUTHORITATIVE_INFORMATION),
/* harmony export */   NOT_ACCEPTABLE: () => (/* binding */ NOT_ACCEPTABLE),
/* harmony export */   NOT_FOUND: () => (/* binding */ NOT_FOUND),
/* harmony export */   NOT_IMPLEMENTED: () => (/* binding */ NOT_IMPLEMENTED),
/* harmony export */   NOT_MODIFIED: () => (/* binding */ NOT_MODIFIED),
/* harmony export */   NO_CONTENT: () => (/* binding */ NO_CONTENT),
/* harmony export */   OK: () => (/* binding */ OK),
/* harmony export */   PARTIAL_CONTENT: () => (/* binding */ PARTIAL_CONTENT),
/* harmony export */   PAYMENT_REQUIRED: () => (/* binding */ PAYMENT_REQUIRED),
/* harmony export */   PERMANENT_REDIRECT: () => (/* binding */ PERMANENT_REDIRECT),
/* harmony export */   PRECONDITION_FAILED: () => (/* binding */ PRECONDITION_FAILED),
/* harmony export */   PRECONDITION_REQUIRED: () => (/* binding */ PRECONDITION_REQUIRED),
/* harmony export */   PROCESSING: () => (/* binding */ PROCESSING),
/* harmony export */   PROXY_AUTHENTICATION_REQUIRED: () => (/* binding */ PROXY_AUTHENTICATION_REQUIRED),
/* harmony export */   REQUESTED_RANGE_NOT_SATISFIABLE: () => (/* binding */ REQUESTED_RANGE_NOT_SATISFIABLE),
/* harmony export */   REQUEST_HEADER_FIELDS_TOO_LARGE: () => (/* binding */ REQUEST_HEADER_FIELDS_TOO_LARGE),
/* harmony export */   REQUEST_TIMEOUT: () => (/* binding */ REQUEST_TIMEOUT),
/* harmony export */   REQUEST_TOO_LONG: () => (/* binding */ REQUEST_TOO_LONG),
/* harmony export */   REQUEST_URI_TOO_LONG: () => (/* binding */ REQUEST_URI_TOO_LONG),
/* harmony export */   RESET_CONTENT: () => (/* binding */ RESET_CONTENT),
/* harmony export */   SEE_OTHER: () => (/* binding */ SEE_OTHER),
/* harmony export */   SERVICE_UNAVAILABLE: () => (/* binding */ SERVICE_UNAVAILABLE),
/* harmony export */   SWITCHING_PROTOCOLS: () => (/* binding */ SWITCHING_PROTOCOLS),
/* harmony export */   TEMPORARY_REDIRECT: () => (/* binding */ TEMPORARY_REDIRECT),
/* harmony export */   TOO_MANY_REQUESTS: () => (/* binding */ TOO_MANY_REQUESTS),
/* harmony export */   UNAUTHORIZED: () => (/* binding */ UNAUTHORIZED),
/* harmony export */   UNPROCESSABLE_ENTITY: () => (/* binding */ UNPROCESSABLE_ENTITY),
/* harmony export */   UNSUPPORTED_MEDIA_TYPE: () => (/* binding */ UNSUPPORTED_MEDIA_TYPE),
/* harmony export */   USE_PROXY: () => (/* binding */ USE_PROXY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Exporting constants directly to maintain compatability with v1
// These are deprecated. Please don't add any new codes here.
/**
 * @deprecated Please use StatusCodes.ACCEPTED
 *
 * */
var ACCEPTED = 202;
/**
 * @deprecated Please use StatusCodes.BAD_GATEWAY
 *
 * */
var BAD_GATEWAY = 502;
/**
 * @deprecated Please use StatusCodes.BAD_REQUEST
 *
 * */
var BAD_REQUEST = 400;
/**
 * @deprecated Please use StatusCodes.CONFLICT
 *
 * */
var CONFLICT = 409;
/**
 * @deprecated Please use StatusCodes.CONTINUE
 *
 * */
var CONTINUE = 100;
/**
 * @deprecated Please use StatusCodes.CREATED
 *
 * */
var CREATED = 201;
/**
 * @deprecated Please use StatusCodes.EXPECTATION_FAILED
 *
 * */
var EXPECTATION_FAILED = 417;
/**
 * @deprecated Please use StatusCodes.FAILED_DEPENDENCY
 *
 * */
var FAILED_DEPENDENCY = 424;
/**
 * @deprecated Please use StatusCodes.FORBIDDEN
 *
 * */
var FORBIDDEN = 403;
/**
 * @deprecated Please use StatusCodes.GATEWAY_TIMEOUT
 *
 * */
var GATEWAY_TIMEOUT = 504;
/**
 * @deprecated Please use StatusCodes.GONE
 *
 * */
var GONE = 410;
/**
 * @deprecated Please use StatusCodes.HTTP_VERSION_NOT_SUPPORTED
 *
 * */
var HTTP_VERSION_NOT_SUPPORTED = 505;
/**
 * @deprecated Please use StatusCodes.IM_A_TEAPOT
 *
 * */
var IM_A_TEAPOT = 418;
/**
 * @deprecated Please use StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE
 *
 * */
var INSUFFICIENT_SPACE_ON_RESOURCE = 419;
/**
 * @deprecated Please use StatusCodes.INSUFFICIENT_STORAGE
 *
 * */
var INSUFFICIENT_STORAGE = 507;
/**
 * @deprecated Please use StatusCodes.INTERNAL_SERVER_ERROR
 *
 * */
var INTERNAL_SERVER_ERROR = 500;
/**
 * @deprecated Please use StatusCodes.LENGTH_REQUIRED
 *
 * */
var LENGTH_REQUIRED = 411;
/**
 * @deprecated Please use StatusCodes.LOCKED
 *
 * */
var LOCKED = 423;
/**
 * @deprecated Please use StatusCodes.METHOD_FAILURE
 *
 * */
var METHOD_FAILURE = 420;
/**
 * @deprecated Please use StatusCodes.METHOD_NOT_ALLOWED
 *
 * */
var METHOD_NOT_ALLOWED = 405;
/**
 * @deprecated Please use StatusCodes.MOVED_PERMANENTLY
 *
 * */
var MOVED_PERMANENTLY = 301;
/**
 * @deprecated Please use StatusCodes.MOVED_TEMPORARILY
 *
 * */
var MOVED_TEMPORARILY = 302;
/**
 * @deprecated Please use StatusCodes.MULTI_STATUS
 *
 * */
var MULTI_STATUS = 207;
/**
 * @deprecated Please use StatusCodes.MULTIPLE_CHOICES
 *
 * */
var MULTIPLE_CHOICES = 300;
/**
 * @deprecated Please use StatusCodes.NETWORK_AUTHENTICATION_REQUIRED
 *
 * */
var NETWORK_AUTHENTICATION_REQUIRED = 511;
/**
 * @deprecated Please use StatusCodes.NO_CONTENT
 *
 * */
var NO_CONTENT = 204;
/**
 * @deprecated Please use StatusCodes.NON_AUTHORITATIVE_INFORMATION
 *
 * */
var NON_AUTHORITATIVE_INFORMATION = 203;
/**
 * @deprecated Please use StatusCodes.NOT_ACCEPTABLE
 *
 * */
var NOT_ACCEPTABLE = 406;
/**
 * @deprecated Please use StatusCodes.NOT_FOUND
 *
 * */
var NOT_FOUND = 404;
/**
 * @deprecated Please use StatusCodes.NOT_IMPLEMENTED
 *
 * */
var NOT_IMPLEMENTED = 501;
/**
 * @deprecated Please use StatusCodes.NOT_MODIFIED
 *
 * */
var NOT_MODIFIED = 304;
/**
 * @deprecated Please use StatusCodes.OK
 *
 * */
var OK = 200;
/**
 * @deprecated Please use StatusCodes.PARTIAL_CONTENT
 *
 * */
var PARTIAL_CONTENT = 206;
/**
 * @deprecated Please use StatusCodes.PAYMENT_REQUIRED
 *
 * */
var PAYMENT_REQUIRED = 402;
/**
 * @deprecated Please use StatusCodes.PERMANENT_REDIRECT
 *
 * */
var PERMANENT_REDIRECT = 308;
/**
 * @deprecated Please use StatusCodes.PRECONDITION_FAILED
 *
 * */
var PRECONDITION_FAILED = 412;
/**
 * @deprecated Please use StatusCodes.PRECONDITION_REQUIRED
 *
 * */
var PRECONDITION_REQUIRED = 428;
/**
 * @deprecated Please use StatusCodes.PROCESSING
 *
 * */
var PROCESSING = 102;
/**
 * @deprecated Please use StatusCodes.PROXY_AUTHENTICATION_REQUIRED
 *
 * */
var PROXY_AUTHENTICATION_REQUIRED = 407;
/**
 * @deprecated Please use StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE
 *
 * */
var REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
/**
 * @deprecated Please use StatusCodes.REQUEST_TIMEOUT
 *
 * */
var REQUEST_TIMEOUT = 408;
/**
 * @deprecated Please use StatusCodes.REQUEST_TOO_LONG
 *
 * */
var REQUEST_TOO_LONG = 413;
/**
 * @deprecated Please use StatusCodes.REQUEST_URI_TOO_LONG
 *
 * */
var REQUEST_URI_TOO_LONG = 414;
/**
 * @deprecated Please use StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE
 *
 * */
var REQUESTED_RANGE_NOT_SATISFIABLE = 416;
/**
 * @deprecated Please use StatusCodes.RESET_CONTENT
 *
 * */
var RESET_CONTENT = 205;
/**
 * @deprecated Please use StatusCodes.SEE_OTHER
 *
 * */
var SEE_OTHER = 303;
/**
 * @deprecated Please use StatusCodes.SERVICE_UNAVAILABLE
 *
 * */
var SERVICE_UNAVAILABLE = 503;
/**
 * @deprecated Please use StatusCodes.SWITCHING_PROTOCOLS
 *
 * */
var SWITCHING_PROTOCOLS = 101;
/**
 * @deprecated Please use StatusCodes.TEMPORARY_REDIRECT
 *
 * */
var TEMPORARY_REDIRECT = 307;
/**
 * @deprecated Please use StatusCodes.TOO_MANY_REQUESTS
 *
 * */
var TOO_MANY_REQUESTS = 429;
/**
 * @deprecated Please use StatusCodes.UNAUTHORIZED
 *
 * */
var UNAUTHORIZED = 401;
/**
 * @deprecated Please use StatusCodes.UNPROCESSABLE_ENTITY
 *
 * */
var UNPROCESSABLE_ENTITY = 422;
/**
 * @deprecated Please use StatusCodes.UNSUPPORTED_MEDIA_TYPE
 *
 * */
var UNSUPPORTED_MEDIA_TYPE = 415;
/**
 * @deprecated Please use StatusCodes.USE_PROXY
 *
 * */
var USE_PROXY = 305;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ACCEPTED: ACCEPTED,
    BAD_GATEWAY: BAD_GATEWAY,
    BAD_REQUEST: BAD_REQUEST,
    CONFLICT: CONFLICT,
    CONTINUE: CONTINUE,
    CREATED: CREATED,
    EXPECTATION_FAILED: EXPECTATION_FAILED,
    FORBIDDEN: FORBIDDEN,
    GATEWAY_TIMEOUT: GATEWAY_TIMEOUT,
    GONE: GONE,
    HTTP_VERSION_NOT_SUPPORTED: HTTP_VERSION_NOT_SUPPORTED,
    IM_A_TEAPOT: IM_A_TEAPOT,
    INSUFFICIENT_SPACE_ON_RESOURCE: INSUFFICIENT_SPACE_ON_RESOURCE,
    INSUFFICIENT_STORAGE: INSUFFICIENT_STORAGE,
    INTERNAL_SERVER_ERROR: INTERNAL_SERVER_ERROR,
    LENGTH_REQUIRED: LENGTH_REQUIRED,
    LOCKED: LOCKED,
    METHOD_FAILURE: METHOD_FAILURE,
    METHOD_NOT_ALLOWED: METHOD_NOT_ALLOWED,
    MOVED_PERMANENTLY: MOVED_PERMANENTLY,
    MOVED_TEMPORARILY: MOVED_TEMPORARILY,
    MULTI_STATUS: MULTI_STATUS,
    MULTIPLE_CHOICES: MULTIPLE_CHOICES,
    NETWORK_AUTHENTICATION_REQUIRED: NETWORK_AUTHENTICATION_REQUIRED,
    NO_CONTENT: NO_CONTENT,
    NON_AUTHORITATIVE_INFORMATION: NON_AUTHORITATIVE_INFORMATION,
    NOT_ACCEPTABLE: NOT_ACCEPTABLE,
    NOT_FOUND: NOT_FOUND,
    NOT_IMPLEMENTED: NOT_IMPLEMENTED,
    NOT_MODIFIED: NOT_MODIFIED,
    OK: OK,
    PARTIAL_CONTENT: PARTIAL_CONTENT,
    PAYMENT_REQUIRED: PAYMENT_REQUIRED,
    PERMANENT_REDIRECT: PERMANENT_REDIRECT,
    PRECONDITION_FAILED: PRECONDITION_FAILED,
    PRECONDITION_REQUIRED: PRECONDITION_REQUIRED,
    PROCESSING: PROCESSING,
    PROXY_AUTHENTICATION_REQUIRED: PROXY_AUTHENTICATION_REQUIRED,
    REQUEST_HEADER_FIELDS_TOO_LARGE: REQUEST_HEADER_FIELDS_TOO_LARGE,
    REQUEST_TIMEOUT: REQUEST_TIMEOUT,
    REQUEST_TOO_LONG: REQUEST_TOO_LONG,
    REQUEST_URI_TOO_LONG: REQUEST_URI_TOO_LONG,
    REQUESTED_RANGE_NOT_SATISFIABLE: REQUESTED_RANGE_NOT_SATISFIABLE,
    RESET_CONTENT: RESET_CONTENT,
    SEE_OTHER: SEE_OTHER,
    SERVICE_UNAVAILABLE: SERVICE_UNAVAILABLE,
    SWITCHING_PROTOCOLS: SWITCHING_PROTOCOLS,
    TEMPORARY_REDIRECT: TEMPORARY_REDIRECT,
    TOO_MANY_REQUESTS: TOO_MANY_REQUESTS,
    UNAUTHORIZED: UNAUTHORIZED,
    UNPROCESSABLE_ENTITY: UNPROCESSABLE_ENTITY,
    UNSUPPORTED_MEDIA_TYPE: UNSUPPORTED_MEDIA_TYPE,
    USE_PROXY: USE_PROXY,
});


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getReasonPhrase: () => (/* binding */ getReasonPhrase),
/* harmony export */   getStatusCode: () => (/* binding */ getStatusCode),
/* harmony export */   getStatusText: () => (/* binding */ getStatusText)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/**
 * Returns the reason phrase for the given status code.
 * If the given status code does not exist, an error is thrown.
 *
 * @param {number|string} statusCode The HTTP status code
 * @returns {string} The associated reason phrase (e.g. "Bad Request", "OK")
 * */
function getReasonPhrase(statusCode) {
    var result = _utils__WEBPACK_IMPORTED_MODULE_0__.statusCodeToReasonPhrase[statusCode.toString()];
    if (!result) {
        throw new Error("Status code does not exist: " + statusCode);
    }
    return result;
}
/**
 * Returns the status code for the given reason phrase.
 * If the given reason phrase does not exist, undefined is returned.
 *
 * @param {string} reasonPhrase The HTTP reason phrase (e.g. "Bad Request", "OK")
 * @returns {string} The associated status code
 * */
function getStatusCode(reasonPhrase) {
    var result = _utils__WEBPACK_IMPORTED_MODULE_0__.reasonPhraseToStatusCode[reasonPhrase];
    if (!result) {
        throw new Error("Reason phrase does not exist: " + reasonPhrase);
    }
    return result;
}
/**
 * @deprecated
 *
 * Returns the reason phrase for the given status code.
 * If the given status code does not exist, undefined is returned.
 *
 * Deprecated in favor of getReasonPhrase
 *
 * @param {number|string} statusCode The HTTP status code
 * @returns {string|undefined} The associated reason phrase (e.g. "Bad Request", "OK")
 * */
var getStatusText = getReasonPhrase;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reasonPhraseToStatusCode: () => (/* binding */ reasonPhraseToStatusCode),
/* harmony export */   statusCodeToReasonPhrase: () => (/* binding */ statusCodeToReasonPhrase)
/* harmony export */ });
// Generated file. Do not edit
var statusCodeToReasonPhrase = {
    "202": "Accepted",
    "502": "Bad Gateway",
    "400": "Bad Request",
    "409": "Conflict",
    "100": "Continue",
    "201": "Created",
    "417": "Expectation Failed",
    "424": "Failed Dependency",
    "403": "Forbidden",
    "504": "Gateway Timeout",
    "410": "Gone",
    "505": "HTTP Version Not Supported",
    "418": "I'm a teapot",
    "419": "Insufficient Space on Resource",
    "507": "Insufficient Storage",
    "500": "Internal Server Error",
    "411": "Length Required",
    "423": "Locked",
    "420": "Method Failure",
    "405": "Method Not Allowed",
    "301": "Moved Permanently",
    "302": "Moved Temporarily",
    "207": "Multi-Status",
    "300": "Multiple Choices",
    "511": "Network Authentication Required",
    "204": "No Content",
    "203": "Non Authoritative Information",
    "406": "Not Acceptable",
    "404": "Not Found",
    "501": "Not Implemented",
    "304": "Not Modified",
    "200": "OK",
    "206": "Partial Content",
    "402": "Payment Required",
    "308": "Permanent Redirect",
    "412": "Precondition Failed",
    "428": "Precondition Required",
    "102": "Processing",
    "103": "Early Hints",
    "426": "Upgrade Required",
    "407": "Proxy Authentication Required",
    "431": "Request Header Fields Too Large",
    "408": "Request Timeout",
    "413": "Request Entity Too Large",
    "414": "Request-URI Too Long",
    "416": "Requested Range Not Satisfiable",
    "205": "Reset Content",
    "303": "See Other",
    "503": "Service Unavailable",
    "101": "Switching Protocols",
    "307": "Temporary Redirect",
    "429": "Too Many Requests",
    "401": "Unauthorized",
    "451": "Unavailable For Legal Reasons",
    "422": "Unprocessable Entity",
    "415": "Unsupported Media Type",
    "305": "Use Proxy",
    "421": "Misdirected Request"
};
var reasonPhraseToStatusCode = {
    "Accepted": 202,
    "Bad Gateway": 502,
    "Bad Request": 400,
    "Conflict": 409,
    "Continue": 100,
    "Created": 201,
    "Expectation Failed": 417,
    "Failed Dependency": 424,
    "Forbidden": 403,
    "Gateway Timeout": 504,
    "Gone": 410,
    "HTTP Version Not Supported": 505,
    "I'm a teapot": 418,
    "Insufficient Space on Resource": 419,
    "Insufficient Storage": 507,
    "Internal Server Error": 500,
    "Length Required": 411,
    "Locked": 423,
    "Method Failure": 420,
    "Method Not Allowed": 405,
    "Moved Permanently": 301,
    "Moved Temporarily": 302,
    "Multi-Status": 207,
    "Multiple Choices": 300,
    "Network Authentication Required": 511,
    "No Content": 204,
    "Non Authoritative Information": 203,
    "Not Acceptable": 406,
    "Not Found": 404,
    "Not Implemented": 501,
    "Not Modified": 304,
    "OK": 200,
    "Partial Content": 206,
    "Payment Required": 402,
    "Permanent Redirect": 308,
    "Precondition Failed": 412,
    "Precondition Required": 428,
    "Processing": 102,
    "Early Hints": 103,
    "Upgrade Required": 426,
    "Proxy Authentication Required": 407,
    "Request Header Fields Too Large": 431,
    "Request Timeout": 408,
    "Request Entity Too Large": 413,
    "Request-URI Too Long": 414,
    "Requested Range Not Satisfiable": 416,
    "Reset Content": 205,
    "See Other": 303,
    "Service Unavailable": 503,
    "Switching Protocols": 101,
    "Temporary Redirect": 307,
    "Too Many Requests": 429,
    "Unauthorized": 401,
    "Unavailable For Legal Reasons": 451,
    "Unprocessable Entity": 422,
    "Unsupported Media Type": 415,
    "Use Proxy": 305,
    "Misdirected Request": 421
};


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusCodes: () => (/* binding */ StatusCodes)
/* harmony export */ });
// Generated file. Do not edit
var StatusCodes;
(function (StatusCodes) {
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.1
     *
     * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
     */
    StatusCodes[StatusCodes["CONTINUE"] = 100] = "CONTINUE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2
     *
     * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
     */
    StatusCodes[StatusCodes["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1
     *
     * This code indicates that the server has received and is processing the request, but no response is available yet.
     */
    StatusCodes[StatusCodes["PROCESSING"] = 102] = "PROCESSING";
    /**
     * Official Documentation @ https://www.rfc-editor.org/rfc/rfc8297#page-3
     *
     * This code indicates to the client that the server is likely to send a final response with the header fields included in the informational response.
     */
    StatusCodes[StatusCodes["EARLY_HINTS"] = 103] = "EARLY_HINTS";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.1
     *
     * The request has succeeded. The meaning of a success varies depending on the HTTP method:
     * GET: The resource has been fetched and is transmitted in the message body.
     * HEAD: The entity headers are in the message body.
     * POST: The resource describing the result of the action is transmitted in the message body.
     * TRACE: The message body contains the request message as received by the server
     */
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.2
     *
     * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
     */
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.3
     *
     * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
     */
    StatusCodes[StatusCodes["ACCEPTED"] = 202] = "ACCEPTED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
     *
     * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
     */
    StatusCodes[StatusCodes["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5
     *
     * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
     */
    StatusCodes[StatusCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6
     *
     * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
     */
    StatusCodes[StatusCodes["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1
     *
     * This response code is used because of range header sent by the client to separate download into multiple streams.
     */
    StatusCodes[StatusCodes["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.2
     *
     * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
     */
    StatusCodes[StatusCodes["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.1
     *
     * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
     */
    StatusCodes[StatusCodes["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2
     *
     * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
     */
    StatusCodes[StatusCodes["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.3
     *
     * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
     */
    StatusCodes[StatusCodes["MOVED_TEMPORARILY"] = 302] = "MOVED_TEMPORARILY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4
     *
     * Server sent this response to directing client to get requested resource to another URI with an GET request.
     */
    StatusCodes[StatusCodes["SEE_OTHER"] = 303] = "SEE_OTHER";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.1
     *
     * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
     */
    StatusCodes[StatusCodes["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    /**
     * @deprecated
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.6
     *
     * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
     */
    StatusCodes[StatusCodes["USE_PROXY"] = 305] = "USE_PROXY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7
     *
     * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     */
    StatusCodes[StatusCodes["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3
     *
     * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     */
    StatusCodes[StatusCodes["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.1
     *
     * This response means that server could not understand the request due to invalid syntax.
     */
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1
     *
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
     */
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2
     *
     * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
     */
    StatusCodes[StatusCodes["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.3
     *
     * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
     */
    StatusCodes[StatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4
     *
     * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
     */
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.5
     *
     * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
     */
    StatusCodes[StatusCodes["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6
     *
     * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
     */
    StatusCodes[StatusCodes["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2
     *
     * This is similar to 401 but authentication is needed to be done by a proxy.
     */
    StatusCodes[StatusCodes["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7
     *
     * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
     */
    StatusCodes[StatusCodes["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.8
     *
     * This response is sent when a request conflicts with the current state of the server.
     */
    StatusCodes[StatusCodes["CONFLICT"] = 409] = "CONFLICT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.9
     *
     * This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
     */
    StatusCodes[StatusCodes["GONE"] = 410] = "GONE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.10
     *
     * The server rejected the request because the Content-Length header field is not defined and the server requires it.
     */
    StatusCodes[StatusCodes["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2
     *
     * The client has indicated preconditions in its headers which the server does not meet.
     */
    StatusCodes[StatusCodes["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11
     *
     * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
     */
    StatusCodes[StatusCodes["REQUEST_TOO_LONG"] = 413] = "REQUEST_TOO_LONG";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12
     *
     * The URI requested by the client is longer than the server is willing to interpret.
     */
    StatusCodes[StatusCodes["REQUEST_URI_TOO_LONG"] = 414] = "REQUEST_URI_TOO_LONG";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.13
     *
     * The media format of the requested data is not supported by the server, so the server is rejecting the request.
     */
    StatusCodes[StatusCodes["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4
     *
     * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
     */
    StatusCodes[StatusCodes["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14
     *
     * This response code means the expectation indicated by the Expect request header field can't be met by the server.
     */
    StatusCodes[StatusCodes["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2324#section-2.3.2
     *
     * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
     */
    StatusCodes[StatusCodes["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
     *
     * The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. This condition is considered to be temporary. If the request which received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action.
     */
    StatusCodes[StatusCodes["INSUFFICIENT_SPACE_ON_RESOURCE"] = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE";
    /**
     * @deprecated
     * Official Documentation @ https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt
     *
     * A deprecated response used by the Spring Framework when a method has failed.
     */
    StatusCodes[StatusCodes["METHOD_FAILURE"] = 420] = "METHOD_FAILURE";
    /**
     * Official Documentation @ https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
     *
     * Defined in the specification of HTTP/2 to indicate that a server is not able to produce a response for the combination of scheme and authority that are included in the request URI.
     */
    StatusCodes[StatusCodes["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3
     *
     * The request was well-formed but was unable to be followed due to semantic errors.
     */
    StatusCodes[StatusCodes["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.4
     *
     * The resource that is being accessed is locked.
     */
    StatusCodes[StatusCodes["LOCKED"] = 423] = "LOCKED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.5
     *
     * The request failed due to failure of a previous request.
     */
    StatusCodes[StatusCodes["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    /**
     * Official Documentation @ https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15
     *
     * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
     */
    StatusCodes[StatusCodes["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3
     *
     * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
     */
    StatusCodes[StatusCodes["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4
     *
     * The user has sent too many requests in a given amount of time ("rate limiting").
     */
    StatusCodes[StatusCodes["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5
     *
     * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
     */
    StatusCodes[StatusCodes["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7725
     *
     * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
     */
    StatusCodes[StatusCodes["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.1
     *
     * The server encountered an unexpected condition that prevented it from fulfilling the request.
     */
    StatusCodes[StatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2
     *
     * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
     */
    StatusCodes[StatusCodes["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.3
     *
     * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
     */
    StatusCodes[StatusCodes["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4
     *
     * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
     */
    StatusCodes[StatusCodes["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.5
     *
     * This error response is given when the server is acting as a gateway and cannot get a response in time.
     */
    StatusCodes[StatusCodes["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.6
     *
     * The HTTP version used in the request is not supported by the server.
     */
    StatusCodes[StatusCodes["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
     *
     * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
     */
    StatusCodes[StatusCodes["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6
     *
     * The 511 status code indicates that the client needs to authenticate to gain network access.
     */
    StatusCodes[StatusCodes["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(StatusCodes || (StatusCodes = {}));


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReasonPhrases: () => (/* binding */ ReasonPhrases)
/* harmony export */ });
// Generated file. Do not edit
var ReasonPhrases;
(function (ReasonPhrases) {
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.3
     *
     * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
     */
    ReasonPhrases["ACCEPTED"] = "Accepted";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.3
     *
     * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
     */
    ReasonPhrases["BAD_GATEWAY"] = "Bad Gateway";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.1
     *
     * This response means that server could not understand the request due to invalid syntax.
     */
    ReasonPhrases["BAD_REQUEST"] = "Bad Request";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.8
     *
     * This response is sent when a request conflicts with the current state of the server.
     */
    ReasonPhrases["CONFLICT"] = "Conflict";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.1
     *
     * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
     */
    ReasonPhrases["CONTINUE"] = "Continue";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.2
     *
     * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
     */
    ReasonPhrases["CREATED"] = "Created";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14
     *
     * This response code means the expectation indicated by the Expect request header field can't be met by the server.
     */
    ReasonPhrases["EXPECTATION_FAILED"] = "Expectation Failed";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.5
     *
     * The request failed due to failure of a previous request.
     */
    ReasonPhrases["FAILED_DEPENDENCY"] = "Failed Dependency";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.3
     *
     * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
     */
    ReasonPhrases["FORBIDDEN"] = "Forbidden";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.5
     *
     * This error response is given when the server is acting as a gateway and cannot get a response in time.
     */
    ReasonPhrases["GATEWAY_TIMEOUT"] = "Gateway Timeout";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.9
     *
     * This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
     */
    ReasonPhrases["GONE"] = "Gone";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.6
     *
     * The HTTP version used in the request is not supported by the server.
     */
    ReasonPhrases["HTTP_VERSION_NOT_SUPPORTED"] = "HTTP Version Not Supported";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2324#section-2.3.2
     *
     * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
     */
    ReasonPhrases["IM_A_TEAPOT"] = "I'm a teapot";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
     *
     * The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. This condition is considered to be temporary. If the request which received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action.
     */
    ReasonPhrases["INSUFFICIENT_SPACE_ON_RESOURCE"] = "Insufficient Space on Resource";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
     *
     * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
     */
    ReasonPhrases["INSUFFICIENT_STORAGE"] = "Insufficient Storage";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.1
     *
     * The server encountered an unexpected condition that prevented it from fulfilling the request.
     */
    ReasonPhrases["INTERNAL_SERVER_ERROR"] = "Internal Server Error";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.10
     *
     * The server rejected the request because the Content-Length header field is not defined and the server requires it.
     */
    ReasonPhrases["LENGTH_REQUIRED"] = "Length Required";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.4
     *
     * The resource that is being accessed is locked.
     */
    ReasonPhrases["LOCKED"] = "Locked";
    /**
     * @deprecated
     * Official Documentation @ https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt
     *
     * A deprecated response used by the Spring Framework when a method has failed.
     */
    ReasonPhrases["METHOD_FAILURE"] = "Method Failure";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.5
     *
     * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
     */
    ReasonPhrases["METHOD_NOT_ALLOWED"] = "Method Not Allowed";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2
     *
     * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
     */
    ReasonPhrases["MOVED_PERMANENTLY"] = "Moved Permanently";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.3
     *
     * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
     */
    ReasonPhrases["MOVED_TEMPORARILY"] = "Moved Temporarily";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.2
     *
     * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
     */
    ReasonPhrases["MULTI_STATUS"] = "Multi-Status";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.1
     *
     * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
     */
    ReasonPhrases["MULTIPLE_CHOICES"] = "Multiple Choices";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6
     *
     * The 511 status code indicates that the client needs to authenticate to gain network access.
     */
    ReasonPhrases["NETWORK_AUTHENTICATION_REQUIRED"] = "Network Authentication Required";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5
     *
     * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
     */
    ReasonPhrases["NO_CONTENT"] = "No Content";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
     *
     * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
     */
    ReasonPhrases["NON_AUTHORITATIVE_INFORMATION"] = "Non Authoritative Information";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6
     *
     * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
     */
    ReasonPhrases["NOT_ACCEPTABLE"] = "Not Acceptable";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4
     *
     * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
     */
    ReasonPhrases["NOT_FOUND"] = "Not Found";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2
     *
     * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
     */
    ReasonPhrases["NOT_IMPLEMENTED"] = "Not Implemented";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.1
     *
     * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
     */
    ReasonPhrases["NOT_MODIFIED"] = "Not Modified";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.1
     *
     * The request has succeeded. The meaning of a success varies depending on the HTTP method:
     * GET: The resource has been fetched and is transmitted in the message body.
     * HEAD: The entity headers are in the message body.
     * POST: The resource describing the result of the action is transmitted in the message body.
     * TRACE: The message body contains the request message as received by the server
     */
    ReasonPhrases["OK"] = "OK";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1
     *
     * This response code is used because of range header sent by the client to separate download into multiple streams.
     */
    ReasonPhrases["PARTIAL_CONTENT"] = "Partial Content";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2
     *
     * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
     */
    ReasonPhrases["PAYMENT_REQUIRED"] = "Payment Required";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3
     *
     * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     */
    ReasonPhrases["PERMANENT_REDIRECT"] = "Permanent Redirect";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2
     *
     * The client has indicated preconditions in its headers which the server does not meet.
     */
    ReasonPhrases["PRECONDITION_FAILED"] = "Precondition Failed";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3
     *
     * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
     */
    ReasonPhrases["PRECONDITION_REQUIRED"] = "Precondition Required";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1
     *
     * This code indicates that the server has received and is processing the request, but no response is available yet.
     */
    ReasonPhrases["PROCESSING"] = "Processing";
    /**
     * Official Documentation @ https://www.rfc-editor.org/rfc/rfc8297#page-3
     *
     * This code indicates to the client that the server is likely to send a final response with the header fields included in the informational response.
     */
    ReasonPhrases["EARLY_HINTS"] = "Early Hints";
    /**
     * Official Documentation @ https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15
     *
     * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
     */
    ReasonPhrases["UPGRADE_REQUIRED"] = "Upgrade Required";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2
     *
     * This is similar to 401 but authentication is needed to be done by a proxy.
     */
    ReasonPhrases["PROXY_AUTHENTICATION_REQUIRED"] = "Proxy Authentication Required";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5
     *
     * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
     */
    ReasonPhrases["REQUEST_HEADER_FIELDS_TOO_LARGE"] = "Request Header Fields Too Large";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7
     *
     * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
     */
    ReasonPhrases["REQUEST_TIMEOUT"] = "Request Timeout";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11
     *
     * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
     */
    ReasonPhrases["REQUEST_TOO_LONG"] = "Request Entity Too Large";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12
     *
     * The URI requested by the client is longer than the server is willing to interpret.
     */
    ReasonPhrases["REQUEST_URI_TOO_LONG"] = "Request-URI Too Long";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4
     *
     * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
     */
    ReasonPhrases["REQUESTED_RANGE_NOT_SATISFIABLE"] = "Requested Range Not Satisfiable";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6
     *
     * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
     */
    ReasonPhrases["RESET_CONTENT"] = "Reset Content";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4
     *
     * Server sent this response to directing client to get requested resource to another URI with an GET request.
     */
    ReasonPhrases["SEE_OTHER"] = "See Other";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4
     *
     * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
     */
    ReasonPhrases["SERVICE_UNAVAILABLE"] = "Service Unavailable";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2
     *
     * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
     */
    ReasonPhrases["SWITCHING_PROTOCOLS"] = "Switching Protocols";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7
     *
     * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     */
    ReasonPhrases["TEMPORARY_REDIRECT"] = "Temporary Redirect";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4
     *
     * The user has sent too many requests in a given amount of time ("rate limiting").
     */
    ReasonPhrases["TOO_MANY_REQUESTS"] = "Too Many Requests";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1
     *
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
     */
    ReasonPhrases["UNAUTHORIZED"] = "Unauthorized";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7725
     *
     * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
     */
    ReasonPhrases["UNAVAILABLE_FOR_LEGAL_REASONS"] = "Unavailable For Legal Reasons";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3
     *
     * The request was well-formed but was unable to be followed due to semantic errors.
     */
    ReasonPhrases["UNPROCESSABLE_ENTITY"] = "Unprocessable Entity";
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.13
     *
     * The media format of the requested data is not supported by the server, so the server is rejecting the request.
     */
    ReasonPhrases["UNSUPPORTED_MEDIA_TYPE"] = "Unsupported Media Type";
    /**
     * @deprecated
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.6
     *
     * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
     */
    ReasonPhrases["USE_PROXY"] = "Use Proxy";
    /**
     * Official Documentation @ https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
     *
     * Defined in the specification of HTTP/2 to indicate that a server is not able to produce a response for the combination of scheme and authority that are included in the request URI.
     */
    ReasonPhrases["MISDIRECTED_REQUEST"] = "Misdirected Request";
})(ReasonPhrases || (ReasonPhrases = {}));


/***/ }),
/* 9 */
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map