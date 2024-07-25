<template>
    <div id="app-tab-selection-container" role="tablist" class="tabs tabs-bordered">
        <a v-for="tab in props.tabs" role="tab" class="tab" :ref="addRef">
            {{ tab }}
        </a>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';

interface Props {
    tabs: string[];
}
const props = defineProps<Props>();
const tabsNumber: number = props.tabs.length;
const tabRefs: Ref<HTMLAnchorElement>[] = [];

function addRef(element: unknown) {
    if (element instanceof HTMLAnchorElement) {
        tabRefs.push(ref(element));
    }
};

function setActiveTab(ref: Ref): void {

}

onMounted(() => {

});
</script>
