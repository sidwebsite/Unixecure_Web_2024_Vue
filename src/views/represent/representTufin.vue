<template>
    <section class="pt-4">
        <div class="container-absolute">
            <div class="container position-relative h-100">
                <!-- background images start -->
                <span class="represent_bg position-absolute">
                    <img src="../../assets/images//represent/represent_content_bg_4.svg" alt="">
                </span>
                <!-- background images end -->
            </div>
        </div>
        <div class="mw-760 pb-5">
            <nav class="h-auto">
                <ul class="breadcrumb news-breadcrumb">
                    <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
                    <li class="breadcrumb-item"><RouterLink to="/representHome">代理產品</RouterLink></li>
                    <li class="breadcrumb-item">Tufin</li>
                    <li class="breadcrumb-item active">Tufin TOS Aurora 防火牆安全政策自動化與稽核系統</li>
                </ul>
            </nav>
            <div class="text-center pt-5">
                <span class="d-inline-block text-primary-600 fw-bolder py-1 px-2 bg-gray-100">網路傳遞安全</span>
            </div>
            <figure class="figure py-5 text-center">
                <img src="../../assets/images//represent/tufin.png" class="img-fluid" alt="Tufin">
            </figure>
            <h1 class="text-center mb-5">Tufin TOS Aurora<br />防火牆安全政策自動化與稽核系統</h1>
            <p class="text-center fs-6 mb-5">防火牆政策安全管理與稽核平台，可支援多防火牆品牌，如：Check Point、Juniper、Cisco、Fortinet、Palo Alto等。做到三件事情：可視性、安全性與合規性。從政策(policy/rule)的管理、檢視、優化、報表，到自動化部署。</p>
            <div class="text-center">
                <a href="contact.html" class="btn-contact">了解方案</a>
            </div>
        </div>
        <section class="py-9 bg-white-80 border border-white">
            <div class="mw-760">
                <h4 class="text-center">確保防火牆政策安全性與合規性，支援管理上的自動化部署與風險分析。</h4>
            </div>
        </section>
    </section>
    <section class="py-9 bg-secondary-200 serve-feature-bg">
        <div class="container position-relative z-index-1">
            <h3 class="text-center mb-6">簡化防火牆管理與稽核，有效提升防火牆效能</h3>
            <div class="row row-gap-3">
                <div class="col-md-6">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">Rule Viewer</h4>
                        </article>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">USP 2.0</h4>
                        </article>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">Modern and enhanced menus</h4>
                        </article>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">Tufin Open Security Policy Model</h4>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-9">
        <div class="mw-760">
            <h3 class="text-center mb-6">Tufin TOS Aurora 防火牆安全政策自動化與稽核系統主要優勢</h3>
            <article>
                <ul class="pl-4 fs-6">
                    <li>支援多種品牌防火牆，包括 Check Point、Juniper、Cisco、Fortinet、Palo Alto、McAfee 等</li>
                    <li>完全符合 Check Point OPSEC 規範</li>
                    <li>提供 Web UI 介面供使用者檢視、分析、設定及產生報表，且以 SSL 方式進行連線</li>
                    <li>可同時分析一台以上之 Check Point 稽核紀錄</li>
                    <li>完全以圖形化方式表現防火牆安全政策，變更前、後之差異處。</li>
                    <li>可正確顯示出變更前後之差異處，如防火牆物件（Network、Services、Resources、Servers、OPSEC AP、Users 及 VPN Communities）、執行防火牆政策與 cpconfig 指令</li>
                    <li>可對每次的變更行為進行記錄並給予版本編號</li>
                    <li>可對任意兩次變動記錄進行比對顯示其差異處，並即時產生報表。</li>
                    <li>支援以 SNMP、Syslog 或 Email 方式產生警告通知事件</li>
                    <li>可自行定義警告通知事件之重要層級</li>
                    <li>能針對特定安全政策遭到變更時產生警訊</li>
                    <li>能針對特定安全政策的特定欄位（Source、Destination 等）遭到變更時產生警訊</li>
                    <li>警訊產生之條件需能以反向表列方式設定</li>
                    <li>警訊之產生可設定多項條件式</li>
                    <li>分析報表可自行定義產生週期</li>
                    <li>可針對不同的防火牆管理者產生稽核分析報表</li>
                    <li>Web UI 操作管理介面可提供多重使用者使用，並依使用者不同給予不同權限</li>
                    <li>可分析安全政策使用頻率，調整防火牆效能</li>
                    <li>可監控防火牆作業系統（CKP）及交換器（Cisco）設定檔案之異動與記錄比對</li>
                </ul>
            </article>
        </div>
    </section>
    <ProductInformation :productName="productName"></ProductInformation>
</template>

<script>
    import ProductInformation from '../../components/ProductInformation.vue';
    export default {
        data() {
            return {
                productName: 'Tufin',
            }
        },
        components: {
            ProductInformation
        }
    }
</script>