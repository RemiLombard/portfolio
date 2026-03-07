<template>
  <section id="projects" ref="sectionRef" class="py-16 md:py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Titre de section -->
      <div ref="headerRef" class="mb-10 md:mb-16">
        <h2 class="section-title text-primary opacity-0 anim-title">Mes Projets</h2>
        <p class="text-lg text-dark/60 mt-6 max-w-2xl opacity-0 anim-desc">
          Découvrez une sélection de mes réalisations en communication, design graphique 
          et création de contenus digitaux.
        </p>
      </div>
      
      <!-- Filtres -->
      <div ref="filtersRef" class="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12 opacity-0">
        <button 
          v-for="category in categories"
          :key="category.value"
          @click="activeCategory = category.value"
          :class="[
            'px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-primary transition-colors',
            activeCategory === category.value 
              ? 'bg-primary text-cream-light' 
              : 'bg-transparent text-dark hover:bg-primary hover:text-cream-light'
          ]"
        >
          {{ category.label }}
        </button>
      </div>
      
      <!-- Loading -->
      <div v-if="loading" class="text-center py-16">
        <p class="text-lg text-dark/50">Chargement des projets...</p>
      </div>
      
      <!-- Grille de projets -->
      <div v-else ref="gridRef" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink 
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :to="`/projects/${project.slug}`"
          class="project-item opacity-0"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <ProjectCard :project="project" />
        </NuxtLink>
      </div>
      
      <!-- Message si aucun projet -->
      <div v-if="!loading && filteredProjects.length === 0" class="text-center py-16">
        <p class="text-lg text-dark/50">Aucun projet dans cette catégorie pour le moment.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Catégories de projets
const categories = [
  { value: 'all', label: 'Tous' },
  { value: 'web', label: 'Web' },
  { value: 'design', label: 'Design' },
  { value: 'video', label: 'Vidéo' },
  { value: 'communication', label: 'Communication' }
]

const activeCategory = ref('all')

// Refs pour animations
const sectionRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const filtersRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

// Supabase
const { projects, loading, fetchProjects } = useProjects()

// Charger les projets au montage
onMounted(async () => {
  await fetchProjects()
  
  if (!import.meta.client) return
  
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  
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
  
  // Animation des filtres
  gsap.to(filtersRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: filtersRef.value,
      start: 'top 90%',
      once: true
    }
  })
  
  // Animation des cartes projet
  await nextTick()
  animateProjectCards()
})

// Réanimer les cartes quand le filtre change
watch(activeCategory, async () => {
  await nextTick()
  animateProjectCards()
})

const animateProjectCards = async () => {
  if (!import.meta.client || !gridRef.value) return
  
  const { gsap } = await import('gsap')
  const items = gridRef.value.querySelectorAll('.project-item')
  
  gsap.fromTo(items,
    { opacity: 0, y: 40, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out'
    }
  )
}

// Filtre des projets
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value
  }
  return projects.value.filter(p => p.category === activeCategory.value)
})
</script>
