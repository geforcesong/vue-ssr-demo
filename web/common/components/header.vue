<template>
    <div class="vheader">
        this is header.....
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
<style lang="scss" scoped>
.vheader{
    background-color: yellow;
    color: red;
}
</style>

