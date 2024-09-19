import React from "react";

const Story = ( {story} ) => {

    //Finally the story will be rendered using this
    return (
    <div className="story">
        <p>
            There was a {story.color} {story.noun} who loved a {story.adjective} {story.noun2}.
        </p>
    </div>
    )
}

export default Story;