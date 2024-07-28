import { defineStore } from 'pinia';
import { reactive, ref, Ref } from 'vue';
import { SequencerTrack } from '@/models/SequencerTrack.ts';


export const useSequencerStore = defineStore('sequencer', () => {
    const bpm: Ref<number> = ref(120);
    const numTracks: Ref<number> = ref(4);
    const numSteps: Ref<number> = ref(16);
    const tracks = reactive(Array.from({ length: numTracks.value }, (_, i) => new SequencerTrack(i, numSteps.value)));

    function toggleStep(trackId: number, stepIndex: number) {
        const track = tracks.find(t => t.id === trackId);
        if (track) {
            track.steps[stepIndex].toggle();
        }
    };

    return {
        bpm,
        numTracks,
        numSteps,
        tracks,
        toggleStep
    }
});
