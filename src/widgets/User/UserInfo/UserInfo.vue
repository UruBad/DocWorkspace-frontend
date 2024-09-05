<template>
  <div class="user-info" id="about">
    <UserAbout :user="user" />
    <UserAptitudes :aptitudes="user.aptitudes" />
    <UserProblems :problems="user.problems" />
    <UserServices :services="user.services" />
  </div>
</template>

<script setup lang="ts">
import type { IUser } from "@/entities/User/model";
import { UserAbout } from "@/entities/User";
import { UserAptitudes } from "@/widgets/User/UserAptitudes";
import { UserProblems } from "@/widgets/User/UserProblems";
import { UserServices } from "@/widgets/User/UserServices";

interface IProps {
  user: IUser;
}
defineProps<IProps>();
</script>

<style lang="scss" scoped>
.user-info {
}
</style>
