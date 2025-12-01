function wrap(fn) {
    return function(...args) {
        console.log("Wrapper");
        return fn(...args);
    }
}
function hello(nama) {
    return "Halo " + nama;
}
const panggil = wrap(hello);
console.log(panggil("Jason"));

function throttle(fn, ms) {
    let locked = false;
    
    return function(...args) {
        if (locked) return;
        locked = true;
        fn(...args);
        setTimeout(() => locked = false, ms);
    }
}

function debounce(fn, ms) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, ms)
    }
}

// asyncqueue
function asyncQueue() {
    const queue = [];
    let processing = false;

    async function run() {
        if (processing) return;
        processing = true;

        while (queue.length > 0) {
            const task = queue.shift();
            try {
                const result = await task();
                console.log(result);
            } catch (e) {
                console.log("err: " + e);
            }
        }
        processing = false;
    }

    return {
        push(taskFn) {
            queue.push(taskFn);
            run();
        }
    }
}

function job(name, ms) {
    return new Promise(res => 
        setTimeout(() => res(`Done: ${name}`), ms)
    )   
}

const q = asyncQueue();
q.push(() => job("Jason", 1000));
q.push(() => job("ogil", 500));
q.push(() => job("asa", 300));

// scheduler yaitu membatasi api per detik
function schedule(limit) {
    const queue = [];
    let active = 0;

    async function run() {
        if (active >= limit) return;
        if (queue.length === 0) return;

        active++;
        const task = queue.shift();

        try {
            await task();
        } catch (e) {
            console.log("error: " + e);
        } finally {
            active--; // mengurangi task
            run(); // jalankan task selanjutnya
        }
    }

    return {
        add(taskfn) {
            queue.push(taskfn);
            run();
        }
    }
}

function jobs(name, ms) {
    return new Promise(res => {
        console.log("Start: " + name);
        setTimeout(() => {
            console.log("Done: " + name);
            res(); // promise selesai dan tidak mengembalikan nilai karena kita sudah console.log
        }, ms)
    })
}

const p = schedule(2);
p.add(() => jobs("A", 1000));
p.add(() => jobs("B", 500));
p.add(() => jobs("C", 800));
p.add(() => jobs("D", 300));