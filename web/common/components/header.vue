<template>
    <div class="vheader">
        <router-link v-bind:to="{path: '/'}">Home</router-link>
        <router-link v-bind:to="{path: '/about'}">About</router-link>
        <p v-if="showSubHeader">
            this is sub header.
        </p>
    </div>
</template>
<script>
export default {
    props: ['showSubHeader']
};
</script>
<style lang="scss">
    @import "./header.scss";
</style>

