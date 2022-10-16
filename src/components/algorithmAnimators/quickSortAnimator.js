export default function animateQuickSort(animations, arrayItems, normalBarColor, compareBarColor, pivotBarColor, animationSpeed, buttons){
    for( let i = 0; i < animations.length; i++){
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
    let animation = animations[i]
    let [first, second, firstHeight, secondHeight, color, type] = []
    type = animation[animation.length-1]
    let firstStyle
    let secondStyle
    let tempHeight
    switch(type){
      case 'select pivot':
        let pivotIndex = animation[0]
        let pivotStyle = arrayItems[pivotIndex].style
        setTimeout(() => {
          pivotStyle.backgroundColor = pivotBarColor
        }, i*animationSpeed)
        break
      case 'move pivot':
        [first, second, firstHeight, secondHeight, type] = animation
        firstStyle = arrayItems[first].style
        secondStyle = arrayItems[second].style
        setTimeout(() => {
          firstStyle.backgroundColor = normalBarColor
          firstStyle.height = `${secondHeight}px`
          secondStyle.height = `${firstHeight}px`
          secondStyle.backgroundColor = pivotBarColor
        }, i*animationSpeed)
        break
      case 'select i and j':
        [first, second, type] = animation
        firstStyle = arrayItems[first]?.style
        secondStyle = arrayItems[second]?.style
        setTimeout(() => {
          if(first !== -1){
            firstStyle.backgroundColor = compareBarColor
          }
          secondStyle.backgroundColor = compareBarColor
        },i*animationSpeed)
        break
      case 'deselect i and j':
        [first, second, type] = animation
        firstStyle = arrayItems[first]?.style
        secondStyle = arrayItems[second]?.style
        setTimeout(() => {
          if(first !== -1){
            firstStyle.backgroundColor = normalBarColor
          }
          secondStyle.backgroundColor = normalBarColor
        },i*animationSpeed)
        break
      case 'compare j to pivot':
        [first, second, color, type] = animation
        firstStyle = arrayItems[first]?.style
        secondStyle = arrayItems[second].style
        setTimeout(() => {
          firstStyle.backgroundColor = color
          secondStyle.backgroundColor = color
        }, i*animationSpeed)
        break
      case 'decompare j to pivot':
        [first, second, type] = animation
        firstStyle = arrayItems[first].style
        secondStyle = arrayItems[second].style
        setTimeout(() => {
          firstStyle.backgroundColor = compareBarColor
          secondStyle.backgroundColor = pivotBarColor
        }, i*animationSpeed)
        break
      case 'switch i and j':
        [first, second, firstHeight, secondHeight, type] = animation
        firstStyle = arrayItems[first].style
        secondStyle = arrayItems[second].style
        setTimeout(() => {
          firstStyle.height = `${secondHeight}px`
          secondStyle.height = `${firstHeight}px`
        }, i*animationSpeed)
        break
      case 'switch i and pivot':
        [first, second, firstHeight, secondHeight, type] = animation
        firstStyle = arrayItems[first].style
        secondStyle = arrayItems[second].style
        setTimeout(() => {
          firstStyle.height = `${secondHeight}px`
          secondStyle.height = `${firstHeight}px`
        }, i*animationSpeed)
        break
      case 'deselect pivot':
        [first, type] = animation
        firstStyle = arrayItems[first].style
        setTimeout(() => {
          firstStyle.backgroundColor = normalBarColor
        }, i*animationSpeed)
        break
    }
  }
}