<template>
    <div id="app-view-bar-container" class="flex flew-row justify-between items-center p-2">
        <div id="app-view-bar-master-volume-container" class="flex">
            <AppMasterVolume></AppMasterVolume>
        </div>
        <div id="app-view-bar-panels-container" class="flex">
            <div class="">
                <AppTabSelection :tabs="tabNames"></AppTabSelection>
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
import AppMasterVolume from '@/components/AppMasterVolume.vue';
import AppTabSelection from '@/components/AppTabSelection.vue';

const tabNames: string[] = ["Disk Browser", "Track Scopes", "Master Scopes", "Master Spectrum"];
</script>
