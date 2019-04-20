1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    The three Array/Object methods are concat(), map(), and filter(). The method used to create a new object is Object.assign().

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions set the type and payload data. Actions are then passed to a reducer where state is modified, but not directly updated. The store in a Redux application houses all the application state. The store is known as the single source of truth because it contains all the state for the application in its original form.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is accessible by all components. Component state is only accessible by the component itself or through props passed to other components. Application state is valuable for larger projects where component state would be hard to handle, whereas component state would make sense for smaller projects where passing state is manageable.

4.  What is middleware?

    Middleware is a function which returns a function that returns a function. Middleware allows you to modify a function midway through its journey in some meaningful before being passed onto the next function.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-Thunk is a type of middleware. Using Thunk allows you to alter an action asynchronously before it is sent to the reducer. The action must pass through the "middleman" now before it can reach its final endpoint.

6.  Which `react-redux` method links up our `components` with our `redux store`?

    The method that links up components to the redux store is mapStateToProps().