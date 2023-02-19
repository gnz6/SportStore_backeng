export interface Product{
    brand: ["Nike", "Adidas", "Jordan"],
    color: string,
    model: string
    price:number,
    description?: string,
    category: ["sneakers", "top", "bottom", "accessories","other"],
    picture?: string,
    madeFor: ["man", "woman", "kids"],
}