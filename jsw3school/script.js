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
delete objek.nama;
console.log(text);

function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
};
const personAPP = new person("Jason", "Enkristo", 18, "red");
console.log(personAPP);

// nested object
const obyek = {
    name: "obed",
    age: 18,
    height: 180,
    obyek2: {
        car: "bmw",
        color: "blue",
        speed: 105
    }
};
console.log(obyek);
console.log(obyek.obyek2);

const siswa = {
    name: "diego",
    kelas: "12",
    nilai: [80, 100, 90, 95, 92, 93],
    rata() {
        let sum = 0;
        for (let i = 0; i < this.nilai.length; i++) {
            sum += this.nilai[i];
        }
        return sum / this.nilai.length;
    }
}

console.log(siswa.rata());

const person1 = {
    name: "malas",
    umur: 20,
    city: "Indonesia"
};

let text1 = "";
for (let x in person1) {
    text1 += person1[x] + " ";
}
console.log(text1);

// menggunakan object value untuk membuat arrray
const myArray = Object.values(person1);
let text2 = myArray.toString();
console.log(text2);

// menggunakan object entries untuk membuat simpel object saat di looping
const fruits = {
    apple: 200,
    banana: 400, 
    orange: 500
};

let text3 = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value;
}
console.log(text3);

// using json stringify
let text4 = JSON.stringify(fruits);
console.log(text4);

// reduce 
// untuk menggabungkan seluruh array menjadi satu 
const angka3 = [1, 10, 2, 3, 20, 43, 84];
const total = angka3.reduce((a, b) => a + b);
console.log(total);
console.log("Min: " + Math.min(...angka3));
console.log("Max: " + Math.max(...angka3));
const loop = angka3.flatMap(function (nums) {
    return nums *= 2;
});
console.log(loop);

let a, rest;
[a, ...rest] = angka3;
console.log(rest);

// destructuring -> mengakses array dan objek dengan cepat
const angka = ["kuning", "hijau", "oranye"];
const [x, y, z] = angka;
console.log(y);

const sport = {
    sport1: "Basket",
    sport2: "Futsal",
    sport3: "Badminton"
};

const {sport1, sport2, sport3} = sport;
console.log(sport1);

// spread operator -> untuk menggabungkan
const data1 = [10, 20, 30];
const data2 = [2, 4, 6, 8];
const gabung = [...data1, ...data2];
console.log(gabung);

const data3 = [10, 20, 30, 50, 70, 10, 20, 20, 40];
for (let x in data3) {
    console.log(data3[x]);
}