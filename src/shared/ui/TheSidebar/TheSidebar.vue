<template>
  <aside class="sidebar">
    <div class="scroll-sidebar">
      <VNavigation
        class="scroll-sidebar__nav"
        :nav-list="navList"
      />
    </div>
    <div class="sidebar-footer">
      <div class="row">
        <div class="col-4 link-wrap">
          <ButtonOff />
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { type INavItem, VNavigation } from '@/shared/ui/navigation';
import { ButtonOff } from '@/shared/ui/buttons';

defineProps<{ navList: INavItem[] }>()
</script>



<style scoped lang="scss">

</style>
