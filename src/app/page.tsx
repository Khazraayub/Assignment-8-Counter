"use client"
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-black to-pink-400">
    <div className="relative  bg-purple-600 p-8 w-72 mx-auto mt-10 rounded-lg shadow-lg shadow-black">
      <h1 className="text-center text-4xl underline text-white font-extrabold mb-4">Counter</h1>
      
      {/* Counter Display */}
      <div className="absolute top-15 left-1/2 transform -translate-x-1/2 text-2xl hover:scale-110 font-semibold bg-white text-black rounded-full w-16 h-16 flex items-center justify-center shadow-md shadow-black">
        {count}
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-2 mt-24">
        <button
          onClick={decrement}
          className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg hover:scale-110 shadow-md shadow-black hover:bg-red-600 transition"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg hover:scale-110 shadow-md shadow-black hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
    <footer className='flex mt-10 bg-violet-400 text-black text-2xl font-semibold justify-center items-center  shadow-lg shadow-black rounded-md'>Design by Khazra Shaikh</footer>
    </div>
  );
};

export default Counter;
