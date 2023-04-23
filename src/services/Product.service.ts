import { prismaClient } from '../database/PrismaClient';

// Pesquisar produtos no banco
async function searchProducts(term = '', page: number, amountItems: number) {
    term = `%${term}%`;
    page = page - 1;
    amountItems = amountItems;

    //Obter itens da página
    const data = await prismaClient.product.findMany({
        take: Number(amountItems),
        skip: Number(page * amountItems),
        where: {
            name: {
                contains: term,
                //@ts-ignore
                mode: 'insensitive',
            }
        },
        include: {
            images: true,
            category: true
        }
    })

    // Obter total de itens encontrados
    const countItens = await prismaClient.product.count({
        where: {
            name: {
                contains: term,
                //@ts-ignore
                mode: 'insensitive',
            }
        },
    })

    const pageCount = countItens >= 1 ? Math.ceil(countItens / amountItems) : 0;

    return {
        productList: data,
        pageCount: pageCount,
        totalItens: countItens,
    };
}


export default { searchProducts }
