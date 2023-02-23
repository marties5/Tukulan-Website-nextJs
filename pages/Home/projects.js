import React from "react";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import Footer from "@/components/foooter";

export default function Project() {
  return (
    <div>
      <Layout title="Project"></Layout>
      <Navbar />

      <div className="h-full flex justify-center">
        <div className="flex items-center">
          <div className="max-lg:flex-col flex py-10 gap-10 ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
