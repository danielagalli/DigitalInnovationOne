function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por Clicar</b>";
   console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar");
}
function redirecionar(){
    //window.open("https://www.globo.com"); // Window.open serve para abrir nova pagina.
    window.location.href = "https://www.globo.com";// Window.location.href serve para abrir nova pagina.
}
function trocar(elemento){
    //document.getElementById("trocar").innerHTML = "Obrigada por passar o mouse";
    //alert("Trocar texto")
    elemento.innerHTML = "Obrigada por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("voltar").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Pagina carregada");   
}
function change(elemento){
    console.log(elemento.value);
}

//function soma(n1, n2){
    //return n1+n2;
//}
/*var validar =0;// Quando for fazer a validação fora da função é chamada de função global.
 function validaIdade(idade){
    // var validar; //Quando for fazer a validadação local é dentro da 
    //da função que se chama local
   if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

 var idade = prompt("Qual é a sua idade");
 console.log(validaIdade(idade));*/

//alert (soma(5,10));

//data e hora
/*var d = new Date();
alert(d.getDate());
alert(d. getMonth()+1);//getMonth mostra o mês que estamos mas temos 
//que acrescentar o mais 1 porque senão não mostra o mes certo
alert(d.getHours());//getHours mostra as horas em que estamos.
alert(d. getMinutes());// getMinutes mostra os minutos em que estamos.
alert(d.get)
console.log(d);*/


//Laços de repetição
/*var count = 0;
while(count <5 ){
    //console.log(count);
    alert(count);
    count = count + 1;
};*/

//condicionais. (se então)
// prompt serve  o qual irá receber uma string(mensagem) 
//que será exibida, normalmente em forma de pergunta ao 
//usuário.
//var idade = prompt("Qual sua idade?");
//var idade = 18;
//if (idade >=18){
   // alert("Maior de idade");
//}else{
 //   alert("Menor de idade");
//};


//lista de dicionario é como se fosse a função json.
//consolevar fruta = [{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"}]
//console.log(fruta);
//alert(fruta[1].nome);

//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome);
//console.log(fruta.cor);
//alert(fruta.nome);
//alert(fruta.cor);


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); //push serve para acrescentar algo.
//lista.pop("uva");// pop serve para tirar algo.
//console.log(lista.length); //length serve para ver o tamanho da minha lista.
//console.log(lista.reverse()); // reverse serve para inverter a ordem das coisas.
//console.log(lista.toString()); // toString serve para ler a mensagem.
//console.log(lista.join(" - ")); // Join serve para separar tipo colocando ponto, vergula, traço.
//console.log(lista[1]);
//console.log(lista.toLocaleString()[5]);

// -------------------------------------- // 
//var nome = "Daniela Galli";
//var idade01 = "28";
//var idade02 = "02";
//var frase = "Brasil é o melhor tipo do mundo"
//alert (nome "tem" + idade + " anos");
//alert(idade1 + idade2)
//console.log(nome);
//console.log(idade01 + idade02);
//console.log(idade1);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("japão","Brasil"));// Replace serve para substituir uma palavra pela outra.
//console.log(frase.toLocaleLowerCase()); // toLocaleLowercase serve para deixar a letra MAIUSCULA.
//console.log(frase.toUppercase()); // toUppercase serve para deixar a letra minusula.
