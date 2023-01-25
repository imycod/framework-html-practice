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


function reactive(target) {
    const handler = {
        get(target, property, receiver) {
            let result = Reflect.get(target, property, receiver)
            track(target, property)
            return result
        },
        set(target, property, value, receiver) {
            let oldValue = target[property]
            let result = Reflect.set(target, property, value, receiver)
            if (oldValue != result) {
                trigger(target, property)
            }
            return result
        }
    }
    return new Proxy(target, handler)
}

let product = reactive({
    price: 5, //dep -> effect -> set
    quantity: 2 //dep
})


let effect = () => {
    total = product.price * product.quantity
}
effect()
console.log(total);
product.quantity = 3
console.log(total);
