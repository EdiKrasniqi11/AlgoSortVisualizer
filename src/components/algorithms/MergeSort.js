export default function MergeSort(array, stopLength){
    let arrLength = array.length
    let midIdx = Math.floor(arrLength / 2);
    if(arrLength <= 1){
        return
    }
    let leftHalf = array.slice(0,midIdx)
    let rightHalf = array.slice(midIdx,arrLength)
    MergeSort(leftHalf)
    MergeSort(rightHalf)

    merge(array, leftHalf, rightHalf)
    if(array.length == stopLength){
        return array
    }
}


function merge(array, leftHalf, rightHalf){
    let leftSize = leftHalf.length
    let rightSize = rightHalf.length
    let i = 0
    let j = 0
    let k = 0
    while(i < leftSize && j < rightSize){
        if(leftHalf[i] - rightHalf[j] < 0){
            array[k++] = leftHalf[i++]
        }else{
            array[k++] = rightHalf[j++]
        }
    }
    while(i < leftSize){
        array[k++] = leftHalf[i++]
    }
    while(j < rightSize){
        array[k++] = rightHalf[j++]
    }
}