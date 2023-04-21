import { prismaClient } from '../database/PrismaClient';

async function searchProducts(term = '', page: number, amountItems: number) {
    term = `%${term}%`;
    page = page - 1;
    amountItems = amountItems;

    const data = await prismaClient.product.findMany({
        take: Number(amountItems),
        skip: Number(page * amountItems),
        where: {
            name: {
                contains: term
            }
        },
        include: {
            images: true,
            category: true
        }
    })

    const countItens = await prismaClient.product.count({
        where: {
            name: {
                contains: term
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
