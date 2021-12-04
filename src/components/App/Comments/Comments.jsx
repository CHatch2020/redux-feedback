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
    <div>
      <h2>Any comments you want to leave?</h2>
      <h4>Comments?</h4>
      <input onChange={getCommentData} type="text" placeholder="Comments" />

      <button onClick={sumbitData}>Next</button>
    </div>
  );
}

export default Comments;
