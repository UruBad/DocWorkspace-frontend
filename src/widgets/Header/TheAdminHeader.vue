<template>
  <header class="admin-header">
    <nav class="navbar">
      <div class="navbar-header">
        <router-link
          class="navbar-header__link"
          :to="appRoutes.getMain()"
        >
          <span class="navbar-header__link-logo">
            <b>Doc</b>Workspace
          </span>
        </router-link>
      </div>
      <div class="navbar-nav">
        <ul class="navbar-nav__list">
          <li class="navbar-nav__list-item">
            <span class="navbar-nav__list-item__user">Markarn Doe</span>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { SessionModel } from "@/entities/Session";

const appRoutes = useAppRoutes();
const session = SessionModel.useSessionStore();
</script>

<style lang="scss" scoped>
.admin-header {
  position: relative;
  z-index: 50;
  -webkit-box-shadow: 5px 0px 10px rgba(0,0,0,0.5);
  box-shadow: 5px 0px 10px rgba(0,0,0,0.5);
  height: 70px;
  background-color: var(--color__light-blue);

  .navbar {
    min-height: 70px;
    padding: 0;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    &-header {
      width: 240px;
      line-height: 70px;
      text-align: center;
      background: rgba(0,0,0,0.05);

      &__link {
        width: 216px;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0px;
        padding: 0px 15px 0 0;
        color: var(--color__white);
        margin-left: 1.5rem!important;
        font-size: 26px;
      }
    }

    &-nav {
      padding: 0px 10px 0 0;
      display: flex;
      align-items: center;
      width: 100%;

      &__list {
        flex-direction: row;
        margin-right: auto!important;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        display: flex;

        &-item {
          &__user {
            font-size: 1.1875rem;
            color: white;
            font-weight: 300;
            padding: 0px 15px;
            line-height: 70px;
            height: 70px;
            display: inline-block;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
