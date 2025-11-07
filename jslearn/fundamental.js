function luasLingkaran(jari, pi) {
    return jari * jari * pi;
}

console.log(luasLingkaran(10, 3.14));

const arr = ["Jason", "Nael", "Jasik"];
console.log(arr.join());
arr.push("Makasi");
console.log(arr.join());
arr.pop();
console.log(arr.join());
arr.unshift("Doddy");
console.log(arr.join());
arr.shift();
console.log(arr.join());