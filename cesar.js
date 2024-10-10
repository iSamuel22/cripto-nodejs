const prompt = require('prompt-sync')()

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function cifrar(mensagem, deslocamento) {
    
    let mensagemCifrada = []

    for (let i = 0; i < mensagem.length; i++) {
        const char = mensagem[i].toUpperCase()
        let indexStr = str.indexOf(char)

        if (indexStr !== -1) {
            let novoIndex = (indexStr + deslocamento) % str.length
            mensagemCifrada.push(str[novoIndex])
        } else {
            mensagemCifrada.push(mensagem[i])
        }
    }

    return mensagemCifrada.join('')
}

function decifrar(mensagem, deslocamento) {

    let mensagemDecifrada = []

    for (let i = 0; i < mensagem.length; i++) {
        const char = mensagem[i].toUpperCase()
        let indexStr = str.indexOf(char)

        if (indexStr !== -1) {
            let novoIndex = (indexStr - deslocamento + str.length) % str.length
            mensagemDecifrada.push(str[novoIndex])
        } else {
            mensagemDecifrada.push(mensagem[i])
        }
    }

    return mensagemDecifrada.join('')
}

function main() {

    console.log("\n")

    const mensagem = prompt("Digite a mensagem a ser criptografada: ")
    const deslocamento = parseInt(prompt("Digite o deslocamento: "), 10)

    console.log("\n-- Mensagem original:", mensagem)

    const mensagemCifrada = cifrar(mensagem, deslocamento)
    console.log("-- Mensagem criptografada:", mensagemCifrada)

    const mensagemDecifrada = decifrar(mensagemCifrada, deslocamento)
    console.log("-- Mensagem decriptografada:", mensagemDecifrada)

    console.log("\n")
}

main()
