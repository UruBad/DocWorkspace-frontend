<template>
  <div class="user-aptitudes">
    <div class="user-aptitudes__wrapper">
      <ul class="user-aptitudes__wrapper-list">
        <li
          class="user-aptitudes__wrapper-list__item"
          v-for="aptitude of aptitudes"
          :key="`user-user-aptitudes__wrapper-item__${aptitude.id}`"
        >
          <UserAptitude :aptitude="aptitude" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAptitude } from "../../../entities/User/model";
import UserAptitude from "../../../entities/User/ui/UserAptitude/UserAptitude.vue";

interface IProps {
  aptitudes: IAptitude[];
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.user-aptitudes {
  transition: opacity 0.5s;
  opacity: 1;
  padding-top: 50px;
  padding-bottom: 50px;

  &__wrapper {
    &-list {
      margin-bottom: 0;
      list-style: none;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 1200px;
      padding: 0;

      &__item {
        max-width: 560px;
        display: inline;
        float: left;
        margin-left: 20px;
        margin-right: 20px;
        width: 100%;

        &:last-child {
          max-width: 100%;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .user-aptitudes {
    padding-left: 20px;

    &__wrapper {
      &-list {
        &__item {
          max-width: 440px;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-l) {
  .user-aptitudes {
    padding-left: 0;

    &__wrapper {
      &-list {
        &__item {
          max-width: 440px;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-m) {
  .user-aptitudes {
    &__wrapper {
      &-list {
        &__item {
        }
      }
    }
  }
}
</style>
