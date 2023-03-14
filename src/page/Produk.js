import React from "react";
import Navbar from "../component/Navbar";
import iberia from "../assets/Iberia.jpg"

export default function Produk() {
  return (
    <div>
      <Navbar />
      <img src={iberia} alt="iberia"/>
    </div>
  );
}
