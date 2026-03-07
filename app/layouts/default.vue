<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <TheNavbar />
    
    <!-- Contenu principal -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
// Layout par défaut
</script>
