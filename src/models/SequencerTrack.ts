class SequencerStep {
    public active: boolean;

    constructor(active: boolean = false) {
        this.active = active;
    }

    toggle() {
        this.active = !this.active;
    }
}

class SequencerTrack {
    public id: number;
    public steps: SequencerStep[];

    constructor(id: number, numSteps: number) {
        this.id = id;
        this.steps = Array.from({ length: numSteps }, () => new SequencerStep());
    }
}

export { SequencerStep, SequencerTrack };
