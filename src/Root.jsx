// This Outlet component marks the place where the child route elements should
// be rendered to.
// So this is now the marker, the place, where the child routes should be
// rendered to.
// So in our case, that would be the HomePage and ProductsPage components.
import { Outlet } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import classes from './Root.module.css';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
