function count() {
    /* Variables */
    var i = document.getElementById('beginning')
    var f = document.getElementById('end')
    var p = document.getElementById('pace')
    var res = document.getElementById('res')

    if (beginning == '' || end == '' || pace == '') {
        window.alert('Error! Try again.')
    } else {
        res.innerHTML = 'Counting: <br>'
        var beginning = Number(i.value)
        var end = Number(f.value)
        var pace = Number(p.value)
        if (pace <= 0) {
            window.alert('Passo Invalido! Tente novamente.')
        }
        if (beginning < end) {
            // Contagem crescente
            for (let c = beginning; c <= end; c += pace) {
                res.innerHTML += `${c}👉 `
            }
        } else {
            // Contagem regressiva
            for (let c = beginning; c >= end; c -= pace) {
                res.innerHTML += `${c}👉 `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
