<template>
  <div :class="classes">
    <div class="button-social__wrapper">
      <button
        class="button-social__wrapper-button"
        type="button"
        @click="toggle"
      >
        <IconContact class="button-social__wrapper-button__open" />
        <IconSocialClose class="button-social__wrapper-button__close" />
      </button>
      <a
        class="button-social__wrapper-link"
        target="_blank"
        rel="nofollow noopener noreferrer"
        href="mailto:guppysha@mail.ru"
      >
        <span class="button-social__wrapper-link__tooltip">Mail</span>
        <div class="button-social__wrapper-link__background">
          <IconEmail />
        </div>
      </a>

      <a
        class="button-social__wrapper-link"
        href="https://t.me/doctorguppysha"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <span class="button-social__wrapper-link__tooltip">Telegram</span>
        <div class="button-social__wrapper-link__background">
          <IconTelegram />
        </div>
      </a>

      <a
        class="button-social__wrapper-link"
        href="https://wa.me/79651626316"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <span class="button-social__wrapper-link__tooltip">WhatsApp</span>
        <div class="button-social__wrapper-link__background">
          <IconWhatsApp />
        </div>
      </a>

      <a
        class="button-social__wrapper-link"
        href="tel:+79651626316"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <span class="button-social__wrapper-link__tooltip">Phone</span>
        <div class="button-social__wrapper-link__background">
          <IconPhone />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIsBoolean } from "@/shared/lib/use/base/useIsBoolean";
import { computed } from "vue";
import {
  IconSocialClose,
  IconContact,
  IconEmail,
  IconPhone,
  IconWhatsApp,
  IconTelegram,
} from "@/shared/ui/icons";

const { isBoolean: isVisible, toggle } = useIsBoolean();

const classes = computed(() => {
  const rootClass = "button-social";

  return {
    [rootClass]: true,
    [`${rootClass}--opened`]: isVisible.value,
  };
});
</script>

<style lang="scss" scoped>
.button-social {
  $p: &;
  opacity: 1;

  &--opened {
    #{$p}__wrapper {
      &-link {
        opacity: 1;
        visibility: visible;

        &:nth-of-type(1) {
          transform: translate(0, -135%);
        }

        &:nth-of-type(2) {
          transform: translate(0, -255%);
        }

        &:nth-of-type(3) {
          transform: translate(0, -375%);
        }

        &:nth-of-type(4) {
          transform: translate(0, -495%);
        }
      }
      &-button {
        background: var(--color__white);

        &__open {
          opacity: 0;
          visibility: hidden;
          transform: scale(0.1);
        }

        &__close {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }
      }
    }
  }

  &__wrapper {
    position: fixed;
    bottom: 50px;
    right: 65px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;

    &-link {
      $pLink: &;
      position: absolute;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
      width: 50px;
      height: 50px;
      opacity: 0;
      visibility: hidden;
      color: var(--color__orange);
      text-decoration: none;
      outline: none;
      transition: transform 0.2s ease-in-out;

      &:hover {
        #{$pLink}__tooltip {
          opacity: 0.85;
        }
      }

      &__tooltip {
        position: absolute;
        right: 70px;
        white-space: nowrap;
        padding: 6px 9px;
        font-size: 13px;
        border-radius: 3px;
        transform: translateX(0%) translateY(-50%);
        top: 50%;
        background: var(--color__black--dark);
        color: #fff;
        opacity: 0;
        transition: all 0.1s linear;
        line-height: 1.35;
        font-weight: 600;

        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          top: 50%;
          right: -20px;
          transform: translateY(-50%);
          border: 10px solid transparent;
          border-left-color: var(--color__black--dark);
        }
      }

      &__background {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: -1;
        background-color: var(--color__white);
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }

    &-button {
      border: none;
      position: relative;
      cursor: pointer;
      z-index: 2;
      width: 60px;
      height: 60px;
      justify-content: center;
      align-items: center;
      background: var(--color__light-blue);
      border-radius: 50%;
      transition: all 0.2s ease-in-out;
      box-shadow: 0 0 20px 0 var(--color__black--shadow);
      overflow: hidden;

      &__open,
      &__close {
        transition: all 0.3s ease-in-out;
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1;
        visibility: visible;
        transform: scale(1);
      }

      &__close {
        opacity: 0;
        visibility: hidden;
        transform: scale(0.1);
      }
    }
  }
}

@media (max-width: $breakpoint-m) {
  .button-social {
    &__wrapper {
      bottom: 10px;
      right: 10px;
    }
  }
}
</style>
