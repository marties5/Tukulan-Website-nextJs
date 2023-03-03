import react from "react";
import Image from "next/image";
import mypict from "/public/image/pict-1.png";
import Link from "next/link";
import Reaction from "@/components/reaction";
import ProductCard from "@/pages/[slug]";

export default function Hero() {
  return (
    <div>
      <div className="bg-slate-50 flex h-full max-lg:mt-40 justify-around max-lg:flex-col-reverse py-10 items-center">
        <div className="max-lg:mt-10 max-md:flex max-w-[500px] max-md:flex-wrap px-8 max-md:justify-center  ">
        
          <h1 className="text-6xl mb-10 text-lime-600 font-bold">
          <Link href={"/profile"} className="font-serif">
            TUKULAN 
            </Link>
          </h1>
          <h2 className="text-elipsis">
           Tukulan merupakan platform jual beli tumbuhan yang indah serta memiliki ciri khuusu yang tidak ada di tempat lainnya,
            <div className="text-lime-600 text-3xl font-bold">
              Lebih dari +1000 jenis
            </div>{" "}
          
          </h2>
          <Link href={"/Produk"}>
            <button className="border-slate-500  border-solid text-grey-500 rounded bg-lime-600 lg:px-8 py-2 hover:duration-300 max-lg:px-20 duration-500 hover:bg-slate-50 hover:ring-lime-600 ring-2 ring-lime-600 hover:text-lime-600 text-slate-100 font-medium  mt-20">
              Beli sekarang
            </button>
          </Link>
        </div>

        <Image
          src={mypict}
          width="auto"
          height="400"
          className="ml-16   justify-center "
        ></Image>
      </div>

      <Reaction />
    </div>
  );
}
