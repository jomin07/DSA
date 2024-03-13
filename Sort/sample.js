//"aaguaaahhaaaaagjkaa"

function getCount(str){
    let count = 0;
    for(let i = 0; i < str.length - 1; i++){
        if (str[i] === 'a' && str[i+1] === 'a' ) {
            
            if (str[i+2] === 'a') {
                continue;
            }
            count++;
        }
    }
    return count;
}

const str = "aaguaaahhaaaaagjkaa";
console.log(getCount(str));