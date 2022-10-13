import './App.css'
import Header from './components/header/Header'
import Sorter from './components/sorter/Sorter'
import getMergeAnimations from './components/algorithms/MergeSort'
import getQuickAnimations from './components/algorithms/QuickSort'
import animateMergeSort from './components/algorithmAnimators/mergeSortAnimator'
import animateQuickSort from './components/algorithmAnimators/quickSortAnimator'
import { useCallback, useEffect, useState } from 'react'

function App() {
  const [array,setArray] = useState([])
  const [animationSpeed, setAnimationSpeed] = useState(20)
  const normalBarColor = '#469c9a'
  const compareBarColor = 'purple'
  const pivotBarColor = 'yellow'
  const [disabledToggle, setDisabledToggle] = useState('')

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

  function mergeSort(){
    const animations = getMergeAnimations(array)
    const arrayItems = document.getElementsByClassName('array-item')

    animateMergeSort(animations, arrayItems, normalBarColor, compareBarColor, animationSpeed)
  }

  function quickSort(){
    const animations = getQuickAnimations(array)
    const arrayItems = document.getElementsByClassName('array-item')

    animateQuickSort(animations, arrayItems, normalBarColor, compareBarColor, pivotBarColor, animationSpeed)
  }

  return (
    <div className="main-container"> 
      <Header generateRandom={() => generateRandomArray(Math.floor(Math.random()*(100-21)+20))} setArray={setArray} mergeSort={mergeSort} quickSort={quickSort}/>
      <Sorter array={array} animationSpeed={animationSpeed} setAnimationSpeed={setAnimationSpeed}/>
    </div>
  );
}

export default App;
