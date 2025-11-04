
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
while (lagi) {
    let angka = prompt("Masukkan angka: ");
    if (angka % 2 == 0 ) {
    alert("angka yang kamu masukkan adalah genap");
    } else {
    alert("angka yang kamu masukkan adalah ganjil");
    }
    
    lagi = confirm("Mau masukkan angka lagi?");
    
}
alert("Makasih");

