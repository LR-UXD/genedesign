<template>
    <div ref="animeTarget" class="arco-anime">
        <slot>Anime 动画内容</slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { animate } from 'animejs';



export default defineComponent({
    name: 'Anime',
    props: {
        type: {
            type: String,
            default: 'fade',
        },
        duration: {
            type: Number,
            default: 800,
        },
        easing: {
            type: String,
            default: 'easeInOutQuad',
        },
    },
    setup(props) {
        const animeTarget = ref<HTMLElement | null>(null);

        // 动画类型
        const animations: Record<string, () => void> = {
            fade: () => {
                if (!animeTarget.value) return;
                animate(animeTarget.value, {
                    opacity: [0, 1],
                    duration: props.duration,
                    easing: props.easing,
                });
            },


            scale: () => {
                if (!animeTarget.value) return;
                animate(animeTarget.value, {
                    scale: [0.5, 1],
                    duration: props.duration,
                    easing: props.easing,
                });
            },

            slide: () => {
                if (!animeTarget.value) return;
                animate(animeTarget.value, {
                    translateX: [-100, 0],
                    opacity: [0, 1],
                    duration: props.duration,
                    easing: props.easing,
                })
            },
            rotate: () => {
                if (!animeTarget.value) return;
                animate(animeTarget.value, {
                    rotate: [0, 360],
                    duration: props.duration,
                    easing: props.easing,
                })
            },
            zoomIn: () => {
                if (!animeTarget.value) return;
                animate(animeTarget.value, {
                    scale: [0, 1],
                    opacity: [0, 1],
                    duration: props.duration,
                    easing: props.easing,
                });
            },
            bounce: () => {
                if (!animeTarget.value) return;
                animate(animeTarget.value, {
                    y: [-30, 15, -10, 0],
                    scale: [1.5, 0.75, 1],
                    opacity: [0, 1],
                    duration: props.duration,
                    easing: props.easing,
                });
            },
            flip: () => {
                if (!animeTarget.value) return;
                animate(animeTarget.value, {
                    rotateY: [90, 0],
                    opacity: [0, 1],
                    duration: props.duration,
                    easing: props.easing,
                });
            },

            flipX: () => {
                if (!animeTarget.value) return;
                animate(animeTarget.value, {
                    rotateX: [90, 0],
                    opacity: [0, 1],
                    duration: props.duration,
                    easing: props.easing,
                });
            },

            shake: () => {
                if (!animeTarget.value) return;
                animate(animeTarget.value, {
                    keyframes: [
                        { translateX: -10 },
                        { translateX: 10 },
                        { translateX: -10 },
                        { translateX: 10 },
                        { translateX: 0 },
                    ],
                    duration: props.duration,
                    easing: 'easeInOutSine',
                });
            }


        };

        // 动画启动
        const startAnimation = () => {
            const animateFn = animations[props.type] || animations.fade;
            animateFn();
        };

        onMounted(() => {
            startAnimation();
        });


        watch(() => props.type, () => {
            startAnimation();
        });

        return { animeTarget };
    }
});

</script>

<style scoped>
.arco-anime {
    display: inline-block;
}
</style>
