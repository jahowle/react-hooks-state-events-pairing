import React from "react";

function CommentButton({commentsState, updateCommentsState}) {
    return(
        <button id="commentButton" onClick={updateCommentsState}>
            {commentsState ? "Hide Comments" : "Show Comments"}
        </button>
    )
}

export default CommentButton