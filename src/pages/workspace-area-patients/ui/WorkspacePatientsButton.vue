<template>
  <UserAdd :role="UserModel.ERole.PATIENT" />
</template>

<script setup lang="ts">
import { UserModel } from "@/entities/User";
import { UserAdd } from "@/features/User";
</script>

<style lang="scss"></style>
