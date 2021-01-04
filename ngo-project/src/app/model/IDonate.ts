export interface IDonate{
    id: number,
    firstName: string,
    lastName: string,
    email:string,
    phoneNumber:number,
    addressOne:string,
    addressTwo:string,
    city:string,
    state:string,
    postalCode:string,
    country:string
    donationType:Array<string>,
    date:Date,
    amount:number,
}