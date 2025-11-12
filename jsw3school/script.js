// let name = "Jason";
// console.log(`${name}`);
// 
// let text = "apasih malasnya \uD800";
// let result = text.toWellFormed();
// console.log(result);
// 
// let text1 = "Malas banget gw asli";
// console.log(text1.match("sli"));
// 
// let number = BigInt(999999999999999);
// console.log(number)

// // rest parameter
// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
// }
// console.log(sum(10, 20, 30, 40, 50, 60, 87, 100, 202, 121));
// 
// // arguments parameter
// function sumAll () {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sumAll(10, 20, 30, 40, 50));
// 
// // arrow function
// let perkalian = (a, b) => a * b;
// console.log(perkalian(10, 20));
// 
// let nama = () => {
//     return "Hello World";
// }
// console.log(nama());
// 
// let pembagian = (a, b) => {
//     return a / b;
// }
// console.log(pembagian(10, 2));
// 
// kalau mau memakai return, harus ada curly brackets {}
// kalau tidak mau pakai return tidak usah ada curly brackets

// callback function
let hitung = (a, b, operasi) => {
    return operasi(a, b);
}

let tambah = (a, b) => {
    return a + b;
}

let kali = (a, b) => a * b;
console.log(hitung(10, 5, tambah));
console.log(hitung(10, 20, kali));
// objek wajib pakai const
const objek = {
    nama: "Jason",
    umur: 19,
    posisi: "Mahasiswa",
    pekerjaan: "Software engineering"
};

let text = objek;
console.log(text);


function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
};
const personAPP = new person("Jason", "Enkristo", 18, "red");
console.log(personAPP);
