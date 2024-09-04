<template>
  <aside class="sidebar">
    <div class="scroll-sidebar">
      <VNavigation
        class="scroll-sidebar__nav"
        :nav-list="ordersNavList"
      />
    </div>
    <div class="sidebar-footer">
      <div class="row">
        <div class="col-4 link-wrap">
          <!-- item-->
          <a href="" class="link" data-toggle="tooltip" title="" data-original-title="Settings"><i class="ti-settings"></i></a>
        </div>
        <div class="col-4 link-wrap">
          <!-- item-->
          <a href="" class="link" data-toggle="tooltip" title="" data-original-title="Email"><i class="mdi mdi-gmail"></i></a>
        </div>
        <div class="col-4 link-wrap">
          <!-- item-->
          <a href="" class="link" data-toggle="tooltip" title="" data-original-title="Logout"><i class="mdi mdi-power"></i></a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">

import { VNavigation } from '@/shared/ui/navigation';
</script>



<style scoped lang="scss">

</style>
