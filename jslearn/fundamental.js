function luasLingkaran(jari, pi) {
    return jari * jari * pi;
}

console.log(luasLingkaran(10, 3.14));

const arr = ["Jason", "Nael", "Jasik"];
console.log(arr.join());
arr.push("Makasi"); // nambah array paling belakang
console.log(arr.join());
arr.pop(); // hapus array paling belakang
console.log(arr.join());
arr.unshift("Doddy"); // nambah array paling depan
console.log(arr.join());
arr.shift(); // hapus array paling depan
console.log(arr.join());

arr.splice(1, 0, "Asem"); // menambah array (index ke berapa, hapus index berapa, isi)
console.log(arr.join());

const arr2 = arr.slice(1, 4); // membuat array baru dari array 1
console.log(arr2.join());