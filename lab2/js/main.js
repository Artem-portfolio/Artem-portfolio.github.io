const kitchenSliper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',

  autoplay: {
    delay: 2000,
    waitForTransition: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})



const menuButtonOpen = document.querySelectorAll('.menu__item-btn')
const mask = document.querySelector('.mask')

menuButtonOpen.forEach((element) => {
  element.addEventListener('click', () => {
    let parent = element.closest('.menu__item')
    let popUp = parent.querySelector('.pop-up')
    popUp.classList.add('pop-up--active')
    mask.classList.add('mask--active')
    document.body.classList.add('disable')
  })
})

mask.addEventListener('click', () => {
  let activePopUp = document.querySelector('.pop-up--active')
  activePopUp.classList.remove('pop-up--active')
  mask.classList.remove('mask--active')
  document.body.classList.remove('disable')
})

const closePopUp = document.querySelectorAll('.pop-up__btn')

closePopUp.forEach((element) => {
  element.addEventListener('click', () => {
    let activePopUp = document.querySelector('.pop-up--active')
    activePopUp.classList.remove('pop-up--active')
    mask.classList.remove('mask--active')
    document.body.classList.remove('disable')
  })
})

closePopUp.addEventListener('click', () => {
  let activePopUp = document.querySelector('.pop-up--active')
  activePopUp.classList.remove('pop-up--active')
  mask.classList.remove('mask--active')
  document.body.classList.remove('disable')
})

