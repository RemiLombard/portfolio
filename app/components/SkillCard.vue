<template>
  <div class="card-vintage text-center group hover:bg-primary/5 transition-colors">
    <!-- Icône / Logo -->
    <div class="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
      <span class="font-display text-xl text-primary uppercase">
        {{ skill.name.substring(0, 2) }}
      </span>
    </div>
    
    <!-- Nom -->
    <h4 class="font-display text-sm uppercase tracking-wider text-dark mb-3">
      {{ skill.name }}
    </h4>
    
    <!-- Barre de progression -->
    <div class="h-2 bg-dark/10 w-full">
      <div 
        class="h-full bg-primary transition-all duration-500"
        :style="{ width: `${skill.level}%` }"
      ></div>
    </div>
    <span class="text-xs text-dark/50 mt-2 block">{{ skill.level }}%</span>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  icon: string
  level: number
}

defineProps<{
  skill: Skill
}>()
</script>
