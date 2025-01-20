<template>
  <div class="doctors-table">
    <UserTable :load-data-function="getAll" :rows="doctors">
      <template #actions="{ row }">
        <UserActions :user="row" @completed="handleComplete" />
      </template>
    </UserTable>
  </div>
</template>

<script lang="ts" setup>
import { UserModel, UserTable } from "@/entities/User";
import { UserActions } from "@/features/User";

const { getAll, doctors } = UserModel.useDoctorsStore();

const handleComplete = () => {
  getAll();
};
</script>

<style lang="scss" scoped></style>
