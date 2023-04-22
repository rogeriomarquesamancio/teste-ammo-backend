import { prismaClient } from '../database/PrismaClient';

async function searchByTerm(term = '') {
    term = `%${term}%`;
    const data = await prismaClient.category.findMany({
        where: {
            name: {
                contains: term,
                //@ts-ignore
                mode: 'insensitive',
            },
        },
    })

    return {
        categoryList: data,
    };
}


export default { searchByTerm }
