<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Year from './components/YearComponent.vue'
    import navbars from './components/NavbarsCompopnent.vue'
    import footerNavbars from './components/FooterNavbars.vue'
    import ScrollTop from './components/ScrollTop.vue'
</script>

<template>
    
    <div class="wrapper">
        <header class="header d-flex align-items-center">
            <div class="logo">
                <RouterLink to="/"><img src="./assets/images/logo.svg" alt="uniXecure智慧資安科技logo" class="img-fluid"></RouterLink>
            </div>
            <nav id="nav" class="navbar d-flex align-items-center justify-content-end justify-content-lg-between flex-grow-1">
                <navbars></navbars>
            </nav>
        </header>
        <!--  -->
        <main class="main">
            <router-view v-slot="{ Component, route }">
                <transition name="fade" mode="out-in">
                    <div :key="route.path" >
                        <component :is="Component" />
                    </div>
                </transition>
            </router-view>
        </main>
        <!--  -->
        <footer class="footer">
            <!-- footer contact start -->
            <section class="footer-contact">
                <div class="footer-contact-container">
                    <p class="text-secondary-300 pb-0 fw-bolder fs-6">企業方案 IT 服務 / 解決方案諮詢</p>
                    <h1>歡迎聯繫智慧資安</h1>
                    <p>uniXecure 提供資安管理循環，提供 <span class="text-secondary-300">事前預防</span>、<span class="text-secondary-300">事中偵測</span>、<span class="text-secondary-300">事後應處</span> 完整一站式資安服務，滿足營運及落實資安需求。以全天候 24x7 小時維運服務，整合人員、技術與程序，解決資安合規性、資安人才缺乏窘境，並與企業一起因應日益嚴峻的資安挑戰，守護企業的資訊安全，協助企業無後顧之憂發展組織核心業務。</p>
                    <RouterLink to="/contact" class="btn-secondary">聯絡我們</RouterLink>
                </div>
            </section>
            <!-- footer contact end -->
            <!-- footer Introduction start -->
            <section class="footer-Introduction">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 text-center text-lg-left">
                            <img src="./assets/images/logo.svg" alt="uniXecure智慧資安科技logo" class="img-fluid">
                            <ul class="list-unstyled">
                                <li>114 臺北市內湖區基湖路 35 巷 13 號 8 樓</li>
                                <li><a href="mailto:servicedesk@unixecure.com.tw">servicedesk@unixecure.com.tw</a></li>
                            </ul>
                            <ul class="footer-Introduction-icon-group d-flex justify-content-center justify-content-lg-start">
                                <li><a href="https://www.youtube.com/@unixecure3203" target="_blank" title="uniXecure youtube"><i class="fa-brands fa-youtube"></i></a></li>
                                <li><a href="https://www.facebook.com/uniXecure/" target="_blank" title="uniXecure facebook"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/unixecure/posts" target="_blank" title="uniXecurelinkedin"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="https://www.104.com.tw/company/1a2x6bmeqd" target="_blank" title="uniXecure 104人力銀行"><img src="./assets/images/104_logo.png" alt="104人力銀行logo" class="img-fluid"></a></li>
                            </ul>
                        </div>
                        <div class="col-lg-7">
                            <footerNavbars></footerNavbars>
                        </div>
                        <div class="col-12 text-center text-lg-right footer-sgs">
                            <img src="./assets/images/sgs.png" alt="sgs" class="img-fluid">
                        </div>
                        <div class="col-12 d-lg-flex justify-content-between">
                            <RouterLink to="/copyright" class="mb-4 mb-lg-0">著作權及隱私權聲明</RouterLink>
                            <Year></Year>
                        </div>
                    </div>
                </div>
            </section>
            <!-- footer Introduction end -->
        </footer>
    </div>
    <ScrollTop></ScrollTop>
</template>
<style lang="css">
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>