const myNumber = 12.232323;

//Transforma número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', numberAsString, typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals)

//Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.20'))

//Transforma uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'))