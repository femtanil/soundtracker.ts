import * as Tone from 'tone';
import { useSequencerStore } from '@/stores/sequencerStore.ts';

export class SequencerService {
    private sequencerStore = useSequencerStore();
    private synths: Tone.Synth[] = [];

    constructor() {
        this.setupSynths();
        Tone.getTransport().bpm.value = this.sequencerStore.bpm;
    }

    private setupSynths() {
        for (let i = 0; i < this.sequencerStore.numTracks; i++) {
            this.synths.push(new Tone.Synth().toDestination());
        }
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

    public playSequence() {
        Tone.getTransport().cancel();  // Clear existing events
        this.sequencerStore.tracks.forEach((track, trackIndex) => {
            track.steps.forEach((step, stepIndex) => {
                if (step.active) {
                    this.synths[trackIndex % this.synths.length].triggerAttackRelease("C2", "8n", `0:${trackIndex}:${stepIndex}`);
                }
            });
        });
        Tone.getTransport().start();
    }

    public playSequenceOneTrackPerStep() {
        Tone.getTransport().cancel();  // Clear existing events
        this.sequencerStore.tracks.forEach((track, trackIndex) => {
            track.steps.forEach((step, stepIndex) => {
                if (step.active) {
                    Tone.getTransport().schedule((time) => {
                        const synth = new Tone.Synth().toDestination();
                        synth.triggerAttackRelease("C2", "8n", time);
                    }, `0:${trackIndex}:${stepIndex}`);
                }
            });
        });
        Tone.getTransport().start();
    }

    public stopSequence() {
        Tone.getTransport().stop();
        Tone.getTransport().cancel();
    }
}
