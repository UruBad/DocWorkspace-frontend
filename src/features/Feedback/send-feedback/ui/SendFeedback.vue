<template>
  <div class="send-feedback" id="contacts">
    <div class="send-feedback__background"></div>
    <div class="send-feedback__wrapper">
      <div class="send-feedback__wrapper-block">
        <div class="send-feedback__wrapper-block__main">
          <div class="send-feedback__wrapper-block__main-title">
            Записаться на прием
          </div>
          <div class="send-feedback__wrapper-block__main-description">
            Напишите сейчас и получите первую консультацию бесплатно
          </div>
          <VForm
            class="send-feedback__wrapper-block__main-form"
            button-submit-txt="Оставить заявку"
            :handler-submit="onSubmit"
          >
            <VeeInputEmail />

            <VeeInputPhone />

            <VeeInputName />
          </VForm>
          <div class="send-feedback__wrapper-block__main-text">
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь c политикой конфиденциальности
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VeeInputEmail, VeeInputPhone, VForm } from "@/shared/ui/form";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object } from "yup";
import { validator } from "@/entities/Feedback/model";
import { VeeInputName } from "@/entities/User";
import { FeedbackApi } from "@/entities/Feedback";
import { useModalStore } from "@/shared/ui/TheModal";

const { showModal } = useModalStore();

const validationSchema = toTypedSchema(object(validator));

const { handleSubmit, handleReset } = useForm({
  validationSchema,
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await FeedbackApi.sendFeedback(values);
    showModal(
      "Я получила ваш запрос и свяжусь с Вами как можно скорее.",
      "Запись на прием"
    );
    handleReset();
  } catch (e: unknown) {
    if (e instanceof Error) {
      showModal(e.message, "Ошибка");
    }
  }
});
</script>

<style lang="scss" scoped>
.send-feedback {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  vertical-align: middle;
  position: relative;
  background-attachment: fixed;
  background-image: url("@/shared/assets/image/background.png");
  height: 968px;

  &__background {
    background-color: var(--color__black);
    opacity: 0.5;
    height: 100%;
    width: 100%;
  }

  &__wrapper {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1200px;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    &-block {
      margin: 0 auto;
      max-width: 760px;
      width: 100%;
      height: 100%;
      display: table;

      &__main {
        display: table-cell;
        width: 1200px;
        vertical-align: middle;
        padding: 0 20px;

        &-title {
          color: var(--color__white);
          margin-bottom: 40px;
          font-size: 42px;
          line-height: 1.23;
          font-weight: 600;
        }
        &-description {
          color: var(--color__white);
          margin-bottom: 50px;
          font-size: 20px;
          line-height: 1.55;
          font-weight: 300;
        }
        &-form {
          max-width: 560px;
          margin: 0 auto;
          text-align: left;
          transition: max-height 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          max-height: 15000px;
        }
        &-text {
          color: #fff;
          margin-top: 30px;
          margin-bottom: 30px;
          font-size: 15px;
          line-height: 1.55;
          font-weight: 300;
        }
      }
    }
  }
}
</style>
