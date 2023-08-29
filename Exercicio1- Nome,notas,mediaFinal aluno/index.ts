import PromptSync from "prompt-sync";

const prompt = PromptSync();

const notas = [];
let soma=0;
let media=0;

let nomeAluno = prompt(`Digite o seu nome: `)
console.log(``)

for(let i=0; i<=3; i++){
let valorDigitado = Number(prompt(`Digite a nota [${i+1}]: `))
while(valorDigitado <0 || valorDigitado>10){
    valorDigitado = Number(prompt(`A nota deve ser entre 0 e 10! Digite novamente a nota [${i+1}]: `))
}
notas.push(valorDigitado)
soma+=valorDigitado  
}
media = soma/4;

//GARANTINDO A TIPAGEM DOS OBJETOS
interface Aluno{
    nome: string
    notas: Array<Number>
    mediaFinal: number
}


//CRIAÇÃO DE OBJETO ALUNO
const aluno: Aluno = {
    nome: nomeAluno,
    notas: notas,
    mediaFinal: media
}
console.log(``)
console.log(aluno)