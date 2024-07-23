<template>
    <div id="app-view-bar-container" class="flex flew-row justify-between">
        <div id="app-view-bar-master-volume-container" class="flex">
            <AppMasterVolume></AppMasterVolume>
        </div>
        <div id="app-view-bar-panels-container" class="flex">
            <div class="h-fit">
                <span>panels</span>
            </div>
        </div>
        <div id="app-view-bar-tbd-container" class="flex">
            <div class="h-fit">
                <span>TBD</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import AppMasterVolume from '@/components/AppMasterVolume.vue';
</script>
