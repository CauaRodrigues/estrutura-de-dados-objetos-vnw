// Questões 11 - 12

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
cadastro.forEach(({ amigos }) => {
	const index = Math.floor(Math.random() * (4 - 0) + 0);
	console.log(amigos[index]);
});
