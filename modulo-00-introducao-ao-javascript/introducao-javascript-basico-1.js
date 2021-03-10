/**
 * @author Carlos Barros
 * @since 09/02/2021
 * @version 1.0.0
 */

console.log('Olá mundo!');

//Comentário inline

/**
 * Comentário de
 * multiplas
 * linhas
 */


//Variavéis

var message = "Hello, Hero let's learn Javascript!";

console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);

//typeof informa o tipo de um determinado valor6

console.log(typeof String);//function
console.log(typeof Number);//function
console.log(typeof Boolean);//function
console.log(typeof Array);//function
console.log(typeof new Date());//object
console.log(typeof Object);//function
console.log(typeof []);//object
console.log(typeof {});//object

//instanceof informa o tipo de instancia
const birth = new Date();
function Hero(){}

const spiderman = new Hero();

console.log(birth instanceof Hero);//false
console.log(spiderman instanceof Hero);//true
console.log(birth instanceof Date);//true

/**
 * Operadores
 * 
 * ### Atribuição
 *      = Atribui um valor a um tipo de dado.
 * ### Comparação
 *          == igualdade de valor
 *          === estritamente igual ( valor e tipo )
 *          != diferente
 *          !== estritamente diferente ( valor e tipo )
 *          > Maior que
 *          < Menor que
 *          >= Maior ou igual
 *          <= Menor ou igual
 * ### Lógicos
 *          AND  && - duas condições devem ser verdadeiras
 *          OR   || - pelo menos uma das condições devem ser verdadeiras
 * 
 * ### Operadores incrementais ou decrementais         
 * ++ -> Incrementa + 1 ao valor
 * -- -> Decrementa + 1 ao valor
 */

let price = 2.20;
const RATE = "2.20";

console.log( price == RATE );//false
console.log( price === RATE );//false

console.log( price != RATE )//true

console.log(price == RATE && typeof RATE == 'string');//true
console.log(price < RATE || typeof RATE == 'string')//true


/** Condicionais
 * if-else
 * switch
*/
let trafficLight = 'outra coisa'
const GOAHEAD = trafficLight === 'verde';
const WARNING = trafficLight === 'amarelo'; 
if ( GOAHEAD ){
    console.log('Siga -> ');
}else if ( WARNING ){
    console.log('Atenção ! ');
}else{
    console.log('Pare #' );
}

//switch - Controle de fluxo com opções pré-definidas
const light = 'amarelo'
switch(light){
    case 'verde':
    console.log('Siga');
    break;
    case 'amarelo':
    console.log('Atenção');
    break;
    case 'vermelho':
    console.log('Pare!');
    break;
    default:
    console.log('Valor inválido'); 
    break;
}

/**
 * ### Laços de Repetição
 * do - while = Executa um trecho pelo menos uma vezes e outros um número determinado de vezes
 * while = Repete uma(s) determinada(s) instrução(ões) em um determinado número de vezes, geralmente utilizado quando não se sabe quantas interações terão
 * for = Repete uma(s) determinada(s) instrução(ões) em um determinado número de vezes, geralmente se sabe quantas interações teremos
 * for in = Percorre as propriedade de um objeto
 * foreach ou forof = Percorre os index de um array
 * 
 * ### Coringas
 * break - Para o laço interronpendo as interações
 * continue - Ignora a instrução atual e vai para as próximas interações
 */


 let number = 7;
 
 for ( let i = 0; i <= 10; i++){
     console.log(`${i} X ${number} = ${i * number}`);//Template string
 }