<template>
  <section id="about" ref="sectionRef" class="py-16 md:py-24 bg-cream-light">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Titre de section -->
      <div class="mb-10 md:mb-16">
        <h2 ref="titleRef" class="section-title text-primary opacity-0">À propos</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        <!-- Photo - en premier sur mobile -->
        <div ref="photoRef" class="flex justify-center order-1 lg:order-2 opacity-0 lg:-mt-8">
          <div class="relative">
            <!-- Fond dégradé radial orange -->
            <div class="photo-glow absolute inset-0 scale-110"></div>
            
            <!-- Éléments décoratifs -->
            <div class="absolute -top-4 -right-4 w-8 h-8 lg:w-12 lg:h-12 border-2 border-primary rotate-12"></div>
            <div class="absolute -bottom-3 -left-3 w-6 h-6 lg:w-8 lg:h-8 bg-primary/30 rotate-45"></div>
            <div class="absolute top-1/4 -left-6 lg:-left-8 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary/50"></div>
            <div class="absolute bottom-1/3 -right-5 lg:-right-7 w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-primary"></div>
            
            <!-- Photo -->
            <div class="relative w-56 h-72 md:w-64 md:h-80 lg:w-80 lg:h-[26rem] xl:w-96 xl:h-[30rem] overflow-hidden rounded-xl">
              <img src="/images/remi.png" alt="Rémi Lombard" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <!-- Texte de présentation -->
        <div ref="contentRef" class="space-y-6 order-2 lg:order-1">
          <p class="text-lg leading-relaxed anim-item opacity-0">
            Je suis <strong>Rémi Lombard</strong>, un passionné de <strong>communication</strong> et de <strong>marketing digital</strong>. 
            Ce qui m'anime ? Créer des messages qui marquent, des visuels qui captent l'attention, 
            et des stratégies qui fonctionnent.
          </p>
          
          <p class="text-lg leading-relaxed anim-item opacity-0">
            Actuellement en alternance chez <strong>MOGRA</strong> comme <strong>Chargé de communication & marketing</strong>, 
            je gère au quotidien la stratégie social media, la création de contenus visuels et audiovisuels, 
            et je coordonne les projets de communication avec les équipes commerciales.
          </p>
          
          <p class="text-lg leading-relaxed anim-item opacity-0">
            Mon ambition ? Rejoindre une <strong>grande école de communication ou marketing</strong> pour 
            affiner mon expertise et devenir un acteur clé de la transformation digitale des marques.
          </p>
          
          <!-- Citation -->
          <blockquote class="border-l-3 border-primary pl-6 py-2 mt-8 anim-item opacity-0">
            <p class="text-xl italic text-dark/80">
              "Le marketing, c'est l'art de raconter une histoire que les gens veulent entendre."
            </p>
            <cite class="text-sm text-dark/50 mt-2 block">— Seth Godin</cite>
          </blockquote>
          
          <!-- Bouton CV -->
          <div class="pt-8 anim-item opacity-0">
            <a href="/cv-remi.pdf" download class="btn btn-primary w-full sm:w-auto justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV
            </a>
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
const photoRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

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
  
  // Animation de la photo
  gsap.fromTo(photoRef.value,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: photoRef.value,
        start: 'top 85%',
        once: true
      }
    }
  )
  
  // Animation des éléments de contenu
  const items = contentRef.value?.querySelectorAll('.anim-item')
  if (items) {
    gsap.fromTo(items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.value,
          start: 'top 80%',
          once: true
        }
      }
    )
  }
})
</script>

<style scoped>
.photo-glow {
  background: radial-gradient(circle, rgba(200, 75, 49, 0.35) 0%, rgba(200, 75, 49, 0.15) 50%, transparent 70%);
  filter: blur(30px);
  border-radius: 50%;
}
</style>
