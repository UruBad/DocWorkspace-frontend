<template>
  <nav class="sidebar">
    <ul class="sidebar__list">
      <li v-for="(item, idx) of navList" :key="idx" class="sidebar__list-item">
        <router-link
          class="sidebar__list-item-link"
          :class="item.isActive && 'is-active'"
          :to="item.to"
        >
          <component
            v-if="item.icon"
            :is="item.icon"
            class="sidebar__list-item-link-icon"
          />
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { INavItem } from "./types";

defineProps<{ navList: INavItem[] }>();
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 15px;
  &__list {
    margin: 0;
    padding: 0;
    background: var(--color__white);

    &-item {
      margin-bottom: 10px;
      list-style: none;

      &-link {
        display: flex;
        align-items: center;
        line-height: 22.5px;
        font-weight: 300;
        padding: 8px 35px 8px 15px;
        font-size: 15px;
        border-radius: 4px;
        white-space: nowrap;
        cursor: pointer;
        vertical-align: middle;
        z-index: 1;
        will-change: opacity, transform;

        &.router-link-exact-active {
          background: var(--color__turquoise);
          color: var(--color__white);
          font-weight: 400;
          box-shadow: 0 0 10px var(--color__black--shadow);
        }

        &-icon {
          margin-right: 0.5rem !important;
          width: 27px;
          font-size: 21px;
          font-style: normal;
          display: inline-block;
          text-align: center;
        }

        &:not(.router-link-exact-active):hover {
          color: var(--color__turquoise);
        }
      }
    }
  }
}
</style>
