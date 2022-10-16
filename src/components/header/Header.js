import './Header.css'
import { useState } from 'react'
import Popup from '../popup/Popup'

export default function Header(props){
    const [toggle, setToggle] = useState(0);
    const [arrayLength, setArrayLength] = useState(0);
    let tempCustomArray = [];

    function checkEmptyValues(){
        for(let i=0 ; i<arrayLength ; i++){
            if(tempCustomArray[i] == null){
                return true
            }
        }
        return false;
    }

    function checkSubmit(e){
        if(arrayLength == 0){
            alert("Please enter a value!")
            e.preventDefault();
        }
        else if(checkEmptyValues()){
            alert("Please fill out the values of your array!");
            e.preventDefault();
        }
        else{
            alert("Your array has been created!")
            props.setArray(tempCustomArray);
            setToggle(0);
            e.preventDefault();
        }
    }

    return (
        <>
        <header className="header">
            <button className="nav-button" onClick={props.generateRandom}>Generate Random Array</button>
            <button className="nav-button" onClick={() => {setToggle(1); document.getElementById('form').reset(); setArrayLength(0)}}>Generate Custom Array</button>
            <button className="nav-button" onClick={() => {props.mergeSort()}}>Merge Sort</button>
            <button className="nav-button" onClick={() => props.quickSort()}>Quick Sort</button>
            <button className="nav-button" onClick={() => props.bubbleSort()}>Bubble Sort</button>
        </header>
        <Popup toggle={toggle} deactivate={() => {setToggle(0)}}>
            <div className="popup-inner">
                <form onSubmit={(event) => checkSubmit(event)} id="form">
                    <select onChange={(e) => {setArrayLength(e.target.value)}}>
                        <option value={0}>Select Number Of Elements</option>
                        {Array.from({ length: 19 }).map((value,idx) =>(
                           <option value={idx+2} key={idx} required>{idx+2}</option>
                        ))}
                    </select>
                    <div className="element-input-container">
                        {Array.from({ length: arrayLength }).map((value,idx) =>(
                            <input type="number" min="1" key={idx} onChange={(e) => tempCustomArray[idx]=parseInt(e.target.value)} value={tempCustomArray[idx]}/>
                        ))}
                        <h2 className="reset-button" onClick={() => {document.getElementById('form').reset(); setArrayLength(0)}}>Reset</h2>
                    </div>
                    <button type="submit"className="submit-button">Create</button><br/>
                    <label>For the best user experience I suggest using values between 5 and 700 but you're not limited to either.</label>
                </form>
            </div>
        </Popup>
        </>
    )
}