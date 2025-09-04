<template>
    <a-space direction="vertical">
        <div class="project-name">Project Name</div>
        <a-breadcrumb>
            <template #separator>
                <icon-right />
            </template>
            <a-breadcrumb-item style="color: #86909C;">Project</a-breadcrumb-item>
            <a-breadcrumb-item>Project Name</a-breadcrumb-item>
        </a-breadcrumb>
    </a-space>
</template>
<style scoped>
.project-name {
    font-size: 16px;
    font-weight: bold;
    color: #4E5969;
    margin-bottom: 8px;
}
</style>
