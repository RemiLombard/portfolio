<template>
  <div>
    <!-- Section Hero -->
    <SectionHero />
    
    <!-- Section À propos -->
    <SectionAbout />
    
    <!-- Section Projets -->
    <SectionProjects />
    
    <!-- Section Expérience -->
    <SectionExperience />
    
    <!-- Section Compétences -->
    <SectionSkills />
    
    <!-- Section Contact -->
    <SectionContact />
  </div>
</template>

<script setup lang="ts">
// Page d'accueil - Portfolio Rémi Lombard
useSeoMeta({
  title: 'Rémi Lombard | Portfolio',
  description: 'Portfolio de Rémi Lombard - Étudiant en BUT MMI, spécialité DWDI. Chargé de communication et marketing en alternance chez MOGRA.',
  ogTitle: 'Rémi Lombard | Portfolio',
  ogDescription: 'Étudiant en BUT MMI, passionné par la communication digitale et le développement web.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>
