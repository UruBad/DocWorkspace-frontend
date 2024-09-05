<template>
  <ButtonSm class="button-remove">
    <template #icon>
      <IconOff :width="iconSize" :height="iconSize" />
    </template>
  </ButtonSm>
</template>

<script setup lang="ts">
import { ButtonSm } from "@/shared/ui/buttons";
import { EAppPixelSize } from "@/shared/lib/types/app";
import { IconOff } from "@/shared/ui/icons";

interface IButtonOff {
  iconSize?: EAppPixelSize;
}

withDefaults(defineProps<IButtonOff>(), {
  iconSize: EAppPixelSize.ls,
});
</script>
