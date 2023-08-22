function fibonaccifor(fib) {
    for (let i=0; i < fib.length; i++) {
        if(i<=1) {
            continue;
        } else {
            fib[i]= fib[i-1]+fib[i-2];
        }
    }
    return `sin recursidad con for:<br><b>${fib}</b>  `;
}
function fibonaccifor2(num) {
    const fib= [0,1];
    for (let i = 2; i < num; i++) {
        fib.push(fib[i-1]+fib[i-2]);
    }
    return `sin recursidad con for V2:<br><b>${fib}</b>`;
}
function fibonacciwhile(fib) {
    let i=0;
    while(i<fib.length) {
        if(i<=1) {
        } else {
            fib[i]= fib[i-1]+fib[i-2];
        }
        i++;
    }
    return `sin recursidad con while:<br><b>${fib}</b>`;
}
function fibonaccirecur(fib,i) {
    if(i<=1) {
        fibonaccirecur(fib,i+1);
    } else if(i>1 && i < fib.length) {
        fib[i]= fib[i-1]+fib[i-2];
        fibonaccirecur(fib,i+1);
    }
    return `con recursidad:<br><b>${fib}</b>`;
}
document.write(fibonaccifor([0,1,2,3,4,5,6,7,8,9,10,11,12,13])+"<hr>");
document.write(fibonaccifor2(14)+"<hr>");
document.write(fibonacciwhile([0,1,2,3,4,5,6,7,8,9,10,11,12,13])+"<hr>");
document.write(fibonaccirecur([0,1,2,3,4,5,6,7,8,9,10,11,12,13],0));