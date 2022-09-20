import './App.css'
import Header from './components/header/Header'
import Sorter from './components/sorter/Sorter'
import MergeSort from './components/algorithms/MergeSort'
import { useEffect, useState } from 'react'

function App() {
  const [array,setArray] = useState([]);

  useEffect(() => {
      generateRandomArray(100)
    },[]
  )

  function generateRandomArray(length){
    let randomArray = [];
    for(let i=0;i<length;i++){
      randomArray.push(Math.floor(Math.random()*(700-6)+5));
    }
    setArray(randomArray);
  }

  return (
    <div className="main-container">
      <Header generateRandom={() => generateRandomArray(Math.floor(Math.random()*(100-21)+20))} setArray={setArray} array={array}/>
      <Sorter array={array}/>
    </div>
  );
}

export default App;
