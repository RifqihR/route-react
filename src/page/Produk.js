import React from "react";
import Navbar from "../component/Navbar";
import iberia from "../assets/Iberia.jpg"
import { useLocation } from "react-router-dom";

export default function Produk() {

  const data = useLocation()
  return (
    <div>
      <Navbar />
      <img src={iberia} alt="iberia"/>
      <h1>Nama: {data.state.NamaSaya}, Umur:{data.state.UmurSaya}</h1>
    </div>
  );
}
