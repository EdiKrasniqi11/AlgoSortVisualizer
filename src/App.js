import './App.css'
import Header from './components/header/Header'
import Sorter from './components/sorter/Sorter'
import getMergeAnimations from './components/algorithms/MergeSort'
import getQuickAnimations from './components/algorithms/QuickSort'
import getBubbleAnimations from './components/algorithms/BubbleSort'
import animateMergeSort from './components/algorithmAnimators/mergeSortAnimator'
import animateQuickSort from './components/algorithmAnimators/quickSortAnimator'
import animateBubbleSort from './components/algorithmAnimators/bubbleSortAnimator'
import { useCallback, useEffect, useState } from 'react'
import bubbleSort from './components/algorithms/BubbleSort'

function App() {
  const [array,setArray] = useState([])
  const [animationSpeed, setAnimationSpeed] = useState(10)
  const normalBarColor = '#469c9a'
  const compareBarColor = '#A020F0'
  const pivotBarColor = 'yellow'

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
    const buttons = [].concat(Array.from(document.getElementsByClassName('nav-button')), Array.from(document.getElementsByClassName('animationSpeedDiv')), Array.from(document.getElementsByClassName('toggleSwitch')))
    animateMergeSort(animations, arrayItems, normalBarColor, compareBarColor, animationSpeed, buttons)
  }

  function quickSort(){
    const animations = getQuickAnimations(array)
    const arrayItems = document.getElementsByClassName('array-item')
    const buttons = [].concat(Array.from(document.getElementsByClassName('nav-button')), Array.from(document.getElementsByClassName('animationSpeedDiv')), Array.from(document.getElementsByClassName('toggleSwitch')))
    animateQuickSort(animations, arrayItems, normalBarColor, compareBarColor, pivotBarColor, animationSpeed, buttons)
  }

  function bubbleSort(){
    const animations = getBubbleAnimations(array)
    const arrayItems = document.getElementsByClassName('array-item')
    const buttons = [].concat(Array.from(document.getElementsByClassName('nav-button')), Array.from(document.getElementsByClassName('animationSpeedDiv')), Array.from(document.getElementsByClassName('toggleSwitch')))

    animateBubbleSort(animations, arrayItems, normalBarColor, compareBarColor, animationSpeed, buttons)
  } 

  return (
    <div className='main-container'>
      <Header generateRandom={() => generateRandomArray(Math.floor(Math.random()*(100-21)+20))} setArray={setArray} mergeSort={mergeSort} quickSort={quickSort} bubbleSort={bubbleSort}/>
      <Sorter array={array} animationSpeed={animationSpeed} setAnimationSpeed={setAnimationSpeed} normalBarColor={normalBarColor} compareBarColor={compareBarColor} pivotBarColor={pivotBarColor}/>
    </div>
  );
}

export default App;
