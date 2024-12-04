<template>
    <nav class="breadcrumb">
        <span v-for="(item, index) in items" :key="index">
            <router-link v-if="index < items.length - 1" :to="item.link">{{ item.label }}</router-link>
            <span v-else>{{ item.label }}</span>
            <span v-if="index < items.length - 1"> / </span>
        </span>
    </nav>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.breadcrumb {
    font-family: Gilroy_Regular;
    font-size: 16px;
    color: #333;
}
</style>
