import { defineStore } from 'pinia';
import { reactive, ref, Ref } from 'vue';


export const useSequencerStore = defineStore('sequencer', () => {
    const bpm: Ref<number> = ref(120);
    const numTracks: Ref<number> = ref(4);
    const numSteps: Ref<number> = ref(16);
    const tracks = reactive(Array.from({ length: numTracks.value }, (_, i) => createTrack(i, numSteps.value)));

    function createStep() {
        return { active: false };
    }

    function createTrack(trackId: number, numSteps: number) {
        return {
            id: trackId,
            steps: Array.from({ length: numSteps }, createStep)
        };
    }

    function toggleStep(trackId: number, stepIndex: number) {
        const track = tracks.find(t => t.id === trackId);
        if (track) {
            track.steps[stepIndex].active = !track.steps[stepIndex].active;
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
