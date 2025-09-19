let active = true
let cadastrado = {
    nome: "",
    senha: ""
}
let login = {
    nome: "",
    senha: ""
}
function soma(n1, n2) {
    let resultado
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite um numero!!")
    }
    else {
        resultado = n1 + n2
        alert(`O Resultado da operação matematica é: ${resultado}`)
    }
}
function multi(n1, n2) {
    let resultado
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite um numero!!")
    } else {
        resultado = n1 * n2
        alert(`O Resultado da operação matematica é: ${resultado}`)
    }
}
function sub(n1, n2) {
    let resultado
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite um numero!!")
    } else {
        resultado = n1 - n2
        alert(`O Resultado da operação matematica é: ${resultado}`)
    }
}
function div(n1, n2) {
    let resultado
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite um numero!!")
    } else {
        resultado = n1 / n2
        alert(`O Resultado da operação matematica é: ${resultado}`)
    }
}
function numbers() {
    let n1 = Number(prompt("Digite o primeiro numero:"))
    let n2 = Number(prompt("Digite o segundo numero:"))
    return [n1, n2]
}
while (active) {
    if (login.nome != "" && login.senha != "") {
        //Usuario logado
        let resposta = prompt(`Seja bem vindo ${login.nome}, o que quer fazer em nosso sistema?\n1 - Somar\n 2 - Multiplicar\n3 - Dividir\n 4 - Subtrair\n 5 - Deslogar`)
        if (resposta == "soma" || resposta == 1) {
            let [n1, n2] = numbers()
            soma(n1, n2)
        }
        else if (resposta == "multiplicar" || resposta == 2) {
            let [n1, n2] = numbers()
            multi(n1, n2)
        }
        else if (resposta == "dividir" || resposta == 3) {
            let [n1, n2] = numbers()
            div(n1, n2)
        }
        else if (resposta == "subtrair" || resposta == 4) {
            let [n1, n2] = numbers()
            sub(n1, n2)
        }
        else if (resposta == "deslogar" || resposta == 5){
            alert("Ate logo " + login.nome)
            login.nome = ""
            login.senha = ""
        }
        else {
            alert("Essa opção não esta presente em nosso sistema!")
        }
    }
    else {
        //Usuario deslogado
        let resposta = prompt("Bem vindo caro usuario, o que quer fazer em nosso sistema?\n1 - Cadastrar \n2 - Entrar\n 3 - Sair")
        if (resposta == "cadastrar" || resposta == 1) {
            let nome = prompt("Digite seu nome: ")
            if (nome != "") {
                let senha = prompt("Digite sua senha: ")
                if (senha != "") {
                    cadastrado.nome = nome;
                    cadastrado.senha = senha
                    alert("Usuario cadastrado, bem vindo " + cadastrado.nome)
                } else {
                    alert("Digite algo no campo !!")
                }
            }
            else {
                alert("Digite algo no campo !!")
            }
        }
        else if (resposta == "entrar" || resposta == 2) {
            if (cadastrado.nome != "" && cadastrado.senha != "") {
                let nome = prompt("Digite seu nome: ")
                if (nome == cadastrado.nome) {
                    let senha = prompt("Digite sua senha: ")
                    if (senha == cadastrado.senha) {
                        login.nome = nome
                        login.senha = senha
                    } else {
                        alert("Senha incorreta, tente novamente!!")
                    }
                } else {
                    alert("Nome não presente no meu banco de dados!!")
                }
            }
            else {
                alert("Nenhum usuario cadastrado em nosso banco!!")
            }
        }
        else if (resposta == "sair" || resposta == 3) {
            alert("Ate logo meu chapa!!")
            active = false;
        }
        else {
            alert("Essa opção não esta presente em nosso sistema!")
        }
    }
}
