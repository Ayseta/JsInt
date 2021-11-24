class Customer{
    constructor(id,customerNumber){
        this.id =id;
        this.customerNumber= customerNumber;
    }
}
let customer = new Customer(1,"12345");
console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}
//prototyping
//instance'a yapılan prototyping
customer.name = "Engin Demiroğ"
console.log(customer.name)
//Class'a yapılan prototyping
Customer.bisey="Bişey"
console.log(Customer.bisey)

let products = [{id:1, name: "A", unitPrice:10},
    {id:2, name: "B", unitPrice:15},]

console.log("<ul>")
products.map(product =>console.log(`<li>${product.name}</li>`))
console.log("</ul>")
products.map(product=>{
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})

let filteredProducts = products.filter(product=>product.unitPrice>10)
console.log(filteredProducts)

let cartTotal = products.reduce((acc, product)=>acc+ product.unitPrice,0)
console.log(cartTotal)

let cartTotal2 = products
                .filter(p=>p.unitPrice>10)
                .map(p=>{
                    p.unitPrice=p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(cartTotal2)
                





