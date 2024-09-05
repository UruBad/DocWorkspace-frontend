<template>
  <div>
    <slot name="header" />
    <main class="main">
      <router-view />
    </main>
    <slot name="footer" />
    <slot />
  </div>
</template>
