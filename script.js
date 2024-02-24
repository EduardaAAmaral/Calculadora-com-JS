function Inseri(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num; /*aqui é para fazer aparecer mais de um numero na tela */
}

function Apagar_Todo(){
    document.getElementById('resultado').innerHTML = "";
}

function Apagar(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML =resultado.substring(0, resultado.length - 1) /* apagar um numero de cada vez */
}

function Calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = 'Nada...'
    }

}
