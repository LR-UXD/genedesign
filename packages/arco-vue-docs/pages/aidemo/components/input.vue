<template>
    <div class='box'>
        <div class='box_top'>
            <a-Textarea placeholder="Describe what's in your mind, key words..." allow-clear :auto-size="{
                minRows: 2,
                maxRows: 5
            }" />
        </div>
        <div class='box_up'>
            <div class='box_up_left'>
                <a-button type="primary" shape="round">
                    <template #icon>
                        <icon-delete />
                    </template>
                    <template #default> Reference Image</template>
                </a-button>
                <a-button type="primary" shape="round">
                    <template #icon>
                        <icon-delete />
                    </template>
                    <template #default>Ratio</template>
                </a-button>
                <a-button type="primary" shape="round">
                    <template #icon>
                        <icon-delete />
                    </template>
                    <template #default>Style</template>
                </a-button>

            </div>
            <div class='box_up_right'>
                <a-button type="primary" shape="circle">
                    <img src="../assets//send.svg" alt="">
                </a-button>

            </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'


export default {
    name: 'AiInput',

    setup() {
        const fileList = ref([])
        const isSending = ref(false)
        const selectedBtn = ref('')
        function toggleSend() {
            isSending.value = !isSending.value
        }

        function handleUpload(event) {
            const files = Array.from(event.target.files)
            fileList.value.push(...files)
            event.target.value = ''
        }

        function removeFile(index) {
            fileList.value.splice(index, 1)
        }

        function clearAllFiles() {
            fileList.value = []
        }

        return {
            fileList,
            handleUpload,
            removeFile,
            clearAllFiles,
            isSending,
            toggleSend,
            selectedBtn
        }
    }
}
</script>


<style scoped>
.box {
    width: 660px;
    height: 140px;
    background: rgba(253, 253, 253, 1);
    box-shadow: 0px 4px 6px 0px #0000000A;
    border: 1px solid rgba(202, 209, 234, 1);
    border-radius: 20px;
}

.file-tags {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    gap: 8px;
    overflow-x: auto;
    background-color: #F7F8FA;
}

.file_list {
    display: flex;
    gap: 4px;
}

.file-tag {
    height: 32px;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 16px;
    font-size: 14px;
    gap: 4px;
    white-space: nowrap;
    color: #000;
    padding: 0 10px;
}

.file-tag icon-close {
    cursor: pointer;
}

.file-tag img {
    width: 18px;
    height: 18px;
}

.file-tag.clear-all {
    cursor: pointer;
}

.clear-all {
    background: transparent;
    padding: 0;
}

.clear-all img {
    width: 24px;
    height: 24px;
}

.box_top {
    /* width: 880px; */
    height: 70px;
    padding: 8px 4px;
}

.box .arco-textarea-wrapper,
.box .arco-textarea-wrapper:hover,
.box .arco-textarea-wrapper:focus-within,
.box .arco-textarea-wrapper.arco-textarea-focus {
    /* background-color: #fff; */
    border-color: rgba(253, 253, 253, 1);
    background: rgba(253, 253, 253, 1);
}



.box_up {
    height: 48px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box_up_left {
    display: flex;
    gap: 16px;
}

.box_up_left :deep(.arco-btn .arco-btn-icon) {
    margin-right: 4px;
}


.box_top :deep(.arco-textarea) {
    padding: 4px 16px;
    height: 70px !important;
}

.arco-btn-primary,
.arco-btn-primary[type='button'] {
    background: var(--State-Layers-AI-Accent, rgba(133, 94, 225, 0.12));
    color: var(--Colors-Surfaces-On-Surface, rgba(22, 28, 39, 1));

}

.box_up_right .arco-btn-primary,
.box_up_right .arco-btn-primary[type='button'] {
    background: linear-gradient(116.47deg, #9B79E0 16.62%, #C27AB9 83.38%);

}




.box_up_right img {
    width: 18px;
    height: 18px;
}



.upload-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}



.box_up_right {
    display: flex;
    gap: 12px;
}
</style>