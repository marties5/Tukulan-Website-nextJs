import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Card(){
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/640fc23ec0e7653a05876f7e"
        );
        const data = await response.json();
        setData(data.record);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);


 return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
     {data.map((item,index) => (
        <div className="border-0 shadow-lg rounded-lg p-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[400px] object-cover rounded-t-lg"
          />
          <div className="flex text-slate-600 justify-between px-2 py-4">
            <p className="font-bold text-lg ">{item.name}</p>
            <p>
              <span className=" text-green-800 p-1 rounded-full">
                Rp.
                {item.price}
              </span>
            </p>
          </div>
          <div className="pt-20 ml-3 mb-8">
            <Link
              key={index}
              href={`/${item.id}`}
              className="bg-lime-600 ring-2 rounded-sm text-slate-50 ring-lime-600  hover:bg-slate-50  hover:text-lime-600 font-bold mb-10 py-2 px-10 "
            >
              Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

      }

