import React from 'react';
import './RegisterPage.css';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className="login-registration-container ">
      <RegisterForm />

      <div style={{ justifyContent: 'center' }}>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
