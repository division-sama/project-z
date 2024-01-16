import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductChip from "../ProductChip/ProductChip";

const ManageProducts = (props) => {
  const Location = useLocation();

  // const previousPathnameRef = useRef(Location.pathname);

  useEffect(() => {
    if (props.clickhandler) {
      const str = Location.pathname.replace(/^\/+/, "");
      props.clickhandler(str);
    }
  }, [Location.pathname]);

  return (
    <div>
      <div className="mx-2 my-6 grid sm:grid-cols-3 md:grid-cols-4 gap-4 grid-cols-1">
        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Add product
        </a>
      </div>
      <ProductChip></ProductChip>
    </div>
  );
};

export default ManageProducts;
