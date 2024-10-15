<template>
  <div class="vitamins-button">
    <ButtonAdd @click="handleClick" />
  </div>
</template>

<script lang="ts" setup>
import { ButtonAdd } from "@/shared/ui/buttons";
import { useVitaminFormPopup } from "../../model";

const { show: handleClick } = useVitaminFormPopup();
</script>

<style lang="scss" scoped>
.vitamins-button {
  max-width: 130px;
  float: right;
}
</style>
