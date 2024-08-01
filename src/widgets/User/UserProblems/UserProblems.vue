<template>
  <div class="user-problems">
    <div class="user-problems__header">
      <div class="user-problems__header-wrapper">
        <div class="user-problems__header-wrapper__title">
          <div class="user-problems__header-wrapper__title-text">
            Какие проблемы решаю
          </div>
        </div>
      </div>
    </div>
    <div class="user-problems__items">
      <div>
        <div class="user-problems__items-list">
          <div
            class="user-problems__items-list__item"
            v-for="problem of problems"
            :key="`user-problems__items-list__item-${problem.id}`"
          >
            <UserProblem :problem="problem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProblem } from "@/entities/User/model";
import { UserProblem } from "@/entities/User";

interface IProps {
  problems: IProblem[];
}
const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.user-problems {
  padding-top: 45px;
  padding-bottom: 150px;
  background-color: var(--color__light-yellow);

  &__header {
    padding-top: 100px;
    padding-bottom: 0;
    background-color: var(--color__light-yellow);

    &-wrapper {
      &__title {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 1200px;
        padding: 0;

        &-text {
          padding-left: 100px;
          max-width: 960px;
          display: inline;
          float: left;
          margin-left: 20px;
          margin-right: 20px;
          width: 100%;
          margin-bottom: 40px;
          font-size: 42px;
          line-height: 1.23;
          font-weight: 600;
          color: var(--color__black);
        }
      }
    }
  }

  &__items {
    &-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;

      &:before {
        display: table;
        content: " ";
        width: 0;
      }

      &__item {
        margin-bottom: 2px;
        padding-left: 200px;
        max-width: 760px;
        display: inline;
        float: left;
        margin-left: 20px;
        margin-right: 20px;
        width: 100%;
        box-sizing: content-box;
      }
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .user-problems {
    padding-top: 45px;
    padding-bottom: 150px;
    background-color: var(--color__light-yellow);

    &__header {
      &-wrapper {
        display: inline;
        float: left;
        margin-left: 10px;
        margin-right: 10px;
        width: 100%;
        max-width: 780px;
        padding-left: 80px;

        &__title {
          &-text {
            font-size: 38px;
          }
        }
      }
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .user-problems {
    &__header {
      &-wrapper {
        max-width: 640px;
        padding-left: 80px;
        margin: 0;

        &__title {
          &-text {
            padding-left: 0;
            font-size: 38px;
          }
        }
      }
    }

    &__items {
      &-list {
        &__item {
          padding-left: 160px;
          max-width: 620px;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-l) {
  .user-problems {
    max-width: 640px;

    &__header {
      &-wrapper {
        &__title {
          &-text {
            padding: 0;
            font-size: 30px;
            max-width: 96%;
          }
        }
      }
    }

    &__items {
      &-list {
        &__item {
          padding-left: 0;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-m) {
  .user-problems {
    padding-top: 0;
    padding-bottom: 30px;

    &__header {
      &-wrapper {
        padding-left: 0;

        &__title {
          &-text {
            margin-left: 0;
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
