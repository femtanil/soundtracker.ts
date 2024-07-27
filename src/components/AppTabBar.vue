<template>
    <div id="app-view-bar-container" class="flex flew-row justify-between items-center p-2">
        <div id="app-view-bar-master-volume-container" class="flex">
            <AppMasterVolume></AppMasterVolume>
        </div>
        <div id="app-view-bar-panels-container" class="flex">
            <div class="">
                <AppTabSelection @current-tab="(tabName) => updateTab(tabName)" :tabs="tabNames"
                    :defaultTab="defaultSelection">
                </AppTabSelection>
            </div>
        </div>
        <div id="app-view-bar-tbd-container" class="flex">
            <div class="">
                <span>TBD</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppMasterVolume from '@/components/AppMasterVolume.vue';
import AppTabSelection from '@/components/AppTabSelection.vue';

const router = useRouter();
const tabNames: string[] = ["Tracker", "Sequencer"];
const defaultSelection: string = tabNames[0];

function updateTab(tab: string) {
    if (tab == "Tracker") {
        router.push({ name: 'Tracker' });
    }
    else if (tab == "Sequencer") {
        router.push({ name: 'Sequencer' });
    }
}
</script>
