<template>
  <div class="popup">
    <dialog
      v-if="open"
      class="popup__dialog"
      @cancel.prevent="close"
      @close.prevent="close"
    >
      <div class="popup__dialog-header">
        <div class="popup__dialog-header__title">
          {{ props.header }}
        </div>
        <ButtonClose class="popup__dialog-header__button" @click="close" />
      </div>
      <div class="popup__dialog-content">
        <slot></slot>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ButtonClose } from "@/shared/ui/buttons";

const emit = defineEmits(["close"]);

interface IProps {
  header: string;
  visible: boolean;
}

const props = defineProps<IProps>();

const open = ref(props.visible);

function close() {
  emit("close");
}
</script>

<style lang="scss" scoped>
.popup {
  &::after {
    position: fixed;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 50;
  }

  &__dialog {
    display: block;
    position: fixed;
    box-sizing: border-box;
    top: 20%;
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
