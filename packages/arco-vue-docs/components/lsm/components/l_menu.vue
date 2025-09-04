<template>
    <div class="menu-demo">
        <a-menu :style="{ width: '68px', height: '100%' }" :default-open-keys="['0']" :default-selected-keys="['0_2']"
            :show-collapse-button="false" breakpoint="xl" default-collapsed='true' collapsed="true"
            :collapsed-width="68">
            <a-sub-menu key="0">
                <template #icon><icon-apps></icon-apps></template>
                <template #title>Navigation 1</template>
                <a-menu-item key="0_0">Menu 1</a-menu-item>
                <a-menu-item key="0_1">Menu 2</a-menu-item>
                <a-menu-item key="0_2">Menu 3</a-menu-item>
                <a-menu-item key="0_3">Menu 4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="1">
                <template #icon><icon-home></icon-home></template>
                <template #title>Navigation 2</template>
                <a-menu-item key="1_0">Menu 1</a-menu-item>
                <a-menu-item key="1_1">Menu 2</a-menu-item>
                <a-menu-item key="1_2">Menu 3</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="2">
                <template #icon><icon-launch></icon-launch></template>
                <template #title>Navigation 3</template>
                <a-menu-item key="2_0">Menu 1</a-menu-item>
                <a-menu-item key="2_1">Menu 2</a-menu-item>
                <a-sub-menu key="2_2" title="Navigation 4">
                    <a-menu-item key="2_2_0">Menu 1</a-menu-item>
                    <a-menu-item key="2_2_1">Menu 2</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <div class="menu_btn">
                <a-button shape="circle" size="large">
                    <icon-bulb />
                </a-button>
                <a-button shape="circle" size="large">
                    <icon-user />
                </a-button>
            </div>
        </a-menu>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Message } from 'genedesign';


</script>
<style scoped>
.menu-demo {
    width: 68px;
    height: 100%;
    box-sizing: border-box;
}

.menu-demo :deep(.arco-menu-light) {
    background: #F3F5FB;
    border-right: 1px solid #E1E2EC;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

}

.menu-demo :deep(.arco-menu-inline-header),
.menu-demo :deep(.arco-menu-item) {
    background: transparent;
}

.menu-demo :deep(.arco-menu-light .arco-menu-pop-header) {
    background-color: transparent;
    padding: 16px 16px 0;
}

.menu-demo :deep(.arco-menu-pop-header .arco-menu-icon svg) {
    width: 28px;
    height: 28px;
}





.menu-demo :deep(.arco-menu-light .arco-menu-inline-header.arco-menu-selected),
.menu-demo :deep(.arco-menu-light .arco-menu-item.arco-menu-selected) {
    color: #6441AB;
    background-color: #E8EEFD;
}

.menu-demo :deep(.arco-menu-light .arco-menu-selected .arco-icon) {
    color: #6441AB;
}

.menu-demo :deep(.arco-menu-vertical .arco-menu-item) {
    margin-bottom: 8px;
}

.menu-demo :deep(.arco-menu-collapse-button) {
    bottom: 36px;
}


.menu_btn {
    position: absolute;
    left: 12px;
    bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-small);
    cursor: pointer;
    gap: 16px;
}

.menu_btn svg {
    width: 16px;
    height: 16px;
}

.menu_btn :deep(.arco-btn-secondary) {
    background-color: #E5E7EC;

}
</style>
