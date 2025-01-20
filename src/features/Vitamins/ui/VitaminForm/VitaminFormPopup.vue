<template>
  <VPopup
    v-if="store.visible"
    :header="title"
    :visible="store.visible"
    @close="close"
  >
    <VitaminForm :vitamin="vitamin" @completed="handleClose" />
  </VPopup>
</template>

<script setup lang="ts">
import { VPopup } from "@/shared/ui/VPopup";
import VitaminForm from "./VitaminForm.vue";
import { useVitaminFormPopup } from "../../model";
import { computed } from "vue";

const store = useVitaminFormPopup();
const { vitamin, close } = store;

const title = computed(() =>
  vitamin?.id ? "Редактирование витамина" : "Создание витамина"
);

const handleClose = () => {
  close();
};
</script>
