<template>
    <div id="sequencer-container">
        <div id="sequencer-container-settings" class="flex flex-row justify-center">
            <div class="flex flew-row">
                <div class="">
                    <span>
                        Tracks:
                    </span>
                    <AppInput v-model="inputTracks" class="input input-bordered input-xs text-center w-10"></AppInput>
                </div>
                <div class="">
                    <span>
                        Steps:
                    </span>
                    <AppInput v-model="inputSteps" class="input input-bordered input-xs text-center w-10"></AppInput>
                </div>
                <div class="">
                    <span>
                        BPM:
                    </span>
                    <AppInput v-model="inputBpm" class="input input-bordered input-xs text-center w-10"></AppInput>
                </div>
            </div>
        </div>
        <div id="sequencer-container-tracks" v-for="track in tracks" :key="track.id">
            <Track :track-id="track.id" :steps="track.steps" />
        </div>
        <div id="sequencer-container-playback" class="flex justify-center">
            <AppSmallButton @click="sequencerService?.playSequenceOneTrackPerStep()">{{ '▶️' }}</AppSmallButton>
            <AppSmallButton @click="sequencerService?.stopSequence()">{{ '⏹️' }}</AppSmallButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch, inject, ref, Ref } from 'vue';
import { storeToRefs } from 'pinia';
import AppInput from '@/components/AppInput.vue';
import AppSmallButton from '@/components/AppSmallButton.vue';
import Track from '@/components/Track.vue';
import { useSequencerStore } from '@/stores/sequencerStore.ts';
import { sequencerServiceKey } from '@/utils/injection-keys';
import { SequencerService } from '@/services/SequencerServices';

const { tracks, numTracks, numSteps, bpm } = storeToRefs(useSequencerStore());
const sequencerService = inject<SequencerService>(sequencerServiceKey);
const inputTracks: Ref<number> = ref(numTracks.value);
const inputSteps: Ref<number> = ref(numSteps.value);
const inputBpm: Ref<number> = ref(bpm.value);

watch([inputTracks, inputSteps], ([newInputTracks, newInputSteps]) => {
    sequencerService?.stopSequence();
    numTracks.value = newInputTracks;
    inputSteps.value = newInputSteps;
})
</script>
