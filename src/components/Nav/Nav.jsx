import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { freeBeeLogo, gear } from '../../assets/assets';
import './Nav.css';

function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  return (
    <div className="nav">
      <h2 className="nav-title">
        <Link to="/home" className="">
          <img className="logo" src={freeBeeLogo} />
        </Link>
        • FreeBee Life •
      </h2>
      <div className="nav-links">
        {/* If no user is logged in, show these links */}

        {!user.id && (
          // If there's no user, show login/registration links
          // <Link className="navLink" to="/login">
          //   Login / Register
          // </Link>
          <Link className="navLink" to="/about">
            About
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/home">
              Home
            </Link> */}

            <Link className="navLink" to="/discover">
              Discover
            </Link>

            <Link className="navLink" to="/my-listings">
              My Listings
            </Link>

            <Link className="navLink" to="/new-listing">
              New Listing
            </Link>

            <Link className="navLink" to="/about">
              About
            </Link>

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}
            {/* <LogOutButton className="navLink" /> */}
            <img
              src={gear}
              className="gear-icon"
              alt="gear icon"
              onClick={() => dispatch({ type: 'LOGOUT' })}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
