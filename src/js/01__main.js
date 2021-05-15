document.addEventListener('DOMContentLoaded', () => {
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