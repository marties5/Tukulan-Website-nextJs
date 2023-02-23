import react from "react";
import Image from "next/image";
import mypict from "/public/image/image_face.png";
import Link from "next/link";
import Reaction from "@/components/reaction";

export default function Hero() {
  return (
    <div>
      <div className="bg-slate-50 flex max-lg:mt-40 justify-around max-lg:flex-col-reverse  h-screen py-10 items-center">
        <div className="max-lg:mt-10 max-md:flex  max-md:flex-wrap px-8 max-md:justify-center  ">
          <h1 className="text-3xl mb-10  font-bold">
            My name is
            <Link href={"/profile"}>
              <span className="text-slate-500 ml-2">marties</span>
            </Link>
          </h1>
          <h2 className="">
            halo perkenalkan saya seorang manager yang berkontribusi <br></br>
            besar terhadap PT telkom ,{" "}
            <span className="text-slate-500 font-bold">
              Memilki 30% saham
            </span>{" "}
            dari yang berdar
          </h2>
          <Link href={"/Profile"}>
            <button className="border-slate-500  border-solid text-grey-500 rounded bg-slate-600 lg:px-8 py-2 hover:duration-300 max-lg:px-20 duration-500 hover:scale-105  text-slate-100 font-medium  mt-20">
              Learn More
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
