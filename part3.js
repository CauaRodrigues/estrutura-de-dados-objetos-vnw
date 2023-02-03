// Questões 7 - 10

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
});

biografia.delete("idade");

// 10 - Mostre no console todas as propriedades desse objeto.
console.log(biografia);
console.log(Object.keys(biografia));
