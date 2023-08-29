"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const notas = [];
let soma = 0;
let media = 0;
let nomeAluno = prompt(`Digite o seu nome: `);
console.log(``);
for (let i = 0; i <= 3; i++) {
    let valorDigitado = Number(prompt(`Digite a nota [${i + 1}]: `));
    while (valorDigitado < 0 || valorDigitado > 10) {
        valorDigitado = Number(prompt(`A nota deve ser entre 0 e 10! Digite novamente a nota [${i + 1}]: `));
    }
    notas.push(valorDigitado);
    soma += valorDigitado;
}
media = soma / 4;
//CRIAÇÃO DE OBJETO ALUNO
const aluno = {
    nome: nomeAluno,
    notas: notas,
    mediaFinal: media
};
console.log(``);
console.log(aluno);
