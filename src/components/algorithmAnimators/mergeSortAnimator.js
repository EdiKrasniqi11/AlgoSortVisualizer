export default function animateMergeSort(animations, arrayItems, normalBarColor, compareBarColor, animationSpeed, buttons){
  for(let i=0; i<animations.length; i++){
    if(i == 1){
      setTimeout(() => {
        buttons.forEach(element => element.classList.add('disabled'));
      }, i*animationSpeed)
    }
    if(i == animations.length-1){
      setTimeout(() => {
        buttons.forEach(element => element.classList.remove('disabled'));
      }, i*animationSpeed)
    }
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