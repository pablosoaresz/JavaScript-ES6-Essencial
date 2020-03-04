// Retorna o tamanho de uma string
const tamanhoTexto = 'Texto de exemplo'.length;
console.log('Quantidade de caracteres:  ', tamanhoTexto);

//Retorna um array quebrando a string por um delimitador
const textoDividido = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', textoDividido);

//Busca por um valor e substitui por outro
const textoTrocado = 'Texto'.replace('Texto', 'otxeT');
console.log('\nSubstituição de valores em um string', textoTrocado);

//Retorna a "fatia" de um valor
const ultimoCaractere = "Texto".slice(-1);
console.log('\nÚltima letra de uma string: ', ultimoCaractere);

const allWhithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da String da primeira letra menos a última: ', allWhithoutLastChar);

const secondToEnd = 'Texto'.slice(1)
console.log('\nValor da string da segunda letra até a última: ', secondToEnd)

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos)