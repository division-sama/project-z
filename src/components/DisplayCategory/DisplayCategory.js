import React, { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import AddSubCategory from "../AddSubCategory/AddSubCategory";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  ChevronUpIcon,
  PencilIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  CheckIcon,
  XMarkIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";

const DisplayCategory = (props) => {
  const [modalState, setModalState] = useState(false);
  const [EditCateGoryName, setCateGoryName] = useState("");
  const [EditState, setEditState] = useState({
    state: false,
    uid: "",
  });
  const [modalcategoryState, setModalcategoryState] = useState("");

  const onChangeTextCategory = (e) => {
    setCateGoryName(e.target.value);
  };

  const SaveEditHandler = (e) => {
    e.preventDefault();
    const uid = e.target.getAttribute("uid");
    console.log(EditCateGoryName);
    props.updateCategoryByUid(uid, EditCateGoryName);
    const new_obj = Object.create(EditState);
    new_obj.state = !EditState.state;
    new_obj.uid = "";
    setEditState(new_obj);
  };

  const CancelEditHandler = (e) => {
    e.preventDefault();
    const new_obj = Object.create(EditState);
    new_obj.state = !EditState.state;
    new_obj.uid = "";
    setEditState(new_obj);
  };

  const SubCategoryModalEditor = () => {
    setModalState(!modalState);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setModalcategoryState(e.target.getAttribute("uid"));
    SubCategoryModalEditor();
    console.log(e.target.getAttribute("uid"));
  };

  const stateChanger = (e, state) => {
    if (e) {
      e.preventDefault();
    }
    console.log(state);
    setModalState(state);
  };

  const QuickEditCategory = (e) => {
    e.preventDefault();
    const CategoryName = e.target.getAttribute("ele");
    console.log(CategoryName, e.target, e.target.getAttribute("uid"));
    setCateGoryName(CategoryName);
    const new_obj = Object.create(EditState);
    new_obj.state = !EditState.state;
    new_obj.uid = e.target.getAttribute("uid");
    setEditState(new_obj);
  };

  const AddChildNode = (value, parentId) => {
    props.AddChildNode(value, parentId);
    setModalcategoryState("");
  };

  if (props.childArray.length === 0) {
    return <></>;
  } else {
    return (
      <>
        <AddSubCategory
          parentId={modalcategoryState}
          AddChildNode={AddChildNode}
          modalState={modalState}
          ChangeModalState={stateChanger}
        ></AddSubCategory>{" "}
        {props.childArray.map((ele) => {
          return (
            <div key={ele.uid}>
              <Disclosure as="div" className="w-[-webkit-fill-available]">
                {({ open }) => (
                  <>
                    <div className="rounded-md flex items-center justify-between bg-white text-sm text-gray-400">
                      <div className="flex">
                        {ele.getChildren().length ? (
                          <>
                            <div className="">
                              <Disclosure.Button className="rounded-md items-center justify-between bg-white text-sm text-gray-400 hover:text-gray-500">
                                <span className="flex items-center">
                                  {open ? (
                                    <ChevronUpIcon
                                      className="h-5 w-5 m-2"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ChevronDownIcon
                                      className="h-5 w-5 m-2"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="invisible">
                              <Disclosure.Button className="items-center justify-between bg-white text-sm text-gray-400 hover:text-gray-500">
                                <span className="flex items-center">
                                  {open ? (
                                    <ChevronUpIcon
                                      className="h-5 w-5 m-2"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ChevronDownIcon
                                      className="h-5 w-5 m-2"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </div>
                          </>
                        )}
                        <div className="flex">
                          <div className="relative flex gap-x-3">
                            <div className="flex items-center">
                              <input
                                id="candidates"
                                name="candidates"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="text-sm flex self-center leading-6">
                              {EditState.uid === ele.uid && EditState.state ? (
                                <>
                                  <div className="">
                                    <input
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      value={EditCateGoryName}
                                      onChange={onChangeTextCategory}
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </>
                              ) : (
                                <>
                                  <label
                                    htmlFor="candidates"
                                    className="font-medium text-gray-900"
                                  >
                                    {ele.value}
                                  </label>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex text-gray-400">
                          {EditState.uid === ele.uid && EditState.state ? (
                            <>
                              <div className="flex justify-between">
                                <button
                                  className="hover:text-gray-500"
                                  onClick={SaveEditHandler}
                                  uid={ele.getUid()}
                                >
                                  <CheckIcon
                                    className="h-5 w-5 m-2"
                                    aria-hidden="true"
                                  />
                                </button>
                                <button
                                  className="hover:text-gray-500"
                                  onClick={CancelEditHandler}
                                  uid={ele.getUid()}
                                >
                                  <XMarkIcon
                                    className="h-5 w-5 m-2"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </>
                          ) : (
                            <>
                              <button
                                className="hover:text-gray-500"
                                onClick={QuickEditCategory}
                                ele={ele.value}
                                uid={ele.getUid()}
                              >
                                <PencilSquareIcon
                                  className="h-5 w-5 m-2"
                                  aria-hidden="true"
                                />
                              </button>
                            </>
                          )}
                        </div>
                        <button
                          className="hover:text-gray-500 mr-3"
                          onClick={handleEdit}
                          uid={ele.getUid()}
                        >
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <Disclosure.Panel>
                      <div className="pl-5 flex flex-col">
                        <DisplayCategory
                          AddChildNode={AddChildNode}
                          updateCategoryByUid={props.updateCategoryByUid}
                          depth={props.depth + 1}
                          childArray={ele.getChildren()}
                        ></DisplayCategory>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </>
    );
  }
};

export default DisplayCategory;
