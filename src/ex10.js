//Realiza la suma del siguiente array de numeros

const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


const result = numbers.reduce((curr, acc) => curr+acc);

console.log(result);

/*
output:
120
*/