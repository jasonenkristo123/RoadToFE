let name = "Jason";
console.log(`${name}`);

let text = "apasih malasnya \uD800";
let result = text.toWellFormed();
console.log(result);

let text1 = "Malas banget gw asli";
console.log(text1.match("sli"));

let number = BigInt(999999999999999);
console.log(number);
