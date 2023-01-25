class Observer {
    constructor(target) {
        this.target = target
        this.walk(target)
    }

    walk(obj) {
        Object.keys(obj).forEach((key) => {
            defineReactive(obj, key, obj[key])
        });
    }
}

function defineReactive(target, key, val) {
    if (arguments.length === 2) {
        val = target[key]
    }
    if (typeof val === 'object') {
        new Observer(val)
    }
    const handler = {
        enumerable: true,
        configurable: true,
        get() {
            console.log('price属性被读取了')
            console.log('val------------->', val)
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

const car = new Observer({
    brand: 'BMW',
    price: 3000
})

console.log(car.price)
car.price = 50
console.log(car.price)