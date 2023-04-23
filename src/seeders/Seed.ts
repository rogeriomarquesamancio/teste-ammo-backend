import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Seed categorias
const categorys: any = [
	{
		name: 'Cama',
	},
	{
		name: 'Lençol',
	},
	{
		name: 'Mesa',
	},
	{
		name: 'Tapete',
	},
]

// Seed produtos
const products: any = [
	{
		name: 'Kit Cama Algodão Egípcio Acetinado Deluxe Essenza',
		description: 'Encante-se pelos detalhes do Kit Cama Essenza.',
		originalPrice: 2590.00,
		promotionalPrice: null,
		idCategory: 1,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/kqn3seszo20cz-1601596167498-1673533880939.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/kqn3seszo20cz-depois-1673534791047.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/d1-1673534825395.jpg'
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/d2-1673534837651.jpg'
				}
			],
		},
	},
	{
		name: 'Kit Cama Alba + Colby',
		description: 'Se você ama roupas de cama com um toque de sofisticação e muito conforto, conheça esse duo.',
		originalPrice: 1089.00,
		promotionalPrice: null,
		idCategory: 1,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/bdkitcamk25s1esr_1536px-1679507124582.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/l_n2halbo21bc-1536px-1663352201082.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/mmcamkcqa7121-1536px-1666640115546.png'
				},
			],
		},
	},
	{
		name: 'Kit Cama Acetinado La Vie',
		description: 'Para uma cama completa e impecável.',
		originalPrice: 2690.00,
		promotionalPrice: 1990.00,
		idCategory: 1,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/kcnbhlvip22ada-1536px-1644518320335-1649775594961-1665772148530.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/still/kcnbhlvip22adv-1632177361355-1644509578231-1649775615250-1665772154201.jpg',
				},
			],
		},
	},
	{
		name: 'Jogo de Lençol Percal Ultra Soft Java',
		description: 'O clássico dos sonhos para a decoração da sua casa.',
		originalPrice: 590.00,
		promotionalPrice: 429.00,
		idCategory: 2,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/cama-1-1666892625666.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/cama-2-1666892659388.jpg',
				},
			],
		},
	},
	{
		name: 'Jogo de Lençol em Linho Santorini',
		description: 'Para uma decoração única e aconchegante. Produzido em tecido com linho em sua composição, o Jogo de Lençol Santorini reúne resistência, suavidade e sustentabilidade ecológica típicas das fibras naturais.',
		originalPrice: 1890.00,
		promotionalPrice: null,
		idCategory: 2,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/l_dbhsanp22mr-1536px-1673373475997.png',
				},
			],
		},
	},
	{
		name: 'Jogo de Lençol Percal Bordado One For All',
		description: 'Crie uma atmosfera graciosa no quarto com o Jogo de Lençol One For All.',
		originalPrice: 399.00,
		promotionalPrice: null,
		idCategory: 2,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/semi-environment/mm18bjdka3040d-1536px-1674571659146-1679422754065.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/mm18bjdka3040-1536px-1674129954365.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/one-fol-all-bordado---lqnb81foo21bc-lqnb81foo21gr-mm18bjdqa3040_9624-1680282915438.jpg'
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/one-fol-all-bordado---lqnb81foo21bc-lqnb81foo21gr-mm18bjdqa3040_9626-1680282968476.jpg'
				}
			],
		},
	},
	{
		name: 'Kit Cama Algodão Egípcio Acetinado Deluxe Essenza',
		description: 'Encante-se pelos detalhes do Kit Cama Essenza.',
		originalPrice: 2590.00,
		promotionalPrice: null,
		idCategory: 1,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/kqn3seszo20cz-1601596167498-1673533880939.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/kqn3seszo20cz-depois-1673534791047.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/d1-1673534825395.jpg'
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/d2-1673534837651.jpg'
				}
			],
		},
	},
	{
		name: 'Kit Cama Alba + Colby',
		description: 'Se você ama roupas de cama com um toque de sofisticação e muito conforto, conheça esse duo.',
		originalPrice: 1089.00,
		promotionalPrice: null,
		idCategory: 1,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/bdkitcamk25s1esr_1536px-1679507124582.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/l_n2halbo21bc-1536px-1663352201082.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/mmcamkcqa7121-1536px-1666640115546.png'
				},
			],
		},
	},
	{
		name: 'Kit Cama Acetinado La Vie',
		description: 'Para uma cama completa e impecável.',
		originalPrice: 2690.00,
		promotionalPrice: 1990.00,
		idCategory: 1,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/kcnbhlvip22ada-1536px-1644518320335-1649775594961-1665772148530.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/still/kcnbhlvip22adv-1632177361355-1644509578231-1649775615250-1665772154201.jpg',
				},
			],
		},
	},
	{
		name: 'Jogo de Lençol Percal Ultra Soft Java',
		description: 'O clássico dos sonhos para a decoração da sua casa.',
		originalPrice: 590.00,
		promotionalPrice: 429.00,
		idCategory: 2,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/cama-1-1666892625666.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/cama-2-1666892659388.jpg',
				},
			],
		},
	},
	{
		name: 'Jogo de Lençol em Linho Santorini',
		description: 'Para uma decoração única e aconchegante. Produzido em tecido com linho em sua composição, o Jogo de Lençol Santorini reúne resistência, suavidade e sustentabilidade ecológica típicas das fibras naturais.',
		originalPrice: 1890.00,
		promotionalPrice: null,
		idCategory: 2,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/l_dbhsanp22mr-1536px-1673373475997.png',
				},
			],
		},
	},
	{
		name: 'Jogo de Lençol Percal Bordado One For All',
		description: 'Crie uma atmosfera graciosa no quarto com o Jogo de Lençol One For All.',
		originalPrice: 399.00,
		promotionalPrice: null,
		idCategory: 2,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/semi-environment/mm18bjdka3040d-1536px-1674571659146-1679422754065.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/mm18bjdka3040-1536px-1674129954365.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/one-fol-all-bordado---lqnb81foo21bc-lqnb81foo21gr-mm18bjdqa3040_9624-1680282915438.jpg'
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/details/one-fol-all-bordado---lqnb81foo21bc-lqnb81foo21gr-mm18bjdqa3040_9626-1680282968476.jpg'
				}
			],
		},
	},
	{
		name: 'Tapete Pion',
		description: 'Delicadeza e encanto definem o Tapete Pion.',
		originalPrice: 1190.00,
		promotionalPrice: null,
		idCategory: 4,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/tapmdpiop23dv-1536px-1665428011485.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/details/tapmdpiop23dvd2-1536px-1665428035266.png',
				},
			],
		},
	},
	{
		name: 'Tapete Gyor',
		description: 'O Tapete Gyor é uma excelente opção para renovar o ambiente com estilo e aconchego.',
		originalPrice: 2990.00,
		promotionalPrice: 2100.00,
		idCategory: 4,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/cama-1---kqn2sesso11bc-quadrelop23bc-quaduelop23bc-vasugmoao21ow-tap30gyop23cz-vasunvero21bcmutbedayo18ow_3598-1669929558580.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/tap20gyop23cz-1666121172837.png',
				},
			],
		},
	},
	{
		name: 'Tapete Classique',
		description: 'Ao construir a decoração dos ambientes do seu lar, todos os detalhes importam.',
		originalPrice: 1890.00,
		promotionalPrice: null,
		idCategory: 4,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/cama-1---mmcamkcqa9401-mm180jdqz1vita-mmcapquaz1celi-tapgdclap23cz-mmcapquaz1wardi-mmcarmtqa2091vasugmoao21ow-_mg_1476-1681161742250.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/tapmdclap23cz-1536px-1665428056103.png',
				},
			],
		},
	},
	{
		name: 'Tapete Pion',
		description: 'Delicadeza e encanto definem o Tapete Pion.',
		originalPrice: 1190.00,
		promotionalPrice: null,
		idCategory: 4,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/tapmdpiop23dv-1536px-1665428011485.png',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/details/tapmdpiop23dvd2-1536px-1665428035266.png',
				},
			],
		},
	},
	{
		name: 'Tapete Gyor',
		description: 'O Tapete Gyor é uma excelente opção para renovar o ambiente com estilo e aconchego.',
		originalPrice: 2990.00,
		promotionalPrice: 2100.00,
		idCategory: 4,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/cama-1---kqn2sesso11bc-quadrelop23bc-quaduelop23bc-vasugmoao21ow-tap30gyop23cz-vasunvero21bcmutbedayo18ow_3598-1669929558580.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/tap20gyop23cz-1666121172837.png',
				},
			],
		},
	},
	{
		name: 'Tapete Classique',
		description: 'Ao construir a decoração dos ambientes do seu lar, todos os detalhes importam.',
		originalPrice: 1890.00,
		promotionalPrice: null,
		idCategory: 4,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/cama-1---mmcamkcqa9401-mm180jdqz1vita-mmcapquaz1celi-tapgdclap23cz-mmcapquaz1wardi-mmcarmtqa2091vasugmoao21ow-_mg_1476-1681161742250.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/tapmdclap23cz-1536px-1665428056103.png',
				},
			],
		},
	},
	{
		name: 'Jogo de Pratos Fundos em Cerâmica Seeds 6 Peças',
		description: 'Sua mesa sempre apaixonante.',
		originalPrice: 259.00,
		promotionalPrice: null,
		idCategory: 3,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/mesa-externa---trmu0clqo21bc-kgun2clqo21bc-ktpf6giao21dv-ptgu6beto22pa-tac30colo22tr-tac60colo22tr-ptgu6beto22pa-vasopdiap21tr-vasouanto22tr-faq48sheo21pa-cmesuvenp22pa-ktpr6nero21cz-ktbw6nero21cz_6160-1677162838664.jpg',
				},
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/still/ktpf6giao21dv-1650308860500-1651013383934.png',
				},
			],
		},
	},
	{
		name: 'Jogo de Xícaras de Café e Pires em Cerâmica Seeds 12 Peças',
		description: 'Leveza, elegância, sofisticação. Essas são apenas algumas das principais características do Jogo Seeds.',
		originalPrice: 229.00,
		promotionalPrice: null,
		idCategory: 3,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/png/products/photos/details/1-1621373093641.png',
				},
			],
		},
	},
	{
		name: 'Toalha de Mesa Anti-Manchas Tropicalle',
		description: 'A Toalha de Mesa Tropicalle leva charme, conforto e praticidade para as suas refeições.',
		originalPrice: 449.00,
		promotionalPrice: 100.00,
		idCategory: 3,
		images: {
			create: [
				{
					src: 'https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/still/tm32rtpcp22bg_semi-1674149293903.jpg',
				},
			],
		},
	},
];

async function main() {
	for (const category of categorys) {
		await prisma.category.create({
			data: category,
		});
	}

	for (const product of products) {
		await prisma.product.create({
			data: product,
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
