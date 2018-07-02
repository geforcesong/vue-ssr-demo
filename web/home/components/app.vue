<template>
    <div id="app">
        Hello World app.vue file!
        <p>
            bla...
        </p>
        <p>{{ homeText }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                homeText: 'Home Component'
            };
        }
    };
</script>