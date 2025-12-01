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
            fn(...args), ms;
        })
    }
}