<template>
    <div class="flex flex-row">
        <Step v-for="(step, index) in props.steps" :key="index" :isActive="step.active" @toggle="toggleStep(index)" />
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import Step from '@/components/Step.vue';
import { SequencerStep } from '@/models/SequencerModels.ts';
import { SequencerService } from '@/services/SequencerServices';
import { sequencerServiceKey } from '@/utils/injection-keys';

interface Props {
    trackId: number;
    steps: SequencerStep[];
}
const props = defineProps<Props>();
const sequencerService = inject(sequencerServiceKey) as SequencerService;

function toggleStep(index: number): void {
    sequencerService.toggleStep(props.trackId, index);
}
</script>
