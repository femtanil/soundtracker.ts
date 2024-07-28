<template>
    <div id="sequencer-container">
        <div v-for="track in tracks" :key="track.id">
            <Track :track-id="track.id" :steps="track.steps" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import Track from '@/components/Track.vue';
import { useSequencerStore } from '@/stores/sequencerStore.ts';

const { tracks } = storeToRefs(useSequencerStore());

onMounted(() => {
    //Tone.getTransport().bpm.value = bpm.value;
});
</script>
