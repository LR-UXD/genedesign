<template>
    <div class="l_tab">
        <div class="l_tab_title">
            <div>Mode settings</div>
            <a-button type="outline" shape="round">Apply "Auto"</a-button>
        </div>
        <a-tabs :editable="true" @add="handleAdd" @delete="handleDelete" show-add-button auto-switch>
            <a-tab-pane v-for="(item, index) of data" :key="item.key" :title="item.title" :closable="index !== 2">
                <Lcard />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Lcard from './l_card.vue';


let count = 5;


const data = ref([
    {
        key: '1',
        title: 'Auto',
        content: 'Content of Tab Panel 1'
    },
    {
        key: '2',
        title: 'My Mode 1',
        content: 'Content of Tab Panel 2'
    },
    {
        key: '3',
        title: 'My Mode 2',
        content: 'Content of Tab Panel 3'
    },
    {
        key: '4',
        title: 'My Mode 3',
        content: 'Content of Tab Panel 4'
    },
    {
        key: '5',
        title: 'My Mode 4',
        content: 'Content of Tab Panel 5'
    },
    {
        key: '6',
        title: 'My Mode 5',
        content: 'Content of Tab Panel 6'
    },
    {
        key: '7',
        title: 'My Mode 6',
        content: 'Content of Tab Panel 7'
    }
]);

const handleAdd = () => {
    const number = count++;
    data.value = data.value.concat({
        key: `${number}`,
        title: `New Tab ${number}`,
        content: `Content of New Tab Panel ${number}`
    })
};
const handleDelete = (key) => {
    data.value = data.value.filter(item => item.key !== key)
};



</script>
<style scoped>
.l_tab {
    margin-top: 30px;
}

.l_tab :deep(.arco-tabs-nav-tab-list .arco-tabs-tab-active) {
    color: #4F3387;
}

.l_tab :deep(.arco-tabs-nav-ink) {
    background-color: #6441AB;
}

.l_tab_title {
    display: flex;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    margin-bottom: 8px;
    align-items: center;
    justify-content: space-between;
}
</style>
