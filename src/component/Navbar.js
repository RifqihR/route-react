import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/Cart">Cart</Link>
      {/* <Link to="/Produk">Produk</Link> */}
      <NavLink //to throw value
        to={{
          pathname: "/produk",
          state: {
            namaSayua: "Rifqi",
            UmurSaya: "24"
          },
        }}
      >
        Produk
      </NavLink>
    </div>
  );
}
