<template>
  <aside class="user-sidebar">
    <UserMenu />
    <div class="user-sidebar__footer">
      <div class="user-sidebar__footer__buttons">
        <div class="user-sidebar__footer__buttons__container">
          <LogoutButton
            :icon-size="EAppPixelSize.s"
            class="user-sidebar__footer__buttons__container-button"
          />
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { UserMenu } from "@/features/User/ui/UserMenu";
import { LogoutButton } from "@/features/auth";
import { EAppPixelSize } from "@/shared/lib/types/app";
</script>

<style scoped lang="scss">
.user-sidebar {
  position: absolute;
  width: 240px;
  height: 100%;
  top: 0px;
  z-index: 10;
  padding-top: 70px;
  box-shadow: 1px 0px 20px var(--color__black--shadow);
  box-sizing: border-box;

  &__footer {
    background: var(--color__grey--background);
    position: fixed;
    z-index: 10;
    bottom: 0px;
    left: 0px;
    transition: 0.2s ease-out;
    width: 240px;
    border-top: 1px solid var(--color__grey--border);

    &__buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      &__container {
        padding: 15px;
        text-align: center;
        flex: 0 0 auto;
        width: 33.3333333333%;
        box-sizing: border-box;

        &-button {
          margin: 0 auto;
          color: var(--color__black--transparent);

          &:hover {
            color: var(--color__turquoise);
          }
        }
      }
    }
  }
}
</style>
