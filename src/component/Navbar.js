import React, { useState } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";

export default function Navbar() {
  let history = useHistory();

  const [redirectpg, setRedirect] = useState("");
  if (redirectpg) {
    return <Redirect to={redirectpg} />;
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Cart">Cart</Link>

      {/* <link to={
        {
          pathname: "/produk",
          state: {namaSaya: "rifqi", umurSaya : "18"}
        }
      }>
        --------testing-------
      </link> */}
      {/* <Link to="/Produk">Produk</Link> */}
      <NavLink //to throw value
        exact
        to={{
          pathname: "/produk",
          state: {
            NamaSaya: "Rifqi",
            UmurSaya: "24",
          },
        }}
        activeStyle={{ background: "red" }}
      >
        Produk
      </NavLink>

      <button //use redirect
        onClick={() => {
          setRedirect("/cart");
        }}
      >
        testing button
      </button>
      <button onClick={() => history.push("/cart")}>history function</button>
    </div>
  );
}
