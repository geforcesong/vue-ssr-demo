<template>
    <div id="app">
        <vheader :showSubHeader="!hideSubHeader"></vheader>
        Hello World app.vue file!
        <p style="background-color:red" v-on:click="greet">
            bla...
        </p>
        <p style="color:pink;">{{ homeText }}</p>
        <div styel="color:blue">{{tempDataText}}</div>
        <div>{{hideSubHeader}}</div>
        <button v-on:click="load">test</button>
        <div><async-example v-if="loadcomp1"></async-example></div>
    </div>
</template>
<script>
    import vheader from '../../common/components/header.vue';
    import Vue from 'vue';
    export default {
        created(){
        },
        mounted(){
        },
        methods: {
            greet: function (event) {
                alert('Hello !')
            },
            load(){
                console.log('show load');
                this.loadcomp1 = true;
                Vue.component('async-example', () => import('./comp1'));
            }
        },
        props: ['tempDataText', 'hideSubHeader'],
        data() {
            return {
                loadcomp1: false,
                apps:[],
                homeText: 'Home Component'
            };
        },
        components: {
            vheader
        }
    };
</script>
