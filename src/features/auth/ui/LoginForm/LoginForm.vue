<template>
  <div class="login-form">
    <div class="login-form__logo">
      <ImagePreview class="login-form__logo-item" :image="imageSettings" />
    </div>
    <VForm
      button-submit-txt="Войти"
      :is-submitting="isSubmitting"
      :handler-submit="onSubmit"
    >
      <div class="column gap-m w-100">
        <VeeInput name="username" placeholder="Логин" />

        <VeeInputPassword />
      </div>
    </VForm>
  </div>
</template>

<script setup lang="ts">
import { VeeInput, VeeInputPassword, VForm } from "@/shared/ui/form";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string } from "yup";
import { SessionApi, SessionModel } from "@/entities/Session";
import { useAlertsStore } from "@/shared/ui/TheAlerts";
import { useAuth } from "../../model";
import { useRouter } from "vue-router";
import { useAppRoutes } from "@/app/providers";
import { computed } from "vue";
import { BASE_URL } from "@/shared/config";
import { ImagePreview } from "@/shared/ui/files";

const router = useRouter();
const appRoutes = useAppRoutes();

const { showError } = useAlertsStore();
const session = SessionModel.useSessionStore();
const auth = useAuth();

const validationSchema = toTypedSchema(
  object({
    username: string().required("введите логин"),
    password: string().required("введите пароль"),
  })
);

const { handleSubmit, isSubmitting } = useForm({ validationSchema });

const imageSettings = computed(() => {
  return {
    src: `${BASE_URL}/image/dw.png`,
    alt: "DocWorkSpace",
  };
});

const onSubmit = handleSubmit(async (values) => {
  try {
    const { data } = await SessionApi.singIn(values);

    session.setTokens(data);

    await auth.loadSessionUser(data.localId);
    await auth.loadStoresData();

    goToPersonalArea();
  } catch (e: unknown) {
    if (e instanceof Error) {
      showError(e.message);
    }
  }
});

function goToPersonalArea() {
  router.push(appRoutes.getAdmin());
}
</script>
<style lang="scss" scoped>
.login-form {
  position: relative;
  margin-top: 30% !important;
  padding-top: 60px !important;

  &__logo {
    position: absolute;
    left: 50%;
    top: -34px;
    margin-left: -75px;

    &-item {
      width: 150px;
    }
  }
}
</style>
