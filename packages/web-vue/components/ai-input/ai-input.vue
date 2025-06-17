<template>
    <div class='box'>
        <div class="file-tags" v-if="fileList.length > 0">
            <div class="file_list">
                <div class="file-tag" v-for="(file, index) in fileList" :key="index">
                    <icon-file-pdf />
                    {{ file.name }}
                    <img src="./icon/Close small.png" alt="" @click.stop="removeFile(index)">
                </div>
            </div>

            <div class="file-tag clear-all" v-if="fileList.length > 0" @click.stop="clearAllFiles">
                <img src="./icon/delete.png" alt="">

            </div>
        </div>

        <div class='box_top'>
            <Textarea placeholder="Ask me a question or slash to choose your skill" allow-clear :auto-size="{
                minRows: 2,
                maxRows: 5
            }" />
        </div>
        <div class='box_up'>
            <div class='box_up_left'>
                <div class='upload'>
                    <img src="./icon/upload.png" alt="">
                    <input type="file" multiple @change="handleUpload" class="upload-input" />
                </div>
                <div class="deep_thinking" :class="{ selected: selectedBtn === 'thinking' }"
                    @click="selectedBtn = 'thinking'">
                    <img src="./icon/streamline_ai-science-spark.png" alt="">
                    Deep Thinking
                </div>
                <div class='search_base'>
                    <img src="./icon/Search 1.png" alt="" class="search_icon large icon_sun"
                        :class="{ selected: selectedBtn === 'sun' }" @click="selectedBtn = 'sun'">
                    <img src="./icon/book 1.png" alt="" class="search_icon large icon_trophy"
                        :class="{ selected: selectedBtn === 'trophy' }" @click="selectedBtn = 'trophy'">
                    <img src="./icon/icon-wrapper.png" alt="" class="search_icon small">
                </div>
                <div class='cloud_local'>
                    <img src="./icon/desktop.png" alt="" class="local_icon"
                        :class="{ selected: selectedBtn === 'local' }" @click="selectedBtn = 'local'">
                    <img src="./icon/cloud.png" alt="" class="cloud_icon" :class="{ selected: selectedBtn === 'cloud' }"
                        @click="selectedBtn = 'cloud'">
                </div>
            </div>
            <div class='box_up_right'>
                <arco-Button type="primary" shape="circle" class="voice">
                    <img src="./icon/voice.png" alt="">
                </arco-Button>

                <arco-Button type="primary" shape="circle" class="send" :class="{ active: isSending }"
                    @click="toggleSend">
                    <img v-if="isSending" src="./icon/Recording.png" alt="" />
                    <img v-else src="./icon/arrow-up.png" alt="" />

                </arco-Button>


            </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'
import ArcoButton from '../button'
import Textarea from '../textarea'

export default {
    name: 'AiInput',
    components: {
        ArcoButton,
        Textarea,
    },
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


<style>
.box {
    background: #fff;
    box-shadow: 0px 4px 6px 0px #0000000A;
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
    height: 48px;
    padding: 8px 4px;
}

.box .arco-textarea-wrapper,
.box .arco-textarea-wrapper:hover,
.box .arco-textarea-wrapper:focus-within,
.box .arco-textarea-wrapper.arco-textarea-focus {
    background-color: #fff;
    border-color: #fff;
}

/* .arco-textarea-wrapper .arco-textarea {
    padding: 0;
} */

.box_up {
    height: 48px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box_up_left {
    display: flex;
    gap: 8px;
}

.upload {
    position: relative;
    width: 28px;
    height: 28px;
    background: #F2F3F5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}

.upload img,
.search_base img,
.cloud_local img,
.deep_thinking img {
    width: 16px;
    height: 16px;
}

.box_up_right img {
    width: 20px;
    height: 20px;
}

.box_up_right .voice {
    background-color: #F7F8FA !important;
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


.deep_thinking {
    background: #F2F3F5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    gap: 2px;
    border-radius: 4px;
}

.search_base {
    background: #F2F3F5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding-right: 4px;

}

.search_icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.search_icon.large {
    width: 16px;
    height: 16px;
    padding: 6px 8px;
}

.search_icon.small {
    width: 12px;
    height: 12px;
    padding: 0;
}

.cloud_local {
    background: #F2F3F5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 2px;
}



.local_icon,
.cloud_icon {
    width: 16px;
    height: 16px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.local_icon {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.cloud_icon {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.box_up_right {
    display: flex;
    gap: 12px;
}

.deep_thinking:hover,
.icon_sun:hover,
.icon_trophy:hover,
.local_icon:hover,
.cloud_icon:hover,
.deep_thinking:active,
.icon_sun:active,
.icon_trophy:active,
.local_icon:active,
.cloud_icon:active,
.deep_thinking.selected,
.icon_sun.selected,
.icon_trophy.selected,
.local_icon.selected,
.cloud_icon.selected {
    background: #FAEDF8;
    cursor: pointer;
}

.send.active {
    background-color: #4D144A !important;
}
</style>