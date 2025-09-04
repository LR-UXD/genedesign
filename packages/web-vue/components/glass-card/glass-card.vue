<template>
    <div class="glass-card">
    </div>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({
    name: 'GlassCard'
})
</script>

<style scoped>
.glass-card {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 16px;
}
</style>