<template>
  <div class="user-actions">
    <UserEdit :user="user" />
    <UserRevert v-if="isDeleted" :user="user" @completed="handleComplete" />
    <UserRemove v-else :user="user" @completed="handleComplete" />
    <UserPrescription v-if="isPatient" :user="user" />
  </div>
</template>

<script setup lang="ts">
import { UserModel } from "@/entities/User";
import {
  UserEdit,
  UserPrescription,
  UserRemove,
  UserRevert,
} from "@/features/User";
import { computed } from "vue";

interface IProps {
  user: UserModel.IUser;
}

const props = defineProps<IProps>();

const emit = defineEmits(["completed"]);

const isDeleted = computed(() => props.user.deleted);

const isPatient = computed(() => props.user.role === UserModel.ERole.PATIENT);

const handleComplete = () => {
  emit("completed");
};
</script>

<style scoped lang="scss">
.user-actions {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
