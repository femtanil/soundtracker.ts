<template>
    <div id="app-range-bar-container">
        <AppInput v-model="props.valueInput" type="range" :class="'range range-secondary'" :step="props.step"></AppInput>
    </div>
</template>
<script setup lang="ts">
import AppInput from '@/components/AppInput.vue';

interface Props {
    valueInput?: number;
    maxValue?: number;
    step?: number;
}

const props = withDefaults(defineProps<Props>(), {
    valueInput: () => 33,
    maxValue: () => 100,
    step: () => 12.5,
});
</script>
