// terdapat element node -> p, div, button,dll
// text node berisi tulisan 
// comment node berisi komentar

// dom bisa mengambil elemen (queryselector)
// mengubah elemen (textcontent, innerhtml)
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
const  title = document.querySelector("#");

// kalau mau semuanya
const item = document.querySelectorAll(".item");
// bisa ambil semua item dan di foreach loop

// mengubah isi elemen
const message = document.getElementById("message");
message.textContent = "Merry Christmas";

// ini tanpa html
// kalau pakai html
message.innerHTML = "<b>Happy New Year</b>";
// kalau data dari user hindari karena bisa xss

// mengubah atribut
const img = document.querySelector("img");
img.src = "photo.png";
// atau bisa pakai setattribute
img.setAttribute("width", "200");
img.removeAttribute("width");

// mengubah style
const box = document.getElementById("box");
box.style.backgroundColor = "tomato";
box.style.padding = "20px";


// mengatur class
box.classList.add("active");
box.classList.toggle("active");
box.classList.remove("dark");

// membuat elemen baru
// const li = document.createElement("li");
// li.textContent = "item baru";
// document.querySelector("welek").appendChild(li);
// welek.prepend(li);

const titles = document.getElementById("title");
const desc = document.getElementById("desc");
const btn = document.getElementById("btn");
const gambar = document.getElementById("gambar");
const list = document.getElementById("list");
let counter = 1;

btn.addEventListener("click", () => {
    titles.textContent = "Judul Baru";
    desc.innerHTML = "<b>Deskripsi Berubah</b>"
    
    titles.classList.toggle("Highlight");

    const li = document.createElement("li");
    li.textContent = "Item" + counter;
    counter++;
    list.appendChild(li);
});

// manipulasi style dan class
const box = document.getElementById("box");
box.style.fontFamily = "sans-serif";

// misal mau classnya ditambah atau di toggle
const buttons = document.getElementById("buttons");
buttons.classList.add("aktif");
buttons.classList.toggle("merah");

// manipulasi
btn.dataset.id;
btn.dataset.role;
btn.dataset.id = 50;


// traversing dom
const p = document.querySelector("p");
console.log(p.parentElement); // akses parent element div atau body

// akses ke children
// childnodes dan children
// chilnodes mengembalikan nodelist berisi semua node
// children mengembalikan htmlcollection

const ul = document.getElementById("list");
console.log(ul.childNodes);
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);

