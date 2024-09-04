<template>
    <div class="d-xs-flex justify-content-between">
        <div class="footer-navbar mb-4 mb-xs-0">
            <p class="footer-navbar-title fs-8">關於我們</p>
            <div class="footer-navbar-link-group">
                <RouterLink to="/aboutIntroduction">公司簡介</RouterLink>
                <RouterLink to="/contact" title="聯絡我們">聯絡我們</RouterLink>
            </div>
        </div>
        <div class="footer-navbar mb-4 mb-xs-0">
            <p class="footer-navbar-title fs-8">資安法專區</p>
            <div class="footer-navbar-link-group d-xs-flex information-security">
                <div>
                    <RouterLink to="/serveMoc" title="MOC">MOC</RouterLink>
                    <RouterLink to="/serveHeis" title="HEIS">HEIS</RouterLink>
                    <RouterLink to="/serveSivas" title="SIVAS">SIVAS</RouterLink>
                    <RouterLink to="/serveSrmas" title="SRMAS">SRMAS</RouterLink>
                </div>
                <div>
                    <RouterLink to="/serveLucas" title="LUCAS">LUCAS</RouterLink>
                    <RouterLink to="/serveSesc" title="SESC">SESC</RouterLink>
                </div>
            </div>
        </div>
        <div class="footer-navbar mb-4 mb-xs-0">
            <p class="footer-navbar-title fs-8">代理產品</p>
            <div class="footer-navbar-link-group">
                <RouterLink to="/representHome" title="所有代理產品">所有代理產品</RouterLink>
            </div>
        </div>
        <div class="footer-navbar">
            <p class="footer-navbar-title fs-8">最新消息</p>
            <div class="footer-navbar-link-group">
                <RouterLink to="/casesLists" title="成功案例">成功案例</RouterLink>
                <RouterLink to="/newsLists" title="新聞中心">新聞中心</RouterLink>
                <RouterLink to="/videoList" title="影音專區">影音專區</RouterLink>
                <RouterLink to="/eventsLists" title="行銷活動">行銷活動</RouterLink>
                <RouterLink to="/statementsLists" title="報告書專區">報告書專區</RouterLink>
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