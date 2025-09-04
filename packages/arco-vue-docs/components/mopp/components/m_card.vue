<template>
    <div class="m_card">
        <a-card :style="{ width: '210px' }" title="Auto Router" :bordered="false">
            <template #extra>
                <a-switch checked-color="#0085BF" size="small" />
            </template>
            <div class="m_image">

                <img src="https://uxd.lenovo.com/assets/m_image2.svg" alt="">
                <img src="https://uxd.lenovo.com/assets/m_image2.svg" alt="">
                <img src="https://uxd.lenovo.com/assets/m_image2.svg" alt="">
            </div>

            <div class="m_radio">
                <a-radio-group direction="vertical">
                    <a-radio value="A">Quality</a-radio>
                    <a-radio value="B">Quality</a-radio>
                    <a-radio value="C">Cost Priority</a-radio>
                </a-radio-group>
            </div>
        </a-card>
    </div>
</template>
<style scoped>
.m_card {
    display: flex;
    gap: 16px;
    background: linear-gradient(to bottom,
            rgba(242, 251, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(242, 251, 255, 0.8) 100%);


}

.m_card :deep(.arco-card) {
    border-radius: 12px;
}

.m_card :deep(.arco-card-header-title) {
    font-weight: 600;
}

.m_card :deep(.arco-card-header) {
    border: none;
}

.m_card :deep(.arco-card-size-medium .arco-card-header) {
    height: 56px;
    padding: 16px 16px;
}

.m_card :deep(.arco-card-size-medium .arco-card-body) {
    padding: 0 16px;
}

.m_image {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.m_radio {
    position: absolute;
    left: 26px;
    bottom: 22px;
}

.m_radio :deep(.arco-radio-group) {
    display: flex;
    flex-direction: column;
    gap: 158px;
}

.m_radio :deep(.arco-radio-group .arco-radio-label) {
    color: #00405C;
}

.m_radio :deep(.arco-radio-checked .arco-radio-icon) {
    background-color: #0085BF;
    border-color: #0085BF;
}
</style>