<template>
    <div class="flex justify-center h-full max-w-full">
        <component :is="visibleComponent" />
        <Sequencer></Sequencer>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import Sequencer from '@/components/Sequencer.vue';

const visibleComponent = computed(() => {
    return null;
});

</script>
