<template>
    <div id="app">
        Hello World app.vue file!
        <p>
            bla...
        </p>
        <p>{{ homeText }}</p>
        <div>{{tempDataText}}</div>
    </div>
</template>
<script>
    export default {
        props: ['tempDataText'],
        data() {
            return {
                homeText: 'Home Component'
            };
        }
    };
</script>