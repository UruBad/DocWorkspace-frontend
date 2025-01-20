<template>
  <div class="user-add-button">
    <ButtonPrescription @click="handleClick" />
  </div>
</template>

<script lang="ts" setup>
import { ButtonPrescription } from "@/shared/ui/buttons";
import { useRouter } from "vue-router";
import { AppRoutes } from "@/app/providers";
import { UserModel } from "@/entities/User";

interface IProps {
  user: UserModel.IUser;
}

const props = defineProps<IProps>();

const router = useRouter();

const handleClick = () => {
  router.push(AppRoutes.getWorkspacePrescriptions(props.user.id));
};
</script>

<style lang="scss" scoped>
.user-add-button {
  max-width: 130px;
  float: right;
}
</style>
