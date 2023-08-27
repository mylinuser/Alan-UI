

<template>
  <a-button>
    <template #icon><SearchOutlined /></template>
    <slot></slot>
  </a-button>
</template>

<script>
import { Button } from "ant-design-vue";
import { SearchOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    AButton: Button,
    SearchOutlined
  },
}
</script>

<style lang="less" scoped>
body {
  font-size: 20px;
}
</style>
