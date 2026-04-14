import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState("FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <>
        <h4>*3) Learnt onchange event handler and useState hook and built <b><i><u>Colour-Picker</u> in React</i></b> *</h4>
        <div className="color-picker-container">
            <h1 className='colour-heading'><b><i>Color Picker</i></b></h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label >Select a Color :</label>
            <input type="color" onChange={handleColorChange} />
        </div>

        </>
    );
}

export default ColorPicker;