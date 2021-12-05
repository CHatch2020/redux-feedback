import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newComment, setNewComment] = useState({
      comments: ''
  });

  const goToReview = () => {
    console.log("Going to checkout");
    history.push("/review");
  };

  const sumbitData = () => {
    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });
    goToReview();
  };

  const getCommentData = (e) => {
    setNewComment({
        comments: e.target.value
    })
  };

  return (
    <div className="text-center py-24">
      <h2 className="text-4xl">Any comments you want to leave?</h2>
      <h4 className="text-2xl mr-72 ml-8 opacity-30">Comments?</h4>
      <input className="text-2xl shadow-lg" onChange={getCommentData} type="text" placeholder="Comments" />

      <button className="text-2xl mx-8 px-4 py-1 border-2 border-black rounded bg-blue-300 hover:text-gray-200 hover:border-white hover:shadow-inner" onClick={sumbitData}>▶️</button>
    </div>
  );
}

export default Comments;
