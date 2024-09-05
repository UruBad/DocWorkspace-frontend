<template>
  <div>
    <slot name="header" />
    <main class="main">
      <slot name="navigation" />
      <div class="page-wrapper">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts"></script>
