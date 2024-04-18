import { Link, useNavigate } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

// Using regular anchor links reloads the page.
// Whenever we click on anchor links, technically we're sending a new request
// to the server that's serving this website.
// Now, that server will serve back that single HTML page that makes up this
// single page application. But what happens under the hood is we ofcourse,
// load all the JavaScript code again, load the entire React application again,
// and restart the React application.
// That's a lot of unnecessary work under the hood that can also impact the
// site performance which we typically wanna avoid because we already loaded all
// the JavaScript code. We don't wanna load it again and we don't wanna restart
// the React application.
// We wold also lose any context or application-wide state if we do so.
// So we don't wanna switch the page by sending a new HTTP request to the server.
// WIth that, we lose all the benefits of single page applicatinos after all.
// Instead we wanna have link like this but under the hood, it should just change
// the URL and set it to the URL we're trying to navigate to
// but it should then prevent the default of sending a request and instead
// let React Router know about the new URL and ensure that React Router loads the
// appropriate element for that new URL.
// So for that, the new Component we wanna import from React Router DOM is Link.
// We can use it to construct a link.
// We used it instead of the default anchor element and it doesn't have the
// href attribute instead it has a `to` attribute. And there we specify
// the path we wanna go to.
// What Link Component do is, it basically listens for clicks on that element,
// prevents the browser default of sending a HTTP request if the link is clicked,
// and instead simply takes a look at the route definitions to udpate the page
// accordingly and load the appropirate content. It will also change the URL
// but without sending a new HTTP request.
function HomePage() {
  // Call useNavigate to get access to a navigate function
  const navigate = useNavigate();

  /* @ Navigating programatically */
  // This is just an example. calling navigate is good with links but not something
  // we wanna do with buttons
  // Again we should use a Link instead of this button approach but this is how
  // we would navigate programatically, if we would need to do so, for example,
  // because some timer expired or anything like that.
  function navigateHandler() {
    // programmatic imperative navigation code for moving to different page
    navigate('/products');
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to='/products'>the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
