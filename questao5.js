function calcularMedia(nota1, nota2, nota3, peso1, peso2, peso3) {
    const somaNotas = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);

    const somaPesos = peso1 + peso2 + peso3;
    
    const media = somaNotas / somaPesos;
    
    return media;
}

const resultado = calcularMedia(10,9,8,3,2,5);
console.log(resultado);

