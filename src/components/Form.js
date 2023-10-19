import React, { useState} from "react";

function Form(props){

    const [name, setName] = useState("");
    
    let handleChange = (e)=>{
        setName(e.target.value);
    };

    let handleSubmit = (e)=>{
        if(name.length == 0) return;
        e.preventDefault();
        props.addTask(name);
        setName("")
    };

    return (
        <form>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg" onClick={handleSubmit}>
                Add
            </button>
        </form>
    );
}

export default Form;