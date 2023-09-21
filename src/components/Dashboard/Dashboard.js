import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Products from "../Products/Products";

const Dashboard = (props) => {
  const Location = useLocation();

  // const previousPathnameRef = useRef(Location.pathname);

  useEffect(() => {
    if (props.clickhandler) {
      props.clickhandler(Location.pathname);
    }
  }, [Location.pathname]);

  return <div className="crazy"><Products></Products></div>;
};

export default Dashboard;
