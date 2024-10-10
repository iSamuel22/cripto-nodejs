const prompt = require('prompt-sync')()

function cifrar(texto, chave) {

    let mensagemCifrada = ""
    let chaveIndex = 0

    chave = chave.toUpperCase()

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i]

        if (char === " ") {
            mensagemCifrada += " "
            continue
        }

        let baseCharCode = char >= 'a' && char <= 'z' ? 97 : 65
        let textoCharCode = texto.charCodeAt(i) - baseCharCode
        let chaveCharCode = chave.charCodeAt(chaveIndex % chave.length) - 65
        let criptCharCode = (textoCharCode + chaveCharCode) % 26 + 65

        mensagemCifrada += String.fromCharCode(criptCharCode)
        chaveIndex++;
    }

    return mensagemCifrada
}

function decifrar(mensagemCifrada, chave) {

    let mensagemDecifrada = ""
    let chaveIndex = 0

    chave = chave.toUpperCase()

    for (let i = 0; i < mensagemCifrada.length; i++) {
        let char = mensagemCifrada[i]

        if (char === " ") {
            mensagemDecifrada += " "
            continue
        }

        let criptCharCode = mensagemCifrada.charCodeAt(i) - 65
        let chaveCharCode = chave.charCodeAt(chaveIndex % chave.length) - 65
        let decriptCharCode = (criptCharCode - chaveCharCode + 26) % 26 + 65

        mensagemDecifrada += String.fromCharCode(decriptCharCode)
        chaveIndex++
    }

    return mensagemDecifrada
}

function main() {

    console.log("\n")
    
    const texto = prompt("Digite a mensagem a ser criptografada: ")
    const chave = prompt("Digite a chave: ")

    console.log("\n-- Mensagem original:", texto)

    const mensagemCifrada = cifrar(texto, chave)
    console.log("-- Mensagem criptografada:", mensagemCifrada)

    const mensagemDecifrada = decifrar(mensagemCifrada, chave)
    console.log("-- Mensagem decriptografada:", mensagemDecifrada)

    console.log("\n")
}

main()
