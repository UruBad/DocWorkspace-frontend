<template>
  <form class="form column gap-m" novalidate @submit="handlerSubmit">
    <slot />

    <div class="form__buttons row">
      <slot name="button-submit">
        <ButtonBase
          :txt="buttonSubmitTxt"
          :size="EAppPixelSize.s"
          type="submit"
        />
      </slot>
      <slot name="additional-buttons" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ButtonBase } from "@/shared/ui/buttons";
import { EAppPixelSize } from "@/shared/lib/types/app";

interface IVForm {
  handlerSubmit: (e?: Event | undefined) => Promise<Promise<void> | undefined>;
  isSubmitting?: boolean;
  buttonSubmitTxt?: string;
}

withDefaults(defineProps<IVForm>(), {
  isSubmitting: false,
  buttonSubmitTxt: "",
});
</script>

<style lang="scss">
@import "styles";
</style>
