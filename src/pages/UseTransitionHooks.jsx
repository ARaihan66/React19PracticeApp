import React from "react";
import UseTransitionServerAction from "../components/UseTransitionServerAction";
import UseTransitionNonBlockingUI from "../components/UseTransitionNonBlockingUI";

function UseTransitionHooks() {
  return (
    <>
      <h2 className="text-center font-semibold my-5">
        useTransition Server Action
      </h2>
      <UseTransitionServerAction />
      <h2 className="text-center font-semibold my-5">
        useTransition Non Blocking UI
      </h2>
      <UseTransitionNonBlockingUI />
    </>
  );
}

export default UseTransitionHooks;
