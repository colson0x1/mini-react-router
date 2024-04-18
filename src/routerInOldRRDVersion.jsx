import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

/* @ Alternative way of defining Routes */
// That above is quite and intiutive approach!!
// But especially if we work with older versions of React Router DOM, it
// might also be a bit of a strange approach because in older versions we
// actually define all our routes with help of components and JSX code instead
// of JavaScript Objects in array.
// And we can still do this in latest version (6.2) here too. We can import
// anotehr function from react-router-dom called createRoutesFromElements
// function
//
// And we can create a new constant called routeDefinitions for example, and
// call createRoutesFromElements and to this function, we pass a bunch of JSX
// code. To be precise, we import a Route component from react-router-dom and
// then we can add our Route Component to create routes from elements.
// With one wrapper Route, we could then add our nested routes here where
// every route receives a path prop and an element prop which could for example
// load the homepage JSX code.
// And with this routeDefinations below, we're defining all our routes with help
// of JSX code instead of objects in an array.
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage />} />
    <Route path='/products' element={<ProductsPage />} />
  </Route>,
);

// We can then take those routeDefinitions created with createRoutesFromElements
// and use that to create our own browser router.
// We could also  create our router now by calling createBrowserRouter
// but instead of passing that array of route definition objects to it, We
// pass the route definitions that were created with createRoutesFromElements
// to this router
// So we can define our routes in two ways:
// with object based approach as well as with JSX code.
const router = createBrowserRouter(routeDefinitions);

// In older versions of React Router DOM, we actually define all our routes
// with the help of components and JSX code instead of JavaScript Objects in
// an array.
/*
function App() {
  return (
    <div>
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
    </div>
  )
}
*/

function App() {
  return <RouterProvider router={router} />;
}

export default App;
