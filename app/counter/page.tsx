"use client";

import { useState } from "react";

function Counter() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center w-[100px] space-y-2">
        <p className="text-lg font-bold">{increment}</p>
        <button
          onClick={() => setIncrement(increment + 1)}
          className="btn btn-primary bg-amber-300 p-2 rounded-full cursor-pointer"
        >
          Increment
        </button>
        <p className="text-lg font-bold">{decrement}</p>
        <button
          onClick={() => setDecrement(decrement - 1)}
          className="btn btn-primary bg-amber-300 p-2 rounded-full cursor-pointer"
        >
          decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
