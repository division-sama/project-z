import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ManageProducts = (props) => {
  const Location = useLocation();

  // const previousPathnameRef = useRef(Location.pathname);

  useEffect(() => {
    if (props.clickhandler) {
      const str = Location.pathname.replace(/^\/+/, "");
      props.clickhandler(str);
    }
  }, [Location.pathname]);

  return <div className="crazy">ManageProducts</div>;
};

export default ManageProducts;
