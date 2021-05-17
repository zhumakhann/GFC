new Splide( '#popular', {
  perPage: 4,
  gap: 10,
  pagination: true,
  arrows: false,
  breakpoints: {
    600: {
      perPage: 1,
      pagination: false,
    },
    850: {
      perPage: 2,
      pagination: false,
    },
    1200: {
      perPage: 3,
      pagination: true

    }
  }
} ).mount();