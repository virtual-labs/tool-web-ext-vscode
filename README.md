# Updates on the Workflow

The workflow now creates the build folder and pushes it to the `gh-pages` branch. 

### Problems encountered and fixes
- The build folder is too large for gh-pages to host all of it. The number of files is around 2,000,000. The folder does get pushed to the branch, but results in an error when the page is tried to be deployed.

    Upon deleting the `pycache` folder alone, the number of files is reduced to 4000, but github still does not allow for such a large number of files to be hosted. 
    After this, I attempted to delete all the files in `venv` folder, which resulted in the page being hosted. (The number of files at this point is around 2000).

### Hosting of the current progress
The current progress will be in the link `https://virtual-labs.github.io/${{github.repository}}/build`. The user can now click on this to open and view the current progress

---

# Using a workflow for the web-extension

The following progress reflects the progress made in trying to integrate the “Build”, “Deploy Local” and “Clean” buttons alone, and does not reflect the progress of the other functionalities.

This week has been spent in trying to understand what the best way to make the “local” functions work, as nothing can be local on [vscode.dev](http://vscode.dev).

The idea now is to combine the three buttons - “Build”, “Deploy Local” and “Clean” into one button that can show the current state of the code. Let’s call this button “View Current Experiment”.

The intermediate goal:

- The user clicks on the “View Current Experiment” button and an event is triggered that pushes all the changes to the dev branch of the experiment, which triggers a workflow.
- The workflow creates the build folder and connects to a machine that can host the contents of the build folder. This machine should be able to host and kill the server on the fly.

Current progress:

- The user opens the repository on [vscode.dev](http://vscode.dev)
- The user now creates a folder named .github navigates into it, creates another workflow named workflows and then creates a file named scripts.yml and copy pastes the workflow code into it
    
- The user then pushes the changes to git, which is the trigger for the workflow.
- The workflow loads the contents of the repository, runs the build command.
- The resultant files are zipped and added as an artefact. The workflow creates a URL, which upon clicking will download the contents of the zip file.

(This eliminates the need to create a separate branch just to store the contents of build and delete them again.)

In order to check the current progress (and as this week’s demo, possibly)

- open the ‘experiment’ repository
- download the actions extension and trust the workspace
- make a change somewhere
- push the changes to git
- view the action in progress
- click on the url
- unzip the contents of build
- navigate to the location of the download and host it locally

Next steps:

- Use the build folder and connect to a cloud-based machine that can host the contents of the build folder and reload the contents in it when another push is done.
- This machine should be able to run the python command `python3 -m http.server` in the location of the build folder or something similar, in order to host the folder.

Steps to automate the entire process can be integrated as further steps, once the functionality of “View Current Experiment” is completed manually.

The steps that will be automated are:

- The creation of the workflow in the correct location (which will trigger a workflow for the first time, displaying the current contents, before any change has been made for the current session)
- The pushes to dev branch for each click of the button (which automatically triggers the workflow)

Technologies explored and experimented with:

- GitHub actions:
    - functioning of a workflow, events that trigger it
        
        https://docs.github.com/en/actions/using-workflows/triggering-a-workflow
        
        https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows
        
        https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow
        
        https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions
        
    - use of a self-hosted runner (once we find a machine, maybe a similar idea can be used to make the a runner display the contents of  build)
        
        https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners
        
        The above was used while trying to find a place to store the build folder before it gets cleaned by the workflow (which is what it does, unless place to store the folder persistently is found - this is currently as an artefact)
        
    - Github artifacts and how to store workflow data
        
        https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
        
- GitHub actions extension:
    - To try and use the inbuilt functionality of the extension in ours to accomplish automation
        
        https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions
        
        https://github.blog/2023-03-28-announcing-the-github-actions-extension-for-vs-code/
        
    
    This extension is also available on [vscode.dev](http://vscode.dev)
