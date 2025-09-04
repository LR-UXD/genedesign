<script setup>
import { ref } from 'vue'
import Table from './f_table.vue'

const tab1Data = [
    { index: 1, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-01 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-02 12:00', status: 'Success' },
    { index: 2, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-03 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-04 16:00', status: 'In Progress' },
    { index: 3, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-05 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-06 20:00', status: 'Pending' },
    { index: 4, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-07 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-08 24:00', status: 'Failed' },
    { index: 5, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-09 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-10 24:00', status: 'Draft' },
    { index: 6, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-10 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-12 24:00', status: 'Success' },
    { index: 7, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-13 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-17 24:00', status: 'In Progress' },
    { index: 8, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-13 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-17 24:00', status: 'In Progress' },
    { index: 9, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-13 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-17 24:00', status: 'In Progress' },
    { index: 10, name: 'Leforecast-test', creator: 'Admin', creationTime: '2025-10-13 00:00:01', modifier: 'Admin', modifiedTime: '2025-10-17 24:00', status: 'In Progress' },
];


const tab2Data = [
    { index: 1, name: 'Knowledge-Alpha', creator: 'UserA', creationTime: '2025-01-05 10:15:00', modifier: 'UserA', modifiedTime: '2025-01-06 12:30:00', status: 'Pending' },
    { index: 2, name: 'Knowledge-Beta', creator: 'UserB', creationTime: '2025-02-10 09:20:00', modifier: 'UserB', modifiedTime: '2025-02-11 15:45:00', status: 'Success' },
    { index: 3, name: 'Knowledge-Gamma', creator: 'UserC', creationTime: '2025-03-15 14:00:00', modifier: 'UserC', modifiedTime: '2025-03-16 17:00:00', status: 'Failed' },
    { index: 4, name: 'Knowledge-Delta', creator: 'UserD', creationTime: '2025-04-01 08:30:00', modifier: 'UserD', modifiedTime: '2025-04-02 09:45:00', status: 'Draft' },
    { index: 5, name: 'Knowledge-Epsilon', creator: 'UserE', creationTime: '2025-05-20 11:10:00', modifier: 'UserE', modifiedTime: '2025-05-21 13:25:00', status: 'In Progress' },
]

const tab3Data = [
    { index: 1, name: 'Model-X', creator: 'AI Team', creationTime: '2025-06-05 16:40:00', modifier: 'AI Team', modifiedTime: '2025-06-06 18:55:00', status: 'Success' },
    { index: 2, name: 'Model-Y', creator: 'AI Team', creationTime: '2025-07-12 07:30:00', modifier: 'AI Team', modifiedTime: '2025-07-13 10:00:00', status: 'In Progress' },
    { index: 3, name: 'Model-Z', creator: 'AI Team', creationTime: '2025-08-20 13:15:00', modifier: 'AI Team', modifiedTime: '2025-08-21 15:45:00', status: 'Pending' },
    { index: 4, name: 'Model-Omega', creator: 'AI Team', creationTime: '2025-09-25 19:05:00', modifier: 'AI Team', modifiedTime: '2025-09-26 21:30:00', status: 'Failed' },
]


</script>

<template>
    <div class="tab_box">
        <a-tabs>
            <a-tab-pane key="1">
                <template #title>
                    <icon-calendar /> Data Hub
                </template>
                <Table :tableData="tab1Data" />
            </a-tab-pane>
            <a-tab-pane key="2">
                <template #title>
                    <icon-clock-circle /> Knowledge Hub
                </template>
                <Table :tableData="tab2Data" />
            </a-tab-pane>
            <a-tab-pane key="3">
                <template #title>
                    <icon-user /> Model Hub
                </template>
                <Table :tableData="tab3Data" />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<style scoped>
.tab_box {
    margin-top: 12px;
}

.tab_box :deep(.arco-tabs-nav)::before {
    height: 0;
}

.tab_box :deep(.arco-tabs-nav-ink) {
    display: none;
}


.tab_box :deep(.arco-tabs-tab) {
    padding: 8px 31px 8px 25px;
    margin: 0;
}

.tab_box :deep(.arco-tabs-tab-active) {
    background-color: #fff;
    color: #1857EB;
    clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%);
}

.tab_box :deep(.arco-tabs-content) {
    padding: 0;
}



.tab_box :deep(.btn_plus) {
    background-color: #1857EB;
    color: #fff;
}
</style>