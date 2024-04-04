import React from "react";
import { Link } from "react-router-dom";

function TrendingFootwear({ url, text }) {
  return (
    <Link to={"/products"}>
      <div className="relative h-[300px] w-[400px hover:border-dark_beige border-2 rounded-md overflow-hidden">
        <img
          src={url}
          alt="header trending image h-[300px] w-[400px] object-cover"
        />
        <div className="absolute w-full bottom-0 h-20 bg-black z-10 flex items-center justify-center">
          <h3 className="text-white ">
            <p>{text}</p>
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default TrendingFootwear;
