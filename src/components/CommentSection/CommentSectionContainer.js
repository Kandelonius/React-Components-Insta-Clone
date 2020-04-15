// You will add code to this file
// Add state for the comments
/* map through the comments data and return the Comment component */
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
const CommentSection = props => {
  const [comments, setComments] = useState(props.comments);
  // console.log(props.comments);
  return (
    <div>
    {
      comments.map((item, index) =>{ 
        return <Comment key={index} comment={item}/>
      })
    }
    <CommentInput />
    </div>
  );
};

export default CommentSection;
