const prompt = require('prompt-sync')()

const str1 = "ADHIKMORSUWYZ"
const str2 = "VXBGJCQLNEFPT"

function cifrar(mensagem) {

    let mensagemCifrada = []

    for (let i = 0; i < mensagem.length; i++) {

        const char = mensagem[i].toUpperCase()
        const index = str1.indexOf(char)
        const index2 = str2.indexOf(char)

        if (index !== -1) {
            mensagemCifrada.push(str2[index])
        } else if (index2 !== -1) {
            mensagemCifrada.push(str1[index2])
        } else {
            mensagemCifrada.push(mensagem[i])
        }
    }

    return mensagemCifrada.join('')
}

function decifrar(mensagem) {

    let mensagemDecifrada = []

    for (let i = 0; i < mensagem.length; i++) {

        const char = mensagem[i].toUpperCase()
        const index = str2.indexOf(char)
        const index2 = str1.indexOf(char)

        if (index !== -1) {
            mensagemDecifrada.push(str1[index])
        } else if (index2 !== -1) {
            mensagemDecifrada.push(str2[index2])
        } else {
            mensagemDecifrada.push(mensagem[i])
        }
    }

    return mensagemDecifrada.join('')
}

function main() {

    console.log("\n")
    
    const mensagem = prompt("Digite a mensagem a ser criptografada: ")

    console.log("\n-- Mensagem original:", mensagem)

    const mensagemCifrada = cifrar(mensagem)
    console.log("-- Mensagem criptografada:", mensagemCifrada)

    const mensagemDecifrada = decifrar(mensagemCifrada)
    console.log("-- Mensagem decriptografada:", mensagemDecifrada)

    console.log("\n")
}

main()
