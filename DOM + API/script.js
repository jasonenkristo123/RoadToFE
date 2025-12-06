// terdapat element node -> p, div, button,dll
// text node berisi tulisan 
// comment node berisi komentar

// dom bisa mengambil elemen (queryselector)
// mengubah elemen (textconten, innerhtml)
// mengubah style (.style)
// menambah elemen (appenchild), menghapus elemen(remove)
// mendengar event (addEventListener)

const msg = document.getElementById("msg"); // ambil elemen id msg
msg.textContent = "WOI Mamlas"; // ganti teks

// bisa juga pakai get class
const msg1 = document.getElementsByClassName("msg"); // akan menghasilkan html collection mirip array dan harus di loop untuk semua item

// bisa pakai tag name misal button
const button = document.getElementsByTagName("button");

// menggunakan query selector untuk mengambil elemen css
const  title = document.querySelector("#title");

// kalau mau semuanya
const item = document.querySelectorAll(".item");
// bisa ambil semua item dan di foreach loop