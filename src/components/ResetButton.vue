<script setup lang="ts">
    import { useGameStore } from '../store/gamestore.ts';
    import { useDark } from "@vueuse/core";

    const store = useGameStore();

    useDark({
    attribute: "theme",
    valueDark: "dark",
    valueLight: "light"
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
        border: none;
        margin-top: 1rem;
        margin-right: 0.5rem;
        border-radius: 100%;
    }

    [theme='light']
    .reset-button {
        background-color: var(--main-bg);
        color: var(--main-text);
    }

    [theme='light']
    .reset-button:hover {
      background-color: var(--main-text);
      color: var(--main-bg);
    }

    [theme='dark']
    .reset-button {
      background-color: var(--main-bg-dark);
      color: var(--main-text-dark);
    }

    [theme='dark']
    .reset-button:hover {
      background-color: var(--main-text-dark);
      color: var(--main-bg-dark);
    }
</style>

<template>
    <button @click="store.resetGame()" @keydown="e => preventButtonClick(e)" class="reset-button" title="Reset Game">
        <i class="fa-solid fa-arrow-rotate-left"></i>
    </button>
</template>
