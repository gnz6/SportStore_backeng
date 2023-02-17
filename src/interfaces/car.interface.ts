export interface Car{
    brand: string,
    color: string,
    gas: "gasoline" | "electric" | "other",
    model: string
    motor?: "1.0" |" 1.4" | "1.6 "| "1.8" | "2.0" ,
    price:number,
    year: number,
    doors: number,
    used : boolean,
    kilometers?: number
}