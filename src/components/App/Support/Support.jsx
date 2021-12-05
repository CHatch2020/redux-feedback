import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newSupport, setNewSupport] = useState({
      support: 0
  });

  const goToComment = () => {
    console.log("Going to checkout");
    history.push("/comments");
  };

  const sumbitData = () => {
    dispatch({
      type: "ADD_SUPPORT",
      payload: newSupport,
    });
    goToComment();
  };

  const getSupportData = (e) => {
    setNewSupport({
        support: e.target.value
    })
  };

  return (
    <div className="text-center py-24">
      <h2 className="text-4xl">How well are you being supported?</h2>
      <h4 className="text-4xl">Support?</h4>
      <input className="text-2xl shadow-lg" onChange={getSupportData} type="number" placeholder="Rate: 1-10" />

      <button className="text-2xl mx-8 px-4 py-1 border-2 border-black rounded bg-purple-300" onClick={sumbitData}>Next</button>
    </div>
  );
}

export default Support;
