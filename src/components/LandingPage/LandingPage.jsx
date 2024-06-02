import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ImageSlider from '../ImageSlider/ImageSlider';
import { useSelector } from 'react-redux';
import { beeVideo } from '../../assets/assets';
import './LandingPage.css';

function LandingPage() {
  const [heading, setHeading] = useState(
    'Welcome to FreeBee Life! Where Eco-Friendly Choices Define Us.'
  );
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const signUpUser = () => {
    history.push('/registration');
  };

  return (
    <div className="container column">
      <div className="jc-center">
        <h2 style={{ background: 'white' }}>{heading}</h2>
      </div>
      <div className="row jc-center">
        <h4 style={{ width: '50%' }}>
          Any donations or proceeds generated through our platform go directly
          to bee conservation projects. By supporting us, you are also
          contributing to the preservation of bee populations, which are
          essential for pollination and maintaining biodiversity.
        </h4>
      </div>
      <video autoPlay loop>
        <source src={beeVideo} type="video/mp4" />
      </video>
      <div>
        <ImageSlider />
      </div>
      <div className="grid">
        <div className="grid-col grid-col_12">
          <div className="jc-center">
            <h3 className="row" style={{ background: 'white' }}>
              Experience the magic of the FreeBee Life at our Free Exchange
              Marketplace.
            </h3>
          </div>
          {user ? (
            <center>
              {/* <RegisterForm /> */}
              <div>
                <h4>New Here?</h4>
                <button className="btn sign-up btn_sizeLg" onClick={signUpUser}>
                  Sign Up
                </button>
              </div>
              <div>
                <h4>Already a Member?</h4>
                <button className="btn login btn_sizeLg" onClick={onLogin}>
                  Login
                </button>
              </div>
            </center>
          ) : (
            ''
          )}

          <h3 style={{ background: 'white' }}>About FreeBee Life</h3>
          <p
            style={{ background: 'white', padding: '1em', borderRadius: '1em' }}
          >
            Experience the magic of the FreeBees Life at our Free Exchange
            Marketplace. Here, giving is not just an action, it's a way of life.
            Dive into a world where sharing is the norm, waste is minimized, and
            connections are made with purpose. Join our community of Freebee
            enthusiasts and together, let's create a more sustainable and
            compassionate world.
            <Link to="/about"> More about FreeBees </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
