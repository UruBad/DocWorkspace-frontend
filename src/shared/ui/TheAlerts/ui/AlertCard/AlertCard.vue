<template>
  <div class="alert-card" :class="alert.status">
    <CyberCard />
    <p class="alert-card__body">{{ alert.message }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IAlert } from "../../model/types";
import { CyberCard } from "@/shared/ui/cyber";

defineProps<{
  alert: IAlert;
}>();
</script>

<style lang="scss">
@import "styles";
</style>
