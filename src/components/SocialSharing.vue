<template>
    <div class="share">
        <s-line
            :window-features="windowFeatures"
            :share-options="shareOptions"
            :use-native-behavior="useNativeBehavior"
        >
            <i class="fa-brands fa-line"></i>
        </s-line>
        <s-facebook
            :window-features="windowFeatures"
            :share-options="shareOptions"
            :use-native-behavior="useNativeBehavior"
        >
            <i class="fa-brands fa-facebook-f"></i>
        </s-facebook>
    </div>
</template>

<script>
    import { SLine } from 'vue-socials'
    import { SFacebook } from 'vue-socials'
    export default {
        components: { SFacebook, SLine },
        data() {
            return {
                windowFeatures: {},
                shareOptions: {
                    url: window.location,
                    quote: 'Quote',
                    hashtag: '',
                    text: 'Text',
                },
                useNativeBehavior: false,
            }
        },
        methods: {
            onLoad() {},
            onError() {},
            onLoading() {},
        }
    }
</script>

<style>

</style>