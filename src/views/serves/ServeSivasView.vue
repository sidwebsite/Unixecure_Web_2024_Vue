<template>
    <section class="serve-sivas-bg serve-header d-flex justify-content-center align-items-center">
        <div class="mw-760">
            <div class="text-center mb-6">
                <figure class="figure mb-6 text-center">
                    <img src="../../assets/images/logo.svg" class="serve-logo" alt="...">
                </figure>
            </div>
            <article class="mb-6 text-center">
                <h2>SIVAS 資通安全弱點通報</h2>
                <h4>Smart Inventory Vulnerability Alert System</h4>
            </article>
            <div class="text-center">
                <a href="contact.html" class="btn-contact">產品諮詢</a>
            </div>
        </div>
    </section>
    <section class="py-9 bg-white-80">
        <div class="mw-760">
            <div class="row">
                <div class="col-12">
                    <h3 class="text-center mb-5">為什麼機關需要進行軟體資產盤點？</h3>
                    <h3 class="text-center text-alarm mb-5">當資安事件發生時...</h3>
                    <div class="d-md-flex justify-content-between mb-5">
                        <div class="text-center mb-3 mb-md-0">
                            <span class="d-inline-block mx-auto position-relative">
                                <IconHexagonLine></IconHexagonLine>
                                <span class="fs-4 fw-bolder position-absolute top-50 start-50 translate-middle-c">無法</span>
                            </span>
                            <p class="fs-6">全面得知軟體弱點分布範圍<br />缺乏資產弱點監控機制</p>
                        </div>
                        <div class="text-center mb-3 mb-md-0">
                            <span class="d-inline-block mx-auto position-relative">
                                <IconHexagonLine></IconHexagonLine>
                                <span class="fs-4 fw-bolder position-absolute top-50 start-50 translate-middle-c">無法</span>
                            </span>
                            <p class="fs-6">判斷哪些資產弱點<br />會造成哪些危害</p></div>
                        <div class="text-center">
                            <span class="d-inline-block mx-auto position-relative">
                                <IconHexagonLine></IconHexagonLine>
                                <span class="fs-4 fw-bolder position-absolute top-50 start-50 translate-middle-c">無法</span>
                            </span>
                            <p class="fs-6">即時偵測弱點並修補漏洞</p>
                        </div>
                    </div>
                    <p class="text-center fs-6">若不即時反應威脅與掌握受影響版本及範圍，將嚴重影響機關業務正常運作，造成機關影響受損。<br />因此智慧資安針對公務機關，提供軟體資產列表、安全性更新紀錄、設備列表等功能，將資訊資產清冊與弱點資料庫比對，藉由漏洞修補與版本更新，降低主機弱點被入侵的機會，並自動與資安院政府機關資安弱點通報機制（VANS）平台介接，落實資安法之資產盤點與風險評估的應辦事項，提升機關整體資安強度。</p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-9 bg-secondary-200 serve-feature-bg">
        <div class="container position-relative z-index-1">
            <h3 class="text-center mb-6">SIVAS 支持三種不同上傳資安院的方式，助機關符合資安法</h3>
            <div class="row row-gap-3">
                <div class="col-md-4">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">自動排程</h4>
                            <p>設定排程<br />自動藉由 API 上傳資安院 VANS 系統</p>
                        </article>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">半自動上傳</h4>
                            <p>透過系統手動上傳<br />藉由 API 傳至資安院 VANS 系統</p>
                        </article>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bg-white-80 border border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <article class="text-center">
                            <h4 class="text-primary">手動上傳</h4>
                            <p>透過系統下載資通電腦、使用者電腦之資產清冊與安全性更新清冊，再手動上傳至資安院 VANS  系統</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-9 serve-hexagon-bg">
        <div class="mw-760">
            <div class="row">
                <div class="col-12">
                    <h3 class="text-center mb-5">SIVAS 技術亮點</h3>
                </div>
            </div>
            <div class="row row-gap-3">
                <div class="col-md-6">
                    <div class="bg-primary-600 px-4 py-3 h-100 d-flex align-items-center sivas-icon sivas-icon-plus">
                        <article class="text-center text-white fw-bolder w-100">
                            <h3>知己</h3>
                            <p class="fs-6">盤點內部軟體資產總表與端點健康狀況總表</p>
                        </article>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-primary-600 px-4 py-3 h-100 d-flex align-items-center">
                        <article class="text-center text-white fw-bolder w-100">
                            <h3>知彼</h3>
                            <p class="fs-6">與 MOC 自有 CVE 漏洞，進行自動弱點比對、檢測、回覆</p>
                        </article>
                        
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white base-box-shadow px-4 py-3 h-100 d-flex align-items-center sivas-icon sivas-icon-right">
                        <article class="text-center fw-bolder w-100">
                            <figure class="figure">
                                <img src="../../assets/images/serve/serve_sivas_icon1.svg" class="img-fluid" alt="...">
                            </figure>
                            <h3>潛在弱點偵測弱點範圍掌控</h3>
                            <p class="fs-6">監控是否有被威脅感染</p>
                        </article>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white base-box-shadow px-4 py-3 h-100 d-flex align-items-center sivas-icon sivas-icon-down">
                        <article class="text-center fw-bolder w-100">
                            <figure class="figure">
                                <img src="../../assets/images/serve/serve_sivas_icon2.svg" class="img-fluid" alt="...">
                            </figure>
                            <h3>漏洞修補作業</h3>
                            <p class="fs-6">確保排除威脅</p>
                        </article>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white base-box-shadow px-4 py-3 h-100 d-flex align-items-center sivas-icon sivas-icon-up">
                        <article class="text-center fw-bolder w-100">
                            <figure class="figure">
                                <img src="../../assets/images/serve/serve_sivas_icon3.svg" class="img-fluid" alt="...">
                            </figure>
                            <h3>端點資料搜集資產盤點</h3>
                            <p class="fs-6">偵測是否有新的威脅</p>
                        </article>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white base-box-shadow px-4 py-3 h-100 d-flex align-items-center sivas-icon sivas-icon-left">
                        <article class="text-center fw-bolder w-100">
                            <figure class="figure">
                                <img src="../../assets/images/serve/serve_sivas_icon4.svg" class="img-fluid" alt="...">
                            </figure>
                            <h3>弱點後續追蹤</h3>
                            <p class="fs-6">追蹤威脅是否又發生</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-white-80 py-9">
        <div class="mw-760">
            <h3 class="text-center mb-6">SIVAS 資安弱點通報系統具體效益</h3>
            <div class="row mb-5">
                <div class="col-md-6 d-md-flex align-items-center">
                    <figure class="figure text-center text-md-left w-100">
                        <img src="../../assets/images/serve/serve_sivas_pic1.svg" class="img-fluid" alt="...">
                    </figure>
                </div>
                <div class="col-md-6 d-md-flex align-items-center">
                    <article class="text-center text-md-left">
                        <h4 class="text-primary">SIVAS 資安弱點通報系統具體效益</h4>
                        <p class="fs-6">將軟體資產轉換為標準 CPE 格式進行資產弱點比對，定期提供弱點比對後之統計圖表，並依風險等級進行告警通知。</p>
                    </article>
                </div>
            </div>
            <div class="row mb-5 flex-md-row-reverse">
                <div class="col-md-6 d-md-flex align-items-center">
                    <figure class="figure text-center text-md-right w-100">
                        <img src="../../assets/images/serve/serve_sivas_pic2.svg" class="img-fluid" alt="...">
                    </figure>
                </div>
                <div class="col-md-6 d-md-flex align-items-center">
                    <article class="text-center text-md-left">
                        <h4 class="text-primary">弱點偵測與範圍掌控</h4>
                        <p class="fs-6">檢視各資訊資產潛在之弱點，於弱點發佈後，迅速反應所面臨的威脅與受影響的版本，並掌握弱點影響的範圍，確保弱點可控性。</p>
                    </article>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 d-md-flex align-items-center">
                    <figure class="figure text-center text-md-left w-100">
                        <img src="../../assets/images/serve/serve_sivas_pic3.svg" class="img-fluid" alt="...">
                    </figure>
                </div>
                <div class="col-md-6 d-md-flex align-items-center">
                    <article class="text-center text-md-left">
                        <h4 class="text-primary">修補漏洞與追蹤弱點</h4>
                        <p class="fs-6">發現弱點並協助用戶快速進行應變處理，含更新 Patch、停用服務運作、諮詢服務等。並持續追蹤弱點修補情形，維持資料內容的有效性，降低弱點管控成本。</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
    <section class="py-9 overflow-hidden">
        <!-- background images start -->
        <div class="container-absolute position-fixed bg-primary-50">
            <div class="container h-100 position-relative">
                <span class="index-serve-hexagon-leftBottom position-absolute">
                    <img src="../../assets/images/index/index-serve-hexagon.svg" alt="">
                </span>
                <span class="index-serve-hexagon-rightTop position-absolute">
                    <img src="../../assets/images/index/index-serve-hexagon.svg" alt="">
                </span>
            </div>
        </div>
        <!-- background images end -->
        <div class="mw-760 mx-auto">
            <div class="row">
                <div class="col-12">
                    <h3 class="text-center mb-5">合規性-資通安全分級與應辦事項</h3>
                    <div class="bg-white-80 px-4 py-3">
                        <h5 class="text-center mb-4">資通安全事件通報及應變辦法 - 第 8 條</h5>
                        <div class="serve-sivas-table mb-4">
                            <div class="tr">
                                <div class="th">資通安全等級</div>
                                <div class="th text-left">完成期限及應辦事項</div>
                            </div>
                            <div class="tr">
                                <div class="td fs-6 fw-bolder">A 級機關</div>
                                <div class="td text-md-left">初次受核定或等級變更後之 1 年內完成導入作業，並依指定方式提交盤點資料，並持續維運（公務機關、關鍵基礎設施提供者）</div>
                            </div>
                            <div class="tr">
                                <div class="td fs-6 fw-bolder">B 級機關</div>
                                <div class="td text-md-left">初次受核定或等級變更後之 1 年內完成導入作業，並依指定方式提交盤點資料，並持續維運（公務機關、關鍵基礎設施提供者）</div>
                            </div>
                            <div class="tr">
                                <div class="td fs-6 fw-bolder">C 級機關</div>
                                <div class="td text-md-left">初次受核定或等級變更後之 2 年內完成導入作業，依指定方式提交資料，並持續維運</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ProductInformation :productName="productName"></ProductInformation>
</template>

<script>
    import ProductInformation from '../../components/ProductInformation.vue';
    import IconHexagonLine from '@/components/icons/IconHexagonLine.vue';

    export default {
        data() {
            return {
                productName: 'SIVAS',
            }
        },
        components: {
            ProductInformation,
            IconHexagonLine
        }
    }
</script>

<style>

</style>