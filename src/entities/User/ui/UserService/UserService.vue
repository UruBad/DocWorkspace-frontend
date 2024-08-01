<template>
  <div class="user-service">
    <div class="user-service__header">
      <div class="user-service__header-title">{{ service.text }}</div>
      <div class="user-service__header-price">{{ service.price }} ₽</div>
    </div>
    <div class="user-service__border"></div>
    <div class="user-service__description">
      <div class="user-service__description-text">
        {{ service.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IService } from "../../model";

interface IProps {
  service: IService;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.user-service {
  &__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 10px;
    margin: 0;

    &-title {
      font-size: 20px;
      text-align: left;
      max-width: 78%;
      line-height: 1.35;
      font-weight: 600;
      color: var(--color__black);
    }

    &-price {
      font-size: 18px;
      line-height: 1.35;
      font-weight: 600;
      color: var(--color__black);
    }
  }

  &__border {
    border-top-style: solid;
    width: 100%;
    border-top-width: 2px;
    border-top-color: var(--color__light-blue);
    opacity: 0.5;
  }

  &__description {
    padding-top: 8px;
    position: relative;
    margin: 0;

    &-text {
      text-align: left;
      font-size: 16px;
      line-height: 1.55;
      font-weight: 300;
      color: var(--color__black);
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .user-service {
    &__header {
      &-title {
        font-size: 18px;
      }
    }

    &__description {
      &-text {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: $breakpoint-m) {
  .user-service {
    &__header {
      &-title {
        font-size: 16px;
      }
    }

    &__description {
      &-text {
        font-size: 12px;
        line-height: 1.45;
      }
    }
  }
}
</style>
