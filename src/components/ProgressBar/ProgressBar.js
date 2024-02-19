import React, { useState } from "react";
import { CheckIcon, PencilIcon } from "@heroicons/react/24/outline";

const Progressbar = (props) => {

    //Hold the progress state of each section

    return (
        <div className="absolute mx-auto flex justify-center py-4 mt-5 lg:mt-16 left-0 right-0 lg:left-auto lg:right-auto">
            <nav aria-label="Progress">
                <ol className="flex items-center">
                    {props.stepState.map((ele, index) => (
                        <li className="sm:pr-20 relative pr-8" id={index} key={index}>
                            {!(index == 3) ? (<div
                                className="absolute inset-0 flex items-center"
                                aria-hidden="true"
                            >
                                <div className={` ${(ele["status"] == "done") ? "bg-indigo-600" : "bg-white"} h-0.5 w-full ease-in duration-300`}></div>
                            </div>) : (<></>)}
                            <a
                                href="www.google.com"
                                className={`${(ele["status"] == "editing") ? "bg-green-600 " : (ele["status"] == "pending") ? "bg-white" : "bg-indigo-600"} relative flex rounded-full items-center w-8 h-8 justify-center ease-in duration-300`}
                            >
                                {(ele["status"] == "editing") ? (<PencilIcon
                                    className=" h-5 w-5 text-gray-100 chid absolute ease-in duration-300"
                                    aria-hidden="true"
                                ></PencilIcon>) : (<CheckIcon
                                    className=" h-5 w-5 text-gray-100 chid absolute ease-in duration-300"
                                    aria-hidden="true"
                                ></CheckIcon>)}
                                <span className="t">{ele.keys}</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}

export default Progressbar;