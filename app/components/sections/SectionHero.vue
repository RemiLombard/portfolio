<template>
  <section
    class="min-h-screen flex items-center py-12 md:py-20 relative overflow-hidden bg-cream"
  >
    <!-- Blobs animés en fond -->
    <div class="hero-blobs">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <!-- Texte centré -->
      <div class="text-center">
        <p ref="subtitleRef" class="section-subtitle mb-6 opacity-0">
          Portfolio 2026
        </p>

        <h1
          class="mb-6 overflow-hidden flex flex-col sm:flex-row sm:justify-center sm:gap-4"
        >
          <span
            ref="firstNameRef"
            class="font-title text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-dark inline-block opacity-0"
            >RÉMI</span
          >
          <span
            ref="lastNameRef"
            class="font-title text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-primary inline-block opacity-0"
            >LOMBARD</span
          >
        </h1>

        <p ref="descRef" class="text-lg md:text-xl text-dark/80 mt-8 opacity-0">
          Futur étudiant à l'<span class="text-primary font-bold">ISCOM Paris</span> —
          Parcours Communication et Marketing Digital
        </p>
        <p
          ref="altRef"
          class="text-base md:text-lg text-dark/60 mt-2 opacity-0"
        >
          Alternant Communication et Marketing chez MOGRA
        </p>

        <div
          ref="btnsRef"
          class="flex flex-wrap justify-center gap-4 mt-10 opacity-0"
        >
          <a href="#projects" class="btn btn-primary group">
            <span class="relative z-10">Voir mes projets</span>
          </a>
          <a href="mailto:remi.lombard70@gmail.com" class="btn btn-outline">
            Me contacter
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      ref="scrollRef"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
    >
      <div class="animate-bounce">
        <svg
          class="w-6 h-6 text-dark/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const subtitleRef = ref<HTMLElement | null>(null);
const firstNameRef = ref<HTMLElement | null>(null);
const lastNameRef = ref<HTMLElement | null>(null);
const descRef = ref<HTMLElement | null>(null);
const altRef = ref<HTMLElement | null>(null);
const btnsRef = ref<HTMLElement | null>(null);
const scrollRef = ref<HTMLElement | null>(null);

onMounted(() => {
  // Animations d'entrée GSAP
  const tl = gsap.timeline({ delay: 0.3 });

  tl.to(
    subtitleRef.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    0,
  );

  tl.fromTo(
    firstNameRef.value,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
    0.2,
  );

  tl.fromTo(
    lastNameRef.value,
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
    0.3,
  );

  tl.to(
    descRef.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    0.6,
  );

  tl.to(
    altRef.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    0.7,
  );

  tl.to(
    btnsRef.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    0.9,
  );

  tl.to(
    scrollRef.value,
    {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    },
    1.2,
  );
});
</script>

<style scoped>
.hero-blobs {
  position: absolute;
  inset: 0;
  overflow: hidden;
  filter: blur(80px);
  opacity: 0.35;
}

.blob {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: multiply;
  animation: float 20s ease-in-out infinite;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #c84b31 0%, #ff6b35 100%);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #e85d04 0%, #c84b31 100%);
  top: 50%;
  right: -5%;
  animation-delay: -5s;
  animation-duration: 25s;
}

.blob-3 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #ff8c42 0%, #d65108 100%);
  bottom: -10%;
  left: 30%;
  animation-delay: -10s;
  animation-duration: 22s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(50px, -50px) scale(1.1);
  }
  50% {
    transform: translate(0, 50px) scale(0.95);
  }
  75% {
    transform: translate(-50px, -25px) scale(1.05);
  }
}

/* Responsive - réduire les blobs sur mobile */
@media (max-width: 768px) {
  .hero-blobs {
    filter: blur(60px);
    opacity: 0.25;
  }

  .blob-1 {
    width: 250px;
    height: 250px;
    top: -5%;
    left: -15%;
  }

  .blob-2 {
    width: 200px;
    height: 200px;
    top: 60%;
    right: -10%;
  }

  .blob-3 {
    width: 180px;
    height: 180px;
    bottom: -5%;
    left: 20%;
  }
}

@media (max-width: 480px) {
  .hero-blobs {
    opacity: 0.18;
  }

  .blob-1 {
    width: 180px;
    height: 180px;
  }

  .blob-2 {
    width: 150px;
    height: 150px;
  }

  .blob-3 {
    width: 130px;
    height: 130px;
  }
}
</style>
