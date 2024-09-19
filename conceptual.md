### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JS library that is used to build a front end for users to interact with your app. It uses components to break your application into more manageble pieces. 

- What is Babel?
babel is what converts the JSX code into javascript 

- What is JSX?
it stands for Javascript syntax extension. this extension allows us to use HTML in out javascript. 

- How is a Component created in React?
A component is created in react by moving logic for something that could be used multiple times throughout the application into its own file and then you can import that component wherever you need to use it. 

- What are some difference between state and props?
props is a vairable you are passing into a component and cant be changed when in the component. state is used when you need to update something without having to re render the page everytime like updating a counter on your webpage. 

- What does "downward data flow" refer to in React?
this refers to having your root app.js file that is going to render your main application. After that you would have children of that file for adding more to your page and then components could be the children of those so on down. 

- What is a controlled component?
is a component that is controlled by props

- What is an uncontrolled component?
is a component that is controlled by state

- What is the purpose of the `key` prop when rendering a list of components?
it is used to give each item in a list a key otherwise you will get an error. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
If the elements ever get reordered from removing or adding then it could get confusing

- Describe useEffect.  What use cases is it used for in React components?
useEffect is used for making ajax requests in React.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef lets you reference a value that is not needed for rendering. 

- When would you use a ref? When wouldn't you use one?
you use useRef when you want something to not be affected by a re render. 

- What is a custom hook in React? When would you want to write one?
you can make a custom hook by creating a seperate file and traditionally you will name it like this useX.js X being whatever would describe your hook. this is very useful for when you have a lot of repeat code across your app such as a Ajax request to a API you can rewrite a generic ajax request and use it multiple times in your app. 
