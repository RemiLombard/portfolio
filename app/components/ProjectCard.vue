<template>
  <div
    class="card group cursor-pointer h-full flex flex-col !p-0 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <!-- Image du projet -->
    <div class="relative overflow-hidden aspect-video bg-primary/10">
      <!-- Image -->
      <img
        v-if="project.image_url"
        :src="project.image_url"
        :alt="project.title"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- Placeholder si pas d'image -->
      <div
        v-else
        class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-cream"
      >
        <span class="font-title text-4xl text-primary/30">{{
          project.title.charAt(0)
        }}</span>
      </div>

      <!-- Overlay au hover -->
      <div
        class="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
      >
        <span
          class="btn btn-primary text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >Voir le projet</span
        >
      </div>
    </div>

    <!-- Contenu -->
    <div class="flex-1 flex flex-col p-5">
      <!-- Catégorie -->
      <span
        class="text-xs font-bold uppercase tracking-widest text-primary mb-2"
      >
        {{ categoryLabel }}
      </span>

      <!-- Titre -->
      <h3
        class="font-title text-xl mb-2 group-hover:text-primary transition-colors"
      >
        {{ project.title }}
      </h3>

      <!-- Introduction -->
      <p class="text-dark/60 text-sm flex-1 line-clamp-3">
        {{ truncatedIntro }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

const props = defineProps<{
  project: Project;
}>();

const categoryLabels: Record<string, string> = {
  web: "Développement Web",
  design: "Design Graphique",
  video: "Vidéo",
  communication: "Communication",
};

const categoryLabel = computed(
  () => categoryLabels[props.project.category] || props.project.category,
);

const truncatedIntro = computed(() => {
  const intro = props.project.introduction || "";
  if (intro.length <= 120) return intro;
  return intro.slice(0, 120).trim() + "...";
});
</script>
