// function luasLingkaran(jari, pi) {
//     return jari * jari * pi;
// }

// console.log(luasLingkaran(10, 3.14));
// 
// const arr = ["Jason", "Nael", "Jasik"];
// console.log(arr.join());
// arr.push("Makasi"); // nambah array paling belakang
// console.log(arr.join());
// arr.pop(); // hapus array paling belakang
// console.log(arr.join());
// arr.unshift("Doddy"); // nambah array paling depan
// console.log(arr.join());
// arr.shift(); // hapus array paling depan
// console.log(arr.join());
// 
// arr.splice(1, 0, "Asem"); // menambah array (index ke berapa, hapus index berapa, isi)
// console.log(arr.join());
// 
// console.log(arr2.join());
// const arr2 = arr.slice(1, 4); // membuat array baru dari array 1

// const angka = [1, 2, 3, 4, 5, 6, 7];
// // menggunakan forEach agar lebih simpel saat looping
// angka.forEach(function(x) {
//     console.log(x);
// })
// 
// const nama = ["Jason", "Brian", "Arfa"];
// nama.forEach(function(e, i) {
//     console.log("Nama ke-" + (i + 1) + " adalah: " + e);
// })

// hati hati karena forEach tidak mengembalikan nilai array -> lebih baik pakai map

// const angka = [1, 2, 3, 4, 5];
// const angka2 = angka.map(function(e) {
//     return e * 2;
// });
// 
// console.log(angka2.join(" - ")); // map bisa mengembalikan nilai array

// sorting array

// const array = [1, 5, 8, 3, 2, 9, 10, 21];
// array.sort(function(a, b) {
//     return a - b; // ini fungsinya untuk sort angka dari terkecil sampai terbesar
// });
// console.log(array.join());

//filter
// const angka = [1, 2, 4, 8, 20];
// const angka2 = angka.filter(function(e) {
//     return e > 2;
// });
// console.log(angka2.join(" - ")); // akan keluar array yang mengurutkan angka > 2

//find
// const angka = [1, 2, 4, 8, 20];
// const angka2 = angka.find(function(e) {
//     return e > 2;
// });
// console.log(angka2); // tidak bisa di join karena find hanya mencari 1 angka dan tidak bisa mengembalikan array

//object di javascript -> hashmap di java
// const mahasiswa = {
//     nama : "Jason",
//     umur : 18,
//     ipk : [3.50, 4.00, 3.75, 3.80, 3.90, 3.95, 4.00],
//     ipKumulatif : function() {
//         let total = 0;
//         let ips = this.ipk;
//         for (let i = 0; i < ips.length; i++) {
//             total += ips[i];
//         }
//         return total / ips.length;
//     }
// }
// console.log(mahasiswa.ipKumulatif());

// beberapa cara membuat object
// 1. object literal
const mhs = {
    nama: "Jason",
    umur: 19,
    nim: 255190239102
}

// 2. function declaraction
function mahasiswa(nama, umur, nim) {
    let mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.nim = nim;
    return mhs;
}
const student1 = mahasiswa("Jason", 20, 12938123213);

// 3. constructor
function mahasiswi(nama, umur, nim) {
    this.nama = nama;
    this.umur = umur;
    this.nim = nim;
}
const student = new mahasiswi("Jason", 17, 1283123031);

function guru(nama, subject, umur) {
    this.nama = nama;
    this.subject = subject;
    this.umur = umur;
}
const guru1 = new guru("Marji", "Math", 48);

// function sapaNama(nama) {
//     console.log('halo', nama);
// }

// arrow function di modern js

// const perkalian = (a, b) => a * b;
// console.log(perkalian(10, 2));

 
