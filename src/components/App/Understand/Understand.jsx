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
    <div>
      <h2>How well are you understanding the content?</h2>
      <h4>Understanding?</h4>
      <input onChange={getUnderstandData} type="number" placeholder="Rate: 1-10" />

      <button onClick={sumbitData}>Next</button>
    </div>
  );
}

export default Understand;
