<template>
  <div class="login-page container">
    <LoginForm
      class="login-page__form login-page__box shadow-black border-radius"
    />
  </div>
</template>

<script setup lang="ts">
import { LoginForm } from "@/features/auth";
</script>

<style lang="scss">
@import "./styles";
</style>
