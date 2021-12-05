import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Understand() {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const [newUnderstand, setNewUnderstand] = useState({
      understanding: 0
    });
  
    const goToSupport = () => {
      console.log("Going to checkout");
      history.push("/support");
    };
  
    const sumbitData = () => {
      dispatch({
        type: "ADD_UNDERSTAND",
        payload: newUnderstand,
      });
      goToSupport();
    };
  
    const getUnderstandData = (e) => {
      setNewUnderstand({
        understanding: e.target.value
      });
    };
  

  return (
    <div className="text-center py-24">
      <h2 className="text-4xl">How well are you understanding the content?</h2>
      <h4 className="text-4xl">Understanding?</h4>
      <input className="text-2xl shadow-lg" onChange={getUnderstandData} type="number" placeholder="Rate: 1-10" />

      <button className="text-2xl mx-8 px-4 py-1 border-2 border-black rounded bg-green-200" onClick={sumbitData}>Next</button>
    </div>
  );
}

export default Understand;
