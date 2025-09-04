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

<style scoped>
.button-container {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.action-button {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 20px;
  background: rgba(213, 227, 255, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.label {
  font-size: 12px;
  font-weight: 400;
  color: #333;
  margin-right: 24px;
  font-family: Segoe UI Variable;
  line-height: 100%;
  letter-spacing: 0.07px;
  vertical-align: middle;
}

.thumb {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
}

.action-button.hovered {
  background-color: #f0f6ff;
  box-shadow: 0 4px 12px rgba(0, 120, 255, 0.2);
}
</style>
