import './App.css'
import Header from './components/header/Header'
import Sorter from './components/sorter/Sorter'
import getMergeAnimations from './components/algorithms/MergeSort'
import { useEffect, useState } from 'react'

function App() {
  const [array,setArray] = useState([])
  const [animationSpeed, setAnimationSpeed] = useState(10)
  const normalBarColor = '#469c9a'
  const compareBarColor = 'red'

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
    for(let i=0; i<animations.length; i++){
      if(i % 3 !== 2){
        const [first, second] = animations[i]
        const firstStyle = arrayItems[first].style
        const secondStyle = arrayItems[second].style
        const color = i % 3 === 0 ? compareBarColor: normalBarColor
        setTimeout(() =>{
          firstStyle.backgroundColor = color
          secondStyle.backgroundColor = color;
        }, i*animationSpeed)
      }else{
        setTimeout(() => {
          const[bar, newHeight] = animations[i]
          const barStyle = arrayItems[bar].style
          barStyle.height = `${newHeight}px`
        }, i*animationSpeed)
      }
    }
  }

  return (
    <div className="main-container"> 
      <Header generateRandom={() => generateRandomArray(Math.floor(Math.random()*(100-21)+20))} setArray={setArray} mergeSort={mergeSort}/>
      <Sorter array={array} animationSpeed={animationSpeed} setAnimationSpeed={setAnimationSpeed} />
    </div>
  );
}

export default App;
