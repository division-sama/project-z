import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import "./App.css";
import Modal from "../Modal/Modal";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";
import FormSection1 from "../FormSection1/FormSection1";
import FormSection2 from "../FormSection2/FormSection2";
import FormSection3 from "../FormSection3/FormSection3";
import ProductSummary from "../ProductSummary/ProductSummary";

export default function AddProductForm() {
  const [ModalState, setModalState] = useState(false);

  const [file, setFile] = useState({
    file1: [null, ""],
    file2: [null, ""],
    file3: [null, ""],
    file4: [null, ""],
    file5: [null, ""],
    file6: [null, ""],
  });

  const [FieldValues, setFieldValues] = useState({
    product_title: "",
    product_description: "",
    product_price: "",
    product_quantity: "",
    product_currency: "",
  });

  const [FormSectionState, setFormSectionState] = useState([1, 0, 0, 0]);

  const ModalStateChanger = (e) => {
    if (e) {
      e.preventDefault();
    }
    setModalState(!ModalState);
  };

  //Utility function for adding and removing classes on click
  function classToggler(id) {
    let labe1 = document.getElementById("label" + id);
    labe1.classList.toggle("hidden");
    let img1 = document.getElementById("image" + id);
    img1.classList.toggle("hidden");
    let button1 = document.getElementById("button" + id);
    button1.classList.toggle("hidden");
    button1.classList.toggle("absolute");
    button1.classList.toggle("z-50");
  }

  function handleChange(e) {
    let newFile = { ...file };
    console.log(e.target.id);

    let id = e.target.getAttribute("data");

    newFile["file" + id][0] = e.target.files[0];
    newFile["file" + id][1] = URL.createObjectURL(e.target.files[0]);

    console.log(e.target.files[0]);
    console.log(newFile);

    setFile(newFile);
    classToggler(id);
  }

  function onDeletehandler(e) {
    e.stopPropagation();
    e.preventDefault();
    let newFile = { ...file };
    let id = e.target.getAttribute("data");
    console.log(id);

    newFile["file" + id] = [null, ""];
    console.log(newFile);

    setFile(newFile);
    classToggler(id);
  }

  const TextChangeHandler = (e, ckeditor) => {

    let val, key, newVals;

    if (ckeditor) {
      val = ckeditor.data;
      key = ckeditor.name;
    } else {
      val = e.target.value;
      key = e.target.getAttribute("name");
      console.log(val);
    }

    newVals = { ...FieldValues };
    newVals[key] = val;
    setFieldValues(newVals);
  };

  const CategoryFetcher = (val) => {
    console.log(val);
  };

  const changeFormStateHandler = (e) => {
    e.preventDefault();
    let currIndex = FormSectionState.indexOf(1);
    let newState = [...FormSectionState];
    let arraySize = FormSectionState.length;
    if (e.target.getAttribute("name") == "next") {
      if (arraySize > currIndex + 1) {
        newState[currIndex] = 0;
        newState[currIndex + 1] = 1;
      }
      setFormSectionState(newState);
    } else {
      if (0 <= currIndex - 1) {
        newState[currIndex] = 0;
        newState[currIndex - 1] = 1;
      }
      setFormSectionState(newState);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(FieldValues)) {
      formData.append(key, value);
      console.log(key, value);
    }

    for (const [key, value] of Object.entries(file)) {
      formData.append(key, value[0]);
      console.log(key,value)
    }

    try {
      const response = await fetch("http://localhost:8000/submitform", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        // Access the access token from the response
        console.log(data);
      } else {
        // Handle login error
        console.error("Data not here");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Modal
        textRetrieve={CategoryFetcher}
        ChangeState={ModalStateChanger}
        ModalState={ModalState}
      ></Modal>
      <form>
        <div className="space-y-12 m-4 md:m-10 max-w-8xl">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Product Details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            {/* First Section - title, desc, photos */}
            {/* This is the card start part */}
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 shadow-2xl rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 flex flex-col">
                <div className="absolute mx-auto flex justify-center py-4 mt-5 lg:mt-16 left-0 right-0 lg:left-auto lg:right-auto">
                  <nav aria-label="Progress">
                    <ol className="flex items-center">
                      <li className="sm:pr-20 relative pr-8">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="h-0.5 w-full bg-indigo-600"></div>
                        </div>
                        <a
                          href="www.google.com"
                          className="bg-indigo-600 relative flex rounded-full items-center w-8 h-8 justify-center "
                        >
                          <CheckIcon
                            className=" h-5 w-5 text-gray-100 chid absolute"
                            aria-hidden="true"
                          ></CheckIcon>
                          <span className="t">Step 1</span>
                        </a>
                      </li>
                      <li className="sm:pr-20 relative pr-8">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="h-0.5 w-full bg-gray-200"></div>
                        </div>
                        <a
                          href="www.google.com"
                          className="bg-indigo-600 relative flex rounded-full items-center w-8 h-8 justify-center "
                        >
                          <CheckIcon
                            className=" h-5 w-5 text-gray-100 chid absolute"
                            aria-hidden="true"
                          ></CheckIcon>
                          <span className="t">Step 1</span>
                        </a>
                      </li>
                      <li className="sm:pr-20 relative pr-8">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="h-0.5 w-full bg-gray-200"></div>
                        </div>
                        <a
                          href="www.google.com"
                          className=" bg-white border-2 border-gray-300 relative flex rounded-full items-center w-8 h-8 justify-center"
                        >
                          <span className="t">Step 1</span>
                        </a>
                      </li>
                      <li className="sm:pr-20 relative pr-8">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="h-0.5 w-full bg-gray-200"></div>
                        </div>
                        <a
                          href="www.google.com"
                          className="bg-white border-2 border-gray-300 relative flex rounded-full items-center w-8 h-8 justify-center "
                        >
                          <span className="t">Step 1</span>
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          href="www.google.com"
                          className="bg-white border-2 border-gray-300 relative flex rounded-full items-center w-8 h-8 justify-center "
                        >
                          <span className="t">Step 1</span>
                        </a>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="mt-10 text-center lg:mx-0 lg:flex-auto lg:pt-32 pt-20 lg:text-left">
                  <div className="flex flex-col">
                    <FormSection1
                      visibility={FormSectionState[0]}
                      FieldValues={FieldValues}
                      TextChangeHandler={TextChangeHandler}
                    ></FormSection1>
                    <FormSection2
                      visibility={FormSectionState[1]}
                      handleChange={handleChange}
                      file={file}
                      onDeletehandler={onDeletehandler}
                    ></FormSection2>
                    <FormSection3
                      visibility={FormSectionState[2]}
                      FieldValues={FieldValues}
                      TextChangeHandler={TextChangeHandler}
                    ></FormSection3>
                    <ProductSummary
                      visibility={FormSectionState[3]}
                      summary = {FieldValues}
                      file={file}
                      onDeletehandler={onDeletehandler}
                      handleChange={handleChange}
                    ></ProductSummary>
                  </div>
                </div>
                <div className="m-10 flex justify-center lg:justify-end">
                  <button
                    className="mr-5 self-end rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    name="back"
                    onClick={changeFormStateHandler}
                  >
                    Back
                  </button>
                  <button
                    className="ml-5 self-end rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-gray-600 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    name="next"
                    onClick={changeFormStateHandler}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <button
              className="ml-5 self-end rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-gray-600 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              name="Submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
