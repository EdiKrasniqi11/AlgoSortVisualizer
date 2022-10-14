export default function getQuickSort(array){
    var animations = []

    quickSort(array, 0, array.length-1,animations)
    return animations
}

function quickSort(array, startIndex, endIndex, animations){
    if(startIndex >= endIndex){
        return
    }
    if(Array.isArray(animations)){
        let pivotPointer = Math.floor(Math.random() * (startIndex - endIndex+1)+endIndex)
        // animation for finding the pivot
        animations.push([pivotPointer, 'select pivot'])
        animations.push([pivotPointer, 'deselect pivot'])

        // sending the pivot to the end
        animations.push([pivotPointer, endIndex, array[pivotPointer], array[endIndex], 'move pivot'])
        swap(array, pivotPointer, endIndex)

        let i = partition(array, startIndex, endIndex, animations)

        quickSort(array, startIndex, i-1, animations)
        quickSort(array, i+1, endIndex, animations)
    }
}

function partition(array, startIndex, endIndex, animations){
    let count = 1
    let pivot = endIndex
    let i = startIndex-1
    let j = startIndex
    while(j <= pivot){
        let tempI = i
        let tempJ = j
        // establishing i and j
        animations.push([i, j, 'select i and j'])
        

        if(array[j] < array[pivot]){
            i++
            // successful comparison between j and pivot
            animations.push([j, pivot, "green", 'compare j to pivot'])
            animations.push([j, pivot, 'decompare j to pivot'])
            animations.push([i, j, array[i], array[j], 'switch i and j'])
            swap(array, i, j)
            j++
            
        }else{
            // failed comparison between j and pivot
            animations.push([j, pivot, "red", 'compare j to pivot'])
            animations.push([j, pivot, 'decompare j to pivot'])
            j++
        }
        // coloring back i and j
        animations.push([tempI, tempJ, 'deselect i and j'])
    }
    i++
    // placing the pivot in place
    animations.push([i, pivot, array[i], array[pivot], 'switch i and pivot'])
    swap(array, i, pivot)
    
    // coloring the pivot back to the normal color
    animations.push([pivot, 'deselect pivot'])
    return i
}
function swap(array, i, j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}