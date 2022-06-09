export type BookType = {
    _id?: string,
    name: string,
    price: number,
    sale_price: number,
    desc: string,
    image_url: string
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