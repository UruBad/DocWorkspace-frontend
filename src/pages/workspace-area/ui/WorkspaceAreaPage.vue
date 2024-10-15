<template>
  <div class="admin-page">
    <div class="admin-page__header">
      <div class="admin-page__header__right">
        <h3 class="admin-page__header__right-title">{{ title }}</h3>
        <VBreadcrumb></VBreadcrumb>
      </div>
      <div class="admin-page__header__left">
        <router-view name="button"></router-view>
      </div>
    </div>
    <div class="admin-page__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VBreadcrumb } from "@/shared/ui/breadcrumb";

import { useRoute } from "vue-router";
import { computed } from "vue";

const title = computed(() => {
  const route = useRoute();

  return route.meta.breadcrumb || route.name;
});
</script>

<style lang="scss" scoped>
.admin-page {
  margin-left: 240px;
  background: #eef5f9;
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-y: hidden;

  &__header {
    padding: 20px 30px;
    background: white;
    display: flex;
    align-items: center;

    &__right {
      flex: 0 0 auto;
      width: 50%;

      &-title {
        color: #1e88e5;
        font-weight: 400;
        line-height: 30px;
        font-size: 21px;
      }
    }

    &__left {
      flex: 0 0 auto;
      width: 50%;
      text-align: right;
    }
  }

  &__container {
    padding: 30px;
  }
}
</style>
