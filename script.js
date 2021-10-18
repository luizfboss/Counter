function contagem() {
    /* Conversao de variaveis */
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio == '' || final == '' || passo == '') {
        window.alert('Erro! Tente novamente.')
    } else {
        res.innerHTML = 'Contando: <br>'
        var inicio = Number(i.value)
        var final = Number(f.value)
        var passo = Number(p.value)
        if (passo <= 0) {
            window.alert('Passo Invalido! Tente novamente.')
        }
        if (inicio < final) {
            // Contagem crescente
            for (let c = inicio; c <= final; c += passo) {
                res.innerHTML += `${c}👉 `
            }
        } else {
            // Contagem regressiva
            for (let c = inicio; c >= final; c -= passo) {
                res.innerHTML += `${c}👉 `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
