# Design documents: Understanding the limitations of VS code web environment

### Limitation- Browser sandbox

- While a browser sandbox is effective in enhancing security, it also imposes limitations on what code can do within the browser environment.
- This is why certain applications or tasks that require broader system-level access, such as interacting with hardware devices or performing advanced file system operations, may not be feasible within a standard browser sandbox.
- Sand-boxed environments often provide a limited set of APIs for interacting with the browser and the underlying system. While these APIs offer a degree of functionality for web applications, they may not support advanced operations or access to certain features that are available outside the sandbox.

### Limitation- No node modules- only Typescript/JavaScript runs

- Node.js modules facilitate better dependency management, enabling the inclusion of external libraries and functionalities seamlessly.
- They provide access to server-side APIs for file system operations, networking, HTTP handling, and other system-level functionalities. They also have access to the Node.js standard library and third-party modules available via the Node Package Manager (NPM).
- This is comparison to typescript/JavaScript- which only has access to the browser's Document Object Model  API, primarily for manipulation of HTML elements, handling of user interactions, and manipulation of web content. In effect access to browser-specific APIs for features like canvas drawing, audio/video playback, and client-side storage.
- Node.js modules may utilise environment-specific features such as file I/O, networking, and process management, which are not available in the browser environment.
- The export and import mechanisms within modules provide a standardised way to share and consume functionalities, promoting cleaner and more maintainable code.
- The Node Package Manager (NPM) further enhances the ecosystem by simplifying the installation and management of third-party packages.
- Node.js modules contribute to more scalable, maintainable, and performant code execution, providing a robust foundation for building sophisticated server-side applications.

### Limitation- Lack of Robust Back-end Support

- Execution of code requests required robust back-end infrastructure and systems.
- This could involve server-side languages, such as Node.js, Python, or others, to interpret and execute the code.
- This is unavailable in default setup of VS code web

### Limitation- Lack of OS Support

- The absence of robust operating system (OS) support and hindering development capabilities can be a significant challenge.
- Without adequate OS support, environments may face limitations in terms of accessing system resources, managing dependencies, and implementing certain functionalities.
- This can hinder the development process and impact the overall capabilities of the software being built.
- For instance, the lack of OS support may restrict developers from utilising specific libraries, tools, or system-level features that are essential for certain applications.
- Compatibility issues and limited access to hardware resources could impede the development of high-performance or resource-intensive software.
- Overall, the lack of access to systems OS from VS code web causes significant hindrance to development environment.

### Limitation-Lack of virtual machines

- Using virtual machines (VMs) in developer environments is crucial for functionalities that a standalone integrated development environment (IDE) lacking VM support would struggle with.
- VMs ensure each developer environment is isolated, preventing conflicts. They also contribute to consistency across different setups and enhance the portability of developer environments, allowing for seamless transitions between devices.
- Further, VMs enable web-based access, prioritising flexibility and accessibility in developer workflows.
- In essence, integrating virtual machines addresses challenges that a pure IDE without VM support would face in delivering a standardised, portable, and web-accessible development environment.
- A pure IDE lacking VM support finds it difficult to deliver a standardised, and web-accessible development environment.

### Understanding limitations & potential workarounds

- After experiencing difficulties in making an extension in which code ran directly (of a language such as C++ and Python was able to execute), we looked into existing online developer environments such as CodeAnywhere and compared that to default available functionalities in VS Code dev.
- This helped us understand underlying mechanisms present which are involved in executing code in an web-based IDE
- A potential workaround is **WebAssembly (Wasm)**
    - This an open standard that defines a binary instruction format and a corresponding textual representation, designed to enable high-performance execution of code on web pages.
    - Developers write code in programming languages like C, C++, Rust, or others, and then compile it into WebAssembly bytecode.
    - It is a portable compilation target for programming languages, allowing developers to write code in languages like C, C++, Rust, and others, and compile them into WebAssembly modules that can run in web browsers at near-native speed.
    - Its designed to enable high-performance execution of code on web pages, specifically in a sandboxed environment within the browser, enhancing security by isolating the code from the rest of the system.
    - If we could incorporate WASM (**WebAssembly**), we can modify the [vscode.dev](http://vscode.dev) codebase to add features to run files on the terminal.