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
                    <img src="https://uxd.lenovo.com/assets/quantum_send.svg" alt="">
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


<style scoped lang="less" src="../style/input.less" />
