<template>
  <div class="table">
    <table class="table-data">
      <thead>
        <tr :class="{ 'table-data--loading': isLoading }">
          <th
            v-for="(field, index) in headers"
            :key="`table-header-${index}`"
            :style="{ width: field.width, minWidth: field.width }"
          >
            {{ field.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoading" class="table-data--empty">
          <td :colspan="headers.length">
            <BarsLoader />
          </td>
        </tr>
        <tr v-else-if="isEmpty" class="table-data--loading">
          <td :colspan="headers.length">
            <span>Нет данных</span>
          </td>
        </tr>
        <tr
          v-for="(item, index) in rows"
          :key="`table-row-${index}`"
          :class="{ 'data-table__row_loading': isLoading }"
        >
          <td v-for="field in headers" :key="field.key">
            <slot :name="field.key" :row="item">
              {{ getFieldValue(field.key, item) }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup generic="T extends IBaseItem">
import { computed, onMounted } from "vue";
import type { ITableHeader } from "./types";
import { BarsLoader } from "../loaders";
import type { IBaseItem } from "@/shared/api/backend";
import { useIsLoading } from "@/shared/lib/use/useIsLoading";
import { isObjKey } from "@/shared/lib/utils/object";

interface IProps {
  headers: ITableHeader[];
  rows: T[];
  loadDataFunction: () => Promise<void>;
}

const props = defineProps<IProps>();

const { isLoading, startLoading, finishLoading } = useIsLoading();

const isEmpty = computed(() => props.rows.length === 0);

const getFieldValue = (key: string, obj: T) =>
  isObjKey<T>(key, obj) ? obj[key] : "";

async function loadData() {
  startLoading();

  await props.loadDataFunction();

  finishLoading();
}

onMounted(loadData);
</script>

<style lang="scss" scoped>
.table {
  padding: 1.25rem;
  margin-bottom: 30px;
  border: 1px solid #d7dfe3;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  color: #455a64;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;

  &-data {
    color: #54667a;
    vertical-align: top;
    border-color: #e9ecef;
    width: 100%;
    flex: 1 1 auto;
    text-align: center;

    & > thead {
      vertical-align: bottom;

      th {
        padding: 1rem;
      }
    }

    & > tbody {
      td {
        padding: 1rem;
        font-weight: 300;
        font-size: 16px;
      }
    }

    & > :not(:last-child) > :last-child > * {
      border-bottom: 1px solid #e9ecef;
    }
  }
}
</style>
