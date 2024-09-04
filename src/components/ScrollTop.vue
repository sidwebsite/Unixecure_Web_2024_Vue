<template>
    <button type="button" @click="scrollTop" class="btn gotop" :class="{ 'show': isVisible }">
        <i class="fa-solid fa-arrow-up-long"></i>
    </button>
</template>

<script>
    export default {
        data () {
            return {
                isVisible: false
            }
        },
        methods: {
            scrollTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            },
            scrollListener() {
                this.isVisible = window.scrollY > 150
            }
        },
        mounted() {
            window.addEventListener('scroll', this.scrollListener)
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.scrollListener)
        }
    }
</script>