<template>
  <button class="button" :type="type">
    <span class="button__text" :style="styles">{{ txt }}</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { EAppPixelSize } from "@/shared/lib/types/app";
import { computed } from "vue";

interface IProps {
  txt: string;
  size?: EAppPixelSize;
  type?: "reset" | "button" | "submit";
}

const props = withDefaults(defineProps<IProps>(), {
  size: EAppPixelSize.xs,
  type: "button",
});

const styles = computed(() => ({
  fontSize: props.size,
}));
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  color: var(--color__white);
  background-color: var(--color__light-blue);
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  outline: none;
  height: 45px;
  font-size: 14px;
  padding-left: 30px;
  padding-right: 30px;
  display: inline-block;
  border: 0 none;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-weight: 700;
  background-image: none;
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
