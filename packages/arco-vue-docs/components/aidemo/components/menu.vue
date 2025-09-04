<template>
    <div class="menu-demo">
        <a-menu :style="{ width: '222px', height: '100%' }" :default-open-keys="['0']" :default-selected-keys="['0_2']"
            breakpoint="xl" @collapse="onCollapse">
            <div class="logo">
                <img src="https://uxd.lenovo.com/assets/quantum_logo.svg" alt="logo" />
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

<style scoped lang="less" src="../style/menu.less" />
