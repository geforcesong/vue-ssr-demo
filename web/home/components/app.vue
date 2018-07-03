<template>
    <div>
        <vheader :showSubHeader="!hideSubHeader"></vheader>
        Hello World app.vue file!
        <p style="background-color:red" v-on:click="greet">
            bla...
        </p>
        <p style="color:pink;">{{ homeText }}</p>
        <div >{{tempDataText}}</div>
        <div>{{hideSubHeader}}</div>
    </div>
</template>
<script>
    import vheader from '../../common/components/header.vue';
    export default {
        created(){
        },
        mounted(){
            alert('abc')
        },
        methods: {
            greet: function (event) {
                alert('Hello !')
            }
        },
        props: ['tempDataText', 'hideSubHeader'],
        data() {
            return {
                homeText: 'Home Component'
            };
        },
        components: {
            vheader
        }
    };
</script>
