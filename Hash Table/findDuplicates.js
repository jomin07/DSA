function findDuplicates(nums) {
    const duplicates = [];
    const frequency = {}
    for(let num of nums){
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for(const num in frequency){
        if (frequency[num] > 1) {
            duplicates.push(num);
        }
    }
    return duplicates.join(",");
}

const nums = [4, 4, 2, 7, 4, 2, 1];
const duplicates = findDuplicates(nums);
console.log("Duplicates:", duplicates);
