//Filtra los numeros superiores a 25 e inferiores a 10 (ambos incluidos) y luego multiplicalos

const numbers = [3,7,8,10,12,15,24,32,17,21,25,26];


let result = numbers.filter(value => value < 25 &&  value >10); 
result = result.reduce((curr, acc ) => curr*acc);

console.log(result);

/* 
output:
385560000
*/

// comentario alumnu (Bachir) : este ejeriocio me da otro resultado 