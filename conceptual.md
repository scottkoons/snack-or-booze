### Conceptual Exercise

Answer the following questions below:

- **What is the purpose of the React Router?**

	*React Routing allows SPAs to reload without reloading the page/site.*

- **What is a single page application?**

	*A single page application (SPA) is a JavaScript framework for distributing application functionality over the web.*

- **What are some differences between client side and server side routing?**

	*A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether. A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page.*

- **What are two ways of handling redirects with React Router? When would you use each?**

	*React Router allows the user to utilize the forward/back buttons and bookmark specific URLs.*

- **What are two different ways to handle page-not-found user experiences using React Router?**

	*The SPA can redirect to a specific 404 page or use a Switch statement to show a 404 page for any route not matched in the Switch statement.* 

- **How do you grab URL parameters from within a component using React Router?**

	*The component's parameter can be accessed using the useParams() hook.*

- **What is context in React? When would you use it?**

	*Context is a React API that allows a parent component to pass down data to children without using props. This is useful in situations like when you need to pass down information to deeply nested components but don't need to access that information at every level.*

- **Describe some differences between class-based components and function
  components in React.**
  
  *A functional component is a Javascript function that takes a single parameter or props object and returns a React component. The returned component then is rendered by React. A class-based component is a more complex structure. It is an instance of a class derived from React.Component class. The class must implement a render() member function which returns a React component to be rendered, similar to a return value of a functional component. In a class-based component, props are accessible via this.props.*

- **What are some of the problems that hooks were designed to solve?**

	*Hooks allow you to access state without writing classes. This also allows developers to reuse stateful logic between components.*