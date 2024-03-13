function isValid(str){
    let stack = [];
    for(let x of str){
        if (x === '(' || x === '{' || x === '[') {
            stack.push(x);
        }else{
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (
                (x === ')' && top !== '(') ||
                (x === '}' && top !== '{') ||
                (x === ']' && top !== '[') 
            ){
                return false;
            }
        }
    }
    return stack.length === 0;
}

const s = "([]{})";
console.log(isValid(s));