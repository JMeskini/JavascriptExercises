// Filtra la siguiente lista de numeros para mostrar 
// los que son mayores de 20


const list = [2,3,6,9,24,45,67,9923];

const result = list.filter(value => value > 20);

console.log(result);

/*
output:

[ 24, 45, 67, 9923 ]

*/