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