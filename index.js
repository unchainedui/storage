const storageWrapper = storage => {
  try {
    const key = '__test__'
    storage.setItem(key, key)
    storage.removeItem(key)
    return storage
  } catch (e) {
    let cache = {}
    return {
      getItem(key) {
        return cache[key]
      },
      setItem(key, val) {
        cache[key] = val
      },
      removeItem(key) {
        delete cache[key]
      },
      clear() {
        cache = {}
      }
    }
  }
}

export const localStorage = storageWrapper(window.localStorage)
export const sessionStorage = storageWrapper(window.sessionStorage)

export const JSONStorage = storage => ({
  get(key) {
    const str = storage.getItem(key)
    try {
      return JSON.parse(str)
    } catch (e) {
      return null
    }
  },

  set(key, obj) {
    const str = JSON.stringify(obj)
    storage.setItem(key, str)
  },

  remove(key) {
    storage.removeItem(key)
  }
})
