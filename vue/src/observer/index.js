export default class Observer {

  constructor(value) {
    this.value = value
    if (Array.isArray(value)) {

    } else {
      this.walk()
    }
  }

  walk() {
    const obj = this.value
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }

}

function createObserver(value) {
  if (Array.isArray(value) || typeof value === 'object') {
    return new Observer(value)
  }
  return null
}

function defineReactive(obj, key, value) {
  createObserver(value)
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      return value
    },
    set(newVal) {
      value = newVal
    }
  })
}
