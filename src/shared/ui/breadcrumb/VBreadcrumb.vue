<template>
  <nav class="breadcrumb">
    <ol class="breadcrumb__list">
      <li
        v-for="(item, idx) of breadcrumbs"
        :key="idx"
        class="breadcrumb__list__item"
      >
        <router-link class="breadcrumb__list__item-link" :to="item.to">
          {{ item.label }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const breadcrumbs = computed(() => {
  const route = useRoute();

  const matchedRoutes = route.matched;

  return matchedRoutes.map((routeItem) => ({
    label: routeItem.meta.breadcrumb || routeItem.name,
    to: routeItem.meta.to || routeItem.path,
  }));
});
</script>

<style lang="scss" scoped>
.breadcrumb {
  &__list {
    padding: 0px;
    margin: 0px;
    background: transparent;
    font-size: 16px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    &__item {
      margin: 0;
      font-weight: 300;
      display: flex;

      &:last-child {
        & > a {
          color: #99abb4;
        }
      }

      &:not(:first-child) {
        &:before {
          content: ">";
          font-family: themify;
          color: #99abb4;
          font-size: 14px;
          float: left;
          padding-right: 0.5rem;
          padding-left: 0.5rem;
        }
      }

      &-link {
        color: #1e88e5;
        font-size: 16px;
        line-height: 21px;
        text-decoration: none;
      }
    }
  }
}
</style>
