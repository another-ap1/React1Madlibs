import React, {useState} from "react";
import MadLibsForm from "./MadLibsForm";
import Story from "./Story";
import {v4 as uuid} from "uuid";

const Madlib = () => {
    const [story, setStory] = useState([]);
    const [showStory, setShowStory] = useState(false);
    const createStory = (newStory) => {
        //Creating a random id with uuid to remove error from react
        setStory((entries) => [...entries, {...newStory, id:uuid()}]);
    };
    //this will return the madlib form when showStory is false and later when we pass information up to 
    //createStory we will also change it to true to render the story instead fo the form
    return (
        <div className="Madlib">
            <h1>Madlibs!</h1>
            {showStory ? (<Story 
                            setShowStory={setShowStory}
                            setStory={setStory}
                            story={story[0]}/>) : (<MadLibsForm 
                                                        setShowStory={setShowStory}
                                                        createStory={createStory}/>)}
        </div>
    )
}

export default Madlib;