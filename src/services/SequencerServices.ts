import * as Tone from 'tone';
import { useSequencerStore } from '@/stores/sequencerStore.ts';

export class SequencerService {
    private sequencerStore = useSequencerStore();

    constructor() {
        Tone.getTransport().bpm.value = this.sequencerStore.bpm;
    }

    public toggleStep(trackId: number, stepIndex: number) {
        const track = this.sequencerStore.tracks.find(t => t.id === trackId);
        if (track) {
            track.steps[stepIndex].toggle();
        }
    };

    public setBpm(bpm: number) {
        this.sequencerStore.bpm = bpm;
        Tone.getTransport().bpm.value = bpm;
    }
}
