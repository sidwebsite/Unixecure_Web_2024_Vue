<template>
    <section class="pt-4">
        <div class="container-absolute">
            <div class="container position-relative h-100">
                <!-- background images start -->
                <span class="represent_bg position-absolute">
                    <img src="../../assets/images/represent/represent_content_bg_2.svg" alt="">
                </span>
                <!-- background images end -->
            </div>
        </div>
        <div class="mw-760 pb-5">
            <nav class="h-auto">
                <ul class="breadcrumb news-breadcrumb">
                    <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
                    <li class="breadcrumb-item"><RouterLink to="/representHome">代理產品</RouterLink></li>
                    <li class="breadcrumb-item">Cellopoint</li>
                    <li class="breadcrumb-item active">Cellopoint 電子郵件管理安全與風險管理解決方案</li>
                </ul>
            </nav>
            <div class="text-center pt-5">
                <span class="d-inline-block text-primary-600 fw-bolder py-1 px-2 bg-gray-100">社群威脅惡意攻擊</span>
            </div>
            <figure class="figure py-5 text-center">
                <img src="../../assets/images/represent/cellopoint.png" class="img-fluid" alt="cellopoint">
            </figure>
            <h1 class="text-center mb-5">Cellopoint<br />電子郵件管理安全與風險管理解決方案</h1>
            <p class="text-center fs-6 mb-5">重新定義郵件安全標準，提升為五層縱深防禦，將電子郵件安全化繁為簡，並降低總持有成本（Total Cost of Ownership, TCO），可提供客戶為數位轉型最佳解決方案之一。</p>
            <div class="text-center">
                <RouterLink to="/contact" class="btn-contact">了解方案</RouterLink>
            </div>
        </div>
        <section class="py-9 bg-white-80 border border-white">
            <div class="mw-760">
                <h4 class="text-center">對於進階 APT 攻擊以及 BEC 變臉詐騙，不再需要擔心傳統防禦無法偵測及阻擋</h4>
            </div>
        </section>
    </section>
    <section class="py-9 bg-secondary-200 serve-feature-bg">
        <div class="container position-relative z-index-1">
            <h3 class="text-center mb-6">重新定義郵件安全新標準，五層縱深防禦模組。</h3>
            <div class="row row-gap-3">
                <div class="col-lg-4 col-md-6">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">Anti-Spam 防垃圾郵件</h4>
                        </article>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">Anti-Virus 郵件病毒掃描</h4>
                        </article>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">Anti-APT-URL 郵件防護</h4>
                        </article>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">Anti-APT-File 郵件防護</h4>
                        </article>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">Anti-BEC 變臉詐騙防護</h4>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-9">
        <div class="mw-760">
            <article class="mb-6">
                <p class="fs-6">傳統的 2 層防禦（防垃圾、病毒郵件）已經難以阻擋全新的威脅，例如釣魚郵件、勒索病毒、APT 進階持續性滲透攻擊（Advanced Persistent Threat, APT）以及最新的變臉詐騙。Cellopoint 重新定義郵件安全標準，提升為五層縱深防禦，將電子郵件安全化繁為簡，並降低總持有成本（Total Cost of Ownership, TCO），可提供客戶為數位轉型最佳解決方案之一。</p>
            </article>
            <article class="mb-6">
                <h4 class="text-primary mb-2">領先業界的 CelloOS 系統</h4>
                <p class="fs-6">CelloOS 為安全強化與效能為佳化作業系統，包括處理郵件收發之 MTA 引擎、監控系統狀態之系統檢測、事件記錄日誌及統計報表等，可彈性擴充各種安全及風險管理模組授權。</p>
            </article>
            <article class="mb-6">
                <h4 class="text-primary mb-2">風險管理模組可擴充</h4>
                <ul class="pl-4 fs-6">
                    <li>郵件歸檔檢索，內容稽核</li>
                    <li>網格搜索，數位簽章</li>
                </ul>
            </article>
            <figure class="figure mb-6 text-center">
                <img src="../../assets/images/represent/represent_cellopoint_pic1.png" class="img-fluid" alt="">
            </figure>
            <figure class="figure text-center">
                <img src="../../assets/images/represent/represent_cellopoint_pic2.png" class="img-fluid" alt="">
            </figure>
        </div>
    </section>
    <ProductInformation :productName="productName"></ProductInformation>
</template>

<script>
    import ProductInformation from '../../components/ProductInformation.vue';
    export default {
        data() {
            return {
                productName: 'Cellopoint',
            }
        },
        components: {
            ProductInformation
        }
    }
</script>