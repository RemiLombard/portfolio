<template>
  <div
    class="experience-card relative pl-8 border-l-2 border-cream-light/20 hover:border-primary transition-colors"
  >
    <!-- Point de timeline -->
    <div
      :class="[
        'absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-colors',
        experience.current
          ? 'bg-primary border-primary'
          : 'bg-dark border-cream-light/40',
      ]"
    ></div>

    <!-- Contenu -->
    <div class="pb-2">
      <!-- Période -->
      <span
        :class="[
          'inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3',
          experience.current
            ? 'bg-primary text-cream-light'
            : 'bg-cream-light/10 text-cream-light/70',
        ]"
      >
        {{ experience.period }}
      </span>

      <!-- Titre -->
      <h4 class="font-title text-xl text-cream-light mb-1">
        {{ experience.title }}
      </h4>

      <!-- Entreprise / École -->
      <p class="text-sm font-bold uppercase tracking-wider text-primary mb-4">
        {{ experience.company }}
        <span class="text-cream-light/50">| {{ experience.location }}</span>
      </p>

      <!-- Description -->
      <ul class="space-y-2">
        <li
          v-for="(item, index) in experience.description"
          :key="index"
          class="flex items-start gap-3 text-cream-light/70"
        >
          <span class="text-primary mt-1.5">—</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
}

defineProps<{
  experience: Experience;
  variant?: "experience" | "education";
}>();
</script>
