

<template>
  <a-button>
    <template #icon><SearchOutlined /></template>
    <slot></slot>
  </a-button>
</template>

<script setup lang="ts">
import { Button as AButton } from "ant-design-vue";
import { SearchOutlined } from "@ant-design/icons-vue";

defineOptions({
  name: 'MyButton'
})
</script>

<style lang="less" scoped>
body {
  font-size: 20px;
}
</style>
