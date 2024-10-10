const prompt = require('prompt-sync')()

function salvarPosicoes(mensagem) {
    let posicoes = []
    for (let i = 0; i < mensagem.length; i++) {
        if (mensagem[i] === ' ') {
            posicoes.push(i)
        }
    }
    return posicoes
}

function tratarEspacos(textoOriginal, posicoes) {

    let textoModificado = textoOriginal

    for (let i = 0; i < posicoes.length; i++) {
        let pos = posicoes[i]
        textoModificado = textoModificado.substring(0, pos) + ' ' + textoModificado.substring(pos)
    }

    return textoModificado
}

function transposicao(arrayFrase) {

    let array1 = [], array2 = []
    let aux1 = 0, aux2 = 0

    arrayFrase = arrayFrase.trim()

    for (let i = 0; i < arrayFrase.length; i++) {
        if (i % 2 === 0) {
            array1[aux1] = arrayFrase[i]
            aux1 += 1
        } else {
            array2[aux2] = arrayFrase[i]
            aux2 += 1
        }
    }

    return array1.concat(array2)
}

function desfazerTransposicao(arrayFrase) {

    let meio = Math.ceil(arrayFrase.length / 2)
    let parte1 = arrayFrase.slice(0, meio)
    let parte2 = arrayFrase.slice(meio)

    let resultado = [];
    
    for (let i = 0; i < Math.min(parte1.length, parte2.length); i++) {
        resultado.push(parte1[i])
        resultado.push(parte2[i])
    }

    if (parte1.length > parte2.length) {
        resultado.push(parte1[parte1.length - 1])
    }
    
    return resultado.join('')
}

function cifrar(mensagem) {

    let posicoes = salvarPosicoes(mensagem)
    let mensagemSemEspacos = mensagem.toLowerCase().replaceAll(' ', '')
    let mensagemCifrada = transposicao(mensagemSemEspacos)

    return tratarEspacos(mensagemCifrada.join(''), posicoes).toUpperCase()
}

function decifrar(mensagemCifrada) {
    
    let posicoes = salvarPosicoes(mensagemCifrada)
    let mensagemSemEspacos = mensagemCifrada.replaceAll(' ', '')
    let mensagemDecifrada = desfazerTransposicao(mensagemSemEspacos)

    return tratarEspacos(mensagemDecifrada, posicoes).toLowerCase()
}

function main() {

    console.log("\n")
    
    const mensagemOriginal = prompt("Digite a mensagem a ser criptografada: ")
    console.log("\n-- Mensagem original:", mensagemOriginal)

    const mensagemCifrada = cifrar(mensagemOriginal)
    console.log("-- Mensagem criptografada:", mensagemCifrada)

    const mensagemDecifrada = decifrar(mensagemCifrada)
    console.log("-- Mensagem decriptografada:", mensagemDecifrada)

    console.log("\n")
}

main()
