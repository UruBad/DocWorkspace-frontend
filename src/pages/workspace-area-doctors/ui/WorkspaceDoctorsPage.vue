<template>
  <div class="patients-page">
    <DoctorsTable />

    <UserFormPopup
      title-add="Создание врача"
      title-edit="Редактирование врача"
    />
  </div>
</template>

<script setup lang="ts">
import { UserFormPopup } from "@/features/User";
import { DoctorsTable } from "@/widgets/Doctors";
</script>

<style lang="scss"></style>
