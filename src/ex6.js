// Encuentra la palabra 'star' en el siguiente array

const words = ['sun', 'earth', 'venus', 'star', 'mars', 'neptune', 'saturn', 'uranus', 'mercury' ];

const result = words.filter(word => word === 'star');

console.log('you are a ' + result);

/* output: 

you are a star

*/