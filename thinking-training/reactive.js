function reactive(target) {
    const handler = {
        get(target, key, revicer) {
            track(target, key)
            return Reflect.get(target, key, revicer)
        },
        set(target, key, value, revicer) {
            let oldValue = target[key]
            Reflect.set(target, key, value, revicer)
            if (oldValue !== value) {
                trigger(target, key)
            }
        }
    }
    return new Proxy(target, handler)
}

const targetMap = new WeakMap()

function track(target, key) {
    if (activeEffect){
        let depsMap = targetMap.get(target)
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()))
        }
        let deps = depsMap.get(key)
        if (!deps) {
            depsMap.set(key, (deps = new Set()))
        }
        deps.add(activeEffect)
    }
}

function trigger(target, key) {
    let depsMap = targetMap.get(target)
    if (!depsMap) return
    const deps = depsMap.get(key)
    deps.forEach(effect => effect())
}

let product = reactive({
    price: 3,
    quantity: 3
})
let total = 0


let activeEffect = null

function useEffect(effect) {
    activeEffect = effect
    activeEffect()
    activeEffect = null
}

useEffect(() => {
    total = product.price * product.quantity
})
console.log(total)
product.quantity = 10
console.log(total)
product.quantity = 50
console.log(total)
