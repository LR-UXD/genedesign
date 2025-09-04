<template>
    <div class="imageList">
        <div class="category-bar">
            <a-button v-for="cat in categories" :key="cat" :class="{ selected: cat === selectedCategory }"
                @click="selectCategory(cat)" type="primary">
                {{ cat }}
            </a-button>
        </div>

        <div class="image-grid">
            <div v-for="(img, i) in shuffledImages" :key="i" class="image-box">
                <img :src="img" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
import test3 from '../assets/test3.png'
import test4 from '../assets/test4.png'

const categories = [
    'Selected',
    'Portrait photography',
    'Art',
    'Chinese illustration',
    'Anime',
    '3D',
    'Product',
    'Landscape'
]

const selectedCategory = ref('Selected')

const selectCategory = (cat) => {
    selectedCategory.value = cat
}

const images = {
    Selected: [test1, test2, test3, test4, test1, test2, test3, test4],
    'Portrait photography': [test1, test2, test3, test4, test1, test2, test3, test4],
    Art: [test1, test2, test3, test4, test1, test2, test3, test4],
    'Chinese illustration': [test1, test2, test3, test4, test1, test2, test3, test4],
    Anime: [test1, test2, test3, test4, test1, test2, test3, test4],
    '3D': [test1, test2, test3, test4, test1, test2, test3, test4],
    Product: [test1, test2, test3, test4, test1, test2, test3, test4],
    Landscape: [test1, test2, test3, test4, test1, test2, test3, test4],
}
const shuffleArray = (arr) => {
    const result = [...arr]
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[result[i], result[j]] = [result[j], result[i]]
    }
    return result
}

const shuffledImages = computed(() => shuffleArray(images[selectedCategory.value]))
</script>

<style scoped>
.imageList {
    font-family: sans-serif;
}

.category-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 20px;
}

.category-bar button {
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    color: #333;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
}

.arco-btn {
    font-family: Segoe UI Variable;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;

}

.arco-btn.selected {
    color: var(--Brand-brand, rgba(153, 46, 138, 1));
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    max-height: 600px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}



.image-grid::-webkit-scrollbar {
    display: none;
}

.image-box {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-box:hover img {
    transform: scale(1.03);
}
</style>
