/***
 * @author Carlos Barros
 * @since 10/03/2021
 * @version 1.0.0
 */

calculator = (number_1, operator, number_2) => eval(`${number_1} ${operator} ${number_2}`);

let result = calculator(1, '-' ,2);

console.log(result); 


window.addEventListener('focus',  event => {
    console.log('Evento adicionado!!');
});

document.addEventListener('click', event => {
    console.log('Evento de clique no documento!');
});

let now = new Date();

console.log(now.getDate());//Dia
console.log(now.getMonth())//Mês iniciando em 0 até 11
console.log(now.getFullYear())//Ano
console.log(now.toLocaleDateString("pt-BR"));//Formato padrão da localização do sistema operacional/navegador do usuário


//Arrays

let cars = ["Palio 98", "Toro", "Marea", "Uno", 10, true, new Date(),  name => `Meu nome é: ${name}`]

//Visualizar os elementos do array
console.log(cars);

//Visualizar quantidade de itens
console.log(cars.length);//8

//Pegando o primeiro item
console.log(cars[0])//Palio 98

//Pegando a data
console.log(cars[6].toLocaleDateString('pt-BR'));
console.log(cars[7]('Bruce Wayne'));

//Percorrendo um array
cars.forEach(function(car, index){
    console.log(index, typeof car);
});

//Marvel Heroes
const marvelHeroes = ['Spiderman', 'Thor', 'Capitão America', 'Viúva Negra', 'Feiticeira Escarlate'];

marvelHeroes.forEach((hero, index) => {
    console.log(`Eu ${hero} sou o ${index} Vingador(a)`);
});