import React from "react";

function VoteButton({buttonText, voteValue, voteHandler}) {
    return (
        <button onClick={voteHandler}>
            {voteValue} {buttonText}
        </button>
    )
}

export default VoteButton