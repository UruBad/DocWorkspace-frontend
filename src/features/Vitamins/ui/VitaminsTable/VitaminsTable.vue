<template>
  <div class="vitamins-table">
    <VTable :headers="headers" :load-data-function="getAll">
      <template #deleted="{ row }">
        {{ (row as VitaminsModel.IVitamin).deleted }}
      </template>
      <template #actions="{ row }">
        <div class="actions">
          <ButtonEdit
            :icon-size="EAppPixelSize.ls"
            @click="handleEditClick(row)"
          />
          <ButtonRemove :icon-size="EAppPixelSize.ls" />
        </div>
      </template>
    </VTable>
  </div>
</template>

<script lang="ts" setup>
import { VitaminsModel } from "@/entities/Vitamins";
import { ButtonRemove, ButtonEdit } from "@/shared/ui/buttons";
import { VTable, type ITableHeader } from "@/shared/ui/VTable";
import { EAppPixelSize } from "@/shared/lib/types/app";
import { useVitaminFormPopup } from "../../model";

const { getAll } = VitaminsModel.useVitaminsStore();
const { show } = useVitaminFormPopup();

const headers: ITableHeader[] = [
  {
    title: "#",
    key: "id",
    width: "20px",
  },
  {
    title: "Название",
    key: "name",
    width: "auto",
  },
  {
    title: "Описание",
    key: "description",
    width: "auto",
  },
  {
    title: "Изображение",
    key: "image",
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

function handleEditClick(item: VitaminsModel.IVitamin) {
  show(item);
}
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
