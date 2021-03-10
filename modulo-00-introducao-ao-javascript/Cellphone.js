/***
 * @author Carlos Barros
 * @since 10/03/2021
 * @version 1.0.0
 */

//Criando uma classe utilizando ES6
class Cellphone {

    //Método construtor
    constructor(){
        this.color = 'Branco';

        this.call = function(){
            return 'Fazendo uma ligação';
        }
    }
}

const iphone = new Cellphone();

console.log(iphone);
console.log(iphone.color);
console.log(iphone.call());