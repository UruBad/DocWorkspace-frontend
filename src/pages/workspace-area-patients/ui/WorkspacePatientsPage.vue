<template>
  <div class="patients-page">
    <PatientsTable />

    <UserFormPopup
      title-add="Создание пациента"
      title-edit="Редактирование пациенты"
    />
  </div>
</template>

<script setup lang="ts">
import { UserFormPopup } from "@/features/User";
import { PatientsTable } from "@/widgets/Patients";
</script>

<style lang="scss"></style>
