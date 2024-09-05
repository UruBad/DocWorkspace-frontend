<template>
  <ButtonSm class="button-remove">
    <template #icon>
      <IconClose :width="iconSize" :height="iconSize" />
    </template>
  </ButtonSm>
</template>

<script setup lang="ts">
import { ButtonSm } from "@/shared/ui/buttons";
import { EAppPixelSize } from "@/shared/lib/types/app";
import { IconClose } from "@/shared/ui/icons";

interface IButtonRemove {
  iconSize?: EAppPixelSize;
}

withDefaults(defineProps<IButtonRemove>(), {
  iconSize: EAppPixelSize.sm,
});
</script>
