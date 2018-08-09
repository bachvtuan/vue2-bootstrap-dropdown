import Vue from 'vue/dist/vue.js'
var dropdown = require('./Dropdown.vue')
new Vue({
    el: '#app',
    components: {
        'mydropdown': dropdown
    },
    methods: {
        hello () {
            alert('Hello')
        }
    },

    mounted() {}
});
