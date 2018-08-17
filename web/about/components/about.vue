<template>
    <div id="about">
        this is about <br>
        <p>{{storeName}}</p><br>
        <p>{{model.text}}</p>
    </div>
</template>
<script>

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
    }
}
</script>
