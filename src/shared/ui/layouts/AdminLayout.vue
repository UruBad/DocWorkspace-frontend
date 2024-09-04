<template>
  <slot name="header" />
  <main class="main">
    <slot name="navigation" />
    <div class="page-wrapper">
      <router-view />
    </div>
  </main>
</template>
<script setup lang="ts">
</script>
