<template>
  <div class="ai-chat-container">
    <!-- 用户输入 -->
    <div class="ai-chat-row user">
      <div class="user-content">
        <div class="user-text" >{{ userContent }}</div>
      </div>
    </div>

    <!-- AI 回答 -->
    <div class="ai-chat-row ai">
      <div v-if="showAvatar" class="avatar">
        <img :src="avatarUrl || defaultAvatar" alt="AI Avatar" />
      </div>
      <div class='ai-content-box' :class="{ 'image-box': aiType === 'image' }">
        <div class="ai-content">
          <template v-if="aiType === 'text'">
             <p class="ai-text"  
             :class="{
    'loading-text-gradient': isLoading && loadingStyle === 'gradient',
    'loading-text-stripe': isLoading && loadingStyle === 'stripe',
  }"
             
             >{{ aiContent }}</p>
          </template>
          <template v-else-if="aiType === 'image'">
            <div class="ai-image-list">
              <template v-if="isLoading">
                 <img v-for="(img, index) in loadingImages"
                     :key="'loading-' + index"
                     :src="img"
                     alt="Loading"
                     class="ai-image"/>
              </template>
            
              <template v-else>
                <img v-for="(img, index) in normalizedAiContent"
                :key="'ai-' + index"
                :src="img"
                alt="AI Image"
                class="ai-image"/>
              
              </template>
            </div>
          </template>
        </div>
        <div class=ai-set>
          <div class='ai-set-left'>
            <div class='thumb'>
               <img src='./assets/thumb-up.png'>
               <img src='./assets/interactive-button.png'>
            </div>
            <div class='btn_box'>
              <img src='./assets/mute.png'>
               <img src='./assets/copy.png'>
               <img src='./assets/share-internal.png'>
            </div>
            <div class='model_box'>
              <img src='./assets/refresh.png' class='refresh'>
              <div>GPT-4o</div>
              <img src='./assets/arrow-up-s-line.png' class='arrow'>
            </div>
          </div>
          <div class="ai-set-right" v-if='fileNames.length>0'>
  <template v-for="(file, index) in fileNames.slice(0, 2)" :key="index" >
    <div class="file-tag-box">
      <img class="file-icon" :src="getFileIcon(file)" alt="file icon" />
      <span class="file-name">{{ file }}</span>
    </div>
  </template>
  <img src="./assets/FileButton.png" />
</div>





        </div>

      </div>



    </div>





  </div>
</template>

<script>
import { computed } from 'vue'
import defaultAvatar from './assets/avatar.png'
import loading1 from './assets/loading1.png'
import loading2 from './assets/loading2.png'
import loading3 from './assets/loading3.png'
import loading4 from './assets/loading4.png'
import pdf from './assets/pdf.png'
import ppt from './assets/ppt.png'
import txt from './assets/txt.png'
import doc from './assets/doc.png'
import xlsx from './assets/xlsx.png'

export default {
  name: 'AiChat',
  props: {
    aiType: {
      type: String,
      default: 'text',
      validator: (val) => ['text', 'image'].includes(val),
    },
    showAvatar: {
      type: Boolean,
      default: true,
    },
    aiContent: {
      type: [String, Array],
      default: '',
    },
    userContent: {
      type: String,
      default: '',
    },
    avatarUrl: {
      type: String,
      default: '',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    loadingStyle: {
    type: String,
    default: 'gradient', // or 'stripe'
    validator: (val) => ['gradient', 'stripe'].includes(val),
  },
  fileNames: {
    type: Array,
    default: () => [],
  },
  },
  setup(props) {
    const normalizedAiContent = computed(() => {
      if (Array.isArray(props.aiContent)) return props.aiContent
      if (typeof props.aiContent === 'string' && props.aiContent) return [props.aiContent]
      return []
    })

    const loadingImages = ['https://uxd.lenovo.com/light/loading1.png', 'https://uxd.lenovo.com/light/loading2.png', 'https://uxd.lenovo.com/light/loading3.png', 'https://uxd.lenovo.com/light/loading4.png']

    const getFileIcon = (fileName) => {
  const ext = fileName.split('.').pop().toLowerCase()
  switch (ext) {
    case 'pdf':
      return pdf
    case 'doc':
    case 'docx':
      return doc
    case 'xls':
    case 'xlsx':
      return xlsx
    case 'txt':
      return txt
    case 'ppt':
      return ppt
    default:
      return pdf
  }
}


    return {
      normalizedAiContent,
      loadingImages,
      defaultAvatar,
      getFileIcon
    }
  },
}
</script>

<style scoped>
.ai-chat-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ai-chat-row {
  display: flex;
  align-items: flex-start;
}
.ai-chat-row.ai {
  flex-direction: row;
}
.ai-chat-row.user {
  justify-content: flex-end;
}
.avatar img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 16px;
}
.ai-content-box{
    display: flex;
    flex-direction: column;
    max-width: 90%;
}
.image-box{
  max-width: 60%;
}
.ai-content,
.user-content {
  /* max-width: 56%; */
  padding: 12px 16px;
  border-radius: 4px;
  background-color: #f5f5f5;
  word-break: break-word;
  box-shadow: 0px 2px 8px 0px #00000014;

}
.user-content {
  background-color: #992E8A;
}
.ai-text,
.user-text {
  margin: 0;
}
.user-text {
  color: #fff;
}
.ai-image-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.ai-image {
  border-radius: 6px;
  width: 240px;
}
.ai-set{
  height:40px;
  display:flex;
  align-items: center;
  justify-content: space-between;
}

.ai-set-left{
display:flex;
align-items: center;
}
.thumb{
  display: flex;
    gap: 12px;
    padding: 0 12px 0 16px;
    border-right: 2px solid rgba(105, 105, 105, 0.34);
}
.btn_box img,
.thumb img{
  width:16px;
  height:16px;
}
.btn_box{
  display:flex;
  gap:12px;
  padding:0 12px;
}
.model_box{
  display:flex;
  gap:4px;
  background:#fff;
  padding:4px;
  align-items: center;
  border-radius:80px
}
.model_box:hover{
  background:#FAEDF8;
  border-radius:80px;

}
.model_box .refresh{
  width:16px;
  height:16px;
}
.model_box .arrow{
  width:9px;
  height:16px;
}
.ai-set-right img{
  width:32px;
}


.ai-set-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.file-tag-box {
  display: flex;
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 30px;
  padding: 2px 10px;
  gap: 4px;
  font-size: 12px;
  color: #555;
  background-color: #f9f9f9;
}
.ai-set-right .file-icon {
  width: 24px;
  height: 24px;
}









@keyframes textLoadingGradient {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.loading-text-gradient {
  background: linear-gradient(
    90deg,
    #000 0%,
    #992E8A 40%,
    #4D144A 60%,
    #000 100%
  );
  background-size: 300% 100%;
  background-position: -200% 0;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: textLoadingGradient 4s linear infinite;
}


@keyframes stripeSweep {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.loading-text-stripe {
  position: relative;
  color: #992E8A;
  background: linear-gradient(271deg, #7A126B 0.79%, #992E8A 67.92%, #FAEDF8 97.1%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: stripeSweep 2s linear infinite;
}

</style>
