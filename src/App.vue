<script setup lang="ts">
  import GameBoard from './components/GameBoard.vue'
  import ResetButton from './components/ResetButton.vue'
  import ThemeToggleButton from './components/ThemeToggleButton.vue'
  import Keyboard from './components/Keyboard.vue'

  import { useGameStore } from './store/gamestore.ts';
  import { useDark } from "@vueuse/core";

  const store = useGameStore();
  
  useDark({
    attribute: "theme",
    valueDark: "dark",
    valueLight: "light"
  });

  store.resetGame();

  document.addEventListener('keydown', async function(event) {
      await store.keydown(event);
  });

  
</script>

<style>
    .Vue-Toastification__toast--success.wordle-dupe-toast {
      background-color: var(--success) !important;
    }

    .Vue-Toastification__toast--warning.wordle-dupe-toast {
      background-color: var(--warning) !important;
    }

    .Vue-Toastification__toast--error.wordle-dupe-toast {
      background-color: var(--error) !important;
    }

    [theme='dark'] {
      background-color: #242424;
      color: white;

      --success: #538d4e;
      --warning: #b59f3b;
      --error: red;
    }

    .toolbar {
      display: flex;
      justify-content: end;
    }

    .game-area {
      margin: 0 auto;
      text-align: center;
      max-width: 1280px;
    }
</style>

<template>
  <div class="toolbar">
    <ResetButton />
    <ThemeToggleButton />
  </div>
  <div class="game-area">
    <h1>Wordle Dupe</h1>
    <GameBoard />
    <Keyboard />
  </div>
</template>
