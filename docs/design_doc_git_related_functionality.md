# Design documents: git related functionality

### Isomorphic git

| Problem: | Git clone functionality, Git push functionality, Git pull functionality |
| --- | --- |
| Problem Description:  | The original VS code extension made use of the npm module simple git to implement the above functionality. However web extensions do not support this module; as they don't have access to module loading. 
https://code.visualstudio.com/api/extension-guides/web-extensions#web-extension-anatomy |
| Proposed alternative: | isomorphic-git 1.x |
| Description: | This is a complete JavaScript adaptation of git that operates smoothly in both Node.js and browser JavaScript setups. It is designed to handle git repositories, enabling reading and writing operations, along with fetching from and pushing to git remotes such as GitHub. |
| Repository: | https://github.com/isomorphic-git/isomorphic-git |
| Related links: | https://isomorphic-git.org/ |

### Functionalities to be used:

| Name of function | Arguments | Use |
| --- | --- | --- |
| clone | fs- FsClient; http- HttpClient; dir- working tree directory path; gitdir - git directory path; url- url of remote repo | To implement git clone functionality being used for 'Initialize Experiment functionality' |
| pull | fs- FsClient; http- HttpClient; dir- working tree directory path; gitdir - git directory path | To implement functionality for 'Submit for Review' functionality |
| push | fs- FsClient; http- HttpClient | To implement functionality for 'Deploy for Testing' functionality |

### Issues encountered:

| Issue ID | IS.1 |
| --- | --- |
| Issue name | Finding correct file system for implementation |
| Description | VS code extension makes use of a virtual file system, with restricted access and only via vscode.workspace.fs .This doesn't seem to be working for the above functions, so alternatives are being considered. However this involves resolving a lot of dependencies and hit-and-trial method. |
| Potential solutions | Nativefs; Memfs; filer.js |
| Additional info | - NA-  |
| Final solution | - NA-  |
| Date of resolution | - NA- |

| Issue ID | IS.2 |
| --- | --- |
| Issue name | Working of isomorphic-git |
| Description | Isomorphic-git does not seem to be working at all on VS code web. We tested a function with no fs argument and attempted to use this on a mock VS code extension and mock VS web extension. It worked only on the former, suggesting there might be an issue with running it in the development environment |
| Potential solutions | Checking if it could be a CORS issue
Analysis of other isomorphic functions |
| Additional info | Testing was done via getRemoteInfo API of isomorphic git. The API requires no file system, only mandatory argument was URL .This ran on a plugin, used as a control, but wasn't able to run on a VS code web extension in developer Environment. Link for API: https://isomorphic-git.org/docs/en/0.77.0/getRemoteInfo |
| Final solution | Alternative completely independent to this used via pre-existing API (abandoned)|
| Date of resolution | - NA- |

### VS Code API

| Problem: | Git clone functionality |
| --- | --- |
| Problem Description:  | The original VS code extension made use of the npm module simple git to implement the above functionality. However web extensions do not support this module as they don't have access to module loading. https://code.visualstudio.com/api/extension-guides/web-extensions#web-extension-anatomy |
| Proposed alternative: | VS Code API combined with Git Extension API; Execute command(1) and Open remote repository via remoteHub.openRepository(2) 
 |
| Description: | The Execute Command API allows extensions to execute specific commands programmatically to trigger commands that would otherwise be invoked through the user interface or keyboard shortcuts. Extensions can use the Execute Command API to automate tasks, perform actions based on user interactions, or enhance the functionality of the editor. In our case, we are using it to implement the open repository, our solution to replace git clone ; Note: git clone is specifically for creating a local copy of a remote repository, whereas "Open Repository" in VS Code is about loading an existing repository into the editor for development and collaboration. |
| Repository: | -NA- |
| Related links: | (1) https://code.visualstudio.com/api/references/vscode-api#commands; (2) https://code.visualstudio.com/updates/v1_53#_extension-authoring; (3) https://code.visualstudio.com/blogs/2021/06/10/remote-repositories#_open-your-first-remote-repo-in-vs-code |