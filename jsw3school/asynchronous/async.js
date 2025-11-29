function delay(value, any) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), any)
    });
}

async function test() {
    console.log("A");
    const x = delay("B", 100);
    console.log(x); // promise pending karena console.log di lakukan sebelum event loop di flush
    const y = await delay("C", 100); // await itu menunggu promise selesai sehingga seperi synchronous tetapi tidak syncron
    console.log(y); // karena await mengehentikan function async sementara dan tetap menjalankan event loop, dia akan menjalakan print
    console.log("D")
}
test();


// async function run() {
//     console.log("1");
//     const p = Promise.resolve("2");
//     console.log(p);
//     console.log(await p);
//     console.log("3");
// }
// run();

function fail() {
    return Promise.reject("BOOM");
}

async function testing() {
    try {
        const x = await fail();
        console.log(x);
    } catch(e) {
        console.log("ERR: " + e);
    }
}
testing();

// ini sama aja dengan throw
// async function bad() {
//     throw "Balalallaa";
// }

// async function panggil() {
//     try {
//         const x = await bad();
//         console.log(x);
//     } catch (e) {
//         console.log("Eror bos: " + e);
//     } finally {
//         console.log("Selesaii")
//     }
// }
// panggil();

// try catch hanya menangkap error tidak hentikan function

function getNum() {
    return Promise.resolve(10);
}

async function num() {
    try {
        const x = await getNum();
        throw "Stop";
        console.log("After");
    } catch (e) {
        console.log("we: " + e);
    }
    console.log("done");
}
num();


// sequential vs parallel vs mixed
// sequential itu sendiri sendiri dan lama
function delays(value, ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms)
    });
}

async function sequential() {
    console.log("Start");
    const a = await delays("A", 1000);

    console.log(a);
    const b = await delays("B", 1000);

    console.log(b);
    const c = await delays("C", 1000);

    console.log(c);
    console.log("End");
}
sequential();

// kalau parallel
async function parallel() {
    const A =  delays("A", 1000);
    const B =  delays("B", 1000);
    const C =  delays("C", 1000);

    const results = await Promise.all([A, B, C]);
    console.log(results);
}
parallel();

// mixed sering digunakan di real application
// misal mau ambil profile dulu baru kalau udah tahu tanmpilin post dan komen secara parallel
async function mixed() {
    const user = await delays({ id: 10, name: "Jason"}, 1000);

    const [post, comments] = await Promise.all([
        delays("POSTS DONE", 1000),
        delays("COMMENTS DONE", 1000)
    ]);

    console.log(user, post, comments);
}
mixed();

// async di event handler
// button.addEventListener("click", async() => {
//     const data = await fetchData();
//     console.log(data);
// });

// Event handler di atas memulai sebuah Promise, tapi:
// event listener tidak menunggu async selesai
// event listener tidak catch error dengan sendirinya
// Kalau fetch-nya error, kamu sering tidak melihat error di console!

// solusinya yang terbaik adalah handle errorr menggunakan try catch
// button.onclick = async () => {
//     try {
//         const res = await fetch("https://api.com");
//         const users = await res.json();
//         console.log(users);
//     } catch (e) {
//         console.log("Gagal fetch: " + e);
//     }
// }

// agar tidak kebanyakan try dan catch, kita gunakan wrapper di function 
function safeHandler(fn) {
    return function(...args) {
        fn(...args).catch(e => {
            console.log("error: " + e)
        });
    };
}
// lalu dimasukkan ke event
// button.onclick = safeHandler(async() => {
//     const res = await fetch("https://api.com");
//     const user = res.json();
//     console.log(user);
// })

// loading state tanpa dom (contoh)
// function wait(ms) {
//     return new Promise(resolve => setTimeout(() => resolve("OK"), ms));
// }

// async function onClick() {
//     console.log("Loading...");
//     const data = await wait(2000);
//     console.log("Done: " + data);
// }

function logItem(value, ms) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function printing() {
    const a = await logItem("A", 1000);
    const b = await logItem("B", 1000);
    const c = await logItem("C", 1000);

    console.log(a)
    console.log(b)
    console.log(c)
}
printing();

function download(u) {
    return new Promise(res => setTimeout(() => res("done " + u), 1000))
}

const urls = ["u1", "u2", "u3", "u4", "u5"];

async function downloadAll() {
    const url = await Promise.all(urls.map(item => download(item)))
    console.log(url);
}
downloadAll();

function delay(value, ms) {
    return new Promise(res => setTimeout(() => res(value), ms));
}
async function generator() {
    console.log(delay(1), 1000);
    console.log(delay(2), 1000);
    console.log(delay(3), 1000);
}