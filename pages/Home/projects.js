import React from "react";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import Footer from "@/components/foooter";

export default function Project() {
  return (
    <div className="">
      <Layout title="Project"></Layout>
      <Navbar />
      <div className="">
<div className="h-screen flex justify-center">
    <div className="flex items-center">
    <div className="flex gap-10 ">
        <Card/>
        <Card/>
        <Card/>
        
    </div>
    
    </div>
</div>
      </div>
      <Footer />
    </div>
  );
}
