import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './button.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="button2" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default LoginButton