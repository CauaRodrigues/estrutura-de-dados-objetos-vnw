console.log("1 - 5");

// 1 - Crie um array que receba 5 itens e exiba no console.
let itens = ["Copo", "Camisa", "Caderno", "Computador", "Mochila"];
console.log(itens);

// 2 - Utilize um método para adicionar um nome ao inicio do array.
itens.unshift("Máscara");

// 3 - Utilize um método para remover o último nome do array.
itens.pop();

// 4 - Utilize um método para adicionar dois nomes ao fim do array.
itens.push("Celular", "Monitor");

// 5 - Utilize um método para remover o primeiro nome do array.
itens.shift();

console.log(itens);

console.log(
	"\n====================================================================\n6)"
);
// 6 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort((a, b) => a - b);
console.log(numbers);

console.log(
	"\n====================================================================\n7 - 10"
);

// 7 - Crie um objeto que receba ao menos três propriedades sobre você.
const biografia = {
	nome: "Cauã",
	idade: 18,
	desenvolvedor: true,
};

// 8 - Adicione uma nova propriedade sem alterar seu objeto inicial.
biografia.musicasFavoritas = [
	"lofi.samurai - love",
	"Pixies - Where Is My Mind",
	"Time Zone - World Destruction",
	"Joy Division - Disorder",
];

// 9 - Remova uma propriedade desse objeto.

// Criando uma função delete no próprio objeto
Object.defineProperty(biografia, "delete", {
	value: (prop) => {
		delete biografia[prop];
	},
	enumerable: true,
});

biografia.delete("idade");

// 10 - Mostre no console todas as propriedades desse objeto.
console.log(biografia);
console.log(Object.keys(biografia));

console.log(
	"\n====================================================================\n11 - 12"
);

/* 11 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
Na propriedade amigos, adicione ao menos 4 itens. */
const cadastro = [
	{
		nome: "Marta",
		idade: 22,
		telefone: "(14) 2282-4740",
		amigos: ["Selma", "Honoria", "Dayvid", "Eliezer"],
	},
	{
		nome: "Oswald",
		idade: 13,
		telefone: "(19) 3531-8143",
		amigos: ["Bruna", "Norival", "Marta", "Bruce"],
	},
	{
		nome: "Katarina",
		idade: 17,
		telefone: "(17) 2796-7661",
		amigos: ["Jane", "Clark", "Tony", "Patrick"],
	},
	{
		nome: "Mordecai",
		idade: 36,
		telefone: "(17) 2112-8551",
		amigos: ["Musculoso", "Rigby", "Benson", "Pairulito"],
	},
	{
		nome: "Tony Montana",
		idade: 30,
		telefone: "(12) 2345-7868",
		amigos: ["Patrick", "Corleone", "Soprano", "Gustavo"],
	},
];

// 12 - Mostre no console o nome de um amigo de cada lista.
cadastro.forEach(({ amigos }, i) => {
	console.log(!i ? amigos[i] : amigos[i - 1]);
});
