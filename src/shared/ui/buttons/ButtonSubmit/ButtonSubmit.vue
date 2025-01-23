<template>
  <VButton
    class="button-submit"
    :class="isSubmitting && 'submitting'"
    type="submit"
    :txt="txt"
    :border-left-icon="borderLeftIcon"
    :border-right-icon="borderRightIcon"
    :before-bg-color="beforeBgColor"
    :after-bg-color="afterBgColor"
    :disabled="isDisabled || isSubmitting"
  >
    <SpinnerLoader
      v-if="isSubmitting"
      class="button-submit__spinner"
      size="sm"
    />
  </VButton>
</template>

<script setup lang="ts">
import { VButton } from "../base";
import { EBorderDecorateIcons } from "@/shared/ui/BorderDecorate";
import { SpinnerLoader } from "@/shared/ui/loaders";
import type { EAppColor } from "@/shared/lib/types/app";

interface IButtonSubmit {
  afterBgColor?: EAppColor;
  beforeBgColor?: EAppColor;
  borderLeftIcon?: EBorderDecorateIcons;
  borderRightIcon?: EBorderDecorateIcons;
  isDisabled?: boolean;
  isSubmitting: boolean;
  txt?: string;
}

withDefaults(defineProps<IButtonSubmit>(), {
  txt: "Submit",
  borderLeftIcon: EBorderDecorateIcons.top,
  borderRightIcon: EBorderDecorateIcons.inner,
  isDisabled: false,
});
</script>

<style lang="scss">
@use "styles";
</style>
