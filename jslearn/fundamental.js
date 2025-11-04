
const eek = "10";
const malas = 10;

if (eek === malas) {
    console.log("benar");
} else {
    console.log("salah");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const x = 5;
(x % 2 == 0) ? console.log("x bilangan genap") : console.log("x bilangan ganjil");

alert("Welcome Home");
let lagi = true;

while (lagi === true) {
    let nama = prompt("Masukkan nama: ");
    alert("Halo " + nama);

    lagi = confirm("coba lagi?");
}
alert("Thank you..");