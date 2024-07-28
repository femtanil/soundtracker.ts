import { defineStore } from 'pinia';
import { reactive, ref, Ref } from 'vue';
import { SequencerTrack } from '@/models/SequencerModels.ts';


export const useSequencerStore = defineStore('sequencer', () => {
    const bpm: Ref<number> = ref(120);
    const numTracks: Ref<number> = ref(4);
    const numSteps: Ref<number> = ref(16);
    const tracks = reactive(Array.from({ length: numTracks.value }, (_, i) => new SequencerTrack(i, numSteps.value)));

    return {
        bpm,
        numTracks,
        numSteps,
        tracks,
    }
});
