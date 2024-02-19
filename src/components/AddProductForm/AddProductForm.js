import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./App.css";
import Modal from "../Modal/Modal";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";
import FormSection1 from "../FormSection1/FormSection1";
import FormSection2 from "../FormSection2/FormSection2";
import FormSection3 from "../FormSection3/FormSection3";
import ProductSummary from "../ProductSummary/ProductSummary";
import Progressbar from "../ProgressBar/ProgressBar";

export default function AddProductForm() {
  const [ModalState, setModalState] = useState(false);

  const [file, setFile] = useState({
    count: 0,
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

  const [FormSectionFilledState, setFormSectionFilledstate] = useState([0, 0, 0, 0])

  const [ErrorState, setErrorState] = useState(false);

  const [stepState, setStepState] = useState([
    { status: "editing" },
    { status: "pending" },
    { status: "pending" },
    { status: "pending" }
  ]);

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

    newFile["count"]++;
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
    newFile["count"]--;
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
    let newFilledState = FormSectionFilledState;
    let newProgressState = stepState;


    for (let i = 0; i < newFilledState.length; i++) {
      FieldValues["product_title"].length > 0 && FieldValues["product_description"].length > 10 ? newFilledState[0] = 1 : newFilledState[0] = 0;
      file["count"] ? newFilledState[1] = 1 : newFilledState[1] = 0;
      FieldValues["product_price"].length > 0 && FieldValues["product_quantity"].length > 0 && FieldValues["product_currency"].length > 0 ? newFilledState[2] = 1 : newFilledState[2] = 0;
    }

    setFormSectionFilledstate(newFilledState);

    if (e.target.getAttribute("name") == "next" && FormSectionFilledState[currIndex] != 0) {
      if (arraySize > currIndex + 1) {
        newState[currIndex] = 0;
        newState[currIndex + 1] = 1;
      }
      setErrorState(false);
      setFormSectionState(newState);
    } else if (e.target.getAttribute("name") == "back") {
      if (0 <= currIndex - 1) {
        newState[currIndex] = 0;
        newState[currIndex - 1] = 1;
      }
      setFormSectionState(newState);
    } else {
      setErrorState(true);
    }

    for(let j = 0; j<newState.length; j++) {
      if(newState[j] == 1) {
        newProgressState[j]["status"] = "editing";
      }else {
        if(newFilledState[j] == 1 && newState.indexOf(1) > j) {
          newProgressState[j]["status"] = "done";
        }else {
          newProgressState[j]["status"] = "pending";
        }
      }
    }
    
    setStepState(newProgressState);

    console.log(stepState);
  };

  const ErrorPopUpHandler = (e) => {
    e.preventDefault();
    setErrorState(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(FieldValues)) {
      formData.append(key, value);
      console.log(key, value);
    }

    for (const [key, value] of Object.entries(file)) {
      formData.append(key, value[0]);
      console.log(key, value)
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
                {/* This is where the progress bar is */}
                <Progressbar stepState={stepState}></Progressbar>
                {/* This is where the progress bar ends */}
                <div className="mt-10 text-center lg:mx-0 lg:flex-auto lg:pt-32 pt-20 lg:text-left">
                  {ErrorState ? <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5" role="alert">
                    <strong class="font-bold">Empty Fields!</strong>
                    <span class="block sm:inline">  Please fill the required fields</span>

                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <button onClick={ErrorPopUpHandler}>
                        <XMarkIcon
                          className=" fill-current h-6 w-6 text-red-500"
                          aria-hidden="true"
                        >
                          Close
                        </XMarkIcon>
                      </button>
                    </span>
                  </div> : <></>}
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
                      summary={FieldValues}
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
