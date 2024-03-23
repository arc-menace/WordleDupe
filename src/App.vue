<script setup lang="ts">
  import GameBoard from './components/GameBoard.vue'

  import { useGameStore } from './store/gamestore.ts';

  const store = useGameStore();
  
  store.resetGame();

  console.log("what are you looking in here for? don't be nosy")

  document.addEventListener('keydown', async function(event) {
      await store.keydown(event);
  });

  function preventButtonClick(e : any) {
      if(e.key === 'Enter') {
          e.preventDefault();
          return false;
      }
  }
</script>

<style>
    .reset-button {
        margin-top: 1rem;
        width: 100%;
    }

    .Vue-Toastification__toast--success.wordle-dupe-toast {
      background-color: var(--success) !important;
    }

    .Vue-Toastification__toast--warning.wordle-dupe-toast {
      background-color: var(--warning) !important;
    }

    .Vue-Toastification__toast--error.wordle-dupe-toast {
      background-color: var(--error) !important;
    }

    :root {
      --success: #538d4e;
      --warning: #b59f3b;
      --error: red;
    }
</style>

<template>
  <h1>Wordle Dupe</h1>
  <GameBoard />
  <button @click="store.resetGame()" @keydown="e => preventButtonClick(e)" class="reset-button">Reset Game</button>
</template>
