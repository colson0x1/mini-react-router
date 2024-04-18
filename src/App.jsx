// createBrowserRouter is a fn provided by React Router DOM which allows us
// to define our routes that we wanna suport in this application
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';

// To this fn we pass an array of route defination objects
// SO here we provide couple of JavaScript objects where every object represents
// one route. And we add some properties to define the route characteristics like
// for example, the path for which this route should be activated.
// So here we define our route objects and these route objects take a couple of
// properties with which we configure the routes.
//
// One key property that we add is path. path is the part after the domain
// https://example.com
// https is the protocal and example.com is the domain but then after is the path
// like / nothing is the path as well as /products is the path
//
// The second important piece of information that we typically
// want to add to our route objects is which component should be loaded when
// that route is active. So to establish this connection, we add another key
// property here called element property.
// We define the element so in the end the JSX code that should be loaded when
// this path is active.
// We can have any JSX code there like:
// element: <p><HomePage /></p>
// But very often, we will simple render a single component that then represents
// the entire page that sould be loaded.
//
// Now to use this router, we first of all must store the returned value of the
// createBrowserRouter fn in a variable or constant.
// We need this constant to then tell React that this router should be rendered
// to the screen so to say or that router should be loaded and should render
// the appropriate pages to the screen.
const router = createBrowserRouter([{ path: '/', element: <HomePage /> }, {}]);

// And to tell React that this router should be used, we need to import another
// thing from react-router-dom and that's the RouterProvider Component.
// Now this component is a regular component which we can use like this in our
// JSX code. And we could ofcourse, again wrap it with other JSC code or add
// more JSX code to this app component.
// But in this case, we're only returning router provider. And this router
// provider component has a special prop which we must set, the router prop.
// And the value we pass to the router prop should be a router created with
// createBrowserRouter.
// So here we pass the router constant above to this router propr
// And now with that, we're rendering the router on the screen and we're
// activating the router therefore and the router will then, therefore take a
// look at our url, see what the currently active path is, and load the
// appropriate element if that currently active path is supported.
function App() {
  return <RouterProvider router={router} />;
}

export default App;
