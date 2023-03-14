import React from "react";
import Layout from "/components/layout";
import Navbar from "/components/navbar";
// import Card from "@/components/card";
import Footer from "/components/foooter";
import Product from "../[slug]";
import Food from "@/components/Food";
import Card from "@/components/Card"

const Produks = () => {
  return (
    <div className="h-full">
      <Layout title="produk"></Layout>
      <Navbar />
      <div className="h-full ">
        <Product />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Produks;
