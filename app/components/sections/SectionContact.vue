<template>
  <section id="contact" ref="sectionRef" class="py-16 md:py-24 bg-cream">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Titre -->
      <div ref="headerRef" class="text-center mb-10 md:mb-16">
        
        <h2 class="section-title text-primary opacity-0 anim-title">Travaillons Ensemble</h2>
        <p class="text-lg text-dark/70 mt-6 max-w-xl mx-auto opacity-0 anim-desc">
          Vous avez un projet en tête ? Vous cherchez un alternant en communication / marketing ? 
          N'hésitez pas à me contacter !
        </p>
      </div>
      
      <!-- Carte de contact -->
      <div ref="cardRef" class="card-static max-w-2xl mx-auto opacity-0">
        <!-- Boutons de contact -->
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <a href="mailto:remi.lombard70@gmail.com" class="btn btn-primary flex-1">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            M'envoyer un email
          </a>
          <a href="tel:0652641023" class="btn btn-outline flex-1">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            06 52 64 10 23
          </a>
        </div>
        
        <!-- Infos supplémentaires -->
        <div ref="infosRef" class="grid sm:grid-cols-2 gap-6 pt-8 border-t-3 border-dark">
          <div class="text-center info-item opacity-0">
            <div class="w-12 h-12 mx-auto mb-3 bg-primary border-3 border-dark flex items-center justify-center">
              <svg class="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <p class="text-xs font-bold uppercase tracking-wider text-dark/50 mb-1">Localisation</p>
            <p class="font-bold">Paris</p>
          </div>
          
          <div class="text-center info-item opacity-0">
            <div class="w-12 h-12 mx-auto mb-3 bg-primary border-3 border-dark flex items-center justify-center">
              <svg class="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-xs font-bold uppercase tracking-wider text-dark/50 mb-1">Disponibilité</p>
            <p class="font-bold">Septembre 2026</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const sectionRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)
const infosRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!import.meta.client) return
  
  // Animation du header
  const title = headerRef.value?.querySelector('.anim-title')
  const desc = headerRef.value?.querySelector('.anim-desc')
  
  if (title) {
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headerRef.value,
        start: 'top 85%',
        once: true
      }
    })
  }
  
  if (desc) {
    gsap.fromTo(desc,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.value,
          start: 'top 85%',
          once: true
        }
      }
    )
  }
  
  // Animation de la carte
  gsap.fromTo(cardRef.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.value,
        start: 'top 85%',
        once: true
      }
    }
  )
  
  // Animation des infos
  const infoItems = infosRef.value?.querySelectorAll('.info-item')
  if (infoItems) {
    gsap.fromTo(infoItems,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: infosRef.value,
          start: 'top 90%',
          once: true
        }
      }
    )
  }
})
</script>
