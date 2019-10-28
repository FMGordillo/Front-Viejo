import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const { loading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button disabled={loading} onClick={() => loginWithRedirect({})}>
          Log in
        </button>
      )}

      {isAuthenticated && (
        <button disabled={loading} onClick={() => logout()}>
          Log out
        </button>
      )}
    </div>
  );
};

export default NavBar;
