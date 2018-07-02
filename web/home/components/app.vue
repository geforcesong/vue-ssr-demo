<template>
    <div>
        <vheader :showSubHeader="!hideSubHeader"></vheader>
        Hello World app.vue file!
        <p>
            bla...
        </p>
        <p>{{ homeText }}</p>
        <div>{{tempDataText}}</div>
        <div>{{hideSubHeader}}</div>
    </div>
</template>
<script>
    import vheader from '../../common/components/header.vue';
    export default {
        created(){
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
