<template>
    <div class="modal-focus-test">
        <h2>Modal聚焦测试</h2>
        <div class="test-buttons">
            <a-button @click="testRegularModal" type="primary">测试普通Modal</a-button>
            <a-button @click="testInfoModal" status="info">测试Info消息</a-button>
            <a-button @click="testSuccessModal" status="success">测试Success消息</a-button>
            <a-button @click="testWarningModal" status="warning">测试Warning消息</a-button>
            <a-button @click="testErrorModal" status="danger">测试Error消息</a-button>
        </div>

        <p style="margin-top: 20px; padding: 10px; background: #f5f5f5; border-left: 4px solid #1890ff;">
            <strong>测试说明：</strong><br>
            1. 点击任意按钮打开Modal<br>
            2. 按Tab键测试是否能正确聚焦到对话框内容<br>
            3. 继续按Tab键测试焦点是否被正确限制在对话框内<br>
            4. 按Shift+Tab测试反向导航
        </p>

        <!-- 普通Modal -->
        <a-modal v-model:visible="regularModalVisible" title="普通Modal测试" @ok="regularModalVisible = false"
            @cancel="regularModalVisible = false">
            <p>这是一个普通的Modal，包含确认和取消按钮。</p>
            <a-input placeholder="测试输入框" style="margin: 10px 0;" />
            <p>按Tab键应该能在输入框和按钮之间循环聚焦。</p>
        </a-modal>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Modal } from '../modal';

export default {
    name: 'ModalFocusTest',
    setup() {
        const regularModalVisible = ref(false);

        const testRegularModal = () => {
            regularModalVisible.value = true;
        };

        const testInfoModal = () => {
            Modal.info({
                title: 'Info消息测试',
                content: '这是一个Info消息。按Tab键应该能聚焦到确认按钮。'
            });
        };

        const testSuccessModal = () => {
            Modal.success({
                title: 'Success消息测试',
                content: '这是一个Success消息。按Tab键应该能聚焦到确认按钮。'
            });
        };

        const testWarningModal = () => {
            Modal.warning({
                title: 'Warning消息测试',
                content: '这是一个Warning消息。按Tab键应该能聚焦到确认按钮。'
            });
        };

        const testErrorModal = () => {
            Modal.error({
                title: 'Error消息测试',
                content: '这是一个Error消息。按Tab键应该能聚焦到确认按钮。'
            });
        };

        return {
            regularModalVisible,
            testRegularModal,
            testInfoModal,
            testSuccessModal,
            testWarningModal,
            testErrorModal
        };
    }
};
</script>

<style scoped>
.modal-focus-test {
    padding: 20px;
}

.test-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin: 20px 0;
}
</style>
