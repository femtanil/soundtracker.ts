<template>
    <div class="flex flex-col justify-between h-full max-w-full">
        <component :is="visibleComponent" />
        <Sequencer></Sequencer>
    </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useMenuStore } from '@/stores/menu.ts';
import { PageType } from '@/enums.ts';
import Sequencer from '@/components/Sequencer.vue';

const menuStore = useMenuStore();

const visibleComponent = computed(() => {
    return null;
});

onMounted(() => {
    menuStore.setCurrentPage(PageType.SEQUENCER);
});

</script>
