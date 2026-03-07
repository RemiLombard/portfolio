<template>
  <section id="skills" ref="sectionRef" class="py-16 md:py-24 bg-cream-light">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Titre de section -->
      <div class="mb-10 md:mb-16">
        
        <h2 ref="titleRef" class="section-title text-primary opacity-0">Mes Outils</h2>
      </div>
      
      <!-- Grille de logos -->
      <div ref="gridRef" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 md:gap-6 justify-items-center">
        <div 
          v-for="skill in allSkills"
          :key="skill.name"
          class="group relative skill-item opacity-0 hover:z-20"
        >
          <!-- Icône avec style brutal -->
          <div class="skill-icon aspect-square w-full">
            <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 md:w-10 md:h-10" />
          </div>
          
          <!-- Tooltip -->
          <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            <span class="tag">{{ skill.name }}</span>
          </div>
        </div>
      </div>
      
      <!-- Qualités -->
      <div ref="qualitiesRef" class="mt-12 md:mt-20 grid md:grid-cols-3 gap-4 md:gap-6">
        <div class="card-static text-center quality-card opacity-0">
          <div class="w-16 h-16 mx-auto mb-4 bg-primary flex items-center justify-center border-3 border-dark">
            <svg class="w-8 h-8 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h4 class="font-title text-2xl text-primary mb-2">Curiosité</h4>
          <p class="text-dark/60">Toujours à la recherche de nouvelles idées et technologies</p>
        </div>
        
        <div class="card-static text-center quality-card opacity-0">
          <div class="w-16 h-16 mx-auto mb-4 bg-primary flex items-center justify-center border-3 border-dark">
            <svg class="w-8 h-8 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h4 class="font-title text-2xl text-primary mb-2">Équipe</h4>
          <p class="text-dark/60">Collaboration efficace et communication fluide</p>
        </div>
        
        <div class="card-static text-center quality-card opacity-0">
          <div class="w-16 h-16 mx-auto mb-4 bg-primary flex items-center justify-center border-3 border-dark">
            <svg class="w-8 h-8 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h4 class="font-title text-2xl text-primary mb-2">Autonomie</h4>
          <p class="text-dark/60">Gestion de projet rigoureuse et prise d'initiative</p>
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
const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)
const qualitiesRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!import.meta.client) return
  
  // Animation du titre
  gsap.to(titleRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: titleRef.value,
      start: 'top 85%',
      once: true
    }
  })
  
  // Animation des icônes skills
  const skillItems = gridRef.value?.querySelectorAll('.skill-item')
  if (skillItems) {
    gsap.fromTo(skillItems,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: gridRef.value,
          start: 'top 85%',
          once: true
        }
      }
    )
  }
  
  // Animation des cartes qualités
  const qualityCards = qualitiesRef.value?.querySelectorAll('.quality-card')
  if (qualityCards) {
    gsap.fromTo(qualityCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: qualitiesRef.value,
          start: 'top 85%',
          once: true
        }
      }
    )
  }
})

const allSkills = [
  { name: 'Illustrator', icon: '/icons/skills/illustrator.svg' },
  { name: 'Photoshop', icon: '/icons/skills/photoshop.svg' },
  { name: 'InDesign', icon: '/icons/skills/indesign.svg' },
  { name: 'DaVinci Resolve', icon: '/icons/skills/davinci.svg' },
  { name: 'Figma', icon: '/icons/skills/figma.svg' },
  { name: 'Canva', icon: '/icons/skills/canva.svg' },
  { name: 'Trello', icon: '/icons/skills/trello.svg' },
  { name: 'Mailjet', icon: '/icons/skills/mailjet.svg' },
  { name: 'Blender', icon: '/icons/skills/blender.svg' },
  { name: 'VS Code', icon: '/icons/skills/vscode.svg' }
]
</script>
