Babel setup
We are allowed to use react class properties like state = {} without the this.
Think about what to do with data that the app is using,
arrays are easier to work with for listing data,
objects are much easier to work with there properties for manipulating data
for larger datasets, objects is a better way to go for working with the data
jest has everything needed to run tests in your application
the script for jest testing is "test": "jest --watch",
if using style objects in react, make sure to declare them in the global scope so that react doesnt rerender the object everytime it renders
Always try to declare functions outside of the component being rendered unless you absolutley have to because it relies on the props or some part of the react component to work.
In this app, the App component is the main container and handles all the data fetching, and important functions. The idea is to pass this functionality down to its children so that all the logic is in one place and the Article component is just a display component.
Using snapshot testing takes a snapshot of your component the first time you render it and compares against that to make sure it is the same and working/passing
Server side rendering library comes with react-dom and even if a client has js disabled on the browser, they can still see the app being rendered.
When you are reconfiguring or moving files around in your app, you can use git grep command with the filename that is causing import errors to see where you used those pathnames before
To make a server path absolute for example like "renderers/server" as opposed to "./lib/renderers/server", set the NODE_PATH in the package.json script with "set NODE_PATH=./lib". Then when importing files, this will become absolute and you can refer to it like a node module package.
For the DOM if you are using webpack, the resolve block is what handles the absolute path references for the client.
Before refactoring, make sure you are in the GREEN state and if you're not. Fix all your errors first to get to a working state. Then commit, and make changes.
