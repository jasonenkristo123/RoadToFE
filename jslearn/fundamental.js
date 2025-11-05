function luasLingkaran(jari) {
    let luas = 3.14 * jari * jari;
    return luas;
}

function faktorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * faktorial(n - 1);
    }
}
console.log(luasLingkaran(10));
console.log(faktorial(10));
