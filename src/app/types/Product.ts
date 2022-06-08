export type Product = {
    _id: string, // Nếu dùng nodejs thì là string, json thì number
    name: string,
    status: number
}
export type ProductCreate = {
    name?: string,
    status?: number
}
export type ProductCartType = {
    id: string,
    name: string,
    value: number
}
