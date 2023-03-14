import Link from "next/link";
import React, { useState } from "react";
import { data, kategori } from "../data/data";
import Image from "next/image";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-lime-600 font-bold text-4xl text-center mb-12 md:mb-0">
        
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              All
            </button>
            {kategori.map((isi) => (
            <button
              onClick={() => filterType(isi.categories)}
              className="m-1 border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              {isi.name}
            </button>
            ))}
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
            <div
            
              className="border-0 shadow-lg rounded-lg p-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[400px] object-cover rounded-t-lg"
              />
              <div className="flex text-slate-600 justify-between px-2 py-4">
                <p className="font-bold text-lg ">{item.name}</p>
                <p>
                  <span className=" text-green-800 p-1 rounded-full">Rp.
                    {item.price}
                  </span>
                </p>
              </div>
              <div className="pt-20 ml-3 mb-8">
              <Link  key={index}
              href={`/${item.id}`} className="bg-lime-600 ring-2 rounded-sm text-slate-50 ring-lime-600  hover:bg-slate-50  hover:text-lime-600 font-bold mb-10 py-2 px-10 ">
            Detail
              </Link>
              </div>
              
            </div>
            
            
        ))}
        
      </div>
    </div>
  );
};

export default Food;
