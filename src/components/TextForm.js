import React ,{useState} from 'react'

export default function TextForm() {
    const [text,setText]=useState("Enter Text");

    const toUpper=()=>{
        const newtext=text.toUpperCase();
        setText(newtext);

    }

    const handleUpperEvent=(event)=>{
        const newtext=event.target.value;

        setText(newtext);
    }
    return (
        
        <div className="container">
            <div className="my-3">
                <h1>Enter Text Below</h1>
                <textarea className="form-control my-3" value={text} onChange={handleUpperEvent}placeholder='Some text here..' id="TextBox" rows="10"></textarea>
                <button className="btn btn-primary" onClick={toUpper}  >To Upper Case</button>
            </div>
        </div>
        
    )
}
