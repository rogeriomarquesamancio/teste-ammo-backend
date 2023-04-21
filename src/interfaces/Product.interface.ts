export interface ICategoryDto {
    idCategory: number;
    name: number;
}

export interface IRequestSearchProductInput {
    term?: string;
    page: number;
    itens: number;
}