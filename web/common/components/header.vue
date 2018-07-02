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
.header{
    background-color: yellow;
    color: red;
}
</style>

