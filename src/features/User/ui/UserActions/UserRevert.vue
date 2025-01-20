<template>
  <div class="user-revert-button">
    <ButtonRevert :icon-size="EAppPixelSize.ls" @click="handleRevertClick" />
  </div>
</template>

<script setup lang="ts">
import { EAppPixelSize } from "@/shared/lib/types/app";
import { ButtonRevert } from "@/shared/ui/buttons";
import { UserModel } from "@/entities/User";
import { useAlertsStore } from "@/shared/ui/TheAlerts";

const emit = defineEmits(["completed"]);

interface IProps {
  user: UserModel.IUser;
}

const props = defineProps<IProps>();

const { showError, showSuccess } = useAlertsStore();
const { revert: revertPatient } = UserModel.usePatientsStore();
const { revert: revertDoctor } = UserModel.useDoctorsStore();

const handleRevertClick = async () => {
  try {
    if (!props.user?.id) {
      return;
    }
    if (props.user?.role === UserModel.ERole.DOCTOR) {
      await revertDoctor(props.user?.id);
    } else {
      await revertPatient(props.user?.id);
    }
    showSuccess("Востановление прошло успешно");
    emit("completed");
  } catch (e: unknown) {
    if (e instanceof Error) {
      showError(e.message);
    }
  }
};
</script>

<style scoped lang="scss"></style>
