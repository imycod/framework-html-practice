let price = 3
let quantity = 10
let total = 0


function effect() {
    total = price * quantity
}
effect()
console.log(total);

quantity = 11

effect()
console.log(total);

let deps = new Set()
function track() {
    deps.add(effect)
}

track()
function trigger() {
    deps.forEach(effect => effect())
}
quantity = 12
trigger()
console.log(total);
