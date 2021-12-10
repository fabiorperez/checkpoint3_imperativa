const Aluno = require('./aluno');

const Curso = {
    curso: 'Programacao Imperativa',
    notaAprova: 6,
    maxFaltas: 5,
    baseAlunos: [],
    addAluno: function (nome, faltas, notas) {
        this.baseAlunos.push(new Aluno.construtor(nome, faltas, notas));
    },
    aprovacao: function (alunos) {
        const media = parseFloat(Aluno.calcMedia(alunos).toFixed(2));

        if (
            media >= this.notaAprova && alunos.quantidadeFaltas < this.maxFaltas
        ) {
            return `O Aluno ${alunos.nome} teve a nota media ${media} e o total de ${alunos.quantidadeFaltas} faltas, sendo aprovado`;
        } else if (
            alunos.quantidadeFaltas === this.maxFaltas &&
            media > this.notaAprova * 1.1
        ) {
            return `O Aluno ${alunos.nome} teve a nota média ${media} e o total de ${alunos.quantidadeFaltas} faltas, sendo aprovado no limite`;
        } else {
            return `O Aluno ${alunos.nome} teve a nota média ${media} e o total de ${alunos.quantidadeFaltas} faltas, sendo reprovado`;
        }
    },
    listaAprovados: function () {
        let resultado = [];

        this.baseAlunos.forEach(aluno => {
            resultado.push(this.aprovacao(aluno));
        });

        return resultado;
    },

}

module.exports = Curso;

