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

// map object
const fruit1 = new Map();
fruit1.set("apples", 500);
fruit1.set("orange", 200);

console.log(fruit1.get("apples")); // return 500
console.log(fruit1.size); // retun array size

// template string
const texting = "Brian";
console.log(`Halo ${texting}, Selamat Datang`);
console.log(`10 x 2 = ${10 * 2}`);
const bio = `
nama: Brian
umur: 40
tinggi: 170cm
`;
console.log(bio);

//module -> kalau export default, import nama bebas
// export const tambahan = (a, b) => a + b;
// export const kalian = (a, b) => a * b;

// class and inherintance
// class -> constructor versi modern
// sebelumnya pakai function dan this keyword, tetapi sekarang berbeda

class siswaUb {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    sayHi() {
        console.log(`Hai nama saya ${this.nama}, umur saya ${this.umur}`);
    }
}

const panggil = new siswaUb("Qalbi", 19);
panggil.sayHi();

// inherintence
class animal {
    speak() {
        console.log("Auuuuuu");
    }
}

class dog extends animal {
    speak() {
        console.log("gukgukguk");
    }
}

const obj = new dog();
obj.speak(); // output gukguk

const objnim = new animal();
objnim.speak();

// optional chaining -> mengakses variabel yang tidak ada atau null tanpa error
const user = {};
// console.log(user.address.city); -> error
console.log(user.address?.city); // -> undefined


// nullish coalescing -> 
// digunakan ketika
// Kamu mengambil data dari API
// Property bisa saja null
// Kamu ingin memberikan fallback value yang aman
// Tidak ingin false seperti 0, "" dianggap sebagai default

// || dianggap falsey, kalau ?? hanya null dan undefined saja yang dianggap kosong, menggap 0 nilai valid 
const age = 0;
console.log(age || 18); // hasilnya 18 dan salah
console.log(age ?? 18); // hasilnya 0 -> benar

const name = null;
console.log(name ?? "Anonymous");

const user1 = {};
console.log(user1.info?.email ?? "No Email"); // menghasilkan no email

// misal contoh ambil api dan mau menampilkan loading layar
// const data = apiResponse.value ?? "Loading...";

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class doggy extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;;
    }
}
const obj2 = new Animal("Arfa");
const obj3 = new doggy("female");
console.log(obj3);

// class namalu {
//     constructor(jari) {
//         this.jari = jari;
//     }
//     get luas() {
//         return jari * jari * 3.14;
//     }
//     set luas(jari) {
//         this.jari = jari;
//     }
// }

class Mathutil {
    static add (a, b) {
        return a + b;
    }
}
console.log(Mathutil.add (10, 20));

// private fields, hanya ada di javascript

class Bank {
    #balance = 100; // class private

    deposit(amount) {
        this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
}

const uang = new Bank();
uang.deposit(100);
console.log(uang.getBalance()); // -> hasilnya 200

// javascript itu bukan class based tetapi prototype
// class vs prototype
// class A {}
// function A() {}
// ini sama saja hanya beda di print

// inheritance flow -> mirip class hierarchy
// extends membuat anak mewarisi prototype dari parent
class B {}
class C extends B {}
console.log(C.prototype.__proto__=== B.prototype); // -> return true

class X {
    greet() {
        return "Hello from class X";
    }
}

class Z extends X {
    greet() {
        return super.greet() + " and Z";
    }
}

const objik = new X();
const objik1 = new Z();
console.log(objik.greet());
console.log(objik1.greet());