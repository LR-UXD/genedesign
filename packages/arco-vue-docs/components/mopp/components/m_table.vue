<template>
    <div class="m_table">
        <div class="a_table_title">LLM Pool</div>
        <a-table :columns="columns" :data="data" :bordered="false" :pagination="pagination" :row-class="rowClass"
            page-position="bottom" @row-click="onRowClick">
            <template #status="{ record }">
                <a-switch v-model="record.status" checked-color="#0085BF" size="small" @change="handleSwitchChange" />
            </template>
            <template #initial="{ record }">
                <div style="display: flex; align-items: center; min-height: 24px;min-width: 120px;">
                    <a-button type="outline" shape="round" v-if="activeRowKey === record.key && record.status"
                        size="mini">
                        <template #icon>
                            <icon-common />
                        </template>Initial Model
                    </a-button>
                </div>
            </template>
        </a-table>
    </div>
</template>



<script setup>
import { ref } from 'vue';


const pagination = { pageSize: 10 }
const activeRowKey = ref('1');



const columns = [
    { title: 'ID', dataIndex: 'id', width: 50 },
    { title: 'Model', dataIndex: 'model', width: 180 },
    { title: 'Type', dataIndex: 'type', width: 150 },
    { title: 'Price(/1M token)', dataIndex: 'price', width: 260 },
    { title: 'Status', slotName: 'status', align: 'center' },
    { title: '', slotName: 'initial' }

];

const data = ref([
    { key: '1', id: '1', model: 'gpt-4.1-mini', type: 'OpenAI', price: '3$/Input, 3$/Output', status: true },
    { key: '2', id: '2', model: 'o3-mini', type: 'Microsoft', price: '6$/Input, 4$/Output', status: true },
    { key: '3', id: '3', model: 'Deepseek-r1', type: 'DeepSeek', price: '0.5$/Input, 2.1$/Output', status: true },
    { key: '4', id: '4', model: 'Deepseek-v3', type: 'Amazon', price: '0.6$/Input, 0.8$/Output', status: true },
    { key: '5', id: '5', model: 'Qwen-7b', type: 'Alibaba', price: '0.7$/Input, 1.3$/Output', status: true },
    { key: '6', id: '6', model: 'Qwen-32b', type: 'IBM', price: '0.7$/Input, 2.2$/Output', status: true },
    { key: '7', id: '7', model: 'Model', type: 'NVIDIA', price: '6$/Input, 4$/Output', status: true },
    { key: '8', id: '8', model: 'Model', type: 'Apple', price: '6$/Input, 4$/Output', status: true },
    { key: '9', id: '9', model: 'Model', type: 'Meta', price: '6$/Input, 4$/Output', status: false },
    { key: '10', id: '10', model: 'Model', type: 'Salesforce', price: '8$/Input, 6$/Output', status: false },
    { key: '11', id: '11', model: 'Deepseek-v3', type: 'Amazon', price: '0.6$/Input, 0.8$/Output', status: true },
    { key: '12', id: '12', model: 'Qwen-7b', type: 'Alibaba', price: '0.7$/Input, 1.3$/Output', status: true },
    { key: '13', id: '13', model: 'Qwen-32b', type: 'IBM', price: '0.7$/Input, 2.2$/Output', status: true }

]);

const rowClass = (record) => {
    if (!record.status) return 'row-disabled';
    if (record.key === activeRowKey.value) return 'row-active';
    return '';
};

const handleSwitchChange = () => {
    data.value = [...data.value];
};

const onRowClick = (record) => {
    if (record.status) activeRowKey.value = record.key;
};
</script>

<style scoped>
.m_table {
    width: 872px;
    padding: 22.5px 24px;
    background: linear-gradient(to bottom,
            rgba(242, 251, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(242, 251, 255, 0.8) 100%);
    box-shadow: 6px 19px 25px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
}

.a_table_title {
    height: 28px;
    line-height: 28px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 8px;
}

.m_table :deep(.arco-table-th),
.m_table :deep(.arco-table-td) {
    background-color: transparent;
}

.m_table :deep(.arco-table thead .arco-table-th) {
    color: #858585;
}

/* .m_table :deep(.arco-table tbody .arco-table-tr:hover) {
    background: linear-gradient(to left, #F1E1ED 2%, #EAEEF5 100%);
} */
.m_table :deep(.arco-table tbody .row-active.arco-table-tr) {
    background: linear-gradient(to left, #F1E1ED 2%, #EAEEF5 100%);
}


.m_table :deep(.arco-table tbody .row-disabled .arco-table-td) {
    color: #9C9C9C;
}

.m_table :deep(.arco-table-hover:not(.arco-table-dragging) .arco-table-tr:not(.arco-table-tr-empty):not(.arco-table-tr-summary):hover .arco-table-td:not(.arco-table-col-fixed-left):not(.arco-table-col-fixed-right)) {
    background: transparent;
}

.m_table :deep(.arco-table .arco-table-cell) {
    padding: 10.5px 16px;
}

.m_table :deep(.arco-pagination-item-active) {
    color: #000;
    background-color: #BFECFF;
}

.m_table :deep(.arco-btn-outline) {
    border: 1px solid rgba(153, 46, 138, .2);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-style: italic;
    font-size: 12px;
    color: #992E8A;
    line-height: 1;
}

.m_table :deep(.arco-btn-outline:hover) {
    color: #992E8A;
}

.m_table :deep(.arco-btn-outline svg) {
    color: #992E8A;
}
</style>
