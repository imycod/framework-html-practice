let car = {
    'brand': 'BMW',
    'price': 3000
}

function defineReactive(target, key) {
    let val = target[key]
    const handler = {
        enumerable: true,
        configurable: true,
        get() {
            console.log('price属性被读取了')
            return val
        },
        set(newVal) {
            if (val === newVal) return
            console.log('price属性被修改了')
            val = newVal
        }
    }
    Object.defineProperty(target, key, handler)
}

defineReactive(car, 'price')
console.log(car.price)
car.price = 50
console.log(car.price)