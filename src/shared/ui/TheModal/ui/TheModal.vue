<template>
  <div class="the-modal" v-if="store.isVisible">
    <dialog
      v-bind="$attrs"
      class="the-modal__dialog"
      @cancel.prevent="store.destroy"
      @close.prevent="store.destroy"
    >
      <div class="the-modal__dialog-header">
        <div class="the-modal__dialog-header__title">{{ modal.header }}</div>
        <ButtonClose
          class="the-modal__dialog-header__button"
          @click="destroy"
        />
      </div>
      <div class="the-modal__dialog-content">
        <div class="the-modal__dialog-content__text">{{ modal.text }}</div>
      </div>
      <div v-if="modal.buttonText" class="the-modal__dialog-buttons">
        <ButtonBase
          class="the-modal__dialog-buttons__button"
          :txt="modal.buttonText"
          @click="destroy"
        />
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "../model";
import { ButtonBase, ButtonClose } from "@/shared/ui/buttons";

const store = useModalStore();
const { modal, destroy } = store;
</script>

<style lang="scss">
.the-modal {
  &::after {
    position: fixed;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }

  &__dialog {
    display: block;
    position: fixed;
    box-sizing: border-box;
    top: 40%;
    flex-flow: column nowrap;
    padding: 0;
    margin: 0 auto;
    overflow: visible;
    background: white;
    border: none;
    border-radius: 4px;
    transform: translate(0, -40%);
    animation: show 0.3s ease 0s 1 normal forwards;
    z-index: var(--z-idx__alerts);
    backdrop-filter: blur(40px);

    &-header {
      padding: 20px;
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      border-bottom: 1px solid #eceff4;

      &__title {
        font-size: 18px;
        font-weight: 600;
        line-height: 23px;
        text-align: left;
        color: #494b50;
      }

      &__button {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
      }
    }

    &-content {
      padding: 20px;

      &__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }

    &-buttons {
      display: flex;
      justify-content: end;
      padding: 20px;

      &__button {
        width: auto !important;
      }
    }
  }
}
@keyframes show {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
