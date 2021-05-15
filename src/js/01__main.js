const header = document.querySelector('.header');
const headerDropdownBtn = header.querySelector('.header__main-dropdown__selected-text')
const headerDropdownContent = header.querySelector('.header__main-dropdown-content');
const headerSearchBtn = header.querySelector('.header__nav-search__submit');
const headerBurger = header.querySelector('.header__mobile-burger')
const headerMobileNav = header.querySelector('.header__mobile-nav')
const headerMobileNavClose = headerMobileNav.querySelector('.header__mobile-nav__top-close')
const headerMobileSearch = header.querySelector('.header__mobile-search')
const headerMobileSearchForm = header.querySelector('.header__mobile-form')


function scrollHandler(){
  const fixedHeader = header.querySelector('.header__fixed')
  if(header.scrollHeight < window.scrollY){
    fixedHeader.classList.add('active')
  }else{
    fixedHeader.classList.remove('active')
  }

}

document.addEventListener('DOMContentLoaded', () => {
  headerDropdownBtn.addEventListener('click', () => {
    headerDropdownContent.classList.toggle('active')
  })
  headerBurger.addEventListener('click', () => {
    headerMobileNav.classList.toggle('active')
  })

  headerMobileSearch.addEventListener('click', () => {
    headerMobileSearchForm.classList.toggle('active')
  })

  headerMobileNavClose.addEventListener('click', () => {
    headerMobileNav.classList.remove('active')

  })
  headerSearchBtn.addEventListener('click', e => {
    e.preventDefault();
    const parent = e.target.closest('.header__nav-search');
    const input = parent.querySelector('.header__nav-search__input')
    if(!input.value.trim()){
      parent.classList.toggle('active')
      
    }else {
      console.log('send data');
    }
  })

  window.addEventListener('scroll', scrollHandler)
  new Splide( '#banners', {
    type   : 'loop',
    perPage: 1,
    gap: 20,
    arrows: false,
    pagination: false,

  } ).mount();

  new Splide( '#popular', {
    perPage: 4,
    gap: 10,
    pagination: true,
    arrows: false
  } ).mount();
  
  

})