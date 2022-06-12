export type BookType = {
    _id?: string,
    name: string,
    price: number,
    sale_price: number,
    desc: string,
    image_url: string,
    status: number,
    category_id: string
}
export type BookTypeCreate = {
    name?: string,
    price?: number,
    sale_price?: number,
    desc?: string,
    image_url?: string,
    status?: number,
    category_id?: string

}
export type BookCartType = {
    id?: string ,
    name: string,
    price: number,
    sale_price: number,
    desc: string,
    image_url: string,
    value: number
}