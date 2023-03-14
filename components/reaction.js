import react from "react";
import Image from "next/image";
import img_1 from "/public/image/flow-pink.png";
import img_2 from "/public/image/flow-sun.png";
import img_3 from "/public/image/flow-white.png";
import Card from "@/components/Card"

export default function Reaction() {
  return (
    <div className="w-full p-4 flex justify-center bg-slate-50 ">
      
      <div className="max-w-screen-lg">
        <h1 className="text-6xl mb-16 font-bold font-serif text-lime-600 text-center">
        Bunga 
        <span className="max-sm:hidden"> terbaik Hari ini
        </span>
        </h1>

        <section className="p-4 lg:p-8 bg-slate-50 rounded-2xl ring-4 ring-lime-600 max-md:ring-transparent flex justify-center dark:text-gray-500">
          <div className="container mx-auto space-y-12">
            <div
              className="flex flex-col hover:duration-300  duration-500 lg:hover:scale-105 
        md:hover:scale-95  overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <Image
                src={img_2}
                alt="bunga matahari"
                width={"0"}
                height={"0"}
                className="w-auto rounded aspect-video h-80 object-cover"
              />

              <div className="flex flex-col text-slate-50 bg-lime-600 justify-center flex-1 p-6 ">
                <h3 className="text-3xl font-serif font-bold">Sun flower</h3>
                <p className="my-6 max-md:hidden ">
                Bunga matahari yang memiliki bentuk yang indah semperti mentari yang bersinardi pagi hari serta bisa mengikuti arah datangnya matahari atau perjalanan matahari dari terbit hingga terbenam tanpa bug kayak code ku ini argh
                </p>
              </div>
            </div>

            <div
              className="flex flex-col hover:duration-300  duration-500 lg:hover:scale-105 
        md:hover:scale-95 overflow-hidden rounded-md shadow-sm lg:flex-row-reverse"
            >
              <Image
                src={img_1}
                alt="Gambar"
                width={"0"}
                height={"0"}
                className="w-auto rounded aspect-video h-80  object-cover"
              />

              <div className="flex flex-col text-slate-50 bg-lime-600 justify-center flex-1 p-6 ">
                <h3 className="text-3xl font-serif font-bold">
                 Bunga Berwarna pink
                </h3>
                <p className="my-6 max-md:hidden ">
                  bunga ini berwarna pink dan menyerupai sakura di jepdang yang indah bergugurn di musim semi,bunga ini memiliki bau yang harum dan memiliki bentuk yang mungiels
                </p>
              </div>
            </div>

            <div
              className="flex flex-col hover:duration-300  duration-500 lg:hover:scale-105 
        md:hover:scale-95 overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <Image
                src={img_3}
                alt="Gambar"
                width={"0"}
                height={"0"}
                className="w-auto rounded aspect-video h-80 object-cover"
              />
              <div className="flex flex-col justify-center text-slate-50 bg-lime-600 flex-1 p-6">
                <h3 className="text-3xl font-serif font-bold">
                 Bunga putih 
                </h3>
                <p className="my-6 max-md:hidden ">
                  bunga ini cantik  ahahahahaahhah 100x
                </p>
              </div>
            </div>
          </div>
        </section>
  <Card/>
      </div>
    </div>
  );
}
