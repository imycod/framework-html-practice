class Dep {
    constructor() {
        this.subs = []
    }

    addSubs(dep) {
        this.subs.push(dep)
    }

    notify() {
        this.subs.forEach(dep => dep.update())
    }
}

class Watcher {
    update(fn) {
        Dep.target = this;
        fn()
        Dep.target = null;
    }
}