Episode 1 --
how to make a project using html, javascript and react
how to connect react in html


///////////////////////////////////////////////////////////////////////
day 1 Assugnment
//////////////////////////////////////////////////////////////////////


********************
Theory -
********************


1.-  What is Emmet ?
   ANS:-  Emmet is a powerful and highly efficient web development tool that simplifies and accelerates the process of writing HTML and CSS code. It is often referred to as an "abbreviation engine" because it allows you to use shorthand notation to generate full HTML and CSS code. Emmet is particularly popular among web developers for its ability to boost productivity by reducing the need for manual typing and speeding up the creation of web markup.

2.-  Difference between Library and framework ?
   ANS:-  libraries are like tools you can use when you need them, while frameworks are more like blueprints that dictate the structure and flow of your application. The choice between using a library or a framework depends on the specific requirements of your project. Libraries offer flexibility and allow you to build your own architecture, while frameworks provide a structured, opinionated approach to application development.

3.- What is cdn ? Why do we use it ?
ANS:-  A
A content delivery network (CDN) is a geographically distributed group of servers that work together to deliver web content to users with high availability and performance. CDNs cache static content, such as HTML, CSS, JavaScript images, and videos, at their edge servers located around the world. When a user requests a piece of content from a website that uses a CDN, the CDN delivers the content from the nearest edge server, which reduces latency and improves performance.

Here are some of the benefits of using a CDN:

Improved performance: CDNs can significantly improve the performance of websites and web applications by reducing latency and delivering content from servers that are closer to users. This can lead to faster page load times, improved responsiveness, and a better overall user experience.
Increased reliability: CDNs can also improve the reliability of websites and web applications by distributing content across multiple servers. This means that if one server goes down, other servers can still deliver the content to users. This can help to reduce downtime and improve the overall availability of websites and web applications.
Reduced bandwidth costs: CDNs can also help to reduce bandwidth costs by offloading traffic from origin servers. This is because CDNs cache content at their edge servers, which means that users do not need to download the content from the origin server every time they visit a website.
Improved security: CDNs can also help to improve the security of websites and web applications by providing protection against common attacks, such as denial-of-service (DoS) attacks and distributed denial-of-service (DDoS) attacks.
Here are some examples of how CDNs are used:

Websites: CDNs are widely used by websites to improve performance, reliability, and security. For example, many popular websites, such as Google, Amazon, and Netflix, use CDNs to deliver their content to users around the world.
Web applications: CDNs are also used by web applications to improve performance, reliability, and security. For example, many popular web applications, such as Twitter, Facebook, and GitHub, use CDNs to deliver their content to users around the world.
Streaming media: CDNs are also used to deliver streaming media content, such as videos and audio, to users with high performance and reliability. For example, many popular streaming media services, such as Netflix, Hulu, and Spotify, use CDNs to deliver their content to users around the world.
Overall, CDNs are a valuable tool for improving the performance, reliability, security, and scalability of websites, web applications, and streaming media services




4.-  Why is react Known as React?
ANS:-  
React is known as React because it is a reactive framework. This means that it is able to efficiently update and render user interfaces in response to changes in application state.

React uses a virtual DOM to keep track of the desired state of the UI. When the state of the application changes, React compares the virtual DOM to the real DOM and updates the real DOM only as necessary. This makes React very fast and efficient, especially when rendering complex UIs.

In addition to being reactive, React is also:

Declarative: React is a declarative framework, which means that you tell React what you want the UI to look like, and React takes care of the rest. This makes React code easy to read and maintain.
Component-based: React is a component-based framework, which means that you build your UI by composing reusable components. This makes React code modular and reusable.
Scalable: React is a scalable framework, which means that it can be used to build UIs of all sizes, from simple websites to complex web applications.
Overall, React is a popular front-end development framework because it is fast, efficient, declarative, component-based, and scalable. It is also known for its large community and ecosystem of tools and libraries.



5.-  What is cross-origin in the script tag ?
ANS:-  Cross-origin in the script tag is a way to tell the browser how to handle requests for scripts from other domains.

By default, browsers will only execute scripts from the same domain as the current page. This is a security measure to prevent malicious scripts from being executed on a user's computer.

However, there are times when you may need to execute a script from another domain. For example, you might be using a JavaScript library that is hosted on a third-party server.

To do this, you can use the crossorigin attribute on the script tag. This attribute has two possible values: anonymous and use-credentials.

anonymous: This tells the browser to execute the script without sending any credentials, such as cookies or HTTP authentication headers.
use-credentials: This tells the browser to execute the script and send any credentials that are necessary.
When to use crossorigin:

You should only use the crossorigin attribute if you are sure that the script you are loading is safe to execute. If you are not sure, it is best to err on the side of caution and not load the script.

Here are some examples of how to use the crossorigin attribute:

HTML
<script crossorigin="anonymous" src="https://example.com/my-script.js"></script>

<script crossorigin="use-credentials" src="https://example.com/my-script.js"></script>
Use code with caution. Learn more
Important: If you are using the crossorigin attribute, the server hosting the script must also be configured to allow cross-origin requests. This is typically done by adding the Access-Control-Allow-Origin header to the HTTP response.




6.-  What is difference between React and ReactDOM ?
ANS:-  React and ReactDOM are two JavaScript libraries that are often used together to build web applications. However, they have different purposes.

React is a library for building user interfaces. It provides a number of features that make it easy to create and manage complex UIs, such as:

Components: React allows you to build your UIs out of reusable components. This makes your code more modular and easier to maintain.
Virtual DOM: React uses a virtual DOM to keep track of the desired state of the UI. This makes it very fast and efficient to update the UI in response to changes in state.
One-way data flow: React uses a one-way data flow architecture, which makes it easier to reason about your code and prevent bugs.
ReactDOM is a library for rendering React components to the DOM. It provides a number of methods for interacting with the DOM, such as:

render() - Renders a React component to the DOM.
hydrate() - Hydrates a React component that has already been rendered to the DOM.
unmountComponentAtNode() - Unmounts a React component from the DOM.
In general, you will use React to create and manage your UIs, and you will use ReactDOM to render those UIs to the DOM.

Here is an example of how to use React and ReactDOM together:

JavaScript
// React component
const MyComponent = () => {
  return <h1>Hello, world!</h1>;
};

// ReactDOM
ReactDOM.render(<MyComponent />, document.getElementById('root'));
Use code with caution. Learn more
This code will render the MyComponent component to the DOM element with the ID root




7.-  What is difference between react.devlopment.js and react.production.js files via CDN ?
ANS:-  
The main difference between the react.development.js and react.production.js files via CDN is that the development version is optimized for debugging, while the production version is optimized for performance.

The development version includes a number of features that are helpful for debugging, such as:

Source maps: Source maps allow you to map the minified production code back to the original source code, which can be helpful for debugging errors.
Error messages: The development version provides more detailed error messages than the production version.
React warnings: The development version warns you about potential problems in your code, such as unused props and incorrect state updates.
The production version is optimized for performance by removing unnecessary code and minifying the code. This results in a smaller file size that loads faster and uses less memory.

When to use react.development.js:

When you are developing your application and need to debug errors.
When you want to see detailed error messages and React warnings.
When to use react.production.js:

When you are deploying your application to production.
When you want to improve the performance of your application.
Which file to use via CDN?

If you are developing your application, you should use the react.development.js file via CDN. This will give you access to the features that are helpful for debugging.

Once you are ready to deploy your application to production, you should switch to using the react.production.js file via CDN. This will improve the performance of your application.

Important: If you are using the react.development.js file, you should also include the react-dom.development.js file via CDN. This is because the development version of React depends on the development version of ReactDOM.




8.-  What are async and defer ? see my Youtube Videos.
ANS:-  async and defer are attributes that can be used on the <script> tag in HTML to control how JavaScript files are loaded and executed.

async

The async attribute tells the browser to download and execute the JavaScript file as soon as it is available, without waiting for the rest of the page to load.
This can improve the performance of your page, but it can also cause problems if the JavaScript file depends on other elements on the page that have not yet loaded.
For example, if the JavaScript file contains code to initialize a navigation menu, and the navigation menu has not yet been loaded, the JavaScript code will not be able to initialize the menu properly.
defer

The defer attribute tells the browser to download the JavaScript file but wait to execute it until the rest of the page has loaded.
This ensures that the JavaScript file will not interfere with the loading of other elements on the page.
However, it can also delay the execution of the JavaScript code, which can impact the performance of your page.
When to use async and defer

You should use the async attribute if you want to improve the performance of your page and the JavaScript file does not depend on other elements on the page.
You should use the defer attribute if you want to ensure that the JavaScript file does not interfere with the loading of other elements on the page.
Which one to use?

In general, it is best to use the defer attribute unless you have a specific reason to use the async attribute.

Here are some examples of when you might use the async attribute:

If you are using a JavaScript library that needs to be loaded as soon as possible, such as a library that provides analytics or crash reporting.
If you are using a JavaScript file to load other resources, such as images or CSS files.
Here are some examples of when you might use the defer attribute:

If you are using a JavaScript file to initialize UI elements, such as a navigation menu or a modal dialog.
If you are using a JavaScript file to handle user interaction, such as clicking a button or submitting a form.





9.-   What is rrow Functions in react ?
And:- Arrow functions are a concise way to write functions in JavaScript. They were introduced in ES6, and they are widely used in React.
Arrow functions have a number of benefits over traditional function expressions, including:
:- They are more concise.
:- They are lexically bound, which means that they do not need to be bound to a specific context.
:- They can be used as expressions, which makes them more flexible.
To define an arrow function, you use the following syntax:

For example, the following arrow function is equivalent to the following traditional function expression:

JavaScript
const add = (a, b) => {
  return a + b;
};

function add(a, b) {
  return a + b;
}
Use code with caution. Learn more
Arrow functions can be used anywhere that a function expression is expected. For example, you can use them to define event handlers, component lifecycle methods, and render functions.

Here is an example of how to use an arrow function as an event handler:

JavaScript
<button onClick={() => alert('Hello, world!')}>Click me!</button>
Use code with caution. Learn more
This code will render a button that alerts the message "Hello, world!" when it is clicked.

Arrow functions are a powerful tool that can make your React code more concise, readable, and flexible.

Here are some additional benefits of using arrow functions in React:

Improved readability: Arrow functions can make your React code more readable by reducing the amount of boilerplate code that you need to write.
Reduced code duplication: Arrow functions can help you to reduce code duplication by allowing you to define concise, reusable functions.
Enhanced performance: Arrow functions can help to improve the performance of your React code by reducing the amount of overhead that is required to execute functions.


**********************
COADING -
**********************

1.- Setup all tool on your Pc 
   a.- VS Code
   b.- Chrome
   c.- Extensions
2.- Create a new Git Repo
3.- Built your First Hello World Program using 
   a.- Just HTML
   b.- Js and Manipulate the DOM
   c.- Using React
4.- use CDN links
5.- Creat an Elemnent 
6.- Create nested React Elements 
7.- use root.render
8.- Push Code to GitHub
9.- Learn About Arrow Functions before the next class







************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day 2 Class Note
************************************************************************************************************
************************************************************************************************************-
* Parcel doing from pareljs.org-
* Dev Build
* Local server
* HMR (Hote Module Replacement)
* File Watching algrothime
* caching
* Image Optimization
* Minification
* Bundling
* Compress
* Consistant Hashing
* Coe Splitting
* Diffrential Bundling ( Support Older Browsers)
* Dignostic
* Error Handling
* HTTPs Tree Shaking ( reomve unused code for you)
* Diferent dev and Production Bundles
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day 2 Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  What is NPM?
*    ANS:-  NPM is a package manager. it's not just node package manager no its official site it dan't hav a singal full form.
 -------   Here's a breakdown of what npm does:
*   Package Registry: npm serves as a huge repository of software packages written in JavaScript. These packages contain code for various functionalities, like
    building web applications, performing API requests, manipulating data, and much more.
*   Package Installation and Management: npm allows you to easily install these packages into your project by running simple commands. It downloads the required 
    package files, manages dependencies between packages, and ensures everything is configured correctly.
    Version Control: npm lets you specify which version of a package you want to install and provides a way to update packages to newer versions easily.
    Dependency Resolution: When a package depends on other packages, npm automatically determines the required versions and installs them, saving you time and 
    effort.
    Script Execution: npm provides the ability to run custom scripts associated with packages, such as build scripts or test scripts.
    Community Contribution: npm thrives on a large and active community of developers who contribute and maintain packages, constantly expanding the available 
    functionalities.
  ------- Here are some reasons why npm is popular among developers:

     Wide range of packages: --  The npm registry boasts millions of packages, catering to various needs and tasks.
     Ease of use: --  Installing and managing packages is straightforward with simple commands.
    Version control: --  npm ensures you get the right version of each package and offers convenient upgrading options.
    Dependency management: --  npm handles dependencies automatically, simplifying project setup and maintenance.
* 
* 
* 2.- What is Parcel/Webpack? Why do we need it?
*  ANS:-  Both Parcel and Webpack are bundlers for front-end development. They are tools that help you bundle multiple files like your JavaScript, CSS, and HTML into a single file or a set of optimized files for your web application. This makes your web app leaner, faster to load, and easier to manage.

Here's why you might need a bundler like Parcel or Webpack:

Modularization: Break down your code into smaller, reusable modules for better organization and easier maintenance.
Dependency Management: Handle dependencies between different modules, ensuring everything works together seamlessly.
Transpiling: Convert modern JavaScript syntax to older versions that most browsers understand.
Minification: Reduce the size of your code by removing unnecessary characters and whitespace, improving loading speed.
Module Hot Reloading: See changes you make to your code reflected in the browser instantly without needing to refresh the page.
But why choose Parcel or Webpack? Each has its strengths and weaknesses:

Parcel:

Zero configuration: Just install Parcel and start using it without any complex setup.
Fast and simple: Bundles your code quickly and efficiently, making it good for beginners and smaller projects.
Automatic file type support: Handles various file types like JavaScript, CSS, HTML, and images without needing additional plugins.
Limited customization: Less flexible than Webpack for fine-grained control over your bundling process.
Webpack:

Highly configurable: Offers extensive options for customizing your bundling process to fit your specific needs.
Powerful ecosystem: Supports a vast array of plugins and loaders for specific functionalities and integrations.
Scalable: Suitable for large and complex projects with intricate dependencies and customization requirements.
Steeper learning curve: Requires more configuration and understanding of its inner workings compared to Parcel.
* 3.- What is Parcel-cache?
*  ans:-  
In Parcel, the .parcel-cache directory acts as a temporary storage location for information about your project during the build process. It plays a crucial role in optimizing build times and improving developer experience.

Here's how parcel-cache works:

Storing processed information: During the initial build, Parcel analyzes your project files, processes them (transpiling, minifying, etc.), and saves the processed versions in the .parcel-cache directory. This includes things like converted JavaScript modules, optimized CSS styles, and prepared assets.

Faster subsequent builds: When you make changes to your project and re-run Parcel, it checks the .parcel-cache directory for existing information. If the relevant files haven't changed, it can simply utilize the cached versions instead of reprocessing them from scratch. This significantly speeds up the build process, especially for large projects with numerous files.

Granular cache invalidation: .parcel-cache isn't just a static dump of everything. Parcel intelligently tracks dependencies between files. If you modify a file, it only invalidates the cached versions of files directly affected by the change and reprocesses those, while leaving others untouched. This ensures efficient cache utilization and avoids unnecessary rebuilding of unchanged parts.

Benefits of parcel-cache:

Faster build times: Subsequent builds become significantly faster because of cached information, saving you development time.
Improved developer experience: Quicker builds make the development process smoother and more responsive.
Resource optimization: Reusing cached information reduces CPU and memory usage during builds.
* 4.- What is npx?
*  ANS:-  npx stands for Node Package Executor. It's a utility included with npm, the Node Package Manager. Unlike npm, which primarily focuses on installing and managing packages, npx offers a way to execute packages globally without installing them.

Here's how npx works:

Executing packages: Simply use npx followed by the package name to run it, even if it's not installed globally. It automatically locates the package in the npm registry, downloads it temporarily, and runs it.
Avoiding global installations: This eliminates the need to install packages globally, which can clutter your system and lead to conflicts.
Temporary dependencies: The downloaded package is only used for the current execution and disappears afterward, ensuring a clean working environment.
Version control: You can specify the desired version of the package using the @ symbol after the package name, ensuring you use the specific version needed.
Here are some benefits of using npx:

Convenience: Avoids the hassle of installing and uninstalling packages for temporary usage.
Cleanliness: Maintains a clean system by not polluting it with unnecessary global installations.
Version control: Ensures you run the intended version of the package for each execution.
Versatility: Works with any package available in the npm registry, not just development tools.
Here are some examples of how you can use npx:

Run the ESLint linter on a single file: npx eslint my-file.js
Generate a new React project with Create React App: npx create-react-app my-app
Start a local server with Prettier: npx prettier-server
Overall, npx is a valuable tool for developers as it offers a convenient and efficient way to execute packages without adding clutter to your system. It promotes a clean development environment and allows you to utilize various tools without permanent installations.
* 5.- What is difference between dependencies vs devDependencies?
*  ANS:-  
Both dependencies and devDependencies are important parts of managing packages in projects, but they serve different purposes. Here's a breakdown of their key differences:

Dependencies:

Required for production: These are packages your application needs to function properly in a live environment. They are included in the final version of your application that users interact with.
Examples: Libraries for essential functionalities like UI rendering, data fetching, routing, etc.
Installation: Installed with npm install by default and automatically included in your production builds.
devDependencies:

Development tools: These are packages used only during the development process, not in the final application. They help with tasks like building, testing, linting, debugging, etc.
Examples: Build tools like Webpack, ESLint for code quality, test frameworks like Jest, etc.
Installation: Installed with npm install --save-dev and excluded from production builds.

Here's a table summarizing the key differences:

Feature           	                          Dependencies	                                  devDependencies
Purpose	                                Required for production functionality	         Used only during development
Included in final application	          Yes                                            No
Installation command	                  npm install	                                   npm install --save-dev
Excluded from production builds	        No	                                           Yes


Why the distinction matters:
Keeping production builds lean: By excluding devDependencies from your production builds, you keep the final application size smaller and faster to load for users.
Clear separation of concerns: Having separate dependencies and devDependencies helps maintain a clean project structure and avoids unnecessary clutter in your production code.
Development convenience: Easily access development tools while keeping them separate from your core application logic.
Choosing the right category:

It's crucial to carefully consider which category a package belongs to. If it's essential for your application's functionality, it belongs under dependencies. If it's solely used for development tasks, consider it a devDependency.

By understanding the differences and using them properly, you can manage your project's dependencies efficiently and optimize your production builds for better performance.
* 6.- What is Tree Shaking?
* ANS:-  In software development, particularly in JavaScript applications, tree shaking refers to the process of removing unused code from your bundle. Imagine a tree with numerous branches, where each branch represents a module in your code. Tree shaking identifies and eliminates the branches (modules) that aren't actually used by your application, resulting in a leaner and faster bundle.

Here's how it works:

Dependency analysis: During the build process, tools like Webpack or Parcel analyze your code to determine which modules are imported and used by other modules. Essentially, they trace the "connections" between branches in the tree.
Identifying dead code: Modules not connected to anything and not directly imported by your application are considered "dead code." These are the branches that can be safely removed without affecting the functionality of your code.
Code removal: The identified dead code is then physically removed from your bundle, significantly reducing its size.
Benefits of tree shaking:

Smaller bundle size: Less code translates to a smaller bundle, which reduces download times and improves the performance of your application.
Faster loading times: Smaller bundles take less time to download and parse, leading to quicker web application loading.
Improved user experience: Faster loading times translate to a better user experience, especially on slower internet connections.
Efficient resource utilization: Reduced code usage optimizes memory usage and resource consumption on both client and server sides.
How to enable tree shaking:

Bundlers: Most modern bundlers like Webpack and Parcel come with tree shaking functionality built-in. You can often enable it with specific configuration options or flags.
Module systems: Using modern module systems like ES Modules with static imports and exports helps the bundler better understand dependencies and analyze dead code effectively.
Remember:

Tree shaking effectiveness depends on your code structure and how well modules are imported and used.
Not all code can be removed through tree shaking. Code used dynamically or at runtime might still be included.
Overall, tree shaking is a valuable technique for optimizing your JavaScript applications, leading to faster loading times, better user experience, and efficient resource utilization. By incorporating it into your development workflow, you can deliver robust and performant web applications.
* 7.- What is Hot Module Replacement? 
*   ANS:- 
Hot Module Replacement (HMR) is a powerful feature in development tools like Webpack that enables you to see changes you make to your code reflected in the browser instantly, without needing to refresh the page. This can significantly improve your development experience by making it faster and more efficient to iterate on your code.

Here's how it works:

Changes detected: When you edit a file (JavaScript, CSS, HTML, etc.) in your project, HMR automatically detects the change.
Module analysis: HMR analyzes the changed file and determines which modules it impacts and how they relate to other modules in your application.
Selective update: Instead of rebuilding the entire application, HMR only updates the affected modules and replaces them in the existing bundle running in the browser.
Instant update: The refreshed modules are quickly injected into the running application, causing the changes to appear in the browser instantaneously.
Benefits of HMR:

Faster development cycle: You don't need to wait for page refreshes after every change, leading to a much faster development cycle.
Improved debugging: You can see the impact of your changes immediately, making it easier to diagnose and fix bugs.
Enhanced productivity: HMR eliminates the repetitive task of refreshing the page, allowing you to focus on coding and improving your application.
Live coding experience: You can effectively "live code" and see your changes come to life instantly, making development more interactive and enjoyable.
Limitations of HMR:

Not guaranteed for all modules: Certain modules (like those using complex state management) might not be fully compatible with HMR.
Performance considerations: While generally fast, HMR can sometimes add slight overhead to the building and updating process.
Overall, HMR is a powerful tool that can significantly improve your development workflow by making it faster, more efficient, and more enjoyable. It's especially beneficial for projects with frequent code changes and complex UIs.
* 8.- listdown your faverite five superpowers of parceland describe any three of them in your words?
*   ANS:- 1. Zero Configuration: Imagine stepping into a kitchen with all the ingredients prepped and the utensils ready to go. Parcel is like that! It requires minimal configuration, allowing you to start building your project right away without getting bogged down in settings and options.

2. Blazingly Fast Bundling: Forget waiting for your code to compile for an eternity. Parcel boasts incredibly fast bundling speeds, letting you see your changes reflected in the browser instantly. Development becomes a smooth, responsive dance instead of a slow, frustrating crawl.

3. Automatic File Type Support: Whether you're dealing with JavaScript, CSS, HTML, images, or even fonts, Parcel handles them all effortlessly. No need to install separate loaders or plugins for each file type. It's like having a universal translator for your code ecosystem.

4. Developer Experience Delight: Parcel focuses on making your development life a paradise. Hot Module Replacement lets you see changes instantly, code splitting keeps your bundle size lean, and error messages are clear and helpful. It's like coding with a best friend who always has your back.

5. Built-in Server and Production Readiness: Gone are the days of setting up separate servers for development and production. Parcel includes a built-in development server and helps you prepare your code for deployment with ease. It's like having a one-stop shop for your entire front-end workflow.

Describing three in my own words:

Zero Configuration: Picture a painter's palette with all the vibrant colors readily available. No need to mix your own or search for the perfect shade. With Parcel, you grab your brush and start painting immediately, unleashing your creativity without technical roadblocks.

Blazingly Fast Bundling: Imagine a cheetah typing code instead of a snail. That's the speed we're talking about! Changes appear in the browser like lightning, keeping your development flow in a constant state of momentum and excitement.

Automatic File Type Support: Think of a universal translator for languages, but for code files. Parcel understands all the dialects, seamlessly handling JavaScript, CSS, HTML, and more, allowing you to communicate your ideas in any format without needing multiple interpreters.

These are just a taste of Parcel's impressive superpowers. If you're looking for a tool that makes front-end development faster, smoother, and more enjoyable, give Parcel a try. It might just become your new code superhero!
* 9.- What is .gitignore? What should we add and not add into it?
*   ANS:- .gitignore file is a simple text file in your Git repository that tells Git what files and folders to ignore when tracking changes. This helps keep your Git repository clean and organized by excluding unnecessary or temporary files that shouldn't be part of your codebase.

Here's what to add and not add to your .gitignore file:

Add:

Generated files: Any files generated by build processes, compilers, or other tools, like compiled JavaScript/CSS, minified files, or production builds.
Environment-specific files: Configuration files specific to your development environment, like local database credentials, API keys, or development server settings.
Logs and temporary files: Temporary files created during development, like logs, caches, or test output.
Personal and IDE settings: IDE project files, code editor settings, or personal configuration files not relevant to the codebase.
Large media files: Big multimedia files like images, videos, or audio not intended for version control due to their size.
Don't Add:

Source code: Any files containing your actual code (JavaScript, Python, etc.), templates, or configuration files relevant to your application's functionality.
Documentation: Application documentation, readme files, or API reference files that should be tracked and versioned.
Tests: Unit tests, integration tests, and other test files essential for verifying your code's functionality.
Build scripts: Scripts used to build your application, like webpack configuration files or deployment scripts.
Important data: Configuration files or data files vital for the application's operation, like database schema definitions or seed data.
Remember:

Use clear and concise patterns in your .gitignore file. Common ignore patterns like *.log or node_modules/* can be helpful.
Be cautious about ignoring things like sensitive information or production secrets. Consider using separate files or environment variables for such data.
Share your .gitignore file with your team to ensure everyone follows the same rules for Git.
By maintaining a well-crafted .gitignore file, you can improve your Git workflow and keep your repository clean, focused, and easy to manage.
* 10.- What is deferance between package.json and package-lock.json?
*   ANS:- The main difference between package.json and package-lock.json lies in their purpose and how they manage dependencies in your project. Here's a breakdown:

1. Purpose:

package.json:

Acts as the manifest file for your project.
Specifies project information like name, version, description, authors, etc.
Declares your project's dependencies by listing the packages it relies on, along with their desired versions (ranges or specific versions).
package-lock.json:

Generated automatically by npm when you install or update a package.
Locks down the exact versions of all your dependencies and their sub-dependencies.
Ensures deterministic installations across different environments, regardless of individual machine configurations.
2. Version Management:

package.json:

Provides flexible version ranges for dependencies. For example, you might specify "^3.2.0" for a package, allowing npm to install any version above 3.2.0 but below 4.0.0.
This gives you some freedom to automatically get newer minor or patch updates within the specified range.
package-lock.json:

Pins down the exact version of every dependency and its sub-dependencies.
This ensures every machine installing your project uses the same precise versions, leading to reproducible builds and behavior.
3. Sharing and Collaboration:

package.json:

Shared with your team and included in version control like Git.
Developers can understand the declared dependencies and their versions.
Provides a basis for initial installation and setup.
package-lock.json:

Primarily used locally on each developer's machine.
Guards against unexpected dependency changes due to version ranges in package.json.
Should not be included in version control.
In summary:

package.json specifies your desired dependencies and versions, offering flexibility.
package-lock.json ensures exact versions are used in every installation, promoting reproducibility and stability.
Both files work together to manage your project's dependencies effectively. By understanding their differences, you can leverage them to maintain a reliable and predictable development environment.
* 11.- Why should i not modify package-lock.json?
*   ANS:- There are several reasons why you should generally avoid modifying package-lock.json manually:

Deterministic builds: package-lock.json ensures that whenever you run npm install or npm update, your project receives the exact same versions of all its dependencies and sub-dependencies. This is crucial for:

Reproducible builds: Every developer working on your project will have the same environment, leading to consistent behavior and avoiding discrepancies that can arise from different versions.
Testing reliability: Unit tests and other automated tests will always have the same dependencies to interact with, making test results consistent and reliable.
Production stability: Deploying your application using the versions specified in package-lock.json avoids unexpected behavior due to changing dependency versions.
Version lock conflicts: Modifying package-lock.json by hand can potentially cause conflicts with the version ranges and dependencies specified in package.json. This can lead to unpredictable behavior and break your build.

NPM handles updates: npm is designed to manage dependency updates for you. Modifying package-lock.json bypasses this mechanism and can introduce complexities when updating individual dependencies later.

Potential for errors: Manually editing package-lock.json can lead to accidental errors that may not be easily detectable. This can introduce unforeseen issues into your project.

Best practices:

Use npm install, npm update, or your build tool's preferred command to manage dependencies and update package-lock.json automatically.
If you need to modify a specific dependency version, consider updating package.json and running npm install to update both files again.
Only modify package-lock.json in rare cases where specific conflicts need to be resolved manually. Do so with caution and understanding the potential consequences.
In most situations, letting npm and your build tool handle package-lock.json is the safest and most reliable approach. This ensures predictable builds, stable dependencies, and avoids the risks associated with manual manipulation.

* 12.- What is Node-Modules? is it a good idea to push that on git?
*   ANS:- The node_modules folder contains all the downloaded dependencies your project relies on from the npm registry. Pushing it to Git is generally not recommended for several reasons:

1. Size and Redundancy:

node_modules often holds large libraries and files, bloating your Git repository unnecessarily. This can significantly increase storage requirements and slow down downloads for collaborators.
Each developer's machine already downloads and installs the required dependencies based on your package.json file, making the folder redundant in the repository.
2. Version Control Issues:

Frequent updates to dependencies can result in a constantly changing node_modules folder, making it difficult to track changes and manage versions effectively in Git.
Conflicts can arise when merging branches involving changes to dependencies, leading to complex merge resolutions.
3. Security Concerns:

Pushing sensitive information like API keys or other secrets accidentally included in dependencies can pose security risks. It's best to handle such information separately using environment variables or secure storage mechanisms.
4. Alternative Solutions:

Using tools like npm install during deployment ensures fresh installs of dependencies on target environments without bloating the Git repository.
Utilizing dependency caching in CI/CD pipelines can further optimize deployments and avoid repetitive downloads.
Instead of pushing node_modules:

Add node_modules to your .gitignore file to exclude it from version control.
Ensure your package.json properly specifies all required dependencies and their versions.
Rely on your build process or deployment scripts to install the necessary dependencies on different environments.
By avoiding pushing node_modules, you can maintain a clean and efficient Git repository, simplify collaboration, and avoid potential issues related to size, version control, and security.

Remember:

While pushing node_modules might seem convenient in rare cases, its downsides often outweigh the benefits. Consider alternative solutions like automated installations and dependency caching for a more streamlined and secure development workflow.
* 13.- What is dist folder?
*   ANS:- In software development, the dist folder (short for distribution) typically holds the compiled or production-ready version of your application or project. It often houses files that are ready to be deployed to a live environment or distributed to users.

Here's what commonly gets stored in a dist folder:

Minified and optimized files: Javascript, CSS, and other web assets might be minified and optimized to reduce their size and improve loading speed in production.
Compiled code: Depending on your development tools and languages, compiled versions of your code (.exe files for desktop applications, bundled JavaScript for web apps) might reside in the dist folder.
Static assets: Images, fonts, and other static files used in your application are often placed in the dist folder for deployment.
Generated configurations: Some build tools might generate configuration files specific to the production environment and put them in the dist folder.
The specific contents of the dist folder will vary depending on the type of project you're working on and the tools you're using. However, the general principle remains the same - it stores the final, optimized version of your project that's ready for deployment and consumption by users.

Here are some additional points to consider:

Not version-controlled: The dist folder typically isn't included in your Git repository as it contains generated and optimized files. Pushing it to Git would unnecessarily bloat the repository and cause version control issues.
Generated during build: The contents of the dist folder are usually generated during a build process using tools like Webpack, Parcel, or other build systems. These tools analyze your source code and dependencies, optimize files, and generate the final artifacts for deployment.
Specific structure: Depending on the build tools and project needs, the dist folder might have a specific structure with subfolders for different types of assets or resources.
Understanding the purpose and contents of the dist folder helps you navigate your project structure better and manage your build process effectively. It's essential to distinguish it from your source code folder (often called src) and understand how both play crucial roles in your development workflow.
* 14.- What is browserlists Read and dif bundlers: vite, webpack, parcel
*   ANS:- Browserlists Read and Dif Bundlers: Vite, Webpack, Parcel
This inquiry touches on two separate topics: browserlists and bundlers. Let's explore them individually:

1. Browserlists Read and Dif:

Browserlists: A web platform containing data on various browsers and their supported features. It defines "targets" based on browser usage statistics and ensures your code works for the intended audience.
Read and Dif: Refers to reading and comparing browserlist targets. This helps developers understand which browsers their code needs to support and identify differences between target definitions.
2. Bundlers: Vite, Webpack, Parcel:

Bundlers: Tools that combine various files like JavaScript, CSS, and HTML into a single bundle or several optimized files. This simplifies deployment and improves web app performance.
Vite: A modern bundler known for its blazing-fast build times and hot module replacement (HMR) functionality.
Webpack: A powerful and highly configurable bundler offering comprehensive control over your build process and extensive plugin ecosystem.
Parcel: A zero-configuration bundler focused on ease of use and automatic file type support.


Comparing the Bundlers:

    Feature	                           Vite	                        Webpack	                       Parcel
  Configuration            	        Zero-configuration	          Highly configurable	          Zero-configuration
  Build Speed                    	  Extremely fast	              Moderate	                    Fast
  HMR	                              Yes	                          Yes	                          Yes
  Community and Plugins	            Growing	                      Mature and extensive	        Moderate
  Learning Curve                   	Easy	                        Steeper                     	Easy


Choosing the Right Bundler:
The choice depends on your project's needs and preferences:

Vite: Ideal for quick development cycles and projects needing fast builds and real-time updates.
Webpack: Suitable for complex projects requiring fine-grained control and extensive plugin capabilities.
Parcel: Perfect for beginners and projects emphasizing simplicity and automatic configuration.
Additional Resources:

Browserlists: https://github.com/browserslist/browserslist
Vite: https://vitejs.dev/
Webpack: https://github.com/webpack/webpack.js.org
Parcel: https://en.parceljs.org/getting_started.html

* 15.- Read About: ^ - caret and ~ - tilda.
*   ANS:- done
* 16.- Read about Script types in Html (MDN Docs).
*   ANS:- done
* 17._ Difference beetween git and github?
*   ANS:- Git and GitHub, while often used interchangeably, are distinct tools with different purposes in software development. Here's a breakdown of their key differences:

1. Nature:

Git: A version control system (VCS) used to track changes in code over time. It allows you to save different versions of your project, revert to past states, and collaborate with others.
GitHub: A web-based hosting platform for Git repositories. It provides a user interface and collaboration features for teams to manage their code together.
2. Functionality:

Git: Focuses on storing and managing versions of your project files. It offers branching and merging functionality to collaborate and track different development paths.
GitHub: Offers additional features like issue tracking, project management tools, code review tools, and social functionalities like following other developers and projects.
3. Scope:

Git: Can be used locally on your own computer or collaboratively with others through remote repositories hosted on platforms like GitHub.
GitHub: Primarily used for public or private code hosting and collaboration among teams.
4. Accessibility:

Git: Requires installation and command-line interaction.
GitHub: Provides a web-based interface and offers graphical tools for easier Git manipulation.
5. Ownership:

Git: Open-source software maintained by the Linux Foundation.
GitHub: Owned by Microsoft.
Analogy:

Think of Git as a notebook where you track changes in your project's files. GitHub is like a cloud drive where you can store and share your notebooks with others and collaborate on them.

In summary:

Git is the tool for managing versions of your code.
GitHub is the platform for hosting and collaborating on Git repositories.
Both Git and GitHub are essential tools for software development, each playing a crucial role in managing and collaborating on code projects. Understanding their differences and how they work together will help you choose the right tools for your project and streamline your development workflow.


**********************
COADING -
**********************

1.- intialize npm into your repo.
2.- install react and react-dom
3.- remove CDN links into react.
4.- install parcel
5.- ignite your app with parcel.
6.- add script for "start" and "build" with parcel commands.
7.- add .gitignore file
8.- add browserlists.
9.- build a production version of your code using parcel build.


**********************
Reference -
**********************

1.- Creating your own create-react-app
2.- parcel documentation 
3.- Browserlist: https://browserlist.dev/
4.- Parcel on Production


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************






************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day 3 Topics
************************************************************************************************************
************************************************************************************************************-
* 
* 1- JSX
* 2- React.crteateElement vs JSX
* 3- Benefits of jsx
* 4- Behind the Scenes of JSX
* 5- BAbel & Parcel role in JSX
* 6- Components
* 7- Functional Components
*    (i)- Composing Components
* 8.- What is Eqamscript (ES6)
* 
* ///////////////////////////////////////////////////////////////////////
* day 3 Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  What is JSX?
*    ANS:-  JSX, which stands for JavaScript Syntax Extension, is a way to write HTML-like code directly within your JavaScript files. It allows you to create components with familiar HTML syntax and embed them within your JavaScript code, making it easier to build user interfaces in React and other web frameworks.

Here are some key features of JSX:

HTML-like syntax: You can use familiar HTML tags and attributes within your JavaScript files, making it easier to understand and write the structure of your components.
Components: JSX elements represent components, which are reusable pieces of UI that can be combined to build complex interfaces.
Expression embedding: You can embed JavaScript expressions within JSX attributes and tags, allowing you to dynamically set values and attributes based on data or state.
Improved readability: JSX can make your code more readable and maintainable by separating UI logic from JavaScript logic in a clear and distinct way.


Here's an example of how JSX might be used in a React component:

JavaScript
const Greeting = () => {
  const name = 'John';
  return (
    <h1>Hello, {name}!</h1>
  );
};

ReactDOM.render(<Greeting />, document.getElementById('root'));
Use code with caution. Learn more
In this example, the Greeting component uses JSX to create an <h1> element with the message "Hello, John!". The curly braces allow us to embed the variable name directly within the element's content.

Here are some benefits of using JSX:

Simplicity: JSX makes it easier to write and maintain complex user interfaces with a familiar syntax.
Readability: By separating UI logic from JavaScript logic, JSX can improve the overall readability of your code.
Component-based development: JSX encourages a component-based approach to UI development, which can make your code more modular and reusable.
However, there are also some potential drawbacks to using JSX:

Learning curve: If you're not familiar with HTML or XML, JSX can have a slight learning curve.
Potential for errors: Embedding JavaScript expressions within JSX can introduce new types of errors if not used carefully.
Not universally supported: JSX is specific to certain frameworks like React and might not be suitable for all projects.
Overall, JSX is a powerful tool that can simplify and improve the development of user interfaces in React and other web frameworks. However, it's important to weigh the benefits and drawbacks before deciding whether to use it in your project.
* 
* 
* 2.- Superpowers of JSX?
*    ANS:- While JSX might not exactly be a superhero with flashy capes and laser vision, it does boast some impressive superpowers that can dramatically improve your web development experience, especially when building user interfaces (UIs) with React and other similar frameworks. Let's dive into some of its most impactful strengths:

1. Simplifying UI Development:

Familiar Syntax: Forget complex JavaScript object manipulations for UI elements. JSX lets you write UI structures using familiar HTML-like syntax, making code more intuitive and easier to grasp, both for you and your collaborators.
Direct Manipulation: No more jumping between HTML and JavaScript files. JSX lets you embed dynamic behavior directly within your UI elements using JavaScript expressions, creating a seamless flow between structure and logic.
Component Focus: JSX encourages a component-based approach, breaking down your UI into reusable pieces. This promotes modularity, simplifies maintenance, and encourages code reuse, saving you time and effort.
2. Improved Readability and Maintainability:

Clear Separation: Unlike traditional JavaScript where UI and logic might get entangled, JSX keeps them distinctly separate. This enhances code readability, making it easier to understand component behavior and identify potential issues.
Self-Documenting: With JSX, the UI structure is immediately visible within your JavaScript code, acting as a built-in documentation element. This reduces the need for separate documentation files and improves overall project understanding.
Error Catching: JSX leverages the power of static type checking in frameworks like TypeScript. This helps catch typos and syntax errors in your UI elements right when you write them, leading to cleaner and more stable code.
3. Enhanced Developer Experience:

Faster Prototyping: The intuitive syntax and component-based approach of JSX allow for rapid prototyping and experimentation with your UI. You can quickly build and iterate on different layouts and functionalities, boosting your development speed.
Hot Module Replacement (HMR): Many frameworks using JSX like React also support HMR, allowing you to see changes to your UI reflected in the browser instantly without needing to refresh the page. This creates a smooth and reactive development experience, making development more enjoyable and efficient.
Large Community and Ecosystem: JSX is widely used in popular frameworks like React and Vue.js, benefitting from a vast community of developers and an extensive ecosystem of libraries and tools. This provides access to readily available solutions and support for various UI development challenges.
While JSX isn't a magic solution to all UI development problems, its superpowers undeniable provide significant advantages and contribute to a more productive, enjoyable, and efficient development workflow.

Remember, like any tool, mastering JSX effectively requires practice and understanding its limitations. But when used properly, it can unlock a whole new level of UI development power, propelling your projects to greater heights.
* 3.- Role of type attribute in script tag? What options can I use there?
*    ANS:- The type attribute in the <script> tag plays a crucial role in web development by specifying the scripting language of the content within the tag. It helps the browser interpret the script correctly and execute it appropriately. Here's a breakdown of its role and the options you can use:

Role:

Identifies the scripting language used in the script content.
Helps the browser determine how to parse and execute the script.
Ensures compatibility with different browsers and scripting languages.
Options:

The most common options for the type attribute are:

"text/javascript" (default): This is the default value and the most widely used one for JavaScript scripts. If you omit the type attribute, the browser will typically assume it's JavaScript.
"module": This specifies that the script is a JavaScript module, enabling features like code import and export. This is often used with modern module systems like ES Modules.
"application/javascript": This is another valid option for specifying JavaScript, but it's less commonly used than "text/javascript".
Other scripting languages: Depending on your specific needs, you can use the MIME type of other scripting languages like CoffeeScript ("text/coffeescript") or TypeScript ("text/typescript").
Considerations:

Choose the type attribute based on the actual scripting language used in your script content. Mismatching the type and language can lead to errors and malfunctioning scripts.
If using modules, ensure your browser and build tools support the chosen module system (e.g., ES Modules) and the specified MIME type.
It's generally recommended to explicitly specify the type attribute even though "text/javascript" is the default, especially for improved clarity and avoid browser guessing.
Remember:

Choosing the right type attribute for your <script> tags is crucial for ensuring proper execution of your scripts and maintaining compatibility across different browsers and environments. By understanding the role and available options, you can leverage this attribute effectively in your web development projects.
* 4.- {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}
*    ANS:- 
These three expressions appear similar but have distinct meanings in JSX, primarily involving the concept of components and props:

{TitleComponent}: This represents a variable or value holding the reference to the TitleComponent component. Similar to how you assign values to variables like const name = "John";, here you're storing the component in a variable named TitleComponent. You can later use this variable to render the component elsewhere in your code.

{<TitleComponent/>}: This is actually rendering the TitleComponent itself. The angle brackets <> denote a JSX element, and since there are no closing tags or props provided, it assumes you want to render the component with its default behavior and without any additional data.

{<TitleComponent></TitleComponent>}: This is also rendering the TitleComponent but with an empty child element. The closing tags ensure the children of the TitleComponent are considered, even if currently empty. This typically signifies you plan to dynamically populate the child content later in your code, like:

JavaScript
const message = 'Welcome, User!';

return (
  <div>
    {<TitleComponent>{message}</TitleComponent>}
  </div>
);
Use code with caution. Learn more
Here's a table summarizing the key differences:

Expression	                                  Meaning	                                              Renders component?	       Empty children?
{TitleComponent}	                        Variable holding the component reference	                      No                     	No
{<TitleComponent/>}	                      Renders the component with default behavior	                    Yes	                    No
{<TitleComponent></TitleComponent>}	      Renders the component with empty children	                      Yes	                    Yes


Remember, choosing the appropriate expression depends on your specific intention. If you just want to hold the component reference for later use, use the variable form. If you want to immediately render it with default behavior, use the shorthand form. And if you plan to dynamically fill its content later, use the explicit closing tags form.



**********************
COADING -
**********************

1.- Create a nested Header Element using React.createElement(h1,h2,h3 inside a div with class "title). (Done)
  2.- Create a same Element using JSX. (Done)
  3.- Create a functional Component of the same with JSX. (Done)
  4.- Pass Attribute into the tag in JSX.
  5.- Composition of the Component  (Add a Component inside another).
6.- Create a header Component From Scrach using Functional Component with JSX.
  7.- Add A Logo on left.
  8.- Add search bar in middle.
  9.- Add User icon on right
  10.- Add css to make it look nice.
**********************
References -
**********************

1.- Bable: https://babeljs.io/
2.- Attribute Type: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
3.- JS Module: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
4.- Bable Playground: https://babeljs.io/repl#
5.- React without JSX: https://reactjs.org/docs/react-without-jsx.html


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************









************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day 4 Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************










************************************************************************************************************
************************************************************************************************************
************************************************************************************************************
* day Class Note
************************************************************************************************************
************************************************************************************************************-
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
* 
*
* 
*  
* ///////////////////////////////////////////////////////////////////////
* day Assignment
* //////////////////////////////////////////////////////////////////////
* 
* 
* 
* ********************
* Theory -
* ********************
* 
* 1.-  
*    ANS:-  
* 
* 
* 2.- 
* 3.- 
* 4.- 
* 5.- 
* 6.- 
* 7.- 
* 8.- 
* 9.- 
* 10.- 
* 11.- 
* 12.- 
* 13.- 
* 14.- 
* 15.- 
* 16.- 
* 17.- 


**********************
COADING -
**********************

1.- 
2.- 
3.- 
4.- 
5.- 
6.- 
7.- 
8.- 
9.- 

**********************
Reference -
**********************

1.- 
2.- 
3.- 
4.- 


************************************************************************************************************
************************************************************************************************************
************************************************************************************************************