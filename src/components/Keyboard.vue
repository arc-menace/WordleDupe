<script setup lang="ts">
    import { useDark } from "@vueuse/core";
    import KeyboardKey from "./KeyboardKey.vue";

    useDark({
        attribute: "theme",
        valueDark: "dark",
        valueLight: "light"
    });
</script>

<style>
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0.5rem auto;
    }

    .top-row {
        margin-top: 2rem;
    }
</style>

<template>
    <div class="row top-row">
        <KeyboardKey pressValue="Q"/>
        <KeyboardKey pressValue="W"/>
        <KeyboardKey pressValue="E"/>
        <KeyboardKey pressValue="R"/>
        <KeyboardKey pressValue="T"/>
        <KeyboardKey pressValue="Y"/>
        <KeyboardKey pressValue="U"/>
        <KeyboardKey pressValue="I"/>
        <KeyboardKey pressValue="O"/>
        <KeyboardKey pressValue="P"/>
    </div>
    <div class="row">
        <KeyboardKey pressValue="A"/>
        <KeyboardKey pressValue="S"/>
        <KeyboardKey pressValue="D"/>
        <KeyboardKey pressValue="F"/>
        <KeyboardKey pressValue="G"/>
        <KeyboardKey pressValue="H"/>
        <KeyboardKey pressValue="J"/>
        <KeyboardKey pressValue="K"/>
        <KeyboardKey pressValue="L"/>
    </div>
    <div class="row">
        <KeyboardKey pressValue="Enter"/>
        <KeyboardKey pressValue="Z"/>
        <KeyboardKey pressValue="X"/>
        <KeyboardKey pressValue="C"/>
        <KeyboardKey pressValue="V"/>
        <KeyboardKey pressValue="B"/>
        <KeyboardKey pressValue="N"/>
        <KeyboardKey pressValue="M"/>
        <KeyboardKey pressValue="Back"/>
    </div>
</template>