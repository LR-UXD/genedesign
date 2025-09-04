<template>
    <div class="tab_content">
        <div class="tab_content_header">
            <a-space direction="vertical" size="large">
                <a-input-search :style="{ width: '220px', height: '36px' }" placeholder="Enter keyword to search" />
            </a-space>
            <div class="tab_content_header_right">
                <a-button size="large">
                    <icon-calendar style="margin-right: 8px;" />
                    Datasource Management
                </a-button>
                <a-button class="btn_plus" size="large"> <icon-plus style="margin-right: 8px;" />new
                    Pipeline</a-button>
            </div>
        </div>
        <div class="table_box">
            <a-space direction="vertical" size="large" fill>
                <a-table row-key="name" :columns="columns" :data="data" :row-selection="rowSelection"
                    v-model:selectedKeys="selectedKeys" page-position="bottom" :pagination="pagination"
                    :bordered="{ cell: true }">
                    <template #actions="{ record, rowIndex }">
                        <a-button type="text" size="mini" @click="handleEdit(record, rowIndex)">Edit</a-button>
                        <a-button type="text" size="mini" @click="handleView(record)"
                            style="margin: 0 16px;">View</a-button>
                        <a-button type="text" size="mini" status="danger"
                            @click="handleDelete(rowIndex)">Delete</a-button>
                    </template>
                    <template #status="{ record }">
                        <span :class="getStatusClass(record.status)">
                            {{ record.status }}
                        </span>
                    </template>

                </a-table>
            </a-space>

            <a-modal v-model:visible="editVisible" title="Edit Pipeline" @ok="confirmEdit"
                :ok-button-props="{ type: 'secondary ' }">
                <a-form :model="editForm">
                    <a-form-item label="Pipeline Name">
                        <a-input v-model="editForm.name" />
                    </a-form-item>
                    <a-form-item label="Creator">
                        <a-input v-model="editForm.creator" />
                    </a-form-item>
                    <a-form-item label="Status">
                        <a-select v-model="editForm.status" placeholder="Select status">
                            <a-option value="Success">Success</a-option>
                            <a-option value="In Progress">In Progress</a-option>
                            <a-option value="Pending">Pending</a-option>
                            <a-option value="Failed">Failed</a-option>
                            <a-option value="Draft">Draft</a-option>
                        </a-select>
                    </a-form-item>
                </a-form>
            </a-modal>



        </div>
    </div>



</template>

<script setup>
import { reactive, ref, watch, defineProps } from 'vue'
import { Message, Modal } from '@arco-design/web-vue'

const editRowIndex = ref(null)
const editVisible = ref(false)

const editForm = reactive({
    name: '',
    creator: '',
    status: '',
})

const props = defineProps({
    tableData: {
        type: Array,
        required: true,
        default: () => []
    }
})

const data = reactive([...props.tableData])

watch(() => props.tableData, (newVal) => {
    data.splice(0, data.length, ...newVal)
}, { immediate: true })

const selectedKeys = ref(['Jane Doe', 'Alisa Ross'])

const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    onlyCurrent: false,
})

const pagination = { pageSize: 7 }

const columns = [
    { title: '#', dataIndex: 'index' },
    { title: 'Pipeline Name', dataIndex: 'name' },
    { title: 'Creator', dataIndex: 'creator' },
    { title: 'Creation Time', dataIndex: 'creationTime', width: 136 },
    { title: 'Modifier', dataIndex: 'modifier' },
    { title: 'Modified Time', dataIndex: 'modifiedTime' },
    { title: 'Status', slotName: 'status' },
    { title: 'Actions', slotName: 'actions' },
]
const getStatusClass = (status) => {
    switch (status) {
        case 'Success':
            return 'status-success';
        case 'In Progress':
            return 'status-progress';
        case 'Pending':
            return 'status-pending';
        case 'Failed':
            return 'status-failed';
        case 'Draft':
            return 'status-draft';
        default:
            return '';
    }
};



const handleEdit = (record, rowIndex) => {
    editForm.name = record.name
    editForm.creator = record.creator
    editForm.status = record.status
    editRowIndex.value = rowIndex
    editVisible.value = true
}

const confirmEdit = () => {
    if (editRowIndex.value !== null) {
        const target = data[editRowIndex.value]
        target.name = editForm.name
        target.creator = editForm.creator
        target.status = editForm.status
        Message.success('Updated successfully')
    }
    editVisible.value = false
}

const handleView = (record) => {
    Modal.open({
        title: 'Status',
        content: ` ${record.name}\nStatus: ${record.status}`,
        okButtonProps: {
            type: 'secondary'
        }
    })
}


const handleDelete = (index) => {
    data.splice(index, 1)
    Message.success('Deleted successfully')
}
</script>

<style scoped>
.table_box :deep(.arco-table-th) {
    height: 64px;
}

.tab_content {
    background-color: #fff;
    padding: 10px;
}

.tab_content_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
}

.tab_content_header_right {
    display: flex;
    align-items: center;
    gap: 8px;
}

.table_box :deep(.arco-pagination-item-active) {
    background-color: #E8EEFD;
    color: #1857EB;
}

.table_box :deep(.arco-table-pagination) {
    margin: 24px 0;
}

.status-success,
.status-progress,
.status-pending,
.status-failed,
.status-draft {
    padding: 2px 15px;
    border-radius: 4px;
    display: inline-block;
    font-size: 12px;
}


.status-success {
    background-color: rgba(49, 194, 145, .2);
    color: #0E9D6D;

}

.status-progress {
    background-color: #e8eefd;
    color: #1857EB;
}

.status-pending {
    background-color: #ffecb2;
    color: #9a7a1a;

}

.status-failed {
    background-color: #ffdfdf;
    color: #d22323;

}

.status-draft {
    background-color: #f2f3f5;
    color: #4e5969;
}

#app :deep(.arco-btn-primary) {
    background-color: #1857EB;

}
</style>
