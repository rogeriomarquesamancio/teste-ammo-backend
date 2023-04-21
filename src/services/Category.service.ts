import { prismaClient } from '../database/PrismaClient';

async function searchByTerm(term = '') {
    term = `%${term}%`;

    const data = await prismaClient.category.findMany({
        where: {
            name: {
                contains: term
            }
        },
    })

    return {
        categoryList: data,
    };
}


export default { searchByTerm }
