<template>
  <VPopup
    v-if="store.visible"
    header="Создание витамина"
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
import { VitaminsModel } from "@/entities/Vitamins";

const store = useVitaminFormPopup();
const { vitamin, close } = store;
const { getAll } = VitaminsModel.useVitaminsStore();

function handleClose() {
  getAll();
  close();
}
</script>
