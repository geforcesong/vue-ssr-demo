<template>
    <div>
        This is component {{name}}
        <button v-on:click="showUrl">show url</button>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            name: '111111'
        };
    },
    methods:{
        showUrl(){
            alert(window.location.href);
        }
    }
}
</script>
