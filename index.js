const Aluno = require('./aluno')
const Curso = require('./curso');
const estudantes = require('./estudante');

Aluno.baseAlunos = estudantes.AlunosMatriculados;

Curso.addAluno('Adriano da Silva', 3, [9, 8, 7, 6])

const aprovados = Curso.listaAprovados();



console.log(`Curso de ${Curso.curso}`);

aprovados.forEach(aprovado => {
    console.log(aprovado);
});