function findDuplicates(arr){
    let frequency = {};
    let duplicates = [];
    for(let x of arr){
        frequency[x] = (frequency[x] || 0) + 1;
    }

    for(let x in frequency){
        if (frequency[x] > 1) {
            duplicates.push(x);
        }
    }
    return duplicates.join(",");
}

const nums = [4, 4, 2, 7, 4, 2, 1];
const duplicates = findDuplicates(nums);
console.log("Duplicates:", duplicates);
