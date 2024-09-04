<template>
  <div class="app-bg" />
  <EmptyLayout v-if="isEmptyLayout" />

  <AdminLayout v-if="isAdminLayout">
    <template v-slot:header>
      <TheAdminHeader />
    </template>
    <template v-slot:navigation>
      <TheSidebar :nav-list="personalAreaNavList" />
    </template>
  </AdminLayout>

  <MainLayout v-else>
    <template v-slot:header>
      <TheHeader />
    </template>

    <template v-slot:footer>
      <TheFooter />
    </template>

    <ButtonSocial />
  </MainLayout>

  <TheAlerts />

  <TheModal />
</template>

<script setup lang="ts">
import "./styles/index.scss";

import { MainLayout, EmptyLayout, AdminLayout, ELayouts } from '@/shared/ui/layouts';
import { TheAlerts, useAlertsStore } from "@/shared/ui/TheAlerts";
import { computed, markRaw, onBeforeMount, provide, reactive } from 'vue';
import { useRoute } from "vue-router";
import { EAppProviders, AppRoutes, useAppStore } from "./providers";
import { AppPages } from "./providers/router";
import { AuthModel } from "@/features/auth";
import { SessionModel, SessionApi } from "@/entities/Session";
import { TheFooter } from "@/widgets/TheFooter";
import { ButtonSocial } from "@/shared/ui/buttons";
import { TheModal } from "@/shared/ui/TheModal";
import { TheHeader, TheAdminHeader } from '@/widgets/Header';
import { TheSidebar } from '@/shared/ui/TheSidebar';
import type { INavItem } from '@/shared/ui/navigation';
import { IconDoctor, IconPatient } from '@/shared/ui/icons';

provide(EAppProviders.AppRoutes, AppRoutes);
provide(EAppProviders.AppPages, AppPages);

useAppStore();

const route = useRoute();
const isEmptyLayout = computed(() => route.meta.layout === ELayouts.empty);
const isAdminLayout = computed(() => route.meta.layout === ELayouts.admin);

const personalAreaNavList = reactive<INavItem[]>([
  {
    to: AppRoutes.getAdmin(),
    label: 'Врачи',
    icon: markRaw(IconDoctor)
  },
  {
    to: AppRoutes.getAdmin(),
    label: 'Пациенты',
    icon: markRaw(IconPatient)
  },
])

const session = SessionModel.useSessionStore();
const auth = AuthModel.useAuth();

const { showError } = useAlertsStore();

onBeforeMount(() => {
  if (!session.refreshToken) return;
  login();
});

async function login() {
  try {
    const { data } = await SessionApi.getToken(session.refreshToken);

    session.setTokens({
      accessToken: data.accessToken,
      refreshToken: data.refresh_token,
    });

    await auth.loadSessionUser(data.user_id);
    await auth.loadStoresData();
  } catch (e: any) {
    showError(e.message);
  }
}
</script>
