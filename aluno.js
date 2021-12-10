const Aluno = {
    nome: '',
    quantidadeFaltas: 0,
    notas: [],
    construtor: function (nome, faltas, notas) {
        this.nome = nome,
            this.quantidadeFaltas = faltas,
            this.notas = notas;
    },
	calcMedia: function (alunos) {

        const total = alunos.notas.reduce((total, nota) => {
            return total + nota;
        }, 0);
        const media = total / alunos.notas.length;
        return media;
    },	
    addFaltas(aluno) {
        aluno.quantidadeFaltas++;
    }
	
    
    

}

module.exports = Aluno;