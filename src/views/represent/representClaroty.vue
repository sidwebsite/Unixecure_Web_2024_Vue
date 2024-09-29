<template>
    <section class="pt-4">
        <div class="container-absolute">
            <div class="container position-relative h-100">
                <!-- background images start -->
                <span class="represent_bg position-absolute">
                    <img src="../../assets/images//represent/represent_bg.svg" alt="">
                </span>
                <!-- background images end -->
            </div>
        </div>
        <div class="mw-760 pb-5">
            <nav class="h-auto">
                <ul class="breadcrumb news-breadcrumb">
                    <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
                    <li class="breadcrumb-item"><RouterLink to="/representHome">代理產品</RouterLink></li>
                    <li class="breadcrumb-item active">Claroty</li>
                </ul>
            </nav>
            <figure class="figure py-5 text-center">
                <img src="../../assets/images/represent/claroty-logo.png" class="img-fluid" alt="">
            </figure>
            <h4 class="text-center">We envision a future where the cyber and physical worlds safely connect.</h4>
        </div>
    </section>
    <section class="bg-white-80 py-9">
        <div class="mw-760">
            <article class="text-center">
                <h4 class="pb-6">保護您的關鍵基礎設施免受日益嚴重的網路威脅</h4>
                <p class="mb-6 fs-6">Claroty 是一家領先的網路安全公司，致力於保護工業、醫療保健、公共部門和商業組織中的網路實體系統（XIoT）。品牌的使命是確保支撐現代生活的網路物理系統(CPS)的安全，並實現網路世界與實體世界的安全連接。</p>
                <p class="mb-6 fs-6">在工業領域，Claroty 透過無與倫比的協議覆蓋範圍和專門構建的網路安全技術，來控制、監控和保護工業控制系統及 XIoT 資產，確保運營的連續性和安全性。同時，在醫療保健方面，致力於確保患者護理的安全可靠，利用醫療設備互連的優勢，提供全面的監控和風險管理，提升醫療服務的質量和效率。</p>
                <p class="mb-6 fs-6">不論是工業、醫療保健、公共部門還是商業領域，Claroty 的解決方案都能提供卓越的網路安全保護，幫助組織有效應對各類網路威脅，確保其運營環境的安全與穩定。</p>
                <h4 class="mb-6">品牌功能 Highlight</h4>
                <ul class="fs-6 text-left">
                    <li>最深度的XIoT可視性: 提供最深度的XIoT可視性，有效降低風險。</li>
                    <li>網路保護: 提供行業首創的區域和通信政策建議，推動網路分段和異常檢測。</li>
                    <li>安全訪問: 開發唯一專為安全訪問的解決方案，提供特權訪問和身份管理。</li>
                    <li>威脅檢測: 檢測已知和未知威脅，保護運營環境的完整性。</li>
                    <li>產品多樣性: 提供設計用於滿足組織互聯物聯網環境安全需求的多樣化模塊化工具。</li>
                </ul>
            </article>
        </div>
    </section>
    <section>
        <div class="mw-760 pt-6 pb-9">
            <RepresentLists :listData="lists"></RepresentLists>
        </div>
    </section>
    <ProductInformation :productName="productName"></ProductInformation>
</template>

<script>
    import ProductInformation from '../../components/ProductInformation.vue'
    import RepresentLists from '../../components/representLists.vue'
    export default {
        data() {
            return {
                productName: 'claroty',
                lists: [
                    {
                        Id: '1',
                        product: 'claroty',
                        Name: 'Claroty 醫療保健網路實體系統保護平台<br /> Medigate 解決方案',
                        typeName: '終端資料安全',
                        link: '/clarotyContent01'
                    },
                    {
                        Id: '2',
                        product: 'claroty',
                        Name: 'Claroty 全球領先的工業網路安全解決方案',
                        typeName: '終端資料安全',
                        link: '/clarotyContent02'
                    },
                ]
            }
        },
        components: {
            ProductInformation,
            RepresentLists
        }
    }
</script>

<style>

</style>