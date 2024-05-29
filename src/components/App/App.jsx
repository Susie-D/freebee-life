import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ItemPage from '../ItemPage/ItemPage';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import DiscoverPage from '../DiscoverPage/DiscoverPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NewListingPage from '../NewListingPage/NewListingPage';
import MyListingsPage from '../MyListingsPage/MyListingsPage';
import MyItemPage from '../MyItemPage/MyItemPage';
import EditListingPage from '../EditListingPage/EditListingPage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not l`ogged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Discover Page else shows LoginPage
            exact
            path="/discover"
          >
            <DiscoverPage />
          </ProtectedRoute>

          <ProtectedRoute path="/item">
            <ItemPage />
          </ProtectedRoute>

          <ProtectedRoute path="/new-listing">
            <NewListingPage />
          </ProtectedRoute>

          <ProtectedRoute path="/my-listings">
            <MyListingsPage />
          </ProtectedRoute>

          <ProtectedRoute path="/my-item">
            <MyItemPage />
          </ProtectedRoute>

          <ProtectedRoute path="/edit-item/:id">
            <EditListingPage />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>Whoops... Did you get lost buzzing around?</h1>
            <p>
              Let's get you back on track!
              <Link className="home-btn" to="/">
                <button data-testid="toList">Go Home</button>
              </Link>
            </p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
