function isValid(str){
    let stack = [];
    for(let x of str){
        if (x === '(' || x === '[' || x === '{') {
            stack.push(x);
        }else{
            const curr = stack.pop();
            if (
                (x === ')' && curr !== '(')||
                (x === ']' && curr !== '[')||
                (x === '}' && curr !== '{')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid('()'));