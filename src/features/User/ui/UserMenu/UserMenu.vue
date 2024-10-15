<template>
  <div class="user-menu">
    <VSidebar class="user-menu-nav" :nav-list="navList" />
  </div>
</template>

<script setup lang="ts">
import { SessionModel } from "@/entities/Session";
import { computed, markRaw } from "vue";
import { useAppRoutes } from "@/app/providers";
import { VSidebar } from "@/shared/ui/navigation";
import { IconPatient, IconDoctor, IconVitamin } from "@/shared/ui/icons";
import { UserModel } from "@/entities/User";

const session = SessionModel.useSessionStore();
const appRoutes = useAppRoutes();

const navList = computed(() => {
  const list = [
    {
      to: appRoutes.getWorkspacePatients(),
      label: "Пациенты",
      icon: markRaw(IconPatient),
      isActive: false,
    },
    {
      to: appRoutes.getWorkspaceVitamins(),
      label: "Витамины",
      icon: markRaw(IconVitamin),
      isActive: false,
    },
  ];

  if (session.user.role === UserModel.ERole.ADMIN) {
    list.unshift({
      to: appRoutes.getWorkspaceDoctors(),
      label: "Врачи",
      icon: markRaw(IconDoctor),
      isActive: false,
    });
  }

  return list;
});
</script>

<style scoped lang="scss">
.user-menu {
  position: relative;
}
</style>
