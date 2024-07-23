<template>
    <div id="app-master-volume-container" class="flex flew-row">
        <AppRangeBar class="m-1"></AppRangeBar>
        <AppSmallButton class="m-1">{{ 'V' }}</AppSmallButton>
    </div>
</template>
<script setup lang="ts">
import AppRangeBar from '@/components/AppRangeBar.vue';
import AppSmallButton from '@/components/AppSmallButton.vue';
</script>
