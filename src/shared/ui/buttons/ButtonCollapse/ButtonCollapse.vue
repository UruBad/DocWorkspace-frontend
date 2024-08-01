<template>
  <button :class="classes">
    <span class="button-collapse__text">{{ txt }}</span>
    <span class="button-collapse__icon">
      <span class="button-collapse__icon-lines">
        <svg
          role="presentation"
          focusable="false"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            stroke="none"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
          >
            <g transform="translate(1.000000, 1.000000)" stroke="#5199ff">
              <path d="M0,11 L22,11"></path>
              <path d="M11,0 L11,22"></path>
            </g>
          </g>
        </svg>
      </span>
      <span class="button-collapse__icon-circle"></span>
    </span>
    <span class="button-collapse__icon button-collapse__icon--hover">
      <span class="button-collapse__icon-lines">
        <svg
          role="presentation"
          focusable="false"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            stroke="none"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
          >
            <g transform="translate(1.000000, 1.000000)" stroke="#f2f2f2">
              <path d="M0,11 L22,11"></path>
              <path d="M11,0 L11,22"></path>
            </g>
          </g>
        </svg>
      </span>
      <span class="button-collapse__icon-circle"></span
    ></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IButton {
  txt: string;
  collapsed: boolean;
}

const props = defineProps<IButton>();

const classes = computed(() => {
  const rootClass = "button-collapse";

  return {
    [rootClass]: true,
    [`${rootClass}--collapsed`]: props.collapsed,
  };
});
</script>

<style lang="scss" scoped>
.button-collapse {
  $p: &;
  position: relative;
  width: 100%;
  padding: 25px 30px;
  text-align: left;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;

  &--collapsed {
    #{$p}__icon {
      &-lines {
        transform: rotate(0deg);
      }
    }
  }

  &__text {
    display: inline-block;
    padding-right: 30px;
    font-size: 24px;
    line-height: 1.35;
    font-weight: 600;
    color: var(--color__black);
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 18px;
    width: 24px;
    height: 24px;
    display: inline-block;
    padding: 8px;
    transform: translateY(-50%);
    transition: opacity ease-in-out 0.2s;

    &-lines {
      position: relative;
      z-index: 1;
      display: block;
      width: 100%;
      height: 100%;
      transform: rotate(-45deg);
      transition: all ease-in-out 0.3s;
    }

    &-circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border-radius: 100px;
    }

    &--hover {
      opacity: 0;

      #{$p}__icon-circle {
        background-color: var(--color__light-blue);
      }
    }
  }

  &:hover {
    #{$p} {
      &__icon {
        opacity: 0;

        &--hover {
          opacity: 1;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .button-collapse {
    &__text {
      font-size: 22px;
    }
  }
}

@media (max-width: $breakpoint-m) {
  .button-collapse {
    padding: 20px;

    &__text {
      font-size: 20px;
    }

    &__icon {
      right: 8px;
    }
  }
}
</style>
