<template>
  <div class="user-about">
    <div class="user-about__avatar">
      <img
        class="user-about__avatar-img"
        :src="avatarSrc"
        :alt="`${user.username} avatar`"
        loading="lazy"
      />
    </div>

    <div class="user-about__description">
      <div class="user-about__description-wrapper">
        <div class="user-about__description-wrapper__header">
          Врач-эндокринолог со стажем более 3 лет
        </div>
        <div class="user-about__description-wrapper__text">
          Я —
          <span class="user-about__description-wrapper__text-name"
            >Танделова Алина Людвиговна</span
          >, нутрициолог, эксперт антивозрастной и превентивной медицины.
          Специализируюсь на нормализации гормональной регуляции,
          диагностировании и лечении эндокринной системы человека, помогаю
          пациентам и здоровым людям, желающим сохранить здоровье на долгие
          годы, оценить все риски развития серьезных и инвалидизирующих
          заболеваний, а также разработать программу коррекции здоровья и
          комплекс индивидуальных мер, которые позволят человеку избежать
          развития серьезных патологий в будущем.
        </div>
        <div class="user-about__description-wrapper__button">
          <ButtonBase txt="Записаться" @click="click" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IUser } from "../../model";
import { computed } from "vue";
import { BASE_URL } from "@/shared/config";
import { ButtonBase } from "@/shared/ui/buttons";

interface IProps {
  user: IUser;
}
const props = defineProps<IProps>();

const avatarSrc = computed(() => {
  if (props.user.avatar) {
    return props.user.avatar;
  }

  return `${BASE_URL}/image/${props.user.gender}.png`;
});

const click = () => {
  document.getElementById("contacts")?.scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.user-about {
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  padding: 0 0 50px;

  &__avatar {
    max-width: 560px;
    display: inline;
    float: left;
    width: 100%;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;

    &-img {
      float: right;
      width: 100%;
    }
  }

  &__description {
    display: inline;
    float: left;
    width: 100%;
    text-align: left;
    margin: auto 0 auto 20px;

    &-wrapper {
      padding-right: 20px;

      &__header {
        margin: 0;
        padding: 0 0 10px;
        font-size: 42px;
        line-height: 1.25;
        color: var(--color__black);
        font-weight: 600;
      }

      &__text {
        font-size: 18px;
        line-height: 1.55;
        opacity: 0.85;
        font-weight: 300;
        color: var(--color__black);

        &-name {
          font-weight: 500;
        }
      }

      &__button {
        width: 140px;
        display: inline-block;
        padding-top: 10px;
      }
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .user-about {
    max-width: 960px;
    padding: 0;

    &__avatar {
      display: inline;
      float: left;
      margin-left: 10px;
      margin-right: 10px;
      width: 100%;
      max-width: 460px;
    }

    &__description {
      display: inline;
      float: left;
      margin-left: 10px;
      margin-right: 10px;
      width: 100%;
      max-width: 460px;

      &-wrapper {
        padding-right: 20px;

        &__header {
          font-size: 28px;
        }

        &__text {
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-l) {
  .user-about {
    max-width: 640px;

    &__avatar {
      display: block;
      float: none;
      padding-left: 20px;
      padding-right: 20px;
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      max-width: 100%;
    }

    &__description {
      display: block;
      float: none;
      padding-left: 20px;
      padding-right: 20px;
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      max-width: 100%;

      &-wrapper {
        &__button {
          padding-top: 30px;
          padding-bottom: 20px;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-m) {
  .user-about {
    display: block;

    &__avatar {
      margin-bottom: 30px;

      &-img {
        float: none;
      }
    }

    &__description {
      &-wrapper {
        &__header {
          font-size: 24px;
        }

        &__text {
          font-size: 14px;
          line-height: 1.45;
        }
      }
    }
  }
}
</style>
