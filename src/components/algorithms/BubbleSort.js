export default function getBubbleAnimations(array){
    const animations = []

    bubbleSort(array, animations)
    return animations
}


function bubbleSort(array, animations){
    let switchCounter = 0;
    for(let i = 0; i<array.length-1; i++){
        if(Array.isArray(animations)){
            animations.push([i, i+1, 0, 0])
        }
        if(array[i] > array[i+1]){
            switchCounter+=1
            if(Array.isArray(animations)){
                animations.push([i, i+1, array[i], array[i+1]])
            }
            let temp = array[i]
            array[i] = array[i+1]
            array[i+1] = temp
        }else{
            if(Array.isArray(animations)){
                animations.push([i, i+1, 0, 0])
            }
        }
    }
    if(switchCounter > 0){
        bubbleSort(array, animations)
    }else{
        return
    }
}