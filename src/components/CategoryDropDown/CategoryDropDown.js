import React from "react";
import Modal from "../Modal/Modal";
import { useState } from "react";
import DisplayCategory from "../DisplayCategory/DisplayCategory";
import { nanoid } from "nanoid";
import {
    PlusIcon,
  } from "@heroicons/react/20/solid";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.uid = value.toLowerCase() +'-'+ nanoid().toLowerCase();
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

  getUid() {
    return this.uid;
  }

  findNode(uid) {
    if (this.uid === uid) {
      return this;
    }

    for (const child of this.children) {
      const found = child.findNode(uid);
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

const CategoryDropDown = () => {
  const [open, setOpen] = useState(false);

  const [root, addCategory] = useState(new TreeNode("root"));

  const stateChanger = (e) => {
    if (e) {
      e.preventDefault();
    }
    setOpen(!open);
    console.log(addCategory)
    console.log(e);
  };

  const CategoryFetcher = (val) => {
    
    const newCat = new TreeNode(val);
    root.addChild(newCat);
    console.log(root.getChildren());
  };
  
  const updateCategoryByUid = (uid,updatedCategory) => {
    const nodetoedit = root.findNode(uid);
    nodetoedit.value = updatedCategory;
    console.log(nodetoedit)
  }

  const AddChildNode = (value,parentId) => {
    const nodetoedit = root.findNode(parentId);

    const newSub = new TreeNode(value);
    nodetoedit.addChild(newSub);
  }

  return (
    <>
      <Modal
        textRetrieve={CategoryFetcher}
        ChangeState={stateChanger}
        ModalState={open}
      ></Modal>
      <fieldset>
        <label className="mt-6 text-lg leading-8 text-gray-300">
          Category
        </label>
        <div className="mt-2 space-y-2 max-w-xl rounded-md bg-white">
          <DisplayCategory depth={0} childArray={root.getChildren()} updateCategoryByUid={updateCategoryByUid} AddChildNode={AddChildNode}/>
        </div>
      </fieldset>
      <button
          onClick={stateChanger}
          className="rounded-md bg-indigo-600 w-fit text-white px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            <div className="flex">
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                <p className="ml-1">Add Category</p>
            </div>
        </button>
    </>
  );
};

export default CategoryDropDown;
