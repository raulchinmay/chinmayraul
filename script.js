gsap.registerPlugin(ScrollTrigger)

// REVEAL ANIMATIONS

gsap.utils.toArray('.reveal').forEach((element) => {

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 80
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  )

})

// FADE SECTIONS

gsap.utils.toArray('.fade-section').forEach((section) => {

  gsap.fromTo(
    section,
    {
      opacity: 0,
      y: 80
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%'
      }
    }
  )

})

// HERO BACKGROUND ZOOM

gsap.to('.hero-bg', {
  scale: 1,
  duration: 4,
  ease: 'power2.out'
})

// PARALLAX

gsap.to('.adventure-bg', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.adventure-section',
    scrub: true
  }
})

// TIMELINE STAGGER

gsap.fromTo(
  '.timeline-item',
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.25,
    duration: 1.4,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.timeline-container',
      start: 'top 75%'
    }
  }
)