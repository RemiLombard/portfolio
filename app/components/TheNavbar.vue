<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-cream border-b-2 border-dark">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="block">
          <img src="/logo-rl.svg" alt="RL" class="w-10 h-10 md:w-14 md:h-14" />
        </NuxtLink>

        <!-- Navigation desktop -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.to"
            :href="link.to"
            class="text-sm font-bold uppercase tracking-wider text-dark hover:text-primary transition-colors"
          >
            {{ link.label }}
          </a>
          <a
            href="mailto:remi.lombard70@gmail.com"
            class="btn btn-primary text-sm py-2 px-4"
          >
            Contact
          </a>
        </div>

        <!-- Menu burger mobile -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 text-dark"
          aria-label="Menu"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Menu mobile -->
      <div
        v-if="isMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-dark/20 pt-4"
      >
        <div class="flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.to"
            :href="link.to"
            class="text-lg font-bold uppercase tracking-wider text-dark"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Spacer -->
  <div class="h-16"></div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const navLinks = [
  { to: "#about", label: "À propos" },
  { to: "#projects", label: "Projets" },
  { to: "#experience", label: "Parcours" },
  { to: "#skills", label: "Outils" },
];
</script>
