import { suz } from '../../assets/assets';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css';
import { useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
      }}
    >
      <h2 className="welcome-header">Welcome, {user.username}!</h2>
      <img
        src={suz}
        alt="suz-thumbnail"
        style={{ borderRadius: '5em', marginBottom: '2.5em' }}
      />

      <div className="user-page-content column">
        <div className="column jc-center ac-start">
          <p className="row">
            <b>Username: &nbsp;</b>
            {user.username}
          </p>
          <p className="row">
            <b>First name: &nbsp;</b>
            {user.firstname}
          </p>
          <p className="row">
            <b>Last Name: &nbsp;</b>
            {user.lastname}
          </p>
          <p className="row">
            <b>Email Address:</b> &nbsp; {user.email_address}
          </p>
          <p className="row">
            <b>Phone:</b> &nbsp; {user.phone}
          </p>
          <p className="row">
            <b>Location:</b> &nbsp; {user.location}
          </p>
        </div>
      </div>
      <p className="row">
        <p>Your ID is: {user.id}</p>
      </p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
