import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Graphs from "../Graphs/Graphs";

const ReportsPage = (props) => {
  const Location = useLocation();

  // const previousPathnameRef = useRef(Location.pathname);

  useEffect(() => {
    if (props.clickhandler) {
      const str = Location.pathname.replace(/^\/+/, "");
      props.clickhandler(str);
    }
  }, [Location.pathname]);

  return <div className="crazy"><Graphs></Graphs></div>;
};

export default ReportsPage;
