
// lógica JS

function exercicio1() {
        console.log("Exercício 1")
        let a = Number(prompt("Digite A"))
        let b = Number(prompt("Digite B"))
        let c = Number(prompt("Digite C"))
        if(a == b || a == c || b == c){
            alert("Você repetiu algum número na digitação")
        }else{
        const soma = a+b+c
        const media = soma/3
        const produto = a*b*c
        const menor = Number(Math.min(a,b,c))
        const maior = Number(Math.max(a,b,c))
        console.log("soma = ", soma,"\n");
        console.log("media = ", media,"\n");
        console.log("produto = ", produto,"\n");
        console.log("menor = ", menor,"\n");
        console.log("maior = ", maior,"\n");
        }
}

function exercicio2() {
    let numero = Number((prompt("Digite um numero")).replace(",","."))
    
    let inteiro = Number.isInteger(numero)
    if(numero<0 || inteiro == false){
        alert("Apenas números inteiros positivos.")
    }else{
        if(numero%2 === 0){
            alert("numero é par")
        }
        else{
            alert("numero é ímpar")
        }
    }
}

function exercicio3() {
    let a = Number(prompt("Digite lado A"))
    let b = Number(prompt("Digite lado B"))
    let c = Number(prompt("Digite lado C"))
    triangulo()
   function triangulo(){ 
    if(a<=(b + c) && b<=(a + c) && c<=(a + b))
        {
        equilátero()
         isóceles()
         escaleno()
         
    }else{alert("Não é triãngulo.")}
   }
   function isóceles(){
    if ((a==b && a==c && c!=b) || (b==c && b==a && a!=c) || (c==b && c==a && a!=b)){
        console.log("Triângulo isóceles");
    }
   }
   function escaleno(){
    if (
        a!=b && a!=c && b!=c
    ){
        console.log("Triângulo escaleno");
    }
   }
   function equilátero(){
    if(a==b && a==c && c==b){
        console.log("Triângulo equilátero");
    }
   }
}

function exercicio4() {
    const anoatual = 2022
    let anonascimento = Number(prompt("Digite o ano de seu nascimento: "))
    if(anoatual-anonascimento > 18){
        console.log("Pode votar");
    }else{console.log("Não pode votar");}
}

function exercicio5() {
    let a = 10
    let b = 20
    let c = a
    a = b
    b = c
    console.log(a,);
    console.log(b,);

}

function exercicio6() {
    let celcius = Number(prompt("Digite ºC"))
    let fahrenheit  = celcius *(9 / 5)+ 32
    console.log(`${celcius} graus celcius é igual a ${fahrenheit} graus fahreinheit`)

}

function exercicio7() {
    let válidos = Number(prompt("Votos Válidos"))
    let brancos = Number(prompt("Votos Brancos"))
    let nulos = Number(prompt("Votos Nulos"))
    const totalvotos = (nulos+brancos+válidos)
    let razaonulos = (nulos/totalvotos)
    let razaobrancos = (brancos/totalvotos)
    let razaoválidos = (válidos/totalvotos)

    if (razaonulos+razaobrancos+razaoválidos==1) {
        console.log(`Válidos: ${(razaoválidos*100).toFixed(2)}%`);
        console.log(`Brancos: ${(razaobrancos*100).toFixed(2)}%`);
        console.log(`Nulos: ${(razaonulos*100).toFixed(2)}%`);    
    }
}

function exercicio8() {
    let preço = Number(prompt("Preço do Produto:"))
    let n_parcelas = Number(prompt("Número de Parcelas:"))

    if (n_parcelas == 1) {
        console.log(`Preço a vista com 2,5% de desconto: R$${(preço*0,975).toFixed(2)}`);
    }
    if (n_parcelas >= 2 && n_parcelas <= 5)
     {
        console.log(`Preço de tabela. ${n_parcelas}x de R$${(preço/n_parcelas).toFixed(2)}`);
     }
     if (n_parcelas >= 6 && n_parcelas <= 10)
     {
        console.log(`Preço com 6% de desconto. ${n_parcelas}x de R$${((preço/n_parcelas)*1.06).toFixed(2)}`);
     }
     if (n_parcelas >= 11 && n_parcelas <= 15)
     {
        console.log(`Preço com 13% de desconto. ${n_parcelas}x de R$${((preço/n_parcelas)*1.13).toFixed(2)}`);
     }
        
 }

 // Condicionais JS

 function cond1(){
    let idade = Number(prompt("Digite sua Idade."))
    if (idade>=18) {
        console.log("pode dirigir.");
        
    }else{console.log("Não pode dirigir");}
 }

 function cond2(){
    let idade = Number(prompt("Digite sua Idade."))
    let condicional = prompt("Tem Habilitação? 's' para sim e 'n' para não.")
    if (idade>=18 && condicional == "s") {
        console.log("pode dirigir.");
    }else{console.log("Não pode dirigir");}
 }

 function cond3(){
    let dia = Number(prompt("Digite um número de 1 a 7:"))

    if (dia>0 && dia < 7) {
        if (dia == 1) {
            console.log("Domingo");
        }
        else if (dia == 2) {
            console.log("Segunda");
        }
        else if (dia == 3) {
            console.log("Terça");
        }
        else if (dia == 4) {
            console.log("Quarta");
        }
        else if (dia == 5) {
            console.log("Quinta");
        }
        else if (dia == 6) {
            console.log("Sexta");
        }
        else if (dia == 7) {
            console.log("Sábado");
        }
    }else{"número inválido"}
   
 }

 function cond4(){
    let dia = Number(prompt("Digite um número de 1 a 7:"))
    switch(dia){
        case 1:
            console.log("domingo");
            case 2:
            console.log("Segunda");
            break
            case 3:
            console.log("Terça");
            break
            case 4:
            console.log("Quarta");
            break
            case 5:
            console.log("Quinta");
            break
            case 6:
            console.log("Sexta");
            break
            case 7:
            console.log("Sábado");
            break


    }
 }

 //reptições 

 function rep1(){
    console.log('Números Pares')
    for (let i = 1; i <= 10; i++) {
      if (i % 2 == 0) console.log(`${i}\n`)
    }
 }

 function rep2(){
    console.log('Tabuada do 5')
    for (let i = 1; i <= 50; i++) {
      if (i % 5 == 0) console.log(`${i}\n`)
    }
}

function rep3(){
    console.log('Salário')
    let valor = 5000
    while (valor <= 10000) {
      valor *= 1.3
      console.log(valor)
    }
}

function rep4(){
    console.log('Números Impares')
for (let i = 0; i <= 60; i++) {
  if (i % 2 != 0) console.log(`${i}\n`)
}
    
}

function rep5(){
    console.log('Do while')

let i = 10
let soma = 10

do {
  console.log(soma)
  i++
  soma += i
} while (i < 100)
}

 // condicionais e repetições

 function conderep1(){
    let salario = Number(prompt("Digite seu salário: R$ ").replace(",","."))
    if (salario>1903.98){
        console.log("Tributado no IR");
    }else{console.log("Isento de IR");}
 }

 function conderep2(){
    let numeroDigitado = Number(prompt("Digite um número.").replace(",","."))
    let divisor = 2

while(numeroDigitado%divisor != 0)
    divisor++

if(numeroDigitado == divisor)
    console.log("Número Primo.")
else
    console.log("Não é primo.")
 }
        
    

    
 

 