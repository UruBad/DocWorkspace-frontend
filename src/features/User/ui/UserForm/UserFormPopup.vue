<template>
  <VPopup
    v-if="store.visible"
    :header="title"
    :visible="store.visible"
    @close="close"
  >
    <UserForm :patient="patient" @completed="handleClose" />
  </VPopup>
</template>

<script setup lang="ts">
import { VPopup } from "@/shared/ui/VPopup";
import { useUserFormPopup } from "../../model";
import UserForm from "./UserForm.vue";
import { computed } from "vue";

interface IProps {
  titleAdd: string;
  titleEdit: string;
}

const props = defineProps<IProps>();

const store = useUserFormPopup();
const { patient, close } = store;

const title = computed(() => (patient?.id ? props.titleEdit : props.titleAdd));

const handleClose = () => {
  close();
};
</script>
