import React from "react";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Image from "next/image";
import mypict from "/public/image/pict-1.png";
import Footer from "@/components/foooter";

export default function profile() {
  return (
    <div className="bg-slate-50">
      <Layout title="profile"></Layout>
      <Navbar />
      <section className="bg-slate-50 text-gray-100">
        <div className="flex justify-center items-center mt-8">
          <Image
            src={mypict}
            width="auto"
            height="400"
            className="justify-center"
          ></Image>
        </div>
        <div className="container  px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12  sm:col-span-3">
              <div className="text-center sm:text-left mb-14  text-gray-400	">
                <h3 className="text-3xl font-semibold font-serif ">Tukulan</h3>
                <span className="text-sm font-bold  dark:text-gray-400">
                  Tukulan merupakan platform jual beli tumbuhan 
                </span>
              </div>
            </div>
            <div className="relative max-md:text-center max-w-[500px] col-span-12 px-4 text-gray-400 ">
              <div className="col-span-12 space-y-12 relative  sm:col-span-8 sm:space-y-8   ">
                <div className="flex hover:bg-slate-200 p-4  flex-col sm:relative   ">
                  <h3 className="text-xl font-semibold tracking-wide hover:text-gray-600">
                    Bunga
                  </h3>
                  <p className="mt-3">
                    Kami menyediakanberbagai jenis bunga dari luar maupun dalam negri dengan jenis yang berbeda beda dengan kualitas 
                  </p>
                </div>
                <div className="flex flex-col hover:bg-slate-200 hover:text-gray-600 p-4  sm:relative   ">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Buah buahan
                  </h3>
        
                  <p className="mt-3">
                   Terdapat banyak jenis buah buahan yang dapat tumbuh dan berkemban dengan baik akrena bibit sudah terverifikasi oleh ahli
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
