# Virtual-Labs VSCode Extension

This web extension is a part of the Virtual Labs project. It is a VSCode extension that provides a set of commands to interact with the Virtual Labs API.

## How to Run

1. Clone the repository
2. Open the repository in VSCode
3. install node modules using `npm install`
4. compile the extension using `npm run compile-web`

For testing in local environment:
    run dev mode using `npm run dev`

For testing in production environment in vscode.dev :

- ensure the availability of mkcert (if not installed : `brew install mkcert` or `choco install mkcert` or `apt-get install mkcert`)
- Then run `generate-certificate` to generate the certificate for localhost (needed for only first time of testing).
- run production using `npm run start-vscode-server`
- Now paste the localhost link in the vscode.dev at workspace option (developer: install) and install the extension.

**Note**: The compilation should be done before running the extension. If you encounter any error, make sure that you have compiled the code first.

The extension is not yet published to the marketplace. It is still under development.
