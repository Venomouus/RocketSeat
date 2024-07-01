/*   ------Exercicio 1------
    
    Encontre a solucao ao problema:

    Pergunte o nome do usuário e escreva a mensagem:

    "Olá, [nome do usuário]"
    
    let nome = prompt('Qual seu nome ?')
    alert('Olá,' + nome)

*/

/*   ------Exercicio 2------

    Solicite 2 números, faca a soma deles
    e apresente o resultado final ao usuário
    
    let numberOne = prompt('Digite o número 1: ')
    let numberTwo = prompt('Digite o número 2: ')
    
    let resultado = (Number(numberOne) + Number(numberTwo)) 
    alert('Resultado da soma:' + resultado )
    
*/

/*   ------Exercicio 3------

    Capturar 2 números 
    e fazer as operacões matemáticas
    de soma, subtracão, multiplicacão,
    divisão e resto da divisão

    E para cada operacão, mostrar um alerta
    com o resultado.
    
    let firstNumber = prompt('Digite o primeiro número: ')
    let secondNumber = prompt('Digite o segundo número: ')
    
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    
    const sum = firstNumber + secondNumber
    const sub = firstNumber - secondNumber
    const multi = firstNumber * secondNumber
    const div = firstNumber / secondNumber
    const resto = firstNumber % secondNumber
    
    alert('Soma: ' + sum)
    alert('Subtracão: ' + sub)
    alert('Multiplicacão: ' + multi)
    alert('Divisão: ' + div)
    alert('Resto da divisão: ' + resto)

*/


/*   ------Exercicio 4------

    Solicitar o nome do aluno e as 3 notas
    do bimestre calcular a média daquele aluno.

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os parabéns.

    Se o aluno não passou no bimestre, 
    motivar o aluno a dar seu melhor na prova 
    de recuperacão.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

    let student = prompt('Qual o nome do aluno ?')

    let n1 = prompt('Qual a nota da primeira prova?')
    let n2 = prompt('Qual a nota da segunda prova?')
    let n3 = prompt('Qual a nota da terceira prova?')

    let average = (Number(n1) + Number(n2) + Number(n3)) / 3

    let result = average > 6

    average = average.toFixed(1)

    if ( result) {
        alert("Parabéns, " + student + "! Sua média foi de: " + average )
    } else {
        alert(student + " estude para sua prova de recuperacão! Sua média foi de: " + average );
}

*/


/*   ------Exercicio 5------

    Capture 10 items para compor a lista de um supermecado.

    Após capturar os 10 items, imprima-os, separando por vírgula.
    
    let items = []
    
    for(let item = 0; item < 10; item++) { 
        let itemName = prompt("Digite o item " + (item + 1))
    
        items[item] = itemName
    }
    alert (items)
    
*/


/*   ------Exercicio 6------

    ** Jogo da advinhacão **
    
    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório 
    e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto o usuário não adivinhar o número, mostrar a mensagem: 
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem: 
    "Parabéns! Voce advinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas
    
    
    let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
    const randomNumber = Math.round(Math.random() * 10)
    
    let xAttempts = 1;
    
    while (Number(result) != randomNumber) {
        result = prompt("Erro, tente novamente:")
        xAttempts++
    }
    
    alert(`Parabéns! Voce advinhou o número em ${xAttempts} tentativas`)

*/


/*   ------Exercicio 7------

    Faca um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opcão desejada

        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa

    ___

    O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes
    cenários:

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário didite 2, ele poderá ver os itens cadastrados
        Se não houver nenhum item cadastrado mostrar a mensagem: 
            "Não existem itens cadastrados"
    Caso o usuário digite 3, a aplicacão deverá ser encerrada.

    let option
let items = []

while (option != 3)

    option = Number(prompt(`
    Olá usuário! Digite o número da opcão desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do program
    `))

    if (option == 1) {
        let item = prompt("Digite o nome do item")
        items.push(item)
    }

    else if (option == 2) {

        if (items.length == 0) {
            alert("Não existem itens cadastrados")
    } else {
        alert(items)
    }

    } else {
        alert("Tchau")
    }

    console.log(option, items);
*/


let numberOne = prompt("Digite o primeiro numero:")
let numberTwo = prompt("Digite o segundo numero:")

let soma = Number(numberOne) + Number(numberTwo) 
let sub = Number(numberOne) - Number(numberTwo)
let multi = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let rest = Number(numberOne) % Number(numberTwo)

alert("A soma dos números é: " + soma)
alert("A subtracão dos números é: " + sub)
alert("A multiplicacão dos números é: " + multi)
alert("A divisão dos números é: " + div)
alert("O resto da divisão dos números é: " + rest)
