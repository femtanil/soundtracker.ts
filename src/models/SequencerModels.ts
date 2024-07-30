export class SequencerStep {
    public active: boolean;
    public playing: boolean;

    constructor(active: boolean = false, playing: boolean = false) {
        this.active = active;
        this.playing = playing;
    }

    toggle() {
        this.active = !this.active;
    }
}

export class SequencerTrack {
    public id: number;
    public steps: SequencerStep[];

    constructor(id: number, numSteps: number) {
        this.id = id;
        this.steps = Array.from({ length: numSteps }, () => new SequencerStep());
    }
}
