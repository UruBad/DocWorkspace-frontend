<template>
  <div class="prescription-view">
    <div class="prescription-view__image">
      <img
        class="image-preview__img"
        :src="prescription.vitamin.image"
        :alt="prescription.vitamin.name"
      />
    </div>
    <div class="prescription-view__info">
      <span class="prescription-view__info-title">{{
        prescription.vitamin.name
      }}</span>
      <span class="prescription-view__info-count">
        {{ prescription.count }} шт.
      </span>
      <span class="prescription-view__info-type">{{ prescription.type }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPrescription } from "../../model";

interface IProps {
  prescription: IPrescription;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.prescription-view {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--color__grey--border);
  background-color: var(--color__white);

  &__image {
    max-width: 100px;
    max-height: 100px;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
