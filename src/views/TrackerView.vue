<template>
    <div class="flex flex-col justify-between h-full max-w-full">
        <component :is="visibleComponent" />
    </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useMenuStore } from '@/stores/menu.ts';
import { PageType } from '@/enums.ts';

const menuStore = useMenuStore();

const visibleComponent = computed(() => {
    return null;
});

onMounted(() => {
    menuStore.setCurrentPage(PageType.TRACKER);
});

</script>
