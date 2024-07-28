<template>
    <div class="flex flex-row">
        <Step v-for="(step, index) in props.steps" :key="index" :isActive="step.active" @toggle="toggleStep(index)" />
    </div>
</template>

<script setup lang="ts">
import { useSequencerStore } from '@/stores/sequencerStore.ts';
import Step from '@/components/Step.vue';
import { SequencerStep } from '@/models/SequencerTrack.ts';

interface Props {
    trackId: number;
    steps: SequencerStep[];
}
const props = defineProps<Props>();
const sequencerStore = useSequencerStore();

function toggleStep(index: number) {
    sequencerStore.toggleStep(props.trackId, index);
}
</script>
