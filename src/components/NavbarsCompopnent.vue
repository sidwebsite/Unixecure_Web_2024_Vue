<template>
    <ul class="navbars" :class="{ active : isActive }">
        <li class="menu-item" :class="{ active : isAbout }">
            <a href="#" :class="{'active-link': isActiveLink(abouts)}" @click="toggleAbout()" title="關於我們">關於我們</a>
            <ul class="sub-menu">
                <li><RouterLink @click="isBars()" to="/aboutIntroduction" title="公司簡介">公司簡介</RouterLink></li>
                <li><RouterLink @click="isBars()" to="/aboutTeam" title="經營團隊">經營團隊</RouterLink></li>
                <li><RouterLink @click="isBars()" to="/aboutAuthentication" title="專業認證">專業認證</RouterLink></li>
                <li><RouterLink @click="isBars()" to="/aboutMap" title="營業據點">營業據點</RouterLink></li>
                <li><RouterLink @click="isBars()" to="/aboutRecruit" title="人才招募">人才招募</RouterLink></li>
            </ul>
        </li>
        <li class="menu-item" :class="{ active : isServes }">
            <a href="#" :class="{'active-link': isActiveLink(serves)}" @click="toggleServes()" title="資安法專區">資安法專區</a>
            <ul class="sub-menu sub-menu-multiple">
                <li>
                    <RouterLink @click="isBars()" to="/serveMoc" title="資安監控維運服務 MOC">資安監控維運服務 MOC</RouterLink>
                    <RouterLink @click="isBars()" to="/serveHeis" title="社交工程演練 HEIS">社交工程演練 HEIS</RouterLink>
                    <RouterLink @click="isBars()" to="/serveSrmas" title="系統資源監測 SRMAS">系統資源監測 SRMAS</RouterLink>
                    <RouterLink @click="isBars()" to="/serveSivas" title="資通安全弱點通報 SIVAS">資通安全弱點通報 SIVAS</RouterLink>
                </li>
                <li>
                    <RouterLink @click="isBars()" to="/serveLucas" title="日誌管理系統 LUCAS">日誌管理系統 LUCAS</RouterLink>
                    <RouterLink @click="isBars()" to="/serveSesc" title="電子郵件過濾 SESC">電子郵件過濾 SESC</RouterLink>
                    <RouterLink @click="isBars()" to="/serveSoc" title="資通安全威脅偵測管理 SOC">資通安全威脅偵測管理 SOC</RouterLink>
                    <RouterLink @click="isBars()" to="/serveGcb" title="政府組態基準 GCB">政府組態基準 GCB</RouterLink>
                </li>
                <li>
                    <RouterLink @click="isBars()" to="/serveCodeDetect" title="原始碼檢測">原始碼檢測</RouterLink>
                    <RouterLink @click="isBars()" to="/serveAppCheck" title="APP 資安檢測">APP 檢測服務</RouterLink>
                    <RouterLink @click="isBars()" to="/serveCse" title="資通安全健檢">資安健診服務</RouterLink>
                </li>
            </ul>
        </li>
        <li><RouterLink @click="isBars()" to="/contractLists" title="共同供應契約" :class="{'active-link': isActiveLink(contracts)}" >共同供應契約</RouterLink></li>
        <li><RouterLink @click="isBars()" to="/representHome" :class="{'active-link': isActiveLink(represents)}" title="代理產品">代理產品</RouterLink></li>
        <li class="menu-item" :class="{ active : isNews }">
            <a href="#" :class="{'active-link': isActiveLink(news)}" @click="toggleNews()" title="最新消息">最新消息</a>
            <ul class="sub-menu">
                <li><RouterLink @click="isBars()" to="/casesLists" title="成功案例">成功案例</RouterLink></li>
                <li><RouterLink @click="isBars()" to="/newsLists" title="新聞中心">新聞中心</RouterLink></li>
                <li><RouterLink @click="isBars()" to="/videoList" title="影音專區">影音專區</RouterLink></li>
                <li><RouterLink @click="isBars()" to="/eventsLists" title="行銷活動">行銷活動</RouterLink></li>
                <li><RouterLink @click="isBars()" to="/statementsLists" title="報告書專區">報告書專區</RouterLink></li>
            </ul>
        </li>
        <li><RouterLink @click="isBars()" to="/contact" active-class="active-link" title="聯繫我們">聯繫我們</RouterLink></li>
    </ul>
    <ul>
        <li class="d-block d-lg-none"><a href="#" id="menu-bars" title="" @click="isBars()"><i class="fa-solid" :class="{ 'fa-bars' : iconBars, 'fa-xmark' : iconXmark }"></i></a></li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                isActive: false,
                iconBars: true,
                iconXmark: false,
                isAbout: false,
                isServes: false,
                isNews: false,
                route: this.$route,
                abouts: ['aboutIntroduction', 'aboutTeam', 'aboutAuthentication', 'aboutMap', 'aboutRecruit'],
                serves: ['serveMoc', 'serveHeis', 'serveSrmas', 'serveSivas', 'serveLucas', 'serveSesc', 'serveSoc', 'serveGcb', 'serveCodeDetect', 'serveAppCheck', 'serveCse'],
                contracts: ['contractLists', 'contractContent'],
                represents:['representHome', 'cellopoint', 'eLock', 'delinea', 'illumio', 'invicti', 'entrust', 'entrustContent01', 'entrustContent02', 'entrustContent03', 'entrustContent04', 'opswat', 'neithnet', 'Rapid7', 'Rapid7Content01', 'Rapid7Content02', 'Rapid7Content03', 'Rapid7Content04', 'Rapid7Content05', 'Rapid7Content06', 'tufin', 'claroty', 'clarotyContent01', 'clarotyContent02'],
                news: ['casesLists', 'casesContent', 'newsLists', 'newsContent', 'videoList', 'videoContent', 'eventsLists', 'eventsContent', 'statementsLists']
            }
        },
        methods: {
            isBars() {
                const win = window.matchMedia("(max-width: 1024px)").matches
                if(win) {
                    this.isActive = !this.isActive
                    this.iconBars = !this.iconBars
                    this.iconXmark = !this.iconXmark
                }
            },
            toggleAbout() {
                this.isAbout = !this.isAbout
            },
            toggleServes() {
                this.isServes = !this.isServes
            },
            toggleNews() {
                this.isNews = !this.isNews
            },
            isActiveLink(routeNames) {
                return routeNames.includes(this.route.name);
            }
        },
        watch: {
            '$route'(to) {
                this.route = to;
            }
        }
    }
</script>