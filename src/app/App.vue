<template>
  <div class="app-page container">
    <div class="app-bg" />
    <EmptyLayout v-if="isEmptyLayout" />

    <AdminLayout v-else-if="isAdminLayout">
      <template #header>
        <TheAdminHeader />
      </template>
      <template #navigation>
        <UserSidebar />
      </template>
    </AdminLayout>

    <MainLayout v-else>
      <template #header>
        <TheHeader />
      </template>

      <template #footer>
        <TheFooter />
      </template>

      <ButtonSocial />
    </MainLayout>

    <TheAlerts />

    <TheModal />
  </div>
</template>

<script setup lang="ts">
import "./styles/index.scss";

import {
  MainLayout,
  EmptyLayout,
  AdminLayout,
  ELayouts,
} from "@/shared/ui/layouts";
import { TheAlerts, useAlertsStore } from "@/shared/ui/TheAlerts";
import { computed, onBeforeMount, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
import { EAppProviders, AppRoutes, useAppStore } from "./providers";
import { AppPages } from "./providers/router";
import { AuthModel } from "@/features/auth";
import { SessionModel, SessionApi } from "@/entities/Session";
import { TheFooter } from "@/widgets/TheFooter";
import { ButtonSocial } from "@/shared/ui/buttons";
import { TheModal } from "@/shared/ui/TheModal";
import { TheHeader, TheAdminHeader } from "@/widgets/Header";
import { UserSidebar } from "@/widgets/User/UserSidebar";

provide(EAppProviders.AppRoutes, AppRoutes);
provide(EAppProviders.AppPages, AppPages);

useAppStore();

const route = useRoute();
const router = useRouter();
const isEmptyLayout = computed(() => route.meta.layout === ELayouts.empty);
const isAdminLayout = computed(() => route.meta.layout === ELayouts.admin);

const session = SessionModel.useSessionStore();
const auth = AuthModel.useAuth();

const { showError } = useAlertsStore();

onBeforeMount(async () => {
  if (!session.refreshToken) return;
  await login();
});

async function login() {
  try {
    const result = await SessionApi.getToken();
    if (result) {
      const { data } = result;

      session.setTokens(data);

      await auth.loadSessionUser();
    }
  } catch (e: unknown) {
    session.logout();
    router.push(AppRoutes.getMain());
    if (e instanceof Error) {
      showError(e.message);
    }
  }
}
</script>
