<template>
  <span class="cyber-card">
    <CyberTag class="cyber-card__tag" />
  </span>
</template>

<script setup lang="ts">
import CyberTag from "../CyberTag";
import { EAppColor } from "@/shared/lib/types/app";

withDefaults(defineProps<{ color?: EAppColor }>(), {
  color: EAppColor.blue,
});
</script>

<style lang="scss">
@import "styles";
</style>
