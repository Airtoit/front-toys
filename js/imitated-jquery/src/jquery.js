window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }

    return {
        addClass(className) {
            this.each((e) => e.classList.add(className))
        },
        find(selector) {
            let array = []
            this.each((e) => array.push(...e.querySelectorAll(selector)))
            return jQuery(array)
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
        }
    }
}

window.$ = window.jQuery