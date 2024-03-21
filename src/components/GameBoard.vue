<script setup lang="ts">
    import Word from './Word.vue';
    import { useGameStore } from '../store/gamestore.ts';

    const store = useGameStore();

    store.resetGame();

    function preventButtonClick(e : any) {
        if(e.key === 'Enter') {
            e.preventDefault();
            return false;
        }
    }
</script>

<style scoped>
    .reset-button {
        margin-bottom: 1rem;
    }
</style>

<template>
    <button @click="store.resetGame()" @keydown="e => preventButtonClick(e)" class="reset-button">Reset Game</button>
    <div>
        <Word :word="store.words[0]" />
        <Word :word="store.words[1]" />
        <Word :word="store.words[2]" />
        <Word :word="store.words[3]" />
        <Word :word="store.words[4]" />
        <Word :word="store.words[5]" />
    </div>
</template>