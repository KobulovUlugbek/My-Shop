
export interface IProducts {
    id: number,
    title: string,
    price: number,
    year: number
    image?: string,
    configure: IProductsConfig,
}

export interface IProductsConfig{
    chip: string,
    SSD: string,
    memory: string,
    display: string,
}
