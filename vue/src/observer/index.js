import { defineReactive } from './util'

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
