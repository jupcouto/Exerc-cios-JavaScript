function fatorial(n) {   //definir uma função e o seu parâmetro
    let resultado = 1;     //criar uma variável pra armazenar as multiplcações
    for (let i = 1; i <= n; i++) {   //definir os parâmetros
        resultado *= i;    //pega o valor atual de resultado, multiplica por i e armazena o novo valor de volta em resultado.
    }
    return resultado;
}
