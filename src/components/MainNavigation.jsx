// TO support links that should show us whether they led to the currently
// active page or not, react-router-dom has an alternative to the Link Component,
// the NavLink Component
// We can use it as a replacement for link but NavLink has one special behavior.
// If we add the class name prop to it, its actually not the regular class name
// prop which takes a string but instead it's a prop that takes a function.
// And that function should return the class name, the CSS class name that should
// be added to the anchor tag.
// Now that functino also automatically receives an object from which we can
// destructure the isActive property
// And this object with the isActive property is provided by react-router-dom
// and isActive is a Boolean, that's true if this link is currently active
// so if it led to the currently active route or its false if it did not lead to
// the currently active route.
//
// By default, NavLink actually checks whether the path of the currently active
// route starts with the path of one of those NavLinks. And that NavLink is
// considered to be active if the currently active route starts with the
// path set on the link.
// That behavior exists so that a link could be treated as active even if
// we're on some nested child route.
// That's nice to have but not what we want here, for the / route since
// every route starts with / in the end. So this would always be active for
// all routes. And they why react-router-dom also gives us another prop
// we can set here and that's the end prop which we can set to true or false.
// This indicates that this link now with end prop should only be considered active
// if the currently active route ends with this path after the url.
//
// So now this link to='/' will only be considered active if we are on our
// domain slash nothing and not if we're on slash products.
// We don't have to add this to other link i.e to='/products' because we have
// no other routes that would start with slash products.
// So therefore now with that, we see that Home is now not active if we're on
// Products and but we do see if we're on the Home page.
// If we prefer inline styling, we get the same function with isActive for inline
// styles too.
import { Link, NavLink } from 'react-router-dom';

import classes from '../MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({ isActive }) => ({
              //   textAlign: isActive ? 'center' : 'left',
              // })}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link
              to='/products'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
