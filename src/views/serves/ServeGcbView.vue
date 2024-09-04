<template>
    <section class="serve-gcb-bg serve-header d-flex justify-content-center align-items-center">
        <div class="mw-760">
            <div class="text-center mb-6">
                <figure class="figure mb-6 text-center">
                    <img src="../../assets/images/logo.svg" class="serve-logo" alt="...">
                </figure>
            </div>
            <article class="mb-6 text-center">
                <h2>GCB 政府組態基準</h2>
            </article>
            <div class="text-center">
                <RouterLink to="/contact" class="btn-contact">產品諮詢</RouterLink>
            </div>
        </div>
    </section>
    <section class="py-9 bg-white-80">
        <div class="mw-760">
            <div class="row">
                <div class="col-12">
                    <p class="text-center fs-6 mb-5">政府組態基準 (Government Configuration Baseline，簡稱 GCB) 目的在於規範資通訊設備的一致性安全設定 (如密碼長度、更新期限等)，以降低成為駭客入侵管道，進而引發資安事件之風險，為資通安全管理法應辦事項其中一項。</p>
                    <p class="text-center fs-6">智慧資安科技所提供的 SSC 系統具有監控查核功能，可確保電腦、伺服器、瀏覽器、應用程式等符合政府組態基準或單位自訂的組態規範合規性。透過此系統，可以檢測資安環境是否符合資安法規範，並確認單位設備是否合規。同時還能夠提供 GCB 檢測報告書，包括部署範圍、檢測方式說明和符合結果清單，並支援自動排程執行掃描任務、無網路電腦的單機版檢測功能。</p>
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
                    <h3 class="text-center mb-5">服務項目</h3>
                    <div class="bg-white-80 px-4 py-3 mb-5">
                        <div class="gcb-table">
                            <div class="tr">
                                <div class="th">服務項目</div>
                                <div class="th">服務細項</div>
                                <div class="th">單位</div>
                            </div>
                            <div class="tr">
                                <div class="td fw-bolder fs-6">政府組態基準(GCB)檢視</div>
                                <div class="td">
                                    <span class="item">作業系統_使用者電腦組態設定檢視</span>
                                    <span class="item">作業系統_伺服器組態設定檢視</span>
                                    <span class="item">瀏覽器組態設定檢視</span>
                                    <span class="item">網通設備組態設定檢視</span>
                                    <span class="item">應用程式組態設定檢視</span>
                                    
                                </div>
                                <div class="td">
                                    <span class="item">使用者電腦</span>
                                    <span class="item">伺服器</span>                                          
                                    <span class="item">瀏覽器</span>                                          
                                    <span class="item">網通設備</span>                                          
                                    <span class="item">伺服器</span>                                          
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-center mb-5">合規性-資通安全分級與應辦事項</h3>
                    <div class="bg-white-80 px-4 py-3">
                        <div class="serve-sivas-table mb-4">
                            <div class="tr">
                                <div class="th">資通安全等級</div>
                                <div class="th text-left">完成期限及應辦事項</div>
                            </div>
                            <div class="tr">
                                <div class="td fs-6 fw-bolder">A 級機關</div>
                                <div class="td text-md-left">初次受核定或等級變更後之1年內依公告項目完成導入，並持續維運（公務機關）</div>
                            </div>
                            <div class="tr">
                                <div class="td fs-6 fw-bolder">B 級機關</div>
                                <div class="td text-md-left">初次受核定或等級變更後之1年內依公告項目完成導入，並持續維運（公務機關）</div>
                            </div>
                            <div class="tr">
                                <div class="td fs-6 fw-bolder">C 級機關</div>
                                <div class="td text-md-left">-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>