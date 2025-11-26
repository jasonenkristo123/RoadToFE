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

async function run() {
    console.log("1");
    const p = Promise.resolve("2");
    console.log(p);
    console.log(await p);
    console.log("3");
}
run();

