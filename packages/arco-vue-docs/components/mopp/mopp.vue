<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue';
import Mtable from './components/m_table.vue';
import Mcard from './components/m_card.vue';
import Mchat from './components/m_chat.vue'
import { CollapseContext, collapseInjectionKey } from '../../context';



export default defineComponent({
    name: 'MOPP',
    components: {
        Mtable,
        Mcard,
        Mchat,
    },
    setup() {
        const collapseCtx = inject<CollapseContext>(collapseInjectionKey);
        const cls = computed(() => [
            'mopp',
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
                <div class="card_box">
                    <div class="card">
                        <Mtable />
                        <Mcard />
                    </div>
                    <div class="chat">
                        <Mchat />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.mopp {
    display: flex;
    justify-content: center;
}

.mopp.aside-nav-show {
    margin-left: 261px;
}

.main_box {
    width: 1920px;
    min-width: 1500px;
    height: 1080px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(./assets/background.svg) center center / contain no-repeat;
}

.main {
    width: 1920px;
    height: 1200px;
    background: url(./assets/m_image1.svg);
    scale: .6;
}

.card_box {
    display: flex;
    padding: 100px 55px 55px 55px;

}

.card {
    height: 628px;
    display: flex;
    gap: 16px;

}

.chat {
    width: 648px;
    height: 868px;
    background-color: rgba(255, 255, 255, .7);
    margin-left: 16px;
    border-radius: 12px;
}
</style>
