<template>
    <div class="m_chat">
        <a-card :style="{ width: '648px', }" title="Auto Router" :bordered="false">
            <template #title>
                <a-button type="text" shape="round">Agent</a-button>
                <a-button type="text" shape="round">Chat</a-button>
            </template>
            <div class="m_content">
                <div class="m_select">
                    <div class="m_select_title">Agent</div>
                    <a-select :style="{ width: '160px' }" placeholder="Select"
                        :trigger-props="{ autoFitPopupMinWidth: true }">
                        <a-option>Agent 1</a-option>
                        <a-option>Agent 2</a-option>
                        <a-option>Agent 3</a-option>
                    </a-select>

                </div>
                <div class="m_image">
                    <img src="https://uxd.lenovo.com/assets/m_image3.svg" alt="">
                </div>

                <div class="m_input">
                    <a-textarea placeholder="Input query" allow-clear :auto-size="{
                        minRows: 2,
                        maxRows: 5
                    }" />
                    <a-button shape="circle">
                        <icon-arrow-up />
                    </a-button>
                </div>
            </div>

        </a-card>
    </div>
</template>
<style scoped>
.m_chat :deep(.arco-card) {
    background-color: transparent;
}

.m_chat :deep(.arco-btn-text:focus) {
    background-color: #0085BF;
    color: #fff;
}

.m_chat :deep(.arco-card-header) {
    border: none;
}

.m_content {
    display: flex;
    flex-direction: column;
}

.m_image {
    margin: 8px 0 16px;
}

.m_select {
    display: flex;
    align-items: center;
}

.m_select_title {
    margin-right: 16px;
    font-weight: 600;
    color: #000;
}

.m_select :deep(.arco-select-view-single) {
    background-color: #fff;
    border: 1px solid #C9CDD4;
}

.m_chat :deep(.arco-card-size-medium .arco-card-header) {
    height: 32px;
    margin-top: 24px;
    padding: 0 24px;
}

.m_chat :deep(.arco-card-size-medium .arco-card-body) {
    margin-top: 16px;
    padding: 0 24px;
}

.m_input {
    height: 106px;
    padding: 12px 16px;
    background-color: rgba(255, 255, 255, .6);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
}

.m_input :deep(.arco-textarea-wrapper) {
    background-color: transparent;
}

.m_input :deep(.arco-textarea-wrapper:focus-visible),
.m_input :deep(.arco-textarea-wrapper:focus-within) {
    border-color: transparent;
}


.m_input :deep(.arco-btn) {
    position: absolute;
    right: 36px;
    bottom: 20px;
}

.m_input :deep(.arco-textarea-focus) {
    border: none;
}

.m_input :deep(.arco-btn svg) {
    color: #fff;
}
</style>