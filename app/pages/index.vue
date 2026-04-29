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
  title: "Rémi Lombard | Portfolio",
  description:
    "Portfolio de Rémi Lombard - Futur étudiant à l'ISCOM Paris. Chargé de communication et marketing en alternance chez MOGRA.",
  ogTitle: "Rémi Lombard | Portfolio",
  ogDescription:
    "Futur étudiant à l'ISCOM Paris, passionné par la communication et le marketing digital.",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
});
</script>
