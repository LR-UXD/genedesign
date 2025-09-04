<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue';
import Menu from './components/menu.vue'
import Input from './components/input.vue'
import ImageList from './components/imageList.vue'
import ButtonContainer from './components/buttonContainer.vue'
import { CollapseContext, collapseInjectionKey } from '../../context';
import background from './assets/background.png';


export default defineComponent({
    name: 'Quantum',
    components: {
        Menu,
        Input,
        ImageList,
        ButtonContainer
    },
    setup() {
        const collapseCtx = inject<CollapseContext>(collapseInjectionKey);
        const cls = computed(() => [
            'quantum',
            {
                'aside-nav-show': collapseCtx?.showNav
            },
        ]);
        return {
            cls,
            background
        };

    }
});



</script>

<template>

    <div :class="cls">
        <div class="main_box" :style="{ background: `url(${background}) center center / contain no-repeat` }">
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

    </div>

</template>


<style scoped lang="less" src="./style/style.less" />
