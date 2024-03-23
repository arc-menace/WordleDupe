<script setup lang="ts">
    import Letter from '../models/letter.ts'

    const props = defineProps({
        letter : Letter
    })


</script>

<style scoped>
     .letter-color {
        color: white;
        height: 60px;
        width: 60px;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        margin: 0.2rem;
    }
</style>

<template>
    <div class="letter-color" :style="{ 'background-color': props.letter?.color }">
        {{ props.letter?.letter }}
    </div>
</template>