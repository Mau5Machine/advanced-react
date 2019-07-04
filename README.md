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
