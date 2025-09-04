<script setup>
import Select from './components/select.vue'
import Menu from './components/menu.vue'
import Input from './components/input.vue'
import ImageList from './components/imageList.vue'
import ButtonContainer from './components/buttonContainer.vue'
</script>

<template>
    <div class="main_box">
        <div class="main">
            <div class="sider">
                <Menu />
            </div>
            <div class="content">
                <div class="content_top">
                    <div class="content_top_text">Enable everyone's creativity</div>
                    <div>
                        <Input />
                    </div>
                    <div>
                        <ButtonContainer />
                    </div>
                </div>
                <div class="imagelist_box">
                    <ImageList />
                </div>

            </div>
        </div>

    </div>

</template>

<style scoped>
.main_box {
    width: 1920px;
    height: 1080px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(./assets/background.png) center center / contain no-repeat;


}

.main {
    width: 1100px;
    height: 800px;
    display: flex;

    backdrop-filter: blur(60px);
    background: linear-gradient(180deg, rgba(177, 214, 255, 0.8) 0%, rgba(255, 255, 255, 0.64) 100%);
    border: 1px solid transparent;
    border-image-source: linear-gradient(96.35deg, rgba(255, 255, 255, 0.6) 1.44%, rgba(255, 255, 255, 0.1) 99.17%);
    border-radius: 20px;
}

.content {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
}

.content_top {
    width: 660px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

}

.content_top_text {
    font-family: Segoe UI Variable;
    font-weight: 600;
    font-size: 24px;
    line-height: 22.88px;
    letter-spacing: 0.16px;
    vertical-align: middle;
    margin-bottom: 40px;

}

.imagelist_box {
    margin-top: 51px;
    overflow: hidden;
}

.imagelist_box::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    pointer-events: none;
    backdrop-filter: blur(20px);
    mask-image: linear-gradient(to top, black, transparent);
    -webkit-mask-image: linear-gradient(to top, black, transparent);
}
</style>
