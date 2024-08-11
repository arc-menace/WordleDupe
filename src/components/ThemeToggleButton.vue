<script setup lang="ts">
    import { useDark, useToggle } from "@vueuse/core";

    const isDark = useDark({
        attribute: "theme",
        valueDark: "dark",
        valueLight: "light"
    });

    const toggleDark = useToggle(isDark);
</script>

<style>
    .to-dark-button {
        border: none;
        margin-top: 1rem;
        margin-left: 0.5rem;
        margin-right: 1rem;
        background-color: var(--main-bg);
        color: var(--main-text);
        border-radius: 1rem;
        height: 2rem;
        width: 2rem;
    }

    .to-dark-button:hover {
        background-color: var(--main-text);
        color: var(--main-bg);
    }

    .to-light-button {
        border: none;
        margin-top: 1rem;
        margin-left: 0.5rem;
        margin-right: 1rem;
        background-color: var(--main-bg-dark);
        color: var(--main-text-dark);
        border-radius: 1rem;
        height: 2rem;
        width: 2rem;
    }

    .to-light-button:hover {
        background-color:var(--main-text-dark);
        color: var(--main-bg-dark);
    }
</style>

<template>
    <button v-if="isDark" @click="toggleDark()" class="to-light-button" title="Switch to Light Mode">
        <i class="fa-solid fa-sun"></i>
    </button>
    <button v-else @click="toggleDark()" class="to-dark-button" title="Switch to Dark Mode">
        <i class="fa-solid fa-moon"></i>
    </button>
</template>