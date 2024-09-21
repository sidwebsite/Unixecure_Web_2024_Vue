<template>
    <div class="col-12">
        <button @click="recaptcha">Execute recaptcha</button>
    </div>
    <!-- The reCAPTCHA does not need to display anything to the user -->
</template>
<script setup>
    import { useReCaptcha } from 'vue-recaptcha-v3'

    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

    const recaptcha = async () => {
    // (optional) Wait until recaptcha has been loaded.
    await recaptchaLoaded()

    // Execute reCAPTCHA with action "login".
    const token = await executeRecaptcha('contact_form')

    // Do stuff with the received token.
    }
</script>