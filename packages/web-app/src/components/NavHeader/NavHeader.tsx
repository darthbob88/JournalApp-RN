import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { SignOutButton } from "../SignInForm/SignOutButton";
import { AuthContext } from "../../models/AuthService";

export const NavHeader = () => {
  const AuthService = useContext(AuthContext);
  const message = (user: firebase.User | null) =>
    user ? `Logged in as ${user.displayName}` : "Not currently logged in";
  let loggedIn = message(AuthService.currentUser);

  if (AuthService.currentUser != null) {
    return (
      <nav>
        <Link to={ROUTES.HOME}>Home</Link>
        <span>{loggedIn}</span>
        <SignOutButton />
        <Link to={ROUTES.JOURNAL}>Full Journal</Link>
      </nav>
    );
  } else {
    return (
      <nav>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        <Link to={ROUTES.JOURNAL}>Full Journal</Link>
      </nav>
    );
  }
};
