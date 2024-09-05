<template>
  <div class="user-problem">
    <div class="user-problem__wrapper">
      <div class="user-problem__wrapper-block">
        <div class="user-problem__wrapper-block__header">
          <ButtonCollapse
            :txt="problem.text"
            :collapsed="!isExtended"
            @click="toggle"
          />
        </div>
        <div :class="classes">
          {{ problem.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProblem } from "../../model";
import { ButtonCollapse } from "@/shared/ui/buttons";
import { useIsBoolean } from "@/shared/lib/use/base/useIsBoolean";
import { computed } from "vue";

const { isBoolean: isExtended, toggle } = useIsBoolean();

interface IProps {
  problem: IProblem;
}

defineProps<IProps>();

const classes = computed(() => {
  const rootClass = "user-problem__wrapper-block__content";

  return {
    [rootClass]: true,
    [`${rootClass}--collapsed`]: !isExtended.value,
  };
});
</script>

<style lang="scss" scoped>
.user-problem {
  &__wrapper {
    background-color: var(--color__white);

    &-block {
      position: relative;
      cursor: pointer;

      &__content {
        display: block;
        overflow: hidden;
        transition: all ease-in-out 0.3s, opacity ease-in-out 0.3s;
        padding: 0 30px 20px;
        font-size: 16px;
        line-height: 1.55;
        font-weight: 300;
        max-height: 340px;

        &--collapsed {
          max-height: 0;
          padding-bottom: 0;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .user-problem {
    &__wrapper {
      &-block {
        &__content {
          font-size: 14px;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-m) {
  .user-problem {
    &__wrapper {
      &-block {
        &__content {
          padding-right: 20px;
          padding-left: 20px;
          padding-bottom: 0;
          font-size: 12px;
          line-height: 1.45;
          max-height: 500px;

          &--collapsed {
            max-height: 0;
          }
        }
      }
    }
  }
}
</style>
