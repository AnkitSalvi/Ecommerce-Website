import { isInterfaceDeclaration } from "typescript";


export interface Product {
    itemID: string,
    image: string,
    title: string,
    description: string,
    price: number
}

export interface Cart {
    itemID: string,
    image: string,
    title: string,
    description: string,
    price: number,
    qnt: number
}

export interface ShopState {
    product:  Product[],
    cart: Cart[],
    currentProduct: Product
}