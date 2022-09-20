import './Header.css'
import { useState } from 'react'
import Popup from '../popup/Popup'
import MergeSort from '../algorithms/MergeSort'

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
    
    function Merge(){
        let propArray = props.array
        MergeSort(propArray)
        props.setArray(propArray)
    }

    return (
        <>
        <header className="header">
            <button onClick={props.generateRandom}>Generate Random Array</button>
            <button onClick={() => {setToggle(1); document.getElementById('form').reset(); setArrayLength(0)}}>Generate Custom Array</button>
            <button onClick={() => {Merge()}}>Merge Sort</button>  
        </header>
        <Popup toggle={toggle} deactivate={() => {setToggle(0)}}>
            <div className="popup-inner">
                <form onSubmit={(event) => checkSubmit(event)} id="form">
                    <select onChange={(e) => {setArrayLength(e.target.value)}}>
                        <option value={0}>Select Number Of Elements</option>
                        {Array.from({ length: 20 }).map((value,idx) =>(
                           <option value={idx+1} key={idx} required>{idx+1}</option>
                        ))}
                    </select>
                    <div className="element-input-container">
                        {Array.from({ length: arrayLength }).map((value,idx) =>(
                            <input type="number" key={idx} onChange={(e) => tempCustomArray[idx]=e.target.value} value={tempCustomArray[idx]}/>
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