<template>
    <button class="button regular" @click="$emit('click')">
        <slot></slot>
    </button>
</template>
<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({});
</script>
<style scoped>
    .regular {
        background-color: var(--color-teal);
        border: 1px solid var(--color-teal);
    }

    .regular >>> .btnText {
        color: var(--color-white);
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 100%;
        transition: .15s;
        transform: translateY(2px);
    }

    .regular:hover {
        background-color: var(--color-white);
    }

    .regular:hover >>> .btnText { color: var(--color-teal); }
</style>

<style scoped src="./shared.css"></style>