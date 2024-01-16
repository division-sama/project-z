import React from "react";

const CategoryCheckbox = (props) => {
  return (
      <div className="relative flex gap-x-3">
        <div className="flex h-6 items-center">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="text-sm leading-6">
          <label htmlFor="comments" className="font-medium text-gray-900">
           {props.children}
          </label>
        </div>
      </div>
  );
};

export default CategoryCheckbox;
