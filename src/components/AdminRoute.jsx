import {
  Navigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

export default function AdminRoute({
  children,
}) {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const adminEmail =
    "devilknight409@gmail.com";

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        }
      );

    return () =>
      unsubscribe();
  }, []);

  // wait for auth to load
  if (loading) {
    return (
      <h2>
        Loading...
      </h2>
    );
  }

  // not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
      />
    );
  }

  // not admin
  if (
    user.email !== adminEmail
  ) {
    return (
      <Navigate
        to="/dashboard"
      />
    );
  }

  return children;
}