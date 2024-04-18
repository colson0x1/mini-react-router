// createBrowserRouter is a fn provided by React Router DOM which allows us
// to define our routes that we wanna suport in this application
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
import ProductsPage from './pages/Products';
import RootLayout from './Root';

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
const router = createBrowserRouter([
  // Now to actually wrap these two routes i.e HomePage and ProductPage with
  // RootLayout component, we must add another property to this special route
  // here called the children property.
  // That takes an array and it is actually an array of more route definitions
  // and we can move those two route defintions into this array.
  // So with that, we make these two route defintion (HomePage & ProductPage)
  // here, child route definitions of this route i.e of RootLayout.
  // So this route (RootLayout), acts as a parent route to these children routes
  // and it acts as a wrapper to these routes.
  // We also define where these child route components and elements, so the
  // HomePage and the ProductPage should be rendered. We do that by going
  // to this RootLayout and adding another special component from React Router DOM
  // called Outlet.
  // This Outlet component marks the place where the child route elements should
  // be rendered to.
  // The advantage of this approach is that this RootLayout now indeed does
  // act as a wrapper for these page components i.e HomePage and ProductPage.
  // So therefore, in the RootLayout component, we can include the MainNavigation
  // Component and rendering it above the Outlet there.
  // Having such a root route that acts as a layout is totally standard and
  // totally normal when using React Router.
  // We implement layouts like this by adding wrapping routes like this.
  // So that's the advantage here. We can have path dependent layout wrappers.

  // We can add the special errorElement property to our route definitions
  // to define which page should be loaded if an error is created.
  // When we enter a URL that doesn't exist, the react-router-dom package
  // will generate an error, and that error will automatically bubble up
  // to our root route definition.
  // Therefore here on the / path we can add  errorElement property to render
  // error page as a fallback page if an error.
  // Error do occur, it will be generated automatically by the react-router-dom
  // package if we try to visit a page that doesn't exist.

  // @ Dynamic Route
  // We wanna load this page ProductDetails here for our different products which
  // is Products component.
  // We add a new route and then we add some links but what's now the path for
  // route is?
  // Ofcourse it could be /productdetail but keeping in mind that We typically
  // have different products (Products) with different details (ProductDetail)
  // So while we always wanna load the same component, the data that will be
  // displayed in there will be different for the different products.
  // And it would make sense to support paths like /products/p1 so the id of
  // product 1 maybe. So we might have different paths for these different products.
  // Now we always wanna load the same page. We always wanna load the product
  // detail page. But we wanna load it for different paths.
  // Now we could add multiple paths like this:
  // { path: '/products/p1', element: <ProductDetailPage /> },
  // { path: '/products/p2', element: <ProductDetailPage /> },
  // { path: '/products/p3', element: <ProductDetailPage /> },
  // But that ofcourse is not a realistic approach because the more products
  // we have, the more paths must be added. And typically we don't even know
  // in advance how many products we'll have. And we also will add more products
  // dynamically.
  // After all, most websites are pretty dynamic and users and administrators
  // might be able to add new products. We don't want to add it to code all the
  // time. Just because a new product was added.
  // So hardcoding those differnet product Ids in the paths like this, is clearly
  // not an option.
  // And that's why React Router DOM supports dynamic path segments or path
  // parameters as it's also called.
  // We add a parameter to a path. So such a dynamic path segment by adding
  // a colon and then any indentifier of our choice like id or product id.
  // i.e '/products/:id'
  // colon i.e : is very important. This signals React Router DOM that this part
  // of the path is dynamic.
  // So that we actually don't want to load this element ProductDetailPage for
  // /products/:productId but instead /products/ any value that will be used as
  // an actual value for this productId placeholder.
  // We could thereafter have more hard coded segments like /prducts/:productId/new
  // the :productId section is dynamic
  // This placeholder here i.e :productId, becomes important once we wanna start
  // loading different data for the different products.
  //
  // So we added this dynamic proute here or this route with a dynamic path,
  // Now let's say, that on 'ProductDetail' page, we ofcourse wanna know for
  // which exact product this page was loaded. We wanna know which productId
  // was used so that we could for example reach out to backend API and a
  // database to fetch the data for that specific product and display it on
  // the screen.
  // And of course, that's also a common scenario and therefore React Router DOM
  // gives us another tool for getting hold of the actual value used instead
  // of that placeholder, instead of :productId
  // And that tool which we get from the React Router DOM is useParams hook.

  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

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
