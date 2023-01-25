const targetMap = new WeakMap()

function track(target, key) {
    let depsMap = targetMap.get(target) // weakMap
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key) // map
    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }
    dep.add(effect)
}

function trigger(target, key) {
    const depsMap = targetMap.get(target)
    if (!depsMap) return
    let dep = depsMap.get(key)
    if (!dep) return
    if (dep) {
        dep.forEach(effect => {
            effect()
        });
    }
}


let product = { // targetMap deps
    price: 5, //dep -> effect -> set
    quantity: 2 //dep
}
let effect = () => {
    total = product.price * product.quantity
}

track(product, 'quantity')
effect()
console.log(total);
product.quantity = 3
console.log(total);
trigger(product,'quantity')
console.log(total);