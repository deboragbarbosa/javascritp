function fatorial(n){
    let fat = 1
    for (let c = n;c >1; c--){
        fat*= c
    }
    return fat
}

console.log(fatorial(5))

//5! = 5X4X3X2X1 = 120
