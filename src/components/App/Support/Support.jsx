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
    <div>
      <h2>How well are you being supported?</h2>
      <h4>Support?</h4>
      <input onChange={getSupportData} type="number" placeholder="Rate: 1-10" />

      <button onClick={sumbitData}>Next</button>
    </div>
  );
}

export default Support;
