<template>
  <VForm
    class="vitamin-form"
    button-submit-txt="Сохранить"
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
  >
    <VeeInputName />

    <VeeInputDescription />

    <VeeInputLink />

    <VeeInputImage />

    <VeeCheckboxDeleted />
  </VForm>
</template>

<script setup lang="ts">
import { VForm } from "@/shared/ui/form";

import { useForm } from "vee-validate";
import { object } from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { useAlertsStore } from "@/shared/ui/TheAlerts";
import { VitaminsModel } from "@/entities/Vitamins";
import {
  VeeInputDescription,
  VeeInputImage,
  VeeInputLink,
  VeeInputName,
  VeeCheckboxDeleted,
} from "@/entities/Vitamins";

const emit = defineEmits(["completed"]);

interface IProps {
  vitamin?: VitaminsModel.IVitamin;
}

const props = defineProps<IProps>();

const { showError } = useAlertsStore();
const { create, update } = VitaminsModel.useVitaminsStore();

const validationSchema = toTypedSchema(object(VitaminsModel.validator));

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: props.vitamin || {},
});

const onSubmit = handleSubmit(async (formData) => {
  try {
    const vitamin = {
      name: formData.name,
      description: formData.description || "",
      link: formData.link,
      image: formData.image,
      deleted: formData.deleted || false,
    } as VitaminsModel.IVitamin;

    if (!props.vitamin?.id) {
      await create(vitamin);
    } else {
      await update(props.vitamin.id, vitamin);
    }
    // showSuccess("Order successfully created");*/
    emit("completed");
  } catch (e: unknown) {
    if (e instanceof Error) {
      showError(e.message);
    }
  }
});
</script>

<style lang="scss" scoped>
.vitamin-form {
  width: 500px;
}
</style>
