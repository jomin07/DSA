function factorial(n){
    if(n < 2){
        return 1;
    }
    return factorial(n - 1) * n;
}

console.log(factorial(0));