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

<style scoped lang="less" src="../style/imageList.less" />
