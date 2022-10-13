export default function getMergeAnimations(array){
  const animations = []
  const auxiliaryArray = array.slice()

  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
  return animations
}

function mergeSortHelper(array, startIndex, endIndex, auxiliaryArray, animations){
  if(startIndex === endIndex){
    return
  }
  let midIndex = Math.floor((startIndex + endIndex)/2)
  mergeSortHelper(auxiliaryArray, startIndex, midIndex, array, animations)
  mergeSortHelper(auxiliaryArray, midIndex+1, endIndex, array, animations)

  merge(array, startIndex, midIndex, endIndex, auxiliaryArray, animations)
}

function merge(array, startIndex, midIndex, endIndex, auxiliaryArray, animations){
  let i = startIndex
  let j = midIndex + 1
  let k = startIndex
  while(i <= midIndex && j <= endIndex){
    //once for comparison
    animations.push([i,j])
    //twice for changing the color back
    animations.push([i,j]) 
    if(auxiliaryArray[i] <= auxiliaryArray[j]){
      //changing the height of the array bar
      animations.push([k, auxiliaryArray[i]])
      array[k++] = auxiliaryArray[i++]
    }
    else{
      animations.push([k, auxiliaryArray[j]])
      array[k++] = auxiliaryArray[j++]
    }
  }
  //any leftover indexes after comparison will get sorted now
  while(i <= midIndex){
    animations.push([i,i])
    animations.push([i,i])
    animations.push([k, auxiliaryArray[i]])
    array[k++] = auxiliaryArray[i++]
  }
  while(j <= endIndex){
    animations.push([j,j])
    animations.push([j,j])
    animations.push([k, auxiliaryArray[j]])
    array[k++] = auxiliaryArray[j++]
  }
}