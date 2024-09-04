<template>
  <header class="header">
    <div class="header__left">
      <nav class="header__left-nav">
        <ul role="list" class="nav-list">
          <li class="nav-list__item" @click.stop="click('about')">
            <span class="nav-list__item-link">Обо мне</span>
          </li>
          <li class="nav-list__item" @click.stop="click('price')">
            <span class="nav-list__item-link">Услуги и цены</span>
          </li>
          <li class="nav-list__item" @click.stop="click('contacts')">
            <span class="nav-list__item-link">Контакты</span>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header__right">
      <div class="header__right-info">
        <div class="header__right-info__description">
          +7 (988) 879 37 36
          <br />
          Владикавказ, Москва
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAppRoutes } from "@/app/providers";
import { SessionModel } from "@/entities/Session";

const appRoutes = useAppRoutes();
const session = SessionModel.useSessionStore();

const click = (anchor: string) => {
  document.getElementById(anchor)?.scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  width: 100%;
  display: table;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;

  &__left,
  &__right {
    display: table-cell;
    vertical-align: middle;
  }

  &__left {
    text-align: left;

    &-nav {
      .nav-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        font-size: 0;
        transition: opacity ease-in-out 0.2s;

        &__item {
          cursor: pointer;
          clear: both;
          font-family: "Roboto", Arial, sans-serif;
          font-size: 16px;
          display: inline-block;
          margin: 0;
          color: var(--color__black);
          white-space: nowrap;
          padding: 0 15px;

          &:first-child {
            padding: 0 15px 0 0;
          }

          &:last-child {
            padding: 0 0 0 15px;
          }

          &-link {
            -webkit-transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
            transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
            position: relative;
            text-decoration: none;
            color: var(--color__black);
            font-weight: 400;

            &--active {
              opacity: 0.7;
            }

            &:hover {
              opacity: 0.8 !important;

              &:after {
                opacity: 1;
                bottom: -1px;
              }
            }

            &:after {
              content: "";
              position: absolute;
              left: 0;
              bottom: 20%;
              opacity: 0;
              width: 100%;
              height: 100%;
              border-bottom: 1px solid var(--color__light-blue);
              -webkit-box-shadow: inset 0px -1px 0px 0px var(--color__light-blue);
              -moz-box-shadow: inset 0px -1px 0px 0px var(--color__light-blue);
              box-shadow: inset 0px -1px 0px 0px var(--color__light-blue);
              -webkit-transition: all 0.3s ease;
              transition: all 0.3s ease;
              pointer-events: none;
            }
          }
        }
      }
    }
  }

  &__right {
    display: none;
    text-align: right;

    &-info {
      display: table;
      text-align: right;
      width: auto;
      position: relative;
      float: right;

      &__description {
        padding-left: 30px;
        display: table-cell;
        vertical-align: middle;
        white-space: nowrap;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: $breakpoint-l) {
  .header {
    height: auto !important;
    display: block;

    &__left,
    &__right {
      display: block;
      text-align: center;
      float: none;
    }

    &__left {
      text-align: left;

      &-nav {
        padding: 20px 0;
        .nav-list {
          &__item {
            display: block;
            text-align: center;
            padding: 10px !important;
            white-space: normal;

            &-link {
              display: inline-block;
            }
          }
        }
      }
    }

    &__right {
      display: none;

      &-info {
        display: table;
        position: static;
        float: none;
        text-align: center;
        margin: 0 auto;
        padding: 20px 0;

        &__description {
          display: table;
          padding: 10px 0;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
  }
}
</style>
