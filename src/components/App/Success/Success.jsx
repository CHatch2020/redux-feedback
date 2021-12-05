import React from "react";
import { useHistory } from "react-router-dom";

function Success() {
  const history = useHistory();

  const goBackHome = () => {
    console.log("Niner, Niner, Enroute back to mother planet");
    history.push("/");
  };

  return (
    <div className="text-center text-4xl ">
      <h2 className="my-8 border-2 border-black mx-96 py-8">Feedback!</h2>
      <div className="screen border-2 border-black mx-96 py-48">
        <h3 className="my-8 text-6xl">Thank You!</h3>
        <button className="text-4xl shadow mx-8 px-4 py-1 border-2 border-black rounded bg-red-300" onClick={goBackHome}>
          Leave New Feedback
        </button>
      </div>
    </div>
  );
}

export default Success;
