const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Daniela', nota: 7 },
    { nome: 'Eduardo', nota: 10 }
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);