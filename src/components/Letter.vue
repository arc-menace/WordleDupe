<script setup lang="ts">
    import Letter from '../models/letter.ts'

    const props = defineProps({
        letter : Letter
    })

    import { useDark } from "@vueuse/core";

    useDark({
        attribute: "theme",
        valueDark: "dark",
        valueLight: "light"
    });
</script>

<style scoped>
    .letter-color {
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        margin: 0.2rem;
    }

    [theme='light']
    .letter-color {
        color: var(--main-text);
        border: 1px solid var(--main-text);
    }

    [theme='dark']
    .letter-color {
        color: var(--main-text-dark);
        border: 1px solid var(--main-text-dark);
    }
</style>

<template>
    <div class="letter-color" :style="{ 'background-color': props.letter?.color }">
        {{ props.letter?.letter }}
    </div>
</template>