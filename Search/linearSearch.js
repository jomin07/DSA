function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i+1;
        }
    }
    return 'Not found';
}

const arr = [3, 1, 5, 6, 4];
console.log(linearSearch(arr, 4));