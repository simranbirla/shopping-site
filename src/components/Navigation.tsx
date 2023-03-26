import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      Navigation
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
