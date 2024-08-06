"use strict";

var alunos = [{
  nome: 'Ana',
  nota: 8
}, {
  nome: 'Bruno',
  nota: 5
}, {
  nome: 'Carlos',
  nota: 6
}, {
  nome: 'Daniela',
  nota: 7
}, {
  nome: 'Eduardo',
  nota: 10
}];
function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);