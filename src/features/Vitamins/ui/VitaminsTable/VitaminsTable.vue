<template>
  <div class="vitamins-table">
    <VTable :headers="headers" :load-data-function="getAll" :rows="vitamins">
      <template #deleted="{ row }">
        <IconCheck class="deleted_checked" v-if="isDeleted(row)" />
      </template>
      <template #actions="{ row }">
        <div class="actions">
          <ButtonEdit
            title="Редактировать"
            :icon-size="EAppPixelSize.ls"
            @click="handleEditClick(row)"
          />
          <ButtonRevert
            v-if="isDeleted(row)"
            title="Разархивировать"
            :icon-size="EAppPixelSize.ls"
            @click="handleRevertClick(row)"
          />
          <ButtonRemove
            v-else
            title="Архивировать"
            :icon-size="EAppPixelSize.ls"
            @click="handleRemoveClick(row)"
          />
        </div>
      </template>
    </VTable>
  </div>
</template>

<script lang="ts" setup>
import { VitaminsModel } from "@/entities/Vitamins";
import { ButtonEdit, ButtonRemove, ButtonRevert } from "@/shared/ui/buttons";
import { type ITableHeader, VTable } from "@/shared/ui/VTable";
import { EAppPixelSize } from "@/shared/lib/types/app";
import { useVitaminFormPopup, useVitaminsTable } from "../../model";
import { useAlertsStore } from "@/shared/ui/TheAlerts";
import { IconCheck } from "@/shared/ui/icons";

const { getAll, destroy, vitamins, revert } = useVitaminsTable();
const { show } = useVitaminFormPopup();
const { showError, showSuccess } = useAlertsStore();

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

const isDeleted = (row: VitaminsModel.IVitamin) => row.deleted;

const handleEditClick = (item: VitaminsModel.IVitamin) => {
  show(item);
};

const handleRemoveClick = async (item: VitaminsModel.IVitamin) => {
  try {
    await destroy(item.id);

    showSuccess("Витамин удален");
    getAll();
  } catch (e: unknown) {
    if (e instanceof Error) {
      showError(e.message);
    }
  }
};

const handleRevertClick = async (item: VitaminsModel.IVitamin) => {
  try {
    await revert(item.id);

    showSuccess("Витамин восстановлен");
    getAll();
  } catch (e: unknown) {
    if (e instanceof Error) {
      showError(e.message);
    }
  }
};
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.deleted_checked {
  color: var(--color__light-blue);
}
</style>
