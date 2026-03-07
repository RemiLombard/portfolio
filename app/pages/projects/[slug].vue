<template>
  <div class="min-h-screen bg-cream">
    <!-- Loading -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="animate-pulse">
        <div class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
    
    <!-- Projet non trouvé -->
    <div v-else-if="!project" class="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 class="font-title text-5xl text-dark mb-4">404</h1>
      <p class="text-dark/60 mb-8 text-lg">Ce projet n'existe pas ou a été supprimé.</p>
      <NuxtLink to="/#projects" class="btn btn-primary">
        Retour aux projets
      </NuxtLink>
    </div>
    
    <!-- Contenu du projet -->
    <article v-else>
      <!-- Bouton retour -->
      <div ref="backRef" class="bg-cream pt-24 pb-8 px-6 md:px-12 opacity-0">
        <div class="max-w-6xl mx-auto">
          <NuxtLink 
            to="/#projects" 
            class="btn btn-outline inline-flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux projets
          </NuxtLink>
        </div>
      </div>

      <!-- En-tête : Image à gauche + Titre à droite -->
      <div class="bg-cream px-6 md:px-12 pb-10 md:pb-16">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <!-- Image à gauche -->
            <div ref="imageRef" class="aspect-[4/3] bg-dark/5 overflow-hidden opacity-0">
              <img 
                v-if="project.image_url"
                :src="project.image_url" 
                :alt="project.title"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-cream">
                <span class="font-title text-[10rem] text-primary/20">{{ project.title?.charAt(0) }}</span>
              </div>
            </div>
            
            <!-- Infos à droite -->
            <div ref="infoRef">
              <!-- Catégorie -->
              <span class="inline-block text-sm font-bold uppercase tracking-widest text-primary mb-4 opacity-0 anim-info">
                {{ categoryLabel }}
              </span>
              
              <!-- Titre -->
              <h1 class="font-title text-4xl md:text-5xl lg:text-6xl text-dark leading-tight mb-6 opacity-0 anim-info">
                {{ project.title }}
              </h1>
              
              <!-- Introduction -->
              <p class="text-lg md:text-xl text-dark/70 leading-relaxed mb-6 opacity-0 anim-info">
                {{ project.introduction }}
              </p>
              
              <!-- Tags -->
              <div v-if="project.tags?.length" class="flex flex-wrap gap-3 mt-4 opacity-0 anim-info">
                <span 
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-4 py-2 bg-primary text-cream text-base font-bold uppercase tracking-wide"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contenu principal -->
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        
        <!-- Description -->
        <div v-if="project.description" ref="descRef" class="py-10 md:py-16 opacity-0">
          <h2 class="font-title text-2xl md:text-3xl lg:text-4xl text-dark mb-6 md:mb-8">
            À propos du projet
          </h2>
          <div class="text-dark/70 leading-relaxed whitespace-pre-line text-lg max-w-3xl">
            {{ project.description }}
          </div>
        </div>
        
        <!-- Galerie -->
        <div v-if="project.gallery?.length" ref="galleryRef" class="py-10 md:py-16">
          <h2 class="font-title text-2xl md:text-3xl lg:text-4xl text-dark mb-6 md:mb-10 opacity-0 gallery-title">
            Galerie
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div 
              v-for="(image, index) in project.gallery"
              :key="index"
              class="aspect-[4/3] overflow-hidden cursor-pointer group bg-dark/5 opacity-0 gallery-item"
              @click="openImage(image)"
            >
              <img 
                :src="image" 
                :alt="`${project.title} - Image ${index + 1}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        
        <!-- Actions -->
        <div v-if="project.link" class="py-10 md:py-16">
          <a 
            :href="project.link" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Voir le projet
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import type { Project } from '~/types/project'

const route = useRoute()
const slug = route.params.slug as string

const { getProjectBySlug } = useProjects()

const project = ref<Project | null>(null)
const loading = ref(true)

// Refs pour animations
const backRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const infoRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const galleryRef = ref<HTMLElement | null>(null)

const categoryLabels: Record<string, string> = {
  web: 'Développement Web',
  design: 'Design Graphique',
  video: 'Vidéo',
  communication: 'Communication'
}

const categoryLabel = computed(() => {
  return project.value?.category ? categoryLabels[project.value.category] : ''
})

const openImage = (imageUrl: string) => {
  window.open(imageUrl, '_blank')
}

const animateContent = () => {
  if (!import.meta.client) return
  
  const tl = gsap.timeline({ delay: 0.2 })
  
  // Bouton retour
  tl.to(backRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power3.out'
  }, 0)
  
  // Image
  tl.fromTo(imageRef.value,
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
    0.1
  )
  
  // Infos (catégorie, titre, intro, tags)
  const infoItems = infoRef.value?.querySelectorAll('.anim-info')
  if (infoItems) {
    tl.fromTo(infoItems,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      0.3
    )
  }
  
  // Description
  if (descRef.value) {
    tl.to(descRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, 0.6)
  }
  
  // Galerie
  if (galleryRef.value) {
    const galleryTitle = galleryRef.value.querySelector('.gallery-title')
    const galleryItems = galleryRef.value.querySelectorAll('.gallery-item')
    
    if (galleryTitle) {
      tl.to(galleryTitle, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out'
      }, 0.8)
    }
    
    if (galleryItems.length) {
      tl.fromTo(galleryItems,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
        0.9
      )
    }
  }
}

onMounted(async () => {
  project.value = await getProjectBySlug(slug)
  loading.value = false
  
  await nextTick()
  animateContent()
})

// SEO
useSeoMeta({
  title: () => project.value ? `${project.value.title} | Rémi Lombard` : 'Projet | Rémi Lombard',
  description: () => project.value?.introduction || ''
})
</script>
