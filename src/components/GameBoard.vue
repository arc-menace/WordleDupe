<script setup lang="ts">
    import Word from './Word.vue';
    import { useGameStore } from '../store/gamestore.ts';

    const store = useGameStore();
</script>

<style>
    .gameboard {
        margin: 0 auto;
    }
</style>

<template>
    <Word :word="store.words[0]" />
    <Word :word="store.words[1]" />
    <Word :word="store.words[2]" />
    <Word :word="store.words[3]" />
    <Word :word="store.words[4]" />
    <Word :word="store.words[5]" />
</template>