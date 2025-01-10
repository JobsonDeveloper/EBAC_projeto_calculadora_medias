const form = document.getElementById("form_atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji comemorando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
const atividades = [];
const notas = [];
let linhas = "";
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

form.addEventListener("submit", (event) => {
    event.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    const inputNomeAdiviade = document.getElementById("nome_atididade");
    const inputNotaAdiviade = document.getElementById("nota_atididade");

    if (atividades.includes(inputNomeAdiviade.value)) {
        alert(`A atividade ${inputNomeAdiviade.value} já foi inserida!`);
        inputNomeAdiviade.value = '';
        inputNotaAdiviade.value = '';
    }
    else {
        atividades.push(inputNomeAdiviade.value);
        notas.push(parseFloat(inputNotaAdiviade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAdiviade.value}</td>`;
        linha += `<td>${inputNotaAdiviade.value}</td>`;
        linha += `<td>${inputNotaAdiviade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeAdiviade.value = '';
        inputNotaAdiviade.value = '';
    }

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media_final_valor").innerHTML = mediaFinal;
    document.getElementById("media_final_resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return (somaDasNotas / notas.length);
}