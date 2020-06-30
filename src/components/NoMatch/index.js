import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function NoMatch() {
  const location = useLocation();
  return (
    <div>
      <p>
        No match for <code>{location.pathname}</code>
      </p>
      <Link to="/" className="nav-link">
        Return Home
      </Link>
    </div>
  );
}
