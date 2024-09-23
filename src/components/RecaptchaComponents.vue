<script setup>
    import { ref, defineEmits } from 'vue';
    import vueRecaptcha from 'vue3-recaptcha2';

    const siteKey = '6LdTX84eAAAAAK-EU8pB4R9dftS50ye-yo8I8Y7_'; 
    const recaptchaRef = ref(null);
    const emit = defineEmits(['verified', 'expired']);

    const onVerify = (token) => {
        emit('verified', token);
    };

    const onExpired = () => {
        emit('expired');
    };
</script>

<template>
    <vue-recaptcha
        hl="zh-TW"
        ref="recaptchaRef"
        :sitekey="siteKey"
        @verify="onVerify"
        @expired="onExpired"
    />
</template>