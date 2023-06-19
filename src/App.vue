<!--
 * @Description: 
 * @Author: yeeChen
 * @Date: 2023-06-19 10:37:08
 * @LastEditTime: 2023-06-19 15:17:40
 * @LastEditors: yeeChen
-->
<template>
    <div>
        Hello Webpack 123
    </div>
    <h1>
        {{ name }}
    </h1>
</template>

<script setup lang="ts">
import '@/assets/index.less'
import { ref, reactive } from 'vue'
const name = ref<string>('yee')
</script>

<style scoped></style>