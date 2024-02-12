import React from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

const FormSection2 = (props) => {
  return (
    <div className={ `${props.visibility ? 'flex flex-col items-center lg:items-start' : 'hidden'}`}>
      {/* The Product Photos */}
      <div className="col-span-full">
        <label
          htmlFor="username"
          className="mt-6 text-lg leading-8 text-gray-300"
        >
          Photo
        </label>
      </div>
      <div className="flex justify-start">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative sm:w-40 sm:h-40 mdsm:w-20 mdsm:h-20 w-16 h-16 mt-2 flex justify-center items-center rounded-lg border border-dashed  border-gray-900/25">
            <label
              id="label1"
              htmlFor="file1"
              className="relative cursor-pointer rounded-md bg-white h-full w-full flex justify-center items-center font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <PlusIcon className="block h-6 w-6" aria-hidden="true"></PlusIcon>
              <input
                id="file1"
                data="1"
                key={1}
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={props.handleChange}
              />
            </label>
            {/* This world doesnt makes me happy or sad cause I am happy by default by remembering Radhe Shyaam  */}
            <img
              src={props.file["file1"][1]}
              id="image1"
              className="hidden h-full w-full object-cover"
              alt="hello"
            />
            <button
              id="button1"
              className="hidden w-full h-full nigger"
              onClick={props.onDeletehandler}
              data="1"
            >
              <TrashIcon
                className="h-6 w-6 text-gray-100 chid absolute"
                aria-hidden="true"
              ></TrashIcon>
            </button>
          </div>
          <div className="relative sm:w-40 sm:h-40 mdsm:w-20 mdsm:h-20 w-16 h-16 mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25">
            <label
              id="label2"
              htmlFor="file2"
              className="relative cursor-pointer rounded-md bg-white h-full w-full flex justify-center items-center font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <PlusIcon className="block h-6 w-6" aria-hidden="true"></PlusIcon>
              <input
                id="file2"
                data="2"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={props.handleChange}
              />
            </label>
            {/* This world doesnt makes me happy or sad cause I am happy by default by remembering Radhe Shyaam  */}
            <img
              src={props.file["file2"][1]}
              id="image2"
              className="hidden h-full w-full"
              alt="hello"
            />
            <button
              id="button2"
              className="hidden w-full h-full nigger"
              onClick={props.onDeletehandler}
              data="2"
            >
              <TrashIcon
                className="h-6 w-6 text-gray-100 chid absolute"
                aria-hidden="true"
              ></TrashIcon>
            </button>
          </div>
          <div className="relative sm:w-40 sm:h-40 mdsm:w-20 mdsm:h-20 w-16 h-16 mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25">
            <label
              id="label3"
              htmlFor="file3"
              className="relative cursor-pointer rounded-md bg-white h-full w-full flex justify-center items-center font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <PlusIcon className="block h-6 w-6" aria-hidden="true"></PlusIcon>
              <input
                id="file3"
                data="3"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={props.handleChange}
              />
            </label>
            {/* This world doesnt makes me happy or sad cause I am happy by default by remembering Radhe Shyaam  */}
            <img
              src={props.file["file3"][1]}
              id="image3"
              className="hidden h-full w-full"
              alt="hello"
            />
            <button
              id="button3"
              className="hidden w-full h-full nigger"
              onClick={props.onDeletehandler}
              data="3"
            >
              <TrashIcon
                className="h-6 w-6 text-gray-100 chid absolute"
                aria-hidden="true"
              ></TrashIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative sm:w-40 sm:h-40 mdsm:w-20 mdsm:h-20 w-16 h-16 mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25">
            <label
              id="label4"
              htmlFor="file4"
              className="relative cursor-pointer rounded-md bg-white h-full w-full flex justify-center items-center font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <PlusIcon className="block h-6 w-6" aria-hidden="true"></PlusIcon>
              <input
                id="file4"
                data="4"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={props.handleChange}
              />
            </label>
            {/* This world doesnt makes me happy or sad cause I am happy by default by remembering Radhe Shyaam  */}
            <img
              src={props.file["file4"][1]}
              id="image4"
              className="hidden h-full w-full"
              alt="hello"
            />
            <button
              id="button4"
              className="hidden w-full h-full nigger"
              onClick={props.onDeletehandler}
              data="4"
            >
              <TrashIcon
                className="h-6 w-6 text-gray-100 chid absolute"
                aria-hidden="true"
              ></TrashIcon>
            </button>
          </div>
          <div className="relative sm:w-40 sm:h-40 mdsm:w-20 mdsm:h-20 w-16 h-16 mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25">
            <label
              id="label5"
              htmlFor="file5"
              className="relative cursor-pointer rounded-md bg-white h-full w-full flex justify-center items-center font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <PlusIcon className="block h-6 w-6" aria-hidden="true"></PlusIcon>
              <input
                id="file5"
                data="5"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={props.handleChange}
              />
            </label>
            {/* This world doesnt makes me happy or sad cause I am happy by default by remembering Radhe Shyaam  */}
            <img
              src={props.file["file5"][1]}
              id="image5"
              className="hidden h-full w-full"
              alt="hello"
            />
            <button
              id="button5"
              className="hidden w-full h-full nigger"
              onClick={props.onDeletehandler}
              data="5"
            >
              <TrashIcon
                className="h-6 w-6 text-gray-100 chid absolute"
                aria-hidden="true"
              ></TrashIcon>
            </button>
          </div>
          <div className="relative sm:w-40 sm:h-40 mdsm:w-20 mdsm:h-20 w-16 h-16 mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25">
            <label
              id="label6"
              htmlFor="file6"
              className="relative cursor-pointer rounded-md bg-white h-full w-full flex justify-center items-center font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <PlusIcon className="block h-6 w-6" aria-hidden="true"></PlusIcon>
              <input
                id="file6"
                data="6"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={props.handleChange}
              />
            </label>
            {/* This world doesnt makes me happy or sad cause I am happy by default by remembering Radhe Shyaam  */}
            <img
              src={props.file["file6"][1]}
              id="image6"
              className="hidden h-full w-full"
              alt="hello"
            />
            <button
              id="button6"
              className="hidden w-full h-full nigger"
              onClick={props.onDeletehandler}
              data="6"
            >
              <TrashIcon
                className="h-6 w-6 text-gray-100 chid absolute"
                aria-hidden="true"
              ></TrashIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection2;
