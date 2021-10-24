// Muestra el indice de la posición de los elementos de un array

const array = ['map', 'filter', 'find', 'some', 'index', 'reduce' ];

array.map( (val,ind, str)=> {
    console.log('value: ' + val + ', has index: ' + ind)
    
});

/* 
output: 
value: map, has index: 0
value: filter, has index: 1
value: find, has index: 2
value: some, has index: 3
value: index, has index: 4
value: reduce, has index: 5
*/