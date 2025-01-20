<template>
  <div class="user-remove-button">
    <ButtonRemove :icon-size="EAppPixelSize.ls" @click="handleRemoveClick" />
  </div>
</template>

<script setup lang="ts">
import { EAppPixelSize } from "@/shared/lib/types/app";
import { ButtonRemove } from "@/shared/ui/buttons";
import { UserModel } from "@/entities/User";
import { useAlertsStore } from "@/shared/ui/TheAlerts";

const emit = defineEmits(["completed"]);

interface IProps {
  user: UserModel.IUser;
}

const props = defineProps<IProps>();

const { showError, showSuccess } = useAlertsStore();
const { destroy: destroyPatient } = UserModel.usePatientsStore();
const { destroy: destroyDoctor } = UserModel.useDoctorsStore();

const handleRemoveClick = async () => {
  try {
    if (!props.user?.id) {
      return;
    }
    if (props.user?.role === UserModel.ERole.DOCTOR) {
      await destroyDoctor(props.user?.id);
    } else {
      await destroyPatient(props.user?.id);
    }
    showSuccess("Удаление прошло успешно");
    emit("completed");
  } catch (e: unknown) {
    if (e instanceof Error) {
      showError(e.message);
    }
  }
};
</script>

<style scoped lang="scss"></style>
