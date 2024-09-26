<script setup>
    import router from "@/router"
    import { onMounted } from 'vue'

    onMounted(() => {
        window.scrollTo(0, 0)
    })
    const comeBack = () => {
        router.back()
    }
</script>
<template>
    <!-- background images start -->
    <div class="container-fixed">
        <div class="container h-100 position-relative">
            <span class="statements-bg d-none d-lg-block">
                <img src="../../assets/images/news/statements_bg.svg" alt="">
            </span>
            <span class="statements-bg statements-bg-ipad d-block d-lg-none">
                <img src="../../assets/images/news/statements_bg_ipad.svg" alt="">
            </span>
            <span class="statements-bg statements-bg-phone d-block d-md-none">
                <img src="../../assets/images/news/statements_bg_phone.svg" alt="">
            </span>
        </div>
    </div>
    <!-- background images end -->
    <div class="container news-container position-relative">
        <!-- title and breadcrumb start -->
        <div class="news-title-block mw-760 pt-4 pb-5">
            <nav class="h-auto">
                <ul class="breadcrumb news-breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                    <li class="breadcrumb-item">最新消息</li>
                    <li class="breadcrumb-item active"><router-link to="/statementsLists">報告書專區</router-link></li>
                </ul>
            </nav>
        </div>
        <!-- title and breadcrumb end -->
        <!-- content start -->
        <section class="bg-white-50 border border-white pt-5">
            <div class="mw-760 pb-9 pt-6">
                <div class="bg-gray-100-50 py-4 px-5">
                    <h3 class="text-center mb-4">感謝您的填寫！</h3>
                    <p class="text-center mb-4">我們已收到您的資料，報告書將由專業團隊準備，並於近期寄送至您的電子信箱，敬請期待。</p>
                    <div class="text-center">
                        <a href="#" @click="comeBack" class="btn-secondary text-decoration-none mr-3">繼續閱讀</a>
                        <RouterLink to="/" class="btn-contact statements-success-btn fs-4">返回首頁</RouterLink>
                    </div>
                </div>
            </div>
        </section>
        <!-- content end -->
    </div>
</template>