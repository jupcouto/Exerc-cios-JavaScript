let soma = 0;//  cria variável pra acumular o resultado

for(let i = 50; i<= 100; i++) {
    if(i%2 === 0) {  //faz a verificação (se é par ou não)
        soma +=i; //se for par ele adiciona na soma
    }
}

console.log(soma);