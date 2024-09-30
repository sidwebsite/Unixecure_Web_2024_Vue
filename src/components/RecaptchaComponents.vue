<script setup>
    import { ref, defineEmits, onMounted } from 'vue';
    import vueRecaptcha from 'vue3-recaptcha2';
    const hostname = window.location.hostname;

    const siteKey = ref('')
    const getSiteKey = () => {
        const keyTTest = '6LdTX84eAAAAAK-EU8pB4R9dftS50ye-yo8I8Y7_'
        const keyProd = '6Ld_v4YjAAAAAGqubqo6jBfy_aMqA1Ad7T12CC9Z'
        switch (hostname) {
            case '10.13.202.198':
                siteKey.value = keyTTest
                break;
            case '10.13.202.175':
                siteKey.value = keyProd
                break;
            case '118.163.244.11':
                siteKey.value = keyProd
                break;
            case 'www.unixecure.com':
                siteKey.value = keyProd
                break;
            default:
                break;
        }
        return siteKey.value
    }
    
    const recaptchaRef = ref(null);
    const emit = defineEmits(['verified', 'expired']);

    const onVerify = (token) => {
        emit('verified', token)
    }

    const onExpired = () => {
        emit('expired')
    }
    // onMounted
    onMounted(() => {
        getSiteKey()
    }) 
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