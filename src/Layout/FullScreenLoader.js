import React from "react";
// import { CirclesWithBar } from "react-loader-spinner";
import loader from '../assets/images/loader.svg'

const FullScreenLoader = () => {
  return (
    <div className="loader-main">
          <div className="center-screen">
              <img src={loader} className="loader-size" alt=''/>
        </div>
    </div>
  );
};

export default FullScreenLoader;
