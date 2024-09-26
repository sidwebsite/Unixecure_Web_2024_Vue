<script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
        window.scrollTo(0, 0)
    })
</script>
<template>
    <div class="container position-relative">
        <!-- background images start -->
        <span class="contact_bg position-absolute">
            <img src="../assets/images/contact/contact_bg.svg" alt="" class="d-none d-lg-block">
            <img src="../assets/images/contact/contact_phone_bg.svg" alt="" class="d-block d-lg-none">
        </span>
        <!-- background images end -->
    </div>
    <div class="container px-0 px-lg-6">
        <div class="row">
            <div class="col-12">
                <div class="statements-success bg-white-80 border border-white backdrop-blur-60">
                    <h3 class="mb-4">感謝您提供聯絡資訊！</h3>
                    <p class="mb-4">我們已收到您的訊息，將盡快與您聯繫。您的個人資料將受到嚴格保護，僅用於處理您的需求</p>
                    <RouterLink to="/" class="btn-contact fs-4">返回首頁</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>