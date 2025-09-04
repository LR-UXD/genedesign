<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue';
import Menu from './components/l_menu.vue';
import Lcontent from './components/l_content.vue';
import { CollapseContext, collapseInjectionKey } from '../../context';


export default defineComponent({
    name: 'LSM',
    components: {
        Menu,
        Lcontent
    },
    setup() {
        const collapseCtx = inject<CollapseContext>(collapseInjectionKey);
        const cls = computed(() => [
            'lsm',
            {
                'aside-nav-show': collapseCtx?.showNav
            },
        ]);
        return {
            cls,
        };

    }
});

</script>

<template>
    <div :class="cls">
        <div class="main_box">
            <div class="main">
                <div class="window-controls">
                    <a-button>
                        <template #icon>
                            <icon-minus />
                        </template>
                    </a-button>
                    <a-button><img src="https://uxd.lenovo.com/assets/l_icon3.svg" alt=""></a-button>
                    <a-button>
                        <template #icon>
                            <icon-close />
                        </template>
                    </a-button>
                </div>
                <Menu />
                <div class="content">
                    <Lcontent />
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.lsm {
    display: flex;
    justify-content: center;
}

.lsm.aside-nav-show {
    margin-left: 261px;
}

.main_box {
    width: 1920px;
    min-width: 1280px;
    height: 1080px;
    min-height: 720px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(./assets/background.svg) center center / contain no-repeat;
}


.main {
    width: 896px;
    height: 672px;
    background-color: #F4F5FA;
    border-radius: 10px;
    display: flex;
    position: relative;
    box-shadow:
        0px 16px 32px rgba(0, 0, 0, 0.18),
        0px 2px 10.67px rgba(0, 0, 0, 0.14);
    backdrop-filter: blur(20px);
}

.main_box :deep(.arco-btn-size-medium.arco-btn-only-icon) {
    width: 46px;
}

.main_box :deep(.arco-btn-secondary) {
    background-color: transparent;
}




.window-controls {
    position: absolute;
    top: 5px;
    right: 0;
    display: flex;
}

.content {
    width: 828px;
}
</style>
