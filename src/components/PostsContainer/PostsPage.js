//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../../src/dummy-data.js"
// import data 
// { dummyData }
const PostsPage = () => {
  console.log(dummyData);
  // set up state for your data
  const [post, setPost] = useState(dummyData);
  // debugger
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData.map(post => <Post post={post}/>)}
    </div>
  );
};

export default PostsPage;
