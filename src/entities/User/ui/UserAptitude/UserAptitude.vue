<template>
  <div class="user-aptitude">
    <div class="user-aptitude__image">
      <div class="user-aptitude__image-wrapper">
        <img
          class="user-aptitude__image-wrapper__img"
          :src="avatarSrc"
          :alt="`${aptitude.title} avatar`"
          loading="lazy"
        />
      </div>
    </div>

    <div class="user-aptitude__positions">
      <div class="user-aptitude__positions-header">{{ aptitude.title }}</div>
      <div class="user-aptitude__positions-items">
        <ul class="user-aptitude__positions-items__list">
          <li
            class="user-aptitude__positions-items__list-item"
            v-for="position of aptitude.positions"
            :key="`user-aptitude__positions-items__list-item__${position.id}`"
          >
            {{ position.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAptitude } from "../../model";
import { computed } from "vue";
import { BASE_URL } from "@/shared/config";
import { ButtonBase } from "@/shared/ui/buttons";
import { CartProductCard } from "@/entities/Cart";

interface IProps {
  aptitude: IAptitude;
}
const props = defineProps<IProps>();

const avatarSrc = computed(() => {
  if (props.aptitude.image) {
    return props.aptitude.image;
  }

  return `${BASE_URL}/image/education.png`;
});
</script>

<style lang="scss" scoped>
.user-aptitude {
  &__image {
    display: table-cell;
    vertical-align: top;
    height: 100%;
    margin-left: 0;
    margin-right: 0;

    &-wrapper {
      width: 90px;

      &__img {
        max-width: 100%;
        width: 100%;
        height: auto;
      }
    }
  }

  &__positions {
    display: table-cell;
    vertical-align: top;
    height: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 20px;
    width: 100%;

    &-header {
      padding-bottom: 8px;
      font-size: 22px;
      line-height: 1.35;
      font-weight: 600;
      color: var(--color__black);
    }

    &-items {
      font-size: 16px;
      line-height: 1.55;
      font-weight: 300;
      color: var(--color__black);

      &__list {
        list-style-type: disc;
        padding-left: 20px;
        margin-top: 0;
        margin-bottom: 10px;

        &-item {
        }
      }
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .user-aptitude {
    &__positions {
      &-header {
        font-size: 20px;
      }

      &-items {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: $breakpoint-l) {
  .user-aptitude {
    &__image {
      &-wrapper {
        max-width: 50px !important;
      }
    }
  }
}

@media (max-width: $breakpoint-m) {
  .user-aptitude {
    &__positions {
      &-header {
        font-size: 18px;
      }

      &-items {
        font-size: 12px;
        line-height: 1.45;
      }
    }
  }
}
</style>
