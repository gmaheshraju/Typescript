enum Arithmetic {
    Add,Sub,Div,Mul
}

function calculateSum(a:number, b:number,type:Arithmetic){
    console.log("hi ",type);
    return a+b;
}

const ans = calculateSum(1,2,Arithmetic.Add);
console.log(ans);