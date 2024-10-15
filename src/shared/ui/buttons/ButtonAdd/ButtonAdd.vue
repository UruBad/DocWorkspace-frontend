<template>
  <ButtonBase
    class="button-add"
    :txt="txt"
    :size="EAppPixelSize.s"
    type="button"
    color="red"
    :disabled="isDisabled"
  />
</template>

<script setup lang="ts">
import { EAppPixelSize } from "@/shared/lib/types/app";
import { ButtonBase } from "../ButtonBase";

interface IProps {
  txt?: string;
  isDisabled?: boolean;
}

withDefaults(defineProps<IProps>(), {
  txt: "Добавить",
  isDisabled: false,
});
</script>

<style lang="scss">
.button-add {
  width: 130px;
}
</style>
