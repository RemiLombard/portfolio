import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export const useScrollAnimation = () => {
  // Animation fade in up au scroll
  const animateFadeInUp = (elements: string | Element | Element[], options: {
    delay?: number
    stagger?: number
    duration?: number
    y?: number
  } = {}) => {
    const { delay = 0, stagger = 0.1, duration = 0.8, y = 50 } = options
    
    gsap.fromTo(elements, 
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elements as Element,
          start: 'top 85%',
          once: true
        }
      }
    )
  }

  // Animation fade in left
  const animateFadeInLeft = (elements: string | Element | Element[], options: {
    delay?: number
    stagger?: number
    duration?: number
    x?: number
  } = {}) => {
    const { delay = 0, stagger = 0.1, duration = 0.8, x = 80 } = options
    
    gsap.fromTo(elements,
      { opacity: 0, x: -x },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elements as Element,
          start: 'top 85%',
          once: true
        }
      }
    )
  }

  // Animation fade in right
  const animateFadeInRight = (elements: string | Element | Element[], options: {
    delay?: number
    stagger?: number
    duration?: number
    x?: number
  } = {}) => {
    const { delay = 0, stagger = 0.1, duration = 0.8, x = 80 } = options
    
    gsap.fromTo(elements,
      { opacity: 0, x },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elements as Element,
          start: 'top 85%',
          once: true
        }
      }
    )
  }

  // Animation scale
  const animateScale = (elements: string | Element | Element[], options: {
    delay?: number
    stagger?: number
    duration?: number
    scale?: number
  } = {}) => {
    const { delay = 0, stagger = 0.15, duration = 0.6, scale = 0.8 } = options
    
    gsap.fromTo(elements,
      { opacity: 0, scale },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        stagger,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: elements as Element,
          start: 'top 85%',
          once: true
        }
      }
    )
  }

  // Animation pour les sections avec trigger sur le conteneur
  const animateSection = (containerRef: Element, childSelector: string, options: {
    delay?: number
    stagger?: number
    duration?: number
    y?: number
  } = {}) => {
    const { delay = 0, stagger = 0.1, duration = 0.8, y = 40 } = options
    const children = containerRef.querySelectorAll(childSelector)
    
    if (children.length === 0) return
    
    gsap.fromTo(children,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef,
          start: 'top 80%',
          once: true
        }
      }
    )
  }

  return {
    animateFadeInUp,
    animateFadeInLeft,
    animateFadeInRight,
    animateScale,
    animateSection
  }
}
