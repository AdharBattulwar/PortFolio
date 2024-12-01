import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./css/loader.css";

const Loadercomponent = () => {
  return (
    <div className="loaderWrapper">
      <DotLottieReact
        className="loaderComponent"
        src="https://lottie.host/2bc1732e-059e-4606-8cc1-d2cbb3fcb7e6/JjNT4al1o2.lottie"
        loop
        autoplay
      />
      <h2 className="loaderText">loading...</h2>
    </div>
  );
};

export default Loadercomponent;
