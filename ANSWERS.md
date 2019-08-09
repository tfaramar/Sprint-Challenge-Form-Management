# Answers

- [ ] What are the required parts of class components?

We declare a class component by extending the React Component parent class. We also need a constructor function to set up state in a class component, and we must use the super function to refer to the class constructor and allow us to use ‘this’. With class components, we also must use the render function to render the JSX that we return to the virtual DOM. 

- [ ] Name at least three lifecycle methods?

There are three main phases in the React lifecycle: mounting (when a component is being created and inserted into the DOM), updating (when a component is updating and therefore being re-rendered), and unmounting (when a component is being removed from the DOM). Three methods we can call to run code at specific lifecycle phases are componentDidMount(), componentDidUpdate(), and componentWillUnmount. Constructor and render are also considered lifecycle methods.

- [ ] Why are forms used so often in web applications and software?

Forms allow two-way communication between users and websites/companies. They act as a conduit for users to input information about themselves and make it possible for a website to utilize a user’s information, i.e. set up a token for that user to customize their experience. Because they are a bridge for users to provide input to websites, forms also offer an important point at which to validate sensitive information needed to authorize transactions.  

- [ ] What advantages are there by using a forms library like Formik?

Formik makes form-creation easier for us by handling state management in the form (getting values in and out of the form state), as well as validation and error messaging, and submission of the form. 

- [ ] Why do we write tests for our apps?

Testing our apps provide many benefits. It means that we can find bugs sooner, reduces the risk that we will need to spend more time fixing or refactoring our code, and acts as documentation for the code. The tests that we write also ensures that as we add more and more complexity to code, future changes or refactors will not break the program. It allows future developers workin on the same codebase to be able to refactor and debug without everything breaking. It also helps us cut costs by not having to use manual testing or spend more development time maintaining or later debugging the codebase.
