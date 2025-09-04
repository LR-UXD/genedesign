<template>
    <div class="menu-demo" :style="{ width: collapsed ? '60px' : '222px' }">
        <a-menu :style="{ width: collapsed ? '60px' : '222px', height: '840px' }" :default-open-keys="['0']"
            :default-selected-keys="['0_2']" show-collapse-button breakpoint="xl" @collapse="onCollapse">
            <a-menu-item key="0">
                <template #icon><icon-apps /></template>
                Dashboard
            </a-menu-item>
            <a-menu-item key="1">
                <template #icon><icon-apps /></template>
                Task
            </a-menu-item>
            <a-menu-item key="2">
                <template #icon><icon-apps /></template>
                Monitor
            </a-menu-item>
            <a-sub-menu key="3">
                <template #icon><icon-apps /></template>
                <template #title>Log</template>
                <a-menu-item key="0_0">Log 1</a-menu-item>
                <a-menu-item key="0_1">Log 2</a-menu-item>
                <a-menu-item key="0_2">Log 3</a-menu-item>
                <a-menu-item key="0_3">Log 4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="4">
                <template #icon><icon-bug /></template>
                <template #title>System</template>
                <a-menu-item key="1_0">System 1</a-menu-item>
                <a-menu-item key="1_1">System 2</a-menu-item>
                <a-menu-item key="1_2">System 3</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="5">
                <template #icon><icon-apps /></template>
                Workspace
            </a-menu-item>

            <div class="menu_set" v-show="!collapsed">
                <icon-bulb />
                <span>Preference</span>
            </div>
        </a-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Message } from 'genedesign';
import { IconMenuFold, IconMenuUnfold, IconApps, IconBug, IconBulb } from 'genedesign/es/icon';





const collapsed = ref(false);
const onCollapse = (val, type) => {
    collapsed.value = val;
    const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
    Message.info({
        content,
        duration: 2000,
    });
};




</script>



<style scoped>
.menu-demo {
    /* width: 222px; */
    box-sizing: border-box;

}

.menu-demo :deep(.arco-menu-light) {
    background: #fff;

}

.menu-demo :deep(.arco-menu-inline-header),
.menu-demo :deep(.arco-menu-item) {
    background: transparent;
}

.menu-demo :deep(.arco-menu-light .arco-menu-inline-header.arco-menu-selected),
.menu-demo :deep(.arco-menu-light .arco-menu-item.arco-menu-selected) {
    color: #1857EB;
    background-color: #E8EEFD;
}

.menu-demo :deep(.arco-menu-light .arco-menu-selected .arco-icon) {
    color: #1857EB;
}

.menu-demo :deep(.arco-menu-vertical .arco-menu-item) {
    margin-bottom: 8px;
}

.menu-demo :deep(.arco-menu-collapse-button) {
    bottom: 36px;
}

.menu_set {
    position: absolute;
    left: 12px;
    bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-small);
    cursor: pointer;
}

.menu_set span {
    margin-left: 12px;
    color: #4E6959;
}
</style>
