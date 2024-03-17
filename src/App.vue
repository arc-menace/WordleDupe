<script setup lang="ts">
  import GameBoard from './components/GameBoard.vue'

  import { useGameStore } from './store/gamestore.ts';

  const store = useGameStore();

  document.addEventListener('keydown', function(event) {
    store.keydown(event);
  });
</script>

<template>
  <h1>Wordle Dupe</h1>
  <GameBoard />
</template>
