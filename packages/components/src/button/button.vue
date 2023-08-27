<script setup lang="ts">
import { Button } from "ant-design-vue";
import { SearchOutlined } from "@ant-design/icons-vue";
// import "ant-design-vue/dist/antd.css";
</script>

<template>
  <Button>
    <template #icon><SearchOutlined /></template>
    <slot></slot>
  </Button>
</template>

<style lang="less" scoped>
body {
font-size: 20px;
}
</style>

