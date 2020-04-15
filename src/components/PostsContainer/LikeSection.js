// look at the likes on this component. Right now it is hard coded on line 22.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
// rendered by post postpage app
const LikeSection = props => {
  console.log(props);
  const upvote = (likes) => {
    return props.update(likes + 1)
  }
  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <button className="like-section-wrapper" onClick={() => upvote(props.likes)}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{props.likes}</p>
    </div>
  )
};

export default LikeSection;
