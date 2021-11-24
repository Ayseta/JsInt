//console.log("Merhaba Kodlama.io")
let dolarDun =9.20
let dolarBugun = 9.30
//console.log(dolarDun)
const euroDun = 10.1
//console.log(euroDun)
let konutKredileri = ["Konut Kredisi", "Araç Kredisi","Bireysel Kredi"]
//console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++){
    //console.log("<li>" +konutKredileri[i]+"</li>")
}
//console.log("</ul>")
//console.log(konutKredileri)
let student = {id:1, name:"Ayse"}
//console.log(student)
function save(ogrenci, puan=10) { 
    console.log(ogrenci.name + " : " + puan)
}
//save(student,100)

let students = ["Ayse", "Gül", "Büşra"]
//console.log(students)
let students2 = [student, {id:2, name:"Gül"},"Antalya", {city:"Van"} ]
//console.log(students2)

//rest
//params-c#
//varArgs-java
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}
//console.log(typeof showProducts)
//showProducts(10, ["elma","armut"])

//spread
let points = [1,3,5]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1, name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category //destrub etme yöntemi
console.log(id)
console.log(name)