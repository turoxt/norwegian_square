// Hamburger menu
const burgerBtn = document.getElementById('hamburger')
const burgerMenu = document.querySelector('.hamburger-menu')

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('show')
})

// Scroll PPT + Docs
const scrollOffset = 100;

const scrollElement = document.querySelectorAll('.box');

const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
  )
}

const displayScrollElement = (element) => {
  element.classList.add('active');
}

const handleScrollAnimation = () => {
  scrollElement.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  })
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

// More reviews
const btnReviews = document.querySelector('.btn-reviews')
const rowSecond = document.querySelector('.row.second')

btnReviews.addEventListener('click', () => {
  btnReviews.classList.add('remove')
  rowSecond.classList.add('active')
})