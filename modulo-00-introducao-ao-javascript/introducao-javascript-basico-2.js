/***
 * @author Carlos Barros
 * @since 10/03/2021
 * @version 1.0.0
 */

//Criando uma classe
let Cellphone = function(){

    //atributos
    this.color = 'Preto'

    //metodos
    this.call = function(){
        return 'Fazendo uma ligação...'
    }
}

//instanciando um objeto 
let object = new Cellphone();

console.log(object);//Exibindo o objeto completo
console.log(object.color);//Acessando o atributo
console.log(object.call());//Invocando o método