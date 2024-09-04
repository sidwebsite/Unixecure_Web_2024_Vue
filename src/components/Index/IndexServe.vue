<template>
    <div class="row index-serve-flowLine">
        <div class="col-lg-3 mb-3 mb-lg-0">
            <div class="d-md-flex align-items-center justify-content-center h-100 pr-lg-4">
                <RouterLink to="/serveMoc" class="item index-serve-moc bg-primary-600 border border-white text-center text-white px-3 py-5">
                    <span class="d-block fs-4 mb-2 fw-bolder">MOC</span>
                    <span class="d-block fw-bolder fs-6">資安監控維運中心</span>
                </RouterLink>
            </div>
        </div>
        <div class="col-lg-3 mb-3 mb-lg-0">
            <div class="text-center index-serve-block px-md-3 py-4 px-0 h-100 d-flex flex-column">
                <div class="mb-3">
                    <span class="d-inline-block bg-primary-700 text-white p-2">管理層 Insight</span>
                </div>
                <div class="flex-grow-1 d-md-flex flex-lg-column justify-content-center gap-2">
                    <RouterLink to="/serveSesc" class="item bg-white px-3 py-4 mb-3 mb-md-0 fw-bolder index-serve-sesc">
                        <span class="d-block fs-4 mb-2">SESC</span>
                        <span class="d-block fs-6">電子郵件過濾</span>
                    </RouterLink>
                    <RouterLink to="/serveHeis" class="item bg-white px-3 py-4 fw-bolder index-serve-heis">
                        <span class="d-block fs-4 mb-2">HEIS</span>
                        <span class="d-block fs-6">社交工程演練</span>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="col-lg-3 mb-3 mb-lg-0">
            <div class="text-center index-serve-block px-md-3 py-4 px-0 h-100 d-flex flex-column">
                <div class="mb-3">
                    <span class="d-inline-block bg-primary-700 text-white p-2">邊境管制 Perameter</span>
                </div>
                <div class="flex-grow-1 d-md-flex flex-lg-column justify-content-center gap-2">
                    <RouterLink to="/serveSoc" class="item bg-white px-3 py-4 mb-3 mb-md-0 fw-bolder index-serve-soc">
                        <span class="d-block fs-4 mb-2">SOC</span>
                        <span class="d-block fs-6">資通安全威脅偵測管理</span>
                    </RouterLink>
                    <RouterLink to="/serveSrmas" class="item bg-white px-3 py-4 mb-3 mb-md-0 fw-bolder index-serve-srmas">
                        <span class="d-block fs-4 mb-2 fw-bolder">SRMAS</span>
                        <span class="d-block fw-bolder fs-6">系統資源監測</span>
                    </RouterLink>
                    <RouterLink to="/serveLucas" class="item bg-white px-3 py-4 fw-bolder index-serve-lucas">
                        <span class="d-block fs-4 mb-2">LUCAS</span>
                        <span class="d-block fs-6">日誌管理系統</span>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="col-lg-3 mb-3 mb-lg-0">
            <div class="text-center index-serve-block px-md-3 py-4 px-0 h-100 d-flex flex-column">
                <div class="mb-3">
                    <span class="d-inline-block bg-primary-700 text-white p-2">終端管制 Terminal</span>
                </div>
                <div class="flex-grow-1 d-md-flex flex-lg-column justify-content-center gap-2">
                    <RouterLink to="/serveSivas" class="item bg-white px-3 py-4 mb-3 mb-md-0 fw-bolder index-serve-sivas">
                        <span class="d-block fs-4 mb-2">SIVAS</span>
                        <span class="d-block fs-6">資通安全弱點通報</span>
                    </RouterLink>
                    <div class="item bg-white px-3 py-4 mb-3 mb-md-0 fw-bolder index-serve-ssc">
                        <span class="d-block fs-4 mb-2">SSC</span>
                        <span class="d-block fs-6">端點檢測管理系統</span>
                    </div>
                    <!-- <div class="item bg-white px-3 py-4 mb-3 mb-md-0 fw-bolder index-serve-edr">
                        <span class="d-block fs-4 mb-2">EDR</span>
                        <span class="d-blockfs-6">端點偵測及應變機制</span>
                    </div>
                    <div class="item bg-white px-3 py-4 fw-bolder index-serve-isms">
                        <span class="d-block fs-4 mb-2 fw-bolder">ISMS</span>
                        <span class="d-block fs-6">文件管理系統</span>
                    </div> -->
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>