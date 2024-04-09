import { useState } from "react";
import Header from "./Header";
import { CiCamera } from "react-icons/ci";
import { Link } from "react-router-dom";

const UpdateImage = () => {
  const [file, setFile] = useState(null);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <Header />
      <div className="mx-60 space-y-4">
        <h1 className="text-2xl font-bold">
          Welcome! Let's create your profile
        </h1>
        <p className="text-md text-gray-500">
          Let others get to know you better! You can do these later
        </p>

        <h3 className="font-bold">Add an avater</h3>
        <div className="flex gap-10 items-center  min-h-40">
          {file === null ? (
            <label
              htmlFor="fileId"
              className="w-56 h-56  flex justify-center items-center border-2 border-dotted rounded-full p-4"
            >
              <CiCamera className="text-2xl" />
            </label>
          ) : (
            <div className="w-56 overflow-hidden h-56 border rounded-full p-4">
              <img src={file} alt="" />
            </div>
          )}

          <div className="flex flex-col gap-4 justify-items-center">
            <label htmlFor="fileId" className="cursor-pointer border px-4 py-1">
              Choose Image
            </label>
            <input
              onChange={handleChange}
              type="file"
              id="fileId"
              className="hidden"
            />
            <p className="block text-gray-400">
              {">"} Or choose one of our defaults
            </p>
          </div>
        </div>

        <h3 className="font-bold mt-16">Add your location</h3>
        <input
          placeholder="location"
          className="bg-gray-50  px-4 w-full p-1 rounded-md"
          type="text"
        />
        <div className="pt-8">
          <Link className="bg-pink-500 text-white  py-2 px-16 rounded-md ">
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpdateImage;
