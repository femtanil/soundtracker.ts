<template>
    <div id="sequencer-container">
        <div v-for="track in tracks" :key="track.id">
            <Track :track-id="track.id" :steps="track.steps" />
        </div>
        <div class="flex justify-center">
            <AppSmallButton @click="sequencerService?.playSequenceOneTrackPerStep()">{{ '▶️' }}</AppSmallButton>
            <AppSmallButton @click="sequencerService?.stopSequence()">{{ '⏹️' }}</AppSmallButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue';
import { storeToRefs } from 'pinia';
import AppSmallButton from '@/components/AppSmallButton.vue';
import Track from '@/components/Track.vue';
import { useSequencerStore } from '@/stores/sequencerStore.ts';
import { sequencerServiceKey } from '@/utils/injection-keys';
import { SequencerService } from '@/services/SequencerServices';

const { tracks } = storeToRefs(useSequencerStore());
const sequencerService = inject<SequencerService>(sequencerServiceKey);

onMounted(() => {
});
</script>
