<template>
    <ul class="navbars" :class="{ active : isActive }">
        <li class="menu-item">
            <a href="#" data-toggle="sub-menu" title="關於我們">關於我們</a>
            <ul class="sub-menu">
                <li><RouterLink to="/aboutIntroduction" title="公司簡介">公司簡介</RouterLink></li>
                <li><RouterLink to="/aboutTeam" title="經營團隊">經營團隊</RouterLink></li>
                <li><RouterLink to="/aboutAuthentication" title="專業認證">專業認證</RouterLink></li>
                <li><RouterLink to="/aboutMap" title="營業據點">營業據點</RouterLink></li>
                <li><RouterLink to="/aboutRecruit" title="人才招募">人才招募</RouterLink></li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="#" data-toggle="sub-menu" title="資安法專區">資安法專區</a>
            <ul class="sub-menu sub-menu-multiple">
                <li>
                    <RouterLink to="/serveMoc" title="資安監控維運服務 MOC">資安監控維運服務 MOC</RouterLink>
                    <RouterLink to="/serveHeis" title="社交工程演練 HEIS">社交工程演練 HEIS</RouterLink>
                    <RouterLink to="/serveSrmas" title="系統資源監測 SRMAS">系統資源監測 SRMAS</RouterLink>
                    <RouterLink to="/serveSivas" title="資通安全弱點通報 SIVAS">資通安全弱點通報 SIVAS</RouterLink>
                </li>
                <li>
                    <RouterLink to="/serveLucas" title="日誌管理系統 LUCAS">日誌管理系統 LUCAS</RouterLink>
                    <RouterLink to="/serveSesc" title="電子郵件過濾 SESC">電子郵件過濾 SESC</RouterLink>
                    <RouterLink to="/serveSoc" title="資通安全威脅偵測管理 SOC">資通安全威脅偵測管理 SOC</RouterLink>
                    <RouterLink to="/serveGcb" title="政府組態基準 GCB">政府組態基準 GCB</RouterLink>
                </li>
                <li>
                    <RouterLink to="/serveCodeDetect" title="源碼檢測">原始碼檢測</RouterLink>
                    <RouterLink to="/serveAppCheck" title="APP 資安檢測">APP 檢測服務</RouterLink>
                    <RouterLink to="/serveCse" title="資通安全健檢">資安健診服務</RouterLink>
                </li>
            </ul>
        </li>
        <li><RouterLink to="/contractLists" title="共同供應契約">共同供應契約</RouterLink></li>
        <li><RouterLink to="/representHome" title="代理產品">代理產品</RouterLink></li>
        <li class="menu-item">
            <a href="#" data-toggle="sub-menu" title="最新消息">最新消息</a>
            <ul class="sub-menu">
                <li><RouterLink to="/casesLists" title="成功案例">成功案例</RouterLink></li>
                <li><RouterLink to="/newsLists" title="新聞中心">新聞中心</RouterLink></li>
                <li><RouterLink to="/videoList" title="影音專區">影音專區</RouterLink></li>
                <li><RouterLink to="/eventsLists" title="行銷活動">行銷活動</RouterLink></li>
                <li><RouterLink to="/statementsLists" title="報告書專區">報告書專區</RouterLink></li>
            </ul>
        </li>
        <li><RouterLink to="/contact" title="聯繫我們">聯繫我們</RouterLink></li>
    </ul>
    <ul>
        <li class="d-block d-lg-none"><a href="#" id="menu-bars" title="" @click="isBars"><i class="fa-solid" :class="{ 'fa-bars' : iconBars, 'fa-xmark' : iconXmark }"></i></a></li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                isActive: false,
                iconBars: true,
                iconXmark: false
            }
        },
        methods: {
            isBars() {
                this.isActive = !this.isActive
                this.iconBars = !this.iconBars
                this.iconXmark = !this.iconXmark

            }
        }
    }
</script>