import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Link
        to={"/signup/create-account"}
        className=" bg-pink-400 text-white px-4 py-2 rounded-lg text-blue no-underline"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default Home;
