import React, {useState} from "react"

const MadLibsForm = ( {setShowStory, createStory}) => {
    //Setting the initial values to empty
    const INITIAL = {
        noun:"",
        noun2:"",
        adjective:"",
        color:""
    }
    const [formData, setFormData] = useState(INITIAL)

    //while a change is occuring this will allow for you to type in the text box
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }))
    }

    //handling submitting the form and passing the values from the form up to the createStory function we passed down
    const handleSubmit = (evt) => {
        evt.preventDefault();
        createStory({...formData});
        setFormData(INITIAL);
        setShowStory(true);
        
    }
    
    return (
        //the form we are rendering to fill out and create a story
        <>  
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="noun"></label>
                <input
                    required
                    id="noun"
                    name="noun"
                    type="text"
                    placeholder="noun"
                    value={formData.noun}
                    onChange={handleChange}
                />
                <label htmlFor="noun2"></label>
                <input 
                    required
                    id="noun2"
                    name="noun2"
                    type="text" 
                    placeholder="noun2"
                    value={formData.noun2}
                    onChange={handleChange}
                />
                <label htmlFor="adjective"></label>
                <input 
                    required
                    id="adjective"
                    name="adjective"
                    type="text" 
                    placeholder="adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                />
                <label htmlFor="color"></label>
                <input 
                    required
                    id="color"
                    name="color"
                    type="text" 
                    placeholder="color"
                    value={formData.color}
                    onChange={handleChange}
                />
                <button>Get Story</button>
            </form>
        </>
    )
}

export default MadLibsForm;