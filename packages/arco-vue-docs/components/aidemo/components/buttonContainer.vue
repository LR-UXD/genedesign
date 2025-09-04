<template>
  <div class="button-container">
    <div v-for="(item, index) in buttons" :key="item.label" class="action-button"
      :class="{ hovered: index === hoveredIndex }" @mouseenter="hoveredIndex = index" @mouseleave="hoveredIndex = null">
      <span class="label">{{ item.label }}</span>
      <img :src="item.img" class="thumb" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import image1 from '../assets/image_1.png';
import image2 from '../assets/image_2.png';
import image3 from '../assets/image_3.png';
import image4 from '../assets/image_4.png';

const hoveredIndex = ref(null);

const buttons = [
  { label: 'Remove Background', img: image1 },
  { label: 'Erase', img: image2 },
  { label: 'Inpaint', img: image3 },
  { label: 'Outpaint', img: image4 },
];
</script>

<style scoped lang="less" src="../style/buttonContainer.less" />
