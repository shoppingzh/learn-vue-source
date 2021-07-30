export function defineReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    writable: true,
    get() {},
    set(newVal) {}
  })  
}