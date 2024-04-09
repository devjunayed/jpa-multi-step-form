import React from "react";
import BG from "../assets/bg.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex">
      <div className="w-4/12 pt-10 text-2xl pl-10 bg-[#F2D184] min-h-screen">
        <span id="logo">multisiteform</span>
        <h2 className="text-xl mt-4">
          Discover the world's top <br /> Designers & Creatives.
        </h2>
        <div className="w-full flex justify-center items-center mt-10">
          <img src={BG} alt="" className="w-8/12" />
        </div>
      </div>
      <div className="w-8/12 ">
        <div className="justify-end flex m-4">
          <p className="text-md">
            Already a member?{" "}
            <a className="text-blue-500" href="/signin">
              Sign In
            </a>
          </p>
        </div>
        <div className="mx-40 mt-14 flex flex-col justify-center  min-h-[80vh]">
          <h3 className="text-xl">Sign up to Multi Site Form</h3>
          <form className="mt-10">
            <div>
              <div className="flex gap-4 justify-between w-full">
                <label className="flex gap-2 flex-col w-full">
                  Name{" "}
                  <input
                    placeholder="name"
                    className="bg-gray-100 px-4 p-1 rounded-md"
                    type="text"
                  />{" "}
                </label>
                <label className="flex gap-2 flex-col w-full">
                  Username{" "}
                  <input
                    placeholder="username"
                    className="bg-gray-100 px-4 p-1 rounded-md"
                    type="text"
                  />{" "}
                </label>
              </div>
              <div className="w-full mt-4">
                <label className="flex gap-2 flex-col">
                  Email{" "}
                  <input
                    placeholder="Email"
                    className="bg-gray-100 px-4 p-1 rounded-md"
                    type="email"
                  />{" "}
                </label>
              </div>
              <div className="w-full mt-4">
                <label className="flex gap-2 flex-col">
                  Password{" "}
                  <input
                    placeholder="6+ characters"
                    className="bg-gray-100 px-4 p-1 rounded-md"
                    type="password"
                  />{" "}
                </label>
              </div>
              <div className="flex justify-between gap-2 mt-4 items-start">
                <input className="mt-2" type="checkbox" />
                <p className="">
                  Creating an account means you're okay with our{" "}
                  <a className="text-blue-500" href="/terms">Terms of Service.</a>{" "}
                  <a className="text-blue-500" href="/privacy">Privacy Policy,</a> and our default{" "}
                  <a className="text-blue-500" href="/notification">Notification Settings.</a>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link to={"/signup/update-img-location"} className="cursor-pointer px-5 py-2 rounded-md text-white bg-pink-500"  >Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
