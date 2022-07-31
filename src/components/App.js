import React, { useState } from "react";
import video from "../data/video.js";
import CommentsSection from "./CommentsSection.js";
import Description from "./Description.js";

function App() {
  console.log("Here's your data:", video);

  const [commentsState, setCommentsState] = useState(true)

  function handleSetCommentsState() {
    setCommentsState((commentsState) => !commentsState)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

      <Description 
        videoTitle={video.title} 
        views={video.views} 
        date={video.createdAt} 
        commentsState={commentsState}
        updateCommentsState={handleSetCommentsState}/>

      <div id="commentsSection">
        {commentsState ? <CommentsSection comments={video.comments}/> : ""}
      </div>

    </div>
    
  );
}

export default App;
