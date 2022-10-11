function conferir() {
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var anoPartida = document.getElementById("anoPartida");

    if (nome.value == "") {
        alert("Preencha o nome!");
        nome.focus();
        return;
    }

    if (idade.value == "") {
        alert("Preencha a idade!");
        idade.focus();
        return;
    }
    else if (idade.value < 0) {
        alert("Insira uma idade válida!");
        idade.focus();
        return;
    }
    else if (idade.value > 120) {
        alert("Insira uma idade válida!");
        idade.focus();
        return;
    }

    if (anoPartida.value == "") {
        alert("É necessário inserir o ano de partida!");
        anoPartida.focus();
        return;
    }
    else if (anoPartida.value < 1988) {
        alert("Insira um ano entre 1988 e 1994!");
        anoPartida.focus();
        return;
    }
    else if (anoPartida.value > 1994) {
        alert("Insira um ano entre 1988 e 1994!");
        anoPartida.focus();
        return;
    }

}