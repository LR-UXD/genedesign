<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue';
import Header from './components/header.vue';
import Menu from './components/f_menu.vue';
import Content from './components/f_content.vue';
import Tab from './components/f_tab.vue';
import { CollapseContext, collapseInjectionKey } from '../../context';


export default defineComponent({
    name: 'Leforecast',
    components: {
        Header,
        Menu,
        Content,
        Tab
    },
    setup() {
        const collapseCtx = inject<CollapseContext>(collapseInjectionKey);
        const cls = computed(() => [
            'leforecast',
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
                <Header />
                <div class="main_content">
                    <Menu />
                    <div class="content">
                        <Content />
                        <Tab />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.leforecast {
    display: flex;
    justify-content: center;
}

.leforecast.aside-nav-show {
    margin-left: 261px;
}

.main_box {
    width: 1920px;
    min-width: 1632px;
    height: 1080px;
    min-height: 918px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(./assets/background.svg) center center / contain no-repeat;

}

.main {
    width: 1440px;
    height: 900px;
    background-color: #F7F8FA;
}

.main_content {
    display: flex;
    width: 100%;
}

.content {
    width: 1220px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px 18px 0 24px;
    box-sizing: border-box;
}
</style>
