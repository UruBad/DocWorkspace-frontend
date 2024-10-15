<template>
  <VeeRadio label="Роль" name="role" :options="USER_ROLE_OPTIONS" />
</template>

<script setup lang="ts">
import { VeeRadio } from "@/shared/ui/form";
import { USER_ROLE_OPTIONS } from "../../model";
</script>
