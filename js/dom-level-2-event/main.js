var divList = document.querySelectorAll('div')

let n = 0
// 捕获：从外到内
divList.forEach(div => {
  div.addEventListener('click', e => {
    let currentTarget = e.currentTarget
    n = n % 14
    setTimeout(() => {
      currentTarget.classList.remove('circle')
    }, 1000 * ++n)
  }, true)
})

// 冒泡：从内到外
divList.forEach(div => {
  div.addEventListener('click', e => {
    let currentTarget = e.currentTarget
    n = n % 14
    setTimeout(() => {
      currentTarget.classList.add('circle')
    }, 1000 * ++n)
  })
})