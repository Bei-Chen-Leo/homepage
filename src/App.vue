<template>
  <Header />
  <main class="max-w-3xl mx-auto min-h-screen p-6 content">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>