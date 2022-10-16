export default function animateBubbleSort(animations, arrayItems, normalBarColor, compareBarColor, animationSpeed, buttons){
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
        const [first, second, firstHeight, secondHeight] = animations[i]
        const firstStyle = arrayItems[first]?.style
        const secondStyle = arrayItems[second]?.style
        if(i % 2 == 0){
          setTimeout(() => {
            firstStyle.backgroundColor = compareBarColor
            secondStyle.backgroundColor = compareBarColor
          },i*animationSpeed)
        }else{
          setTimeout(() => {
            firstStyle.backgroundColor = normalBarColor
            secondStyle.backgroundColor = normalBarColor
            if(firstHeight !== 0 && secondHeight !== 0){
              console.log("SWITCH")
              firstStyle.height = `${secondHeight}px`
              secondStyle.height = `${firstHeight}px`
            }
          }, i*animationSpeed)
        }
      }
}