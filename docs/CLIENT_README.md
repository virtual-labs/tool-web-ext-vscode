# Branch Change
If you want to migrate to another branch apart from 'dev' then change the url to:

https://raw.githubusercontent.com/virtual-labs/tool-web-ext-vscode/[branch-name]

Need to change in:
 baseImagesUrl (./github/workflows/publish.yml)
 baseContentUrl (./github/workflows/publish.yml)
 package-it (package.json, under scripts)

also in ./github/workflows/publish.yml:
ref: [branch-name]

and

git push origin [branch-name]

# Opening a Release

Go to the extension github page https://github.com/virtual-labs/tool-web-ext-vscode
Click on the "Create new release" under "Releases" in the right column of the page.
Enter a tag, generally of the form v0.4.6 else if its a pre release then v5.6.0-beta.
Select a target branch.
If you want you can automatically generate release notes.
And then publish the release. 

# Generate Personal Token

Go to repository settings.
Select Security and Variables.
Select actions
Select Repository Secrets.
Enter required details.
Add a repository secret