import { prismaClient } from '../database/PrismaClient';

// Pesquisar categorias no banco
async function searchByTerm(term = '') {
    term = `%${term}%`;
    
    // Buscar categorias de acordo com termo
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
