<template>
    <div class="step flex flex-row justify-center items-center w-8 h-8 m-0.5 bg-gray-200 cursor-pointer"
        :class="{ 'bg-green-600': props.isActive }" @click="toggleStep">
        <!-- Display the step number or label if needed -->
    </div>
</template>

<script setup lang="ts">
interface Props {
    isActive: boolean;
}
const props = defineProps<Props>();

const emit = defineEmits<{
    toggle: [value: void];
}>();

function toggleStep() {
    emit('toggle');
}
</script>
