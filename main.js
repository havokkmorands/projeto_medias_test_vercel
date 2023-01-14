const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/Aprovado.png" alt="Emoji de comemoração">';
const imgReprovado = '<img src="./images/Reprovado.png" alt="Emoji decepcionado">';
const atividade = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));
let linhas = "";

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if(atividade.includes(inputNomeAtividade.value)){
        alert(`Atividade ${inputNomeAtividade.value} já inserido`);
    } else {
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;

        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal (){
    const mediaFinal = mediaTotal().toFixed(1);
    document.getElementById('media-final').innerHTML = mediaFinal;
    document.getElementById('media-result').innerHTML = mediaFinal > notaMinima ? spanAprovado : spanReprovado;
}

function mediaTotal(){
    let somaNotas = 0;
    for(i=0 ; i<notas.length; i++){
        somaNotas += notas[i];
    }
    return (somaNotas/notas.length);
}
