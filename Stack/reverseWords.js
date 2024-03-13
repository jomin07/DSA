function reverseWords(str){
    let splitStr = str.split(" ");
    let stack = [];
    for(let x of splitStr){
        stack.push(x);
    }

    let finalStr = '';
    while (stack.length) {
        const current = stack.pop();
        if (current) {
            finalStr += current + ' ';
        }
    }
    return finalStr.trim();
}

console.log(reverseWords("the sky is blue"));