import React from "react";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";

const FormSection1 = (props) => {
  return (
    <div className={ `${props.visibility ? 'block' : 'hidden'}`}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6" >
        {/* The Product title */}
        <div className="sm:col-span-4">
          <label
            htmlFor="username"
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Product Title
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 lg:max-w-md">
              <input
                type="text"
                name="product_title"
                id="product-title"
                placeholder="Title"
                value={props.FieldValues.product_title}
                onChange={props.TextChangeHandler}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        {/* The Product Description */}
        <div className="sm:col-span-4">
          <label
            htmlFor="product_description"
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Product Description
          </label>
          <div className="mt-2">
            <textarea
              id="product_description"
              name="product_description"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={props.FieldValues.product_description}
              onChange={props.TextChangeHandler}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            Write a few sentences about your product.
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-10">
        <CategoryDropDown></CategoryDropDown>
      </div>
    </div>
  );
};

export default FormSection1;
