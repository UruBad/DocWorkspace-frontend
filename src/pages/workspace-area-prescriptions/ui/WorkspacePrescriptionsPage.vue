<template>
  <div class="prescriptions-page">
    <prescription-view :prescription="pre" />
  </div>
</template>

<script setup lang="ts">
import { PrescriptionView } from "@/entities/Prescription";
import {
  EAppointment,
  type IPrescription,
} from "@/entities/Prescription/model";
import type { VitaminsModel } from "@/entities/Vitamins";

const pre: IPrescription = {
  appointment: EAppointment.BREAKFAST,
  count: 2,
  deleted: false,
  id: 1,
  type: "во время еды",
  vitamin: {
    name: "Витамин D",
    image:
      "https://nowfoods-shop.ru/image/cache/catalog/All_Images_Products_Jpeg/00376.1-0x0.png",
  } as VitaminsModel.IVitamin,
};
</script>

<style lang="scss"></style>
