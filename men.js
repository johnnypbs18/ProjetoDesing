/*  SCROLLREVIL */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '15px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
.bannerj, .td-cards, .card
.title .container, .texto1
.montagem, .montagem1, .montagem2,
.banner, .suporte-total, .separado,
.texto2, .container, .testemunho,
.testemunho, .total
`,
  { interval: 100 }
)
