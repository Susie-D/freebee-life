import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MultipleItems from '../ImageSlider/ImageSlider';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState(
    'Welcome to FreeBee Life! Where Eco-Friendly Choices Define Us.'
  );
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const signUpUser = () => {
    history.push('/registration');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_12">
          <h3>
            Experience the magic of the FreeBee Life at our Free Exchange
            Marketplace.
          </h3>
          <center>
            {/* <RegisterForm /> */}
            <div>
              <h4>New Here?</h4>
              <button className="btn btn_sizeSm" onClick={signUpUser}>
                Sign Up
              </button>
            </div>
            <div>
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={onLogin}>
                Login
              </button>
            </div>
          </center>
          <h4>About FreeBee Life</h4>
          <p>
            Experience the magic of the FreeBees Life at our Free Exchange
            Marketplace. Here, giving is not just an action, it's a way of life.
            Dive into a world where sharing is the norm, waste is minimized, and
            connections are made with purpose. Join our community of Freebee
            enthusiasts and together, let's create a more sustainable and
            compassionate world. More about FreeBees
          </p>
          <div>
            <MultipleItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
