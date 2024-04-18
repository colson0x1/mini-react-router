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

  /* @ React Router paths in NUTSHELL*/
  /* When defining our routes, we define the paths for which they should be active.
 * We got this root wrapper route here and then we get a couple of child routes
 * inside of that route.
 * Now actually, all the paths we're defining here are absolute paths because
 * they all start with a slash. This simply means that they're always seen from
 * after the domain name.
 * Now this is an important detail. If we would, for example, changed this
 * wrapper path i.e / to /root, we will notice that if we reload, for /products
 * we don't see anything
 * Now if we try to check localhost:3000/products we see nothing. 
 * similarly localhost:3000/, we see nothing
 * likewise localhost:3000/root also throws error.
 * WE GET AN ERROR: Absolute route path '/' nested under path '/root' is not valid.
 * So the problem we're having here is, we've absolute paths here i.e on children
 * because they're starting with a slash. that's how we can tell that these are
 * absolute paths. 
 * If a path starts with a slash, it is an absolute path.
 * And we now have clashing route definitions. We're saying that the parent route
 * here should handle all pages that start with /root. But then the child pages
 * actually don't start with /root.
 * It's important to understand the difference between absolute paths as we
 * have in here and relative paths because that's the alternative.
 * We can remove those leading slash here on the child routes 
 * i.e '/' is now '' and '/products' is now 'products' like that
 * and that turns these route definition paths to relative paths.
 * So now we got three relative paths here instead of absolute paths.
 * Now when defining routes like this, this simply means that these paths defined 
 * here are appended after the path of the wrapper route.
 * So if we have a child route with a relative path, then React Router will take
 * a look at the path of the parent route and append the child route path
 * after the parent route path.
 * So to see products we need to go to localhost:3000/root/products
 * For just localhost:3000/products we don't see anything. Instead we get the
 * default error message, again. We also don't see the content of our error page.
 * Because now we got this error for some page that we tried to find after slash 
 * nothing but this error element is added to the /root path. Therefore it's
 * not activated here.
    // path: '/root',
    // element: <RootLayout />,
    // errorElement: <ErrorPage />,
    // children: [
    //   { path: '', element: <HomePage /> },
    //   { path: 'products', element: <ProductsPage /> },
    //   { path: 'products/:productId', element: <ProductDetailPage /> },
    // ],
 * Now of course here we don't want to have /root as a starting path, we 
 * want to have slash nothing instead but we can still stick to relative paths
 * for these child routes because we wanna append these paths after the path
 * of the wrapper parent route here.
    // path: '/',
    // element: <RootLayout />,
    // errorElement: <ErrorPage />,
    // children: [
    //   { path: '', element: <HomePage /> },
    //   { path: 'products', element: <ProductsPage /> },
    //   { path: 'products/:productId', element: <ProductDetailPage /> },
    // ],

  * That is not all about path. 
  * Instead paths also play an important role if we think about links like
  * there on the MainNavigation or in the products.js file where we also have
  * links.
  * <Link to={`/products/${prod.id}`}>{prod.title}</Link>
  * Here, we are also defining paths and the same rules as before apply.
  * If a path starts with a slash, with a leading forward slash, then it is
  * an absolute path. So clicking that link above will always visit /products.
  * Again we can see the problem, if we do switch back to /root on the wrapper
  * route temporarily, in our route definitions, and we then go to /root/products,
  * this works but if we click one of those links there, we get an error because
  * those links leads to /products/p1.
  * Because in the products.js file, that is the path we defined here
  * i.e <Link to={`/products/${prod.id}`}>{prod.title}</Link>
  * And since it starts with a forward slash, it's an absolute path.
  * So its added directly after the domain name not after the currently active
  * path.
  * But we could switch to the latter behavior and instead create relative paths 
  * here on those links.
  * We could for example do on Home.js file by instead of linking to prop to
  * /products to change this to just products
  * i.e <Link to='/products'>list of products</Link>
  * to
  * <Link to='products'>list of products</Link>
  * i.e without the slash at the beginning.
  * With that this is now a relative path and this link has a relative path now.
  * which means by default it will add this path after the currently active
  * routes path.
  * So if we go to localhost:3000/root and click on: list of products, which is
  * the link we just edited, we see it'll lead us to /root/products
  * And previously, it would've failed, as we can see there in the main navigation 
  * where we have absolute paths to routes that we no longer support.
  * And in products.js we can also switch to a relative path by simply removing
  * that /products/ part
  * i.e <Link to={`/products/${prod.id}`}>{prod.title}</Link>
  * to <Link to={prod.id}>{prod.title}</Link>
  * Now we just add the product ID after the currently actives route path.
  * So with that, its added after the currently active path and therefore
  * these links work again.
  * So it's really important to understand these differences between relative 
  * and absolute paths.
  * And when using the link component, we also have a special `relative` prop
  * which we can add on Link.
  * This can be set to one of two values at the moment, to path or route.
  * With that we control whether this segment here i.e to={prod.id} 
  * is added relative to the currently actives route path or to the currently
  * active path in the URL.
  * And that might sometimes be the same but sometimes it's also not.
  * To show the difference, in our route definitions
    path: '/root',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
    ],
  * And there, this route definition which is responsible for ProductDetailsPage 
  * is a direct child of this root (/root) route, not of this { path: 'products'}
  * route but of this root route i.e path: '/root'
  * It's a sibling to the products route 
  * i.e { path: 'products/:productId'} is sibling to { path: 'products' }
  * Those two route definitions are siblings.
  * So both for the 'products' and the 'products/ some id' route, the parent route
  * is this route with /root.
  * Now if one the ProductDetail.js file, we add another paragraph with a link,
  * we could implement this behavior by adding the `to` prop and adding two dots.
  * i.e <p><Link to='..'></Link></p>
  * This is a special identifier, which we might know from moving around in our
  * system terminal which simply means go up one level.
  * So if we now click on one of the Product links on localhost:3000/root/products 
  * page, we see back button there. If we click back, we will notice that
  * we go back to the home page by default. Now this might not make a lot of 
  * sense because we came from the products page.
  * And we'll also see that in the URL, the URL when we visit a product is
  * /root/products/ the id of that product. But if we click 'back', it's 
  * just /root on the url.
  * So /products/productId was removed from the URL path.
  * That happens becauwe we're going back and by default this relative path, 
  * which this .. is as well. This relative path is resolved relative to the
  * route definitions.
  * As this ProductDetailPage route definition, is a child of the root route 
  * and a sibling to /products. So when we go up one level, if we go back to the
  * previous route path, it means that we go back to the parent's route path.
  * not to those siblings there.
  * So we don't just remove one segment from the path {path: 'products/:productId'}
  * i.e productId there, but instead we go back to the parent route path which
  * means we remove two segments in this case /products and /productId.
  * Now if we want to change this behavior, we can do so with the `relative`
  * prop. 
  * i.e <p><Link to='..' relative='route'>Back</Link></p>
  * We can set that relative prop to path. The default would be route.
  * So its relative to the route definitions. But if we set this to `path`
  * instead of `route`, React Router will instead take a look at the currently
  * active path and simply remove one segment from that path.
  * So now if we click on Back, on that ProductDetailPage, we see we go back to
  * the Products page because now just the id of that product was removed
  * from the currently active path.
  * So that's another important feature we should keep in mind when working with
  * paths and links, and relative versus absolute paths.
  * <p><Link to='..' relative='route'>Back</Link></p>
  * The relative prop does not matter if we have an absolute path here.
  * THen it's always that absolute path that's added after the domain.
  * But if we hae a relative path, like that special '..'  two dot path which
  * simply goes back, then this relative prop can be used to control the behavior
  * of React Router.


 */

  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
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
