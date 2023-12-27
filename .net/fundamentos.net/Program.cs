using System.Data;
using fundamentos.net.Models;

int quantidadeEmEstoque = 3;
int quantidadeCompra = 0;
bool possivelVenda = quantidadeCompra > 0 && quantidadeEmEstoque >= quantidadeCompra;

Console.WriteLine($"Quantidade em estoque: {quantidadeEmEstoque}");
Console.WriteLine($"Quantidade compra: {quantidadeCompra}");
Console.WriteLine($"È possivél realizar a venda? {quantidadeEmEstoque >= quantidadeCompra}");


if(quantidadeCompra == 0)
{
    Console.WriteLine("Venda Inválida");
}
else if(possivelVenda)
{
    Console.WriteLine("Venda realizada.");
}
else
{ 
    Console.WriteLine("Desculpe. Não temos a quantidade desejada em estoque.");
}








/*Convertendo de maneira segura*/
/*string a = "15-";

int b = 0;
int.TryParse(a, out b);

//int b = Convert.ToInt32(a);

Console.WriteLine(b);
Console.WriteLine("Conversão realizada com sucesso!");*/




/* atributos de atribuição*/

// int a = 10;
// int b = 20;
 
// int c = a + b;

//  Console.WriteLine(c);



/*DateTime dataAtual = DateTime.Now.AddDays(5);

Console.WriteLine(dataAtual.ToString("dd/MM/yyyy"));*/

/*
string apresentacao = "Olá, seja bem vindo";
int quantidade  = 1;
double altura = 1.80;
decimal preco = 1.80M;
bool condicao = true; 

Console.WriteLine(apresentacao);
Console.WriteLine("Valor da variável quantidade: " + quantidade);
Console.WriteLine("Valor da variável altura: " + altura);
Console.WriteLine("Valor da variável preco: " + preco);
Console.WriteLine("Valor da variável condicao: " +condicao);*/

/*Pessoa pessoa = new Pessoa(); 

pessoa.Nome = "Daniela";
pessoa.Idade = 31;
pessoa.Apresentar();*/
