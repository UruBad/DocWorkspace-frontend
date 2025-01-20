<template>
  <VForm
    class="patient-form"
    button-submit-txt="Сохранить"
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
  >
    <VeeInputLastname />

    <VeeInputFirstname />

    <VeeInputUsername />

    <VeePassword />

    <VeeCheckboxDeleted />
  </VForm>
</template>

<script setup lang="ts">
import { VForm } from "@/shared/ui/form";

import { useForm } from "vee-validate";
import { object } from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { useAlertsStore } from "@/shared/ui/TheAlerts";
import {
  UserModel,
  VeeCheckboxDeleted,
  VeeInputFirstname,
  VeeInputLastname,
  VeeInputUsername,
  VeePassword,
} from "@/entities/User";
import { computed } from "vue";
import { useUserForm } from "@/features/User/model";

const emit = defineEmits(["completed"]);

interface IProps {
  patient?: UserModel.IUser;
}

const props = defineProps<IProps>();

const { showError, showSuccess } = useAlertsStore();
const { createPatient, updatePatient, createDoctor, updateDoctor } =
  useUserForm();

const validationSchema = toTypedSchema(object(UserModel.validator));

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: props.patient || {},
});

const isPatient = computed(
  () => props.patient?.role === UserModel.ERole.PATIENT
);

const onSubmit = handleSubmit(async (formData) => {
  try {
    const user = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      username: formData.username,
      password: formData.password,
      deleted: formData.deleted || false,
    } as UserModel.ICreateUser;

    if (!props.patient?.id) {
      await (isPatient.value ? createPatient(user) : createDoctor(user));
    } else {
      await (isPatient.value
        ? updatePatient(props.patient.id, user)
        : updateDoctor(props.patient.id, user));
    }

    showSuccess("Order successfully created");
    emit("completed");
  } catch (e: unknown) {
    if (e instanceof Error) {
      showError(e.message);
    }
  }
});
</script>

<style lang="scss" scoped>
.patient-form {
  width: 500px;
}
</style>
