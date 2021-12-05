import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newFeeling, setNewFeeling] = useState({
    feeling: 0
  });

  const goToUnderstand = () => {
    console.log("Going to checkout");
    history.push("/understand");
  };

  const sumbitData = () => {
    dispatch({
      type: "ADD_FEELING",
      payload: newFeeling,
    });
    goToUnderstand();
  };

  const getFeelingData = (e) => {
    setNewFeeling({
      feeling: e.target.value
    });
  };

  return (
    <div className="text-center py-24">
      <h2 className="text-4xl">How are you feeling today?</h2>
      <h4 className="text-4xl">Feeling?</h4>
      <input className="text-2xl shadow-lg" onChange={getFeelingData} type="number" placeholder="Rate: 1-10" />

      <button className="text-2xl mx-8 px-4 py-1 border-2 border-black rounded bg-red-200" onClick={sumbitData}>Next</button>
    </div>
  );
}

export default Feeling;
