<template>
  <div class="table">
    <table class="table-data">
      <thead>
        <tr :class="{ 'table-data--loading': loading }">
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
        <tr
          v-for="(item, index) in tableItems"
          :key="`table-row-${index}`"
          :class="{ 'data-table__row_loading': loading }"
        >
          <td v-for="field in headers" :key="field.key">
            <slot :name="field.key" :row="item">
              {{ item[field.key] || "" }}
            </slot>
          </td>
        </tr>
        <tr v-if="loading" class="table-data--loading">
          <td :colspan="headers.length">
            <BarsLoader />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { ITableHeader } from "./types";
import { BarsLoader } from "../loaders";

interface IProps {
  headers: ITableHeader[];
  loadDataFunction: () => Promise<object[]>;
}

const props = defineProps<IProps>();

const tableItems = ref([]);
const loading = ref(true);

async function loadData() {
  loading.value = true;

  const data = await props.loadDataFunction();

  tableItems.value = data as [];
  loading.value = false;
}

onMounted(loadData);
</script>

<style lang="scss" scoped>
.table {
  padding: 1.25rem;
  margin-bottom: 30px;
  border: 1px solid #d7dfe3;
  border-radius: 4px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
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
