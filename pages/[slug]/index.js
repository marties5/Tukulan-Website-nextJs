import { data } from "@/data/data";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Minus } from "@/components/Minus";
import { Plus } from "@/components/Plus";
import Navbar from "@/components/navbar";
import Link from "next/link";

function getFood(id) {
  const item = data.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {
  const router = useRouter();
  const { slug } = router.query;

  const food = getFood(slug);

  if (Object.keys(food).length === 0) {
    return <div></div>;
  }

  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  const handleOnAddToCart = () => {
    setAdding(true);
    toastId.current = toast.loading(
      `Adding ${qty} item${qty > 1 ? "s" : ""}...`
    );
    addItem(props, qty);
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      setCartItems(items);
    }
  }, []);

  const handleCheckout = () => {
    // implement logic for checkout
    alert("kamu membeli " + food.name + " sejumlah " + qty);
    localStorage.removeItem("cartItems");
    router.push("/produk");
  };

  return (
    <>
      <Navbar />
      <div className="container lg:max-w-screen-lg mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="relative w-72 h-72 md:w-96 md:h-96 mb-40 my-auto">
            <img
              src={food.image}
              alt={food.name}
              layout="fill"
              objectFit="contain"
              width={"95%"}
              height={"200px"}
            />
          </div>

          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 mt-80">
            <h2 className="text-3xl font-semibold">{food.name}</h2>
            <p>
              <span className="text-gray-500">Availability:</span>{" "}
              <span className="font-semibold">In stock</span>
            </p>
            <p className="mt-4">{food.description}</p>

            <div className="mt-8 border-t pt-4">
              <p className="text-gray-500">Price:</p>
              <p className="text-xl font-semibold">Rp. {food.price}</p>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="text-gray-500">Quantity:</p>
              <div className="mt-1 flex items-center space-x-3">
                <button
                  onClick={() => setQty((prev) => prev - 1)}
                  disabled={qty <= 1}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-lime-600 rounded-md p-1 border-0"
                >
                  <Minus />
                </button>
                <p className="font-semibold text-xl">{qty}</p>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="hover:bg-green-100 hover:text-green-500 rounded-md p-1 border-0"
                >
                  <Plus />
                </button>
              </div>
              <div className="flex mt-8 items-center">
                <Link
                  href={"/"}
                  onClick={handleCheckout}
                  className=" border rounded py-2 px-6 bg-lime-600 hover:bg-lime-600 border-lime-600 hover:border-lime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to cart
                </Link>
                <h1 className="ring-1 ml-2 w-18 ring-lime-600 py-2 px-4 rounded-sm">
                  {qty}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
