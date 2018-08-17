<template>
    <div id="about">
        <vheader :showSubHeader="false"></vheader>
        this is about <br>
        <p>{{storeName}}</p><br>
        <p>{{model.text}}</p>
    </div>
</template>
<script>
import vheader from '../../common/components/header.vue';
export default {
    asyncData ({ store, route }) {
        console.log('asyncData is called');
    },
    computed:{
        storeName(){
            return this.$store.state.storeName
        },
        model(){
            // console.log(this.$store.state.route);
            return this.$store.state.model
        }
    },
    components: {
        vheader
    }
}
</script>
<style>
p{
    background-color: gray;
}
</style>

