```yaml
title:
  zh-CN: 拆表模式下表格元素
  en-US: Custom Table Element
```

## zh-CN

本示例用于复现并验证拆表模式下的键盘导航与 Tab 顺序行为，以及路由跳转返回后程序化聚焦（programmatic focus）恢复的表现。示例包含可聚焦的 `title-cell`，可用于测试 Tab 在表头、行内元素以及选择框之间的流动顺序。

---

## en-US

Use this example to reproduce and verify keyboard navigation (Tab order) and focus restoration behavior when the table is split. The demo exposes a focusable `title-cell` to test Tab flow between header, row elements and selection checkboxes.

---

```vue
<template>
  <a-table
    row-key="Title"
    :data="mockList"
    :row-selection="rowSelection"
    v-model:selectedKeys="selectedKeys"
    :pagination="false"
    :sticky-header="true"
    :scroll="{ y: 240 }"
    row-class="history-row"
  >
    <template #tr>
      <tr class="my-tr" @contextmenu.prevent="onContextMenu" />
    </template>
    <template #td>
      <td class="my-td" />
    </template>

    <template #columns>
      <a-table-column title="Title" :min-width="260">
        <template #cell="{ record }">
          <div class="title-cell" tabindex="0" @click="onOpen(record)">
            <span class="title-text">{{ record.Title }}</span>
            <span v-if="record.audio" class="flag">Audio</span>
            <span v-if="record.summary" class="flag">AI Summary</span>
          </div>
        </template>
      </a-table-column>

      <a-table-column title="Duration" :width="110">
        <template #cell="{ record }">
          <span>{{ record.Duration || '00:00' }}</span>
        </template>
      </a-table-column>

      <a-table-column title="Creation time" :width="170">
        <template #cell="{ record }">
          <span>{{ formatTime(record.CreationTime) }}</span>
        </template>
      </a-table-column>

      <a-table-column title="Action" :width="90">
        <template #cell="{ record }">
          <a-button type="text" size="mini" @click="onDelete(record)">Delete</a-button>
        </template>
      </a-table-column>
    </template>
  </a-table>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const mockList = ref([
      {
        Title: 'Weekly Sync',
        Duration: '12:35',
        CreationTime: Date.now() - 1000 * 60 * 12,
        audio: true,
        summary: true,
      },
      {
        Title: 'Project Review',
        Duration: '38:10',
        CreationTime: Date.now() - 1000 * 60 * 60 * 5,
        audio: true,
        summary: false,
      },
      {
        Title: '1:1 Meeting',
        Duration: '25:00',
        CreationTime: Date.now() - 1000 * 60 * 60 * 26,
        audio: false,
        summary: true,
      },
      {
        Title: 'Townhall Notes',
        Duration: '',
        CreationTime: Date.now() - 1000 * 60 * 60 * 24 * 3,
        audio: false,
        summary: false,
      },
      {
        Title: 'Sprint Planning',
        Duration: '45:00',
        CreationTime: Date.now() - 1000 * 60 * 60 * 24 * 7,
        audio: true,
        summary: false,
      },
      {
        Title: 'Design Critique',
        Duration: '30:20',
        CreationTime: Date.now() - 1000 * 60 * 60 * 48,
        audio: false,
        summary: true,
      },
      {
        Title: 'Sales Update',
        Duration: '20:10',
        CreationTime: Date.now() - 1000 * 60 * 60 * 72,
        audio: true,
        summary: false,
      },
      {
        Title: 'Onboarding Session',
        Duration: '15:00',
        CreationTime: Date.now() - 1000 * 60 * 60 * 96,
        audio: false,
        summary: false,
      },
      {
        Title: 'Bug Triage',
        Duration: '22:40',
        CreationTime: Date.now() - 1000 * 60 * 60 * 120,
        audio: false,
        summary: true,
      },
      {
        Title: 'All Hands',
        Duration: '60:00',
        CreationTime: Date.now() - 1000 * 60 * 60 * 200,
        audio: false,
        summary: false,
      },
      {
        Title: 'Research Sync',
        Duration: '27:15',
        CreationTime: Date.now() - 1000 * 60 * 60 * 250,
        audio: false,
        summary: true,
      },
    ]);

    const selectedKeys = ref([]);
    const rowSelection = reactive({
      type: 'checkbox',
      showCheckedAll: true,
      onlyCurrent: false,
    });

    const pad2 = (n) => String(n).padStart(2, '0');
    const formatTime = (ts) => {
      if (!ts) return '';
      const d = new Date(ts);
      return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
    };

    const onContextMenu = () => {
      console.log('right click on row');
    };

    const onOpen = (record) => {
      console.log('open detail', record);
    };

    const onDelete = (record) => {
      mockList.value = mockList.value.filter((item) => item.Title !== record.Title);
      selectedKeys.value = selectedKeys.value.filter((key) => key !== record.Title);
    };

    return {
      mockList,
      rowSelection,
      selectedKeys,
      formatTime,
      onContextMenu,
      onOpen,
      onDelete,
    };
  },
};
</script>

<style scoped>
.title-cell {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.title-text {
  max-width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.flag {
  flex-shrink: 0;
  padding: 0 8px;
  border-radius: 12px;
  line-height: 20px;
  font-size: 12px;
  background: var(--color-fill-2);
  color: var(--color-text-2);
}

.my-td {
  vertical-align: middle;
}

.title-cell:focus-visible {
    outline: 2px solid rgb(var(--primary-6));
    outline-offset: 2px;
    border-radius: var(--border-radius-small);
}
</style>
```