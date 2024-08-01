<template>
  <footer class="footer">
    <div class="footer-container">
      <a
        class="footer-container__link"
        target="_blank"
        :href="`${BASE_URL}/content/offer.pdf`"
      >
        Публичная оферта
      </a>
      <a
        class="footer-container__link"
        target="_blank"
        :href="`${BASE_URL}/content/policy.pdf`"
      >
        Политика защиты и обработки персональных данных
      </a>
      <a
        class="footer-container__link"
        target="_blank"
        :href="`${BASE_URL}/content/accept.pdf`"
      >
        Согласие на обработку персональных данных
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { BASE_URL } from "@/shared/config";
</script>

<style lang="scss">
.footer {
  background-color: #000;
  color: var(--color__white);
  width: 100%;
  font-size: 14px;
  padding: 35px 0 45px;
  height: auto;
  text-align: center;
  display: block;
  visibility: visible;
  position: relative;
  pointer-events: all;
  opacity: 1;
  margin: 0;
  z-index: 1;

  &-container {
    display: table;
    margin: 0 auto;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: inherit;
    opacity: 1;

    &:hover {
      opacity: 1;
    }

    &__creator {
      padding-bottom: 15px;
    }

    &__link {
      display: table-cell;
      padding: 0 15px;
      font-size: 13px;
      text-decoration: none;
      color: inherit;
      opacity: 0.25;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
