window.onload = () => {
  gsap.set('#imageA', { opacity: 0, x: -window.innerWidth })
  gsap.set('#imageB', { opacity: 0, y: 50 })

  const tl = gsap.timeline({
    defaults: { duration: 2, ease: 'power3.out' }
  })

  tl.to('#imageA', { opacity: 1, x: window.innerWidth + 300 })
    .to('#imageB', { opacity: 1, y: 0 }, '-=1.6')
}