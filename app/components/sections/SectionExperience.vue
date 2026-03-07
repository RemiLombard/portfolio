<template>
  <section id="experience" ref="sectionRef" class="py-16 md:py-24 bg-dark text-cream-light relative overflow-hidden">
    <!-- Élément décoratif -->
    <div class="absolute top-0 left-0 w-full h-1 bg-primary"></div>
    
    <div class="max-w-7xl mx-auto px-6">
      <!-- Titre de section -->
      <div class="mb-10 md:mb-16">
        
        <h2 ref="titleRef" class="section-title text-cream-light opacity-0">Mon Expérience</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-10 md:gap-16">
        <!-- Expériences professionnelles -->
        <div ref="expColRef">
          <h3 class="font-title text-xl uppercase tracking-wider text-primary mb-8 flex items-center gap-3 opacity-0 anim-subtitle">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Expérience
          </h3>
          
          <div class="space-y-8">
            <ExperienceCard 
              v-for="(exp, index) in experiences"
              :key="index"
              :experience="exp"
            />
          </div>
        </div>
        
        <!-- Formation -->
        <div ref="eduColRef">
          <h3 class="font-title text-xl uppercase tracking-wider text-primary mb-8 flex items-center gap-3 opacity-0 anim-subtitle">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Formation
          </h3>
          
          <div class="space-y-8">
            <ExperienceCard 
              v-for="(edu, index) in education"
              :key="index"
              :experience="edu"
              variant="education"
            />
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
const titleRef = ref<HTMLElement | null>(null)
const expColRef = ref<HTMLElement | null>(null)
const eduColRef = ref<HTMLElement | null>(null)

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
  
  // Animation des sous-titres
  const subtitles = sectionRef.value?.querySelectorAll('.anim-subtitle')
  if (subtitles) {
    gsap.fromTo(subtitles,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 75%',
          once: true
        }
      }
    )
  }
  
  // Animation des cartes expérience
  const expCards = expColRef.value?.querySelectorAll('.experience-card')
  if (expCards) {
    gsap.fromTo(expCards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: expColRef.value,
          start: 'top 80%',
          once: true
        }
      }
    )
  }
  
  // Animation des cartes formation
  const eduCards = eduColRef.value?.querySelectorAll('.experience-card')
  if (eduCards) {
    gsap.fromTo(eduCards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: eduColRef.value,
          start: 'top 80%',
          once: true
        }
      }
    )
  }
})

const experiences = [
  {
    title: 'Chargé de communication & marketing',
    company: 'MOGRA',
    location: 'Vesoul',
    period: 'Depuis septembre 2024',
    current: true,
    description: [
      'Réalisation de contenus digitaux et audiovisuels pour la communication interne et externe',
      'Gestion des réseaux sociaux et stratégie digitale',
      'Suivi de projet complet avec les équipes commerciales',
      'Création de supports événementiels et promotionnels'
    ]
  }
]

const education = [
  {
    title: 'BUT Métiers du Multimédia et de l\'Internet',
    company: 'IUT Nord Franche-Comté',
    location: 'Montbéliard',
    period: 'Depuis septembre 2023',
    current: true,
    description: [
      'Spécialité DWDI (Développement Web et Dispositifs Interactifs)',
      'Réalisation de projets en design, développement web et audiovisuel',
      'Création d\'identités visuelles, affiches, WebTV, reportages...'
    ]
  },
  {
    title: 'Baccalauréat Général',
    company: 'Lycée Les Haberges',
    location: 'Vesoul',
    period: '2020 - 2023',
    current: false,
    description: [
      'Spécialités Physique-Chimie et Mathématiques'
    ]
  }
]
</script>
