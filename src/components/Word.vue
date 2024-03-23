<script setup lang="ts">
    import Letter from './Letter.vue'
    const props = defineProps(['word'])
</script>

<style scoped>
    .word {
        display: flex;
        flex-direction: row;
    }
</style>

<template>
    <div class="word">
        <div v-for="letter in props.word?.letters">
            <Letter :letter="letter"/>
        </div>
    </div>
    
</template>