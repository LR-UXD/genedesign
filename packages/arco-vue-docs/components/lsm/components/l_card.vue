<template>
    <div class="l_card">
        <a-card :style="{ width: '417px' }">
            <template #actions>

                <div>
                    <a-button type="text" shape="circle" size="large">
                        <icon-bulb />
                    </a-button>
                </div>
                <a-select :style="{ width: '140px' }" placeholder="Please select ...">
                    <a-option>Single tracking</a-option>
                    <a-option>Single tracking</a-option>
                    <a-option>Single tracking</a-option>
                </a-select>
                <a-button shape="circle" size="large">
                    <icon-thumbUp />
                </a-button>
                <a-button shape="circle" size="large">
                    <icon-ShareInternal />
                </a-button>
                <a-button shape="circle" size="large">
                    <icon-more />
                </a-button>
            </template>
            <template #cover>
                <div :style="{ overflow: 'hidden' }">
                    <img :style="{ width: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }"
                        alt="dessert" src="https://uxd.lenovo.com/assets/l_image.svg" />
                </div>
            </template>
            <a-card-meta></a-card-meta>
        </a-card>
        <div class="L_card_right">
            <div class="l_card_2">
                <a-card :style="{ width: '350px', height: '200px', borderRadius: '10px' }" hoverable :bordered="false">
                    <template #title>
                        <img src="https://uxd.lenovo.com/assets/l_icon1.svg" alt="">Transcription
                    </template>
                    <template #actions>
                        <a-button type="primary" shape="round">
                            <template #icon>
                                <icon-play-circle-fill />
                            </template>
                            Start
                        </a-button>
                    </template>
                    <template #extra>
                        <a-select :style="{ width: '100px' }" placeholder="audio"
                            :trigger-props="{ autoFitPopupMinWidth: true }">
                            <a-option>audio1</a-option>
                            <a-option>audio2</a-option>
                            <a-option>audio3</a-option>
                        </a-select>
                    </template>
                    Tool Function Introduction Information Tool Function Introduction Information
                </a-card>
            </div>

            <div class="l_card_3">
                <a-card :style="{ width: '350px', height: '88px', borderRadius: '10px' }" hoverable :bordered="false">
                    <template #title>
                        <img src="https://uxd.lenovo.com/assets/l_icon2.svg" alt="">Fake detection
                    </template>
                    <template #extra>
                        <a-switch checked-color="#6441AB" size="small" />
                    </template>
                    Tool Function Introduction Information
                </a-card>

            </div>
        </div>
    </div>
    <div class="l_card_footer">
        <div><img src="https://uxd.lenovo.com/assets/l_test2.svg" alt=""></div>
        <div class="l_card_footer_right">
            <a-button type="primary" shape="round">
                Leave now
            </a-button>
            <div>Show watermark<icon-exclamation-circle /> <a-switch checked-color="#6441AB" size="small" /></div>



        </div>
    </div>
</template>

<script>
import {
    IconThumbUp,
    IconShareInternal,
    IconMore,
} from 'genedesign/es/icon';

export default {
    components: { IconThumbUp, IconShareInternal, IconMore },
};
</script>
<style scoped>
.l_card {
    display: flex;
    gap: 12px;
}

.L_card_right {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.icon-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.1s;
}

.icon-hover:hover {
    background-color: rgb(var(--gray-2));
}

.l_card :deep(.arco-card) {
    background-color: #fff;
}

.l_card :deep(.arco-card-meta-footer:last-child) {
    margin: 0;
}

.l_card :deep(.arco-card-size-medium .arco-card-body) {
    padding: 11px 12px 16px 16px;

}

.l_card_2 :deep(.arco-card-size-medium .arco-card-body) {
    line-height: 1.7;

}

.l_card :deep(.arco-select-view-single) {
    background-color: #fff;
    border: 1px solid #C9CDD4;
}

.l_card .l_card_2 :deep(.arco-select-view-single) {
    background-color: #fff;
    border: 1px solid transparent;
}

.l_card :deep(.arco-card-actions-right .arco-btn-text) {
    margin-right: 55px;
}

.l_card :deep(.arco-card-bordered) {
    border-radius: 10px;
}

.l_card :deep(.arco-card-header-title) {
    display: flex;
    align-items: center;
}

.l_card_2 :deep(.arco-card-header),
.l_card_3 :deep(.arco-card-header) {
    border: none;
}

.l_card_2 :deep(.arco-card-actions) {
    margin-top: 40px;
    justify-content: flex-start;
}

.l_card_2 :deep(.arco-btn-primary),
.l_card_footer :deep(.arco-btn-primary) {
    background: linear-gradient(to right, #7346AA 0%, #9851AA 100%);

}

.l_card_footer {
    height: 100px;
    border-top: 1px solid #C9CDD4;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.l_card_footer_right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
}
</style>
