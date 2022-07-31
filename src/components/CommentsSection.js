import React from "react";

function CommentsSection({comments}){

    const commentList = comments.map((comment) => {
        return <div class="comment" key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
        </div>
    })


    return (
        <div>
        <hr/>
        {commentList}
        </div>
    )
}

export default CommentsSection