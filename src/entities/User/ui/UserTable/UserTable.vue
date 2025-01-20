<template>
  <div class="users-table">
    <VTable
      :headers="headers"
      :load-data-function="loadDataFunction"
      :rows="rows"
    >
      <template #fullname="{ row }">
        {{ `${(row as IUser).firstname} ${(row as IUser).lastname}` }}
      </template>
      <template #deleted="{ row }">
        <IconCheck class="deleted_checked" v-if="isDeleted(row)" />
      </template>
      <template #actions="{ row }">
        <slot name="actions" :row="row"></slot>
      </template>
    </VTable>
  </div>
</template>

<script lang="ts" setup>
import { type ITableHeader, VTable } from "@/shared/ui/VTable";
import type { IUser } from "@/entities/User/model";
import { IconCheck } from "@/shared/ui/icons";

interface IProps {
  rows: [];
  loadDataFunction: () => Promise<IUser[]>;
}

defineProps<IProps>();

const isDeleted = (row: IUser) => row.deleted;

const headers: ITableHeader[] = [
  {
    title: "#",
    key: "id",
    width: "20px",
  },
  {
    title: "ФИО",
    key: "fullname",
    width: "auto",
  },
  {
    title: "Логин",
    key: "username",
    width: "auto",
  },
  {
    title: "Архивный",
    key: "deleted",
    width: "100px",
  },
  {
    title: "",
    key: "actions",
    width: "50px",
  },
];
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
