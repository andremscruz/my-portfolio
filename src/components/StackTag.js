import React from "react";

function StackTag(props){
    return(
        <>
            <div className="stack-tags-div">
                {props.stack.frontend.map(front =>
                    <span
                    style={ !props.stack.backend.length ? {marginBottom: "30px"} : {}} 
                    className="front-tags" key={front}>
                        {front}
                    </span>
                )}
                {props.stack.backend.map(back =>
                    <span className="back-tags" key={back}>{back}</span>
                )}
            </div>
        </>
    )
}

export default StackTag