export default {
  getSession (name) {
    return window.sessionStorage.getItem(name)
  },
  setSession(key, value) {
    if (!key || !value) {
      console.log('请设置key和value');
      return
    }
    window.sessionStorage.setItem(key, value)
  },
  getLocal(name) {
    return window.localStorage.getItem(name)
  },
  setLocal(key, value) {
    if (!key || !value) {
      console.log('请设置key和value');
      return
    }
    window.localStorage.setItem(key, value)
  }
}
