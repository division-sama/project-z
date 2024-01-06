import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import "./App.css";
import Modal from "../Modal/Modal";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";
import FormSection1 from "../FormSection1/FormSection1";
import FormSection2 from "../FormSection2/FormSection2";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  addChild(childNode) {
    childNode.parent = this;
    this.children.push(childNode);
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    return this.children;
  }

  findNode(value) {
    if (this.value === value) {
      return this;
    }

    for (const child of this.children) {
      const found = child.findNode(value);
      if (found) {
        return found;
      }
    }

    return null;
  }

  printTree(depth = 0) {
    const indent = "  ".repeat(depth);
    console.log(indent + this.value);

    for (const child of this.children) {
      child.printTree(depth + 1);
    }
  }

  renderTreeAsHTML(depth = 0) {
    const indent = "&nbsp;&nbsp;".repeat(depth);
    const nodeElement = document.createElement("div");
    nodeElement.innerHTML = `${indent}${this.value}`;

    for (const child of this.children) {
      const childElement = child.renderTreeAsHTML(depth + 1);
      nodeElement.appendChild(childElement);
    }

    return nodeElement;
  }

  toJSON() {
    const childrenJSON = this.children.map((child) => child.toJSON());
    return {
      value: this.value,
      children: childrenJSON,
    };
  }
}

const root = new TreeNode("root");

let men = new TreeNode("Men");

let Bottom = new TreeNode("Bottom");

let women = new TreeNode("Women");

root.addChild(men);
root.addChild(women);

women.addChild(Bottom);
men.addChild(Bottom);

root.printTree();

export default function AddProductForm() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState({
    file1: "",
    file2: "",
    file3: "",
    file4: "",
    file5: "",
    file6: "",
  });

  const [Categories, setCategories] = useState({
    Men: [],
    Women: [],
  });

  console.log(Categories,setCategories);

  const [FieldValues, setFieldValues] = useState({
    product_title: "",
    product_description: "",
    product_price: "",
    product_status: "",
    product_quantity: "",
    additional_information: "",
    product_availibility: "",
  });

  const stateChanger = (e) => {
    if (e) {
      e.preventDefault();
    }
    setOpen(!open);
  };

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

    newFile["file" + id] = URL.createObjectURL(e.target.files[0]);
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

    newFile["file" + id] = "";
    console.log(newFile);

    setFile(newFile);
    classToggler(id);
  }

  const TextChangeHandler = (e) => {
    const val = e.target.value;
    const key = e.target.getAttribute("name");
    let newVals = { ...FieldValues };
    newVals[key] = val;

    console.log(newVals);

    setFieldValues(newVals);
  };

  const CategoryFetcher = (val) => {
    console.log(val);
  };

  return (
    <>
      <Modal
        textRetrieve={CategoryFetcher}
        ChangeState={stateChanger}
        ModalState={open}
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
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 ">
                <div class="absolute mx-auto flex justify-center py-4 mt-5 lg:mt-16">
                  <nav aria-label="Progress">
                    <ol class="flex items-center">
                      <li class="sm:pr-20 relative pr-8">
                        <div
                          class="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div class="h-0.5 w-full bg-indigo-600"></div>
                        </div>
                        <a
                          href="www.google.com"
                          class="bg-indigo-600 relative flex rounded-full items-center w-8 h-8 justify-center ajr bix"
                        >
                          <CheckIcon
                            className=" h-5 w-5 text-gray-100 chid absolute"
                            aria-hidden="true"
                          ></CheckIcon>
                          <span class="t">Step 1</span>
                        </a>
                      </li>
                      <li class="sm:pr-20 relative pr-8">
                        <div
                          class="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div class="h-0.5 w-full bg-gray-200"></div>
                        </div>
                        <a
                          href="www.google.com"
                          class="bg-indigo-600 relative flex rounded-full items-center w-8 h-8 justify-center ajr bix"
                        >
                          <CheckIcon
                            className=" h-5 w-5 text-gray-100 chid absolute"
                            aria-hidden="true"
                          ></CheckIcon>
                          <span class="t">Step 1</span>
                        </a>
                      </li>
                      <li class="sm:pr-20 relative pr-8">
                        <div
                          class="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div class="h-0.5 w-full bg-gray-200"></div>
                        </div>
                        <a
                          href="www.google.com"
                          class=" bg-white border-2 border-gray-300 relative flex rounded-full items-center w-8 h-8 justify-center ajr bix"
                        >
                          <span class="t">Step 1</span>
                        </a>
                      </li>
                      <li class="sm:pr-20 relative pr-8">
                        <div
                          class="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div class="h-0.5 w-full bg-gray-200"></div>
                        </div>
                        <a
                          href="www.google.com"
                          class="bg-white border-2 border-gray-300 relative flex rounded-full items-center w-8 h-8 justify-center ajr bix"
                        >
                          <span class="t">Step 1</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          href="www.google.com"
                          class="bg-white border-2 border-gray-300 relative flex rounded-full items-center w-8 h-8 justify-center ajr bix"
                        >
                          <span class="t">Step 1</span>
                        </a>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 py-20 lg:text-left">
                  <div className="flex flex-col">
                    <FormSection1
                      FieldValues={FieldValues}
                      TextChangeHandler={TextChangeHandler}
                    ></FormSection1>
                  </div>
                </div>
              </div>
            </div>
            {/* This card end part */}

            <div className="flex flex-col">
              <FormSection2
                handleChange={handleChange}
                file={file}
                onDeletehandler={onDeletehandler}
              ></FormSection2>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>

            <div className="mt-10 space-y-10">
              <CategoryDropDown></CategoryDropDown>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Push Notifications
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="m-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
