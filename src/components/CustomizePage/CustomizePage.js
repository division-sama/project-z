import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CustomizePage = (props) => {
  const Location = useLocation();

  useEffect(() => {
    if (props.clickhandler) {
      const str = Location.pathname.replace(/^\/+/, "");
      props.clickhandler(str);
    }
  }, [Location.pathname]);

  return <div className="crazy">Customize</div>;
};

export default CustomizePage;
