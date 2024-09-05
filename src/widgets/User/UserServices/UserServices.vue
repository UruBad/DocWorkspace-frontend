<template>
  <div class="user-services" id="price">
    <div class="user-services__header">
      <div class="user-services__header-wrapper">
        <div class="user-services__header-wrapper__title">
          <div class="user-services__header-wrapper__title-text">
            Услуги и цены
          </div>
        </div>
      </div>
    </div>
    <div class="user-services__items">
      <ul class="user-services__items-list">
        <li
          class="user-services__items-list__item"
          v-for="service of services"
          :key="`user-services__items-list__item-${service.id}`"
        >
          <UserService :service="service" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IService } from "@/entities/User/model";
import { UserService } from "@/entities/User";

interface IProps {
  services: IService[];
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.user-services {
  padding-top: 45px;
  padding-bottom: 150px;

  &__header {
    padding-top: 100px;
    padding-bottom: 0;

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
    padding-top: 100px;

    &-list {
      list-style-type: disc;
      padding-left: 20px;
      display: flex;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;

      &:before {
        display: table;
        content: " ";
        width: 0;
      }

      &__item {
        margin-top: 30px;
        max-width: 560px;
        display: inline;
        float: left;
        margin-left: 20px;
        margin-right: 20px;
        width: 100%;

        &:nth-child(2n) {
          padding-left: 0;
        }

        &:last-child {
          max-width: 100%;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .user-services {
    max-width: 960px;
    padding-top: 0;
    padding-bottom: 100px;

    &__header {
      &-wrapper {
        &__title {
          &-text {
            padding: 0;
            font-size: 30px;
          }
        }
      }
    }

    &__items {
      &-list {
        padding-left: 20px;
        max-width: 960px;

        &__item {
          padding-left: 0;
          max-width: 450px;
          margin-right: 0;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-l) {
  .user-services {
    &__header {
      &-wrapper {
        &__title {
          &-text {
            max-width: 640px;
            margin-left: 0;
          }
        }
      }
    }

    &__items {
      &-list {
        padding-left: 0;
      }
    }
  }
}

@media (max-width: $breakpoint-m) {
  .user-services {
    padding-top: 0;
    padding-bottom: 30px;

    &__header {
      &-wrapper {
        &__title {
          &-text {
            font-size: 30px;
          }
        }
      }
    }

    &__items {
      &-list {
        padding-left: 0;

        &__item {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
