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

const angka = [1, 2, 3, 4, 5, 6, 7];
// menggunakan forEach agar lebih simpel saat looping
angka.forEach(function(x) {
    console.log(x);
})

const nama = ["Jason", "Brian", "Arfa"];
nama.forEach(function(e, i) {
    console.log("Nama ke-" + (i + 1) + " adalah: " + e);
})