function delay(value, any) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), any)
    });
}

async function test() {
    console.log("A");
    const x = delay("B", 100);
    console.log(x);
    const y = await delay("C", 100);
    console.log(y);
    console.log("D")
}
test();