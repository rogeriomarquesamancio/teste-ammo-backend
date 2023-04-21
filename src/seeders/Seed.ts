import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categorys: any = [
	{
		name: 'Cama',
	},
	{
		name: 'Lençol',
	},
]

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
