<template>
  <footer class="bg-dark text-cream-light py-16 border-t-3 border-primary">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-12">
        <!-- Logo et description -->
        <div>
          <h3 class="font-title text-4xl text-primary mb-4">RL</h3>
          <p class="text-cream-light/70 leading-relaxed">
            Étudiant en BUT MMI, passionné par la communication et le marketing digital.
          </p>
        </div>
        
        <!-- Liens rapides -->
        <div>
          <h4 class="font-title text-xl uppercase tracking-wider mb-4">Navigation</h4>
          <nav class="flex flex-col gap-2">
            <NuxtLink 
              v-for="link in footerLinks" 
              :key="link.to"
              :to="link.to"
              class="text-cream-light/70 hover:text-primary transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="font-title text-xl uppercase tracking-wider mb-4">Contact</h4>
          <div class="flex flex-col gap-3">
            <a 
              href="mailto:remi.lombard70@gmail.com" 
              class="flex items-center gap-2 text-cream-light/70 hover:text-primary transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              remi.lombard70@gmail.com
            </a>
            <a 
              href="tel:0652641023" 
              class="flex items-center gap-2 text-cream-light/70 hover:text-primary transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 52 64 10 23
            </a>
            <p class="flex items-center gap-2 text-cream-light/70">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Paris
            </p>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-cream-light/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-cream-light/50 text-sm">
          © {{ currentYear }} Rémi Lombard. Tous droits réservés.
        </p>
        <div class="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/r%C3%A9mi-lombard-830884372/" 
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 border-2 border-cream-light/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = [
  { to: '/#about', label: 'À propos' },
  { to: '/#projects', label: 'Projets' },
  { to: '/#experience', label: 'Parcours' },
  { to: '/#skills', label: 'Compétences' }
]
</script>
