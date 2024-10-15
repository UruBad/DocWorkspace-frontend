<template>
  <ButtonSm class="button-remove">
    <template #icon>
      <IconPencil :width="iconSize" :height="iconSize" />
    </template>
  </ButtonSm>
</template>

<script setup lang="ts">
import { ButtonSm } from "@/shared/ui/buttons";
import { IconPencil } from "@/shared/ui/icons";
import { EAppPixelSize } from "@/shared/lib/types/app";

interface IButtonRemove {
  iconSize?: EAppPixelSize;
}

withDefaults(defineProps<IButtonRemove>(), {
  iconSize: EAppPixelSize.sm,
});
</script>
