<template>
  <div class="user-edit-button">
    <ButtonEdit :icon-size="EAppPixelSize.ls" @click="handleEditClick" />
  </div>
</template>

<script lang="ts" setup>
import { ButtonEdit } from "@/shared/ui/buttons";
import { useUserFormPopup } from "../../model";
import { UserModel } from "@/entities/User";
import { EAppPixelSize } from "@/shared/lib/types/app";

interface IProps {
  user: UserModel.IUser;
}

const props = defineProps<IProps>();

const { show } = useUserFormPopup();

const handleEditClick = () => {
  show(props.user);
};
</script>

<style lang="scss" scoped>
.patients-button {
  max-width: 130px;
  float: right;
}
</style>
