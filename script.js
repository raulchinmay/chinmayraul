gsap.registerPlugin(ScrollTrigger)

const reveals = document.querySelectorAll('.reveal')

reveals.forEach((element) => {

  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 1.4,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%'
    }
  })

})

// Hero cinematic zoom

gsap.to('.hero-bg', {
  scale: 1,
  duration: 4,
  ease: 'power2.out'
})

// Parallax sections

gsap.to('.adventure-bg', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.adventure-section',
    scrub: true
  }
})

// Timeline stagger

gsap.from('.timeline-item', {
  opacity: 0,
  y: 100,
  stagger: 0.2,
  duration: 1.5,
  ease: 'power4.out',
  scrollTrigger: {
    trigger: '.timeline-container',
    start: 'top 70%'
  }
})

// Manufacturing image motion

gsap.from('.left-panel img', {
  scale: 1.2,
  opacity: 0,
  duration: 2,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.manufacturing-section',
    start: 'top 70%'
  }
})

// Hero text stagger

gsap.from('.hero-label', {
  opacity: 0,
  y: 40,
  duration: 1
})


gsap.from('.hero-title', {
  opacity: 0,
  y: 80,
  duration: 1.4,
  delay: 0.2
})


gsap.from('.hero-description', {
  opacity: 0,
  y: 60,
  duration: 1.4,
  delay: 0.5
})
