import React, { useState } from "react";
import video from "../data/video.js";
import CommentButton from "./CommentButton.js";
import VoteButton from "./VoteButton.js";

function Description({ videoTitle, views, date, commentsState, updateCommentsState, voteHandler }) {
    

    // const [videoState, setVideoState] = useState(video)

    const [upvoteCount, setUpvoteCount] = useState(video.upvotes)
    const [downvoteCount, setDownvoteCount] = useState(video.downvotes)

    function increaseUpvotes(){
        setUpvoteCount(upvoteCount + 1)
      }
    
      function increaseDownvotes(){
        setDownvoteCount(downvoteCount + 1)
      }

    
    return (
        <div>
            <h1>
                {videoTitle}
            </h1>
            <p>
                {views} Views | Uploaded {date}
            </p>
            <VoteButton voteHandler={increaseUpvotes} voteValue={upvoteCount} buttonText={"👍"} />
            <VoteButton voteHandler={increaseDownvotes}voteValue={downvoteCount} buttonText={"👎"} />
            <div>
            <CommentButton commentsState={commentsState} updateCommentsState={updateCommentsState}/>
            </div>
        </div>
    )
}

export default Description