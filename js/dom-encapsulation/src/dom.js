window.dom = {
    find(str) {
      return document.querySelectorAll(str)
    },
    style(node, name, value) {
      node.style[name] = value
    },
    each(list, fn) {
      Array.from(list).forEach(fn)
    }
  }