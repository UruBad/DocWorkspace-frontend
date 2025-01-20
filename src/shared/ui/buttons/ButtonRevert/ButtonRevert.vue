<template>
  <ButtonSm class="button-revert">
    <template #icon>
      <IconRevert :width="iconSize" :height="iconSize" />
    </template>
  </ButtonSm>
</template>

<script setup lang="ts">
import { ButtonSm } from "@/shared/ui/buttons";
import { IconRevert } from "@/shared/ui/icons";
import { EAppPixelSize } from "@/shared/lib/types/app";

interface IButtonRemove {
  iconSize?: EAppPixelSize;
}

withDefaults(defineProps<IButtonRemove>(), {
  iconSize: EAppPixelSize.sm,
});
</script>
