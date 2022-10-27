/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto medio de combustível do carro por Km;
    3 - Disntância em Km da Viagem;

    Imprima no console o valor que sera gasto de combustível para realizar esta viagem.
*/
const precoCombustivel = 5.15;
const KmPorLitros = 32;
const distancia = 30;

const litrosConsumidos = distancia / KmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));