<template>
  <div class="user-add-button">
    <ButtonAdd @click="handleClick" />
  </div>
</template>

<script lang="ts" setup>
import { ButtonAdd } from "@/shared/ui/buttons";
import { useUserFormPopup } from "../../model";
import { UserModel } from "@/entities/User";

interface IProps {
  role: UserModel.ERole;
}

const props = defineProps<IProps>();

const { show } = useUserFormPopup();

const handleClick = () => {
  show(props.role);
};
</script>

<style lang="scss" scoped>
.user-add-button {
  max-width: 130px;
  float: right;
}
</style>
