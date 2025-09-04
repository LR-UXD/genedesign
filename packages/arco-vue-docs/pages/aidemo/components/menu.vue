<template>
    <div class="menu-demo">
        <a-menu :style="{ width: '222px', height: '100%' }" :default-open-keys="['0']" :default-selected-keys="['0_2']"
            breakpoint="xl" @collapse="onCollapse">
            <div class="logo">
                <img src="../assets/logo.svg" alt="logo" />
            </div>

            <a-menu-item key="0">
                <template #icon><icon-apps /></template>
                Chat to Create
            </a-menu-item>

            <a-menu-item key="1">
                <template #icon><icon-apps /></template>
                Customized Generation
            </a-menu-item>

            <a-menu-item key="2">
                <template #icon><icon-apps /></template>
                Scribble
            </a-menu-item>

            <a-menu-item key="3">
                <template #icon><icon-apps /></template>
                Edit
            </a-menu-item>

            <a-menu-item key="4">
                <template #icon><icon-apps /></template>
                Video Creation
            </a-menu-item>

            <a-menu-item key="5">
                <template #icon><icon-apps /></template>
                Playlist Creation
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script setup>
import { Message } from 'genedesign';
import { IconApps } from 'genedesign/es/icon';

const onCollapse = (val, type) => {
    const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
    Message.info({
        content,
        duration: 2000,
    });
};
</script>

<style scoped>
.menu-demo {
    box-sizing: border-box;
    width: 222px;
    height: 800px;
}

.logo {
    margin: 16px 0 8px;
}

.menu-demo :deep(.arco-menu-light) {
    background: rgba(255, 255, 255, 0.63);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.menu-demo :deep(.arco-menu-inner) {
    padding: 0 12px;
}

.menu-demo :deep(.arco-menu-inline-header),
.menu-demo :deep(.arco-menu-item) {
    background: transparent;
}

.menu-demo :deep(.arco-menu .arco-menu-item .arco-menu-icon) {
    margin-right: 8px;
}

.menu-demo :deep(.arco-menu-item) {
    padding: 0 0 0 10px;
}

.menu-demo :deep(.arco-menu-vertical .arco-menu-item.arco-menu-has-icon .arco-menu-title) {
    font-family: Segoe UI Variable;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.5px;
    vertical-align: middle;
}

.menu-demo :deep(.arco-menu-light .arco-menu-item.arco-menu-selected) {
    font-weight: 600;
}

.menu-demo :deep(.arco-menu-light .arco-menu-inline-header.arco-menu-selected):hover,
.menu-demo :deep(.arco-menu-light .arco-menu-item.arco-menu-selected),
.menu-demo :deep(.arco-menu-light .arco-menu-item):hover,
.menu-demo :deep(.arco-menu-light .arco-menu-inline-header):hover {
    background: rgba(0, 28, 59, 0.1);
    border-radius: 6px;
    font-weight: 600;
}
</style>
