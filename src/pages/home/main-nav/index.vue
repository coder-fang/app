<template>
  <div class="main-nav">
    <div class="flex flex-wrap grid-cols-2 sm:grid-cols-2 mx-2 mt-2 gap-1">
      <div
        :class="[
          ...boardClasses,
          'flex items-center flex-1 col-auto transition-all duration-200 ease-in-out',
        ]"
      >
        <TriggerUpload class="w-full h-full shadow-sm" title="单击上传" />
        <Vue3Lottie
          class="robot w-1/5 bg-gradient-to-t from-green-100"
          :animation-data="RobotJson"
        />
      </div>
      <div :class="[...boardClasses, 'other w-full bg-gradient-to-b from-green-100']">
        <!-- 我的分享 -->
      </div>
      <div :class="[...boardClasses]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import RobotJson from '@/assets/lotties/robot.json';
import { useFileOutsideStore } from '@/store/modules/file';
import TriggerUpload from '@/components/upload/trigger-upload.vue';

const fileStore = useFileOutsideStore();

const boardClasses = ['rounded'];

const { upload_files } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped>
.main-nav {
  .other {
    height: calc(100vh - 272px);
  }
}
</style>
