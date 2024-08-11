<script setup lang="ts">
    import { useGameStore } from '../store/gamestore.ts';

    const gameStore = useGameStore();

    const props = defineProps({
        pressValue : { type: String, required: true}
    })

    import { useDark } from "@vueuse/core";

    useDark({
        attribute: "theme",
        valueDark: "dark",
        valueLight: "light"
    });
</script>

<style>
    .key {
        margin: 0 0.3rem;
        padding: 4px 6px;
        user-select: none;
        min-width: 0.9rem;
    }

    [theme='dark']
    .key {
        border: 1px solid var(--main-text-dark);
    }
</style>

<template>
    <div class="key" :style="{ 'background-color': gameStore.getKeyboardBackground(props.pressValue) }" @click="gameStore.pressKeyboardKey(props.pressValue)">
        {{ props.pressValue }}
    </div>
</template>