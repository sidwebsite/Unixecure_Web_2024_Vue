<template>
    <!-- banner start -->
    <IndexBanner :bannerData="banner"></IndexBanner>
    <!-- banner end -->
    <section class="py-9 overflow-x-hidden bg-gray-50">
        <!-- background images start -->
        <div class="container-absolute z-index-1 d-none d-lg-block">
            <div class="container h-100 position-relative">
                <span ref="hexagonRight" class="hexagon-bg-right position-absolute">
                    <img src="../assets/images/hexagon_right.svg" alt="" />
                </span>
                <span ref="hexagonLeft" class="hexagon-bg-left position-absolute">
                    <img src="../assets/images/hexagon_left.svg" alt="" />
                </span>
            </div>
        </div>
        <!-- background images end -->
        <div class="mw-760">
            <div class="row">
                <div class="col-12">
                    <article class="fs-6 text-center">
                        <p class="mb-6">uniXecure 提供全天候 7x24 小時的資安管理循環服務，包括事前預防、事中偵測、事後應處等完整一站式資安解決方案及服務。透過整合人員、技術與程序，解決資安合規性和資安人才缺乏等問題，守護企業資訊安全，協助企業發展核心業務。</p>
                        <p class="mb-6">智慧資安科技（uniXecure）是臺灣資訊服務產業龍頭「精誠資訊 SYSTEX Corporation」（台股代號 6214）100% 轉投資的子公司。成立於 1997 年，擁有 20 多年的資安經驗，代理超過 30 個國際資安品牌，服務範圍涵蓋跨國、跨產業、公私營部門，提供網路監控、威脅偵測及事件應變等服務。</p>
                    </article>
                </div>
            </div>
            <IndexCounting></IndexCounting>
        </div>
    </section>
    <!-- 我們的專業服務項目 -->
    <section class="py-9 index-serve overflow-hidden">
        <div class="container">
            <h1 class="text-center text-white mb-5">我們的專業服務項目</h1>
            <IndexServe></IndexServe>
        </div>
    </section>
    <!-- 多項國際認證，值得信賴 -->
    <section class="py-9 overflow-hidden">
        <!-- background images start -->
        <div class="container-absolute position-fixed bg-primary-50">
            <div class="container h-100 position-relative">
                <span class="index-serve-hexagon-leftBottom position-absolute">
                    <img src="../assets/images/index/index-serve-hexagon.svg" alt="" />
                </span>
                <span class="index-serve-hexagon-rightTop position-absolute">
                    <img src="../assets/images/index/index-serve-hexagon.svg" alt="" />
                </span>
            </div>
        </div>
        <!-- background images end -->
        <div class="mw-760 mx-auto">
        <div class="row">
            <div class="col-12">
                <h3 class="text-center mb-6">多項國際認證，值得信賴</h3>
                <figure class="figure mb-6 text-center">
                    <img src="../assets/images/SGS_big.png" class="img-fluid" alt="..." />
                </figure>
                <div class="text-center mb-9">
                    <RouterLink to="/aboutAuthentication" class="btn-block-primary" title="專業認證">點我看專業認證 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                </div>
                <h3 class="text-center mb-6">提供多個產業最專業的資安解決方案及服務</h3>
                <div class="row mb-6">
                    <div class="col-lg col-md-4 mb-3">
                        <div class="bg-white py-4 px-2 text-center">
                            <span class="d-block text-primary mb-2 index-icon"><i class="fa-solid fa-people"></i></span>
                            <span class="d-block">政府</span>
                        </div>
                    </div>
                    <div class="col-lg col-md-4 mb-3">
                        <div class="bg-white py-4 px-2 text-center">
                            <span class="d-block text-primary mb-2 index-icon"><i class="fa-solid fa-microchip"></i></span>
                            <span class="d-block">高科技</span>
                        </div>
                    </div>
                    <div class="col-lg col-md-4 mb-3">
                        <div class="bg-white py-4 px-2 text-center">
                            <span class="d-block text-primary mb-2 index-icon"><i class="fa-solid fa-screwdriver-wrench"></i></span>
                            <span class="d-block">製造</span>
                        </div>
                    </div>
                    <div class="col-lg col-md-6 mb-3">
                        <div class="bg-white py-4 px-2 text-center">
                            <span class="d-block text-primary mb-2 index-icon"><i class="fa-solid fa-game-console-handheld"></i></span>
                            <span class="d-block">消費</span>
                        </div>
                    </div>
                    <div class="col-lg col-md-6 mb-3">
                        <div class="bg-white py-4 px-2 text-center">
                            <span class="d-block text-primary mb-2 index-icon"><i class="fa-solid fa-suitcase-medical"></i></span>
                            <span class="d-block">醫療</span>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <RouterLink to="/casesLists" class="btn-block-primary">點我看成功案例 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                </div>
            </div>
        </div>
        </div>
    </section>
    <!-- 國際級資安原廠合作夥伴 -->
    <section class="py-9 index-agentProducts overflow-hidden">
        <div class="mw-760 mx-auto">
            <div class="row col-12">
                <h3 class="text-center text-white mb-6">國際級資安原廠合作夥伴</h3>
            </div>
            <IndexRepresent></IndexRepresent>
            <div class="text-center">
                <RouterLink to="representHome" class="btn-block-primary text-white" title="更多合作夥伴">更多合作夥伴 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
            </div>
        </div>
    </section>
    <!-- 全域聯防終極指南 -->
    <section class="pt-9 overflow-hidden">
        <!-- background images start -->
        <div class="container-absolute bg-white">
            <div class="container h-100 position-relative">
                <span class="index-statements-bg position-absolute">
                    <img src="../assets/images/index/index-statements_bg.svg" alt="" />
                </span>
            </div>
        </div>
        <!-- background images end -->
        <div class="mw-760 mx-auto">
        <IndexStatements :statementsData="statements"></IndexStatements>
        </div>
    </section>
    <!-- vaideo -->
    <section class="pt-9 pb-7 overflow-hidden">
        <!-- background images start -->
        <div class="container-absolute bg-gray-800">
            <div class="container h-100 position-relative">
                <span class="index-video-top position-absolute">
                    <img src="../assets/images/index/index-video-top.svg" alt="" />
                </span>
                <span class="index-video-bottom position-absolute">
                    <img src="../assets/images/index/index-video-bottom.svg" alt="" />
                </span>
            </div>
        </div>
        <!-- background images end -->
        <div class="mw-760 mx-auto">
            <IndexVideo :videoData="video"></IndexVideo>
        </div>
    </section>
    <!-- 相關新聞 -->
    <section class="pt-7 pb-9 bg-gray-50">
        <div class="mw-760">
        <IndexNews :newsData="news"></IndexNews>
        </div>
    </section>
</template>

<script>
    import IndexBanner from "../components/Index/IndexBanner.vue";
    import IndexCounting from "../components/Index/IndexCounting.vue";
    import IndexServe from "../components/Index/IndexServe.vue";
    import IndexRepresent from "../components/Index/IndexRepresent.vue";
    import IndexStatements from "../components/Index/IndexStatements.vue";
    import IndexVideo from "../components/Index/IndexVideo.vue";
    import IndexNews from "../components/Index/IndexNews.vue";
    import { banner, news } from "../assets/json/data.json";

    export default {
        data() {
            return {
                banner: [],
                statements: {},
                video: {},
                news: [],
                init: 0,
            };
        },
        components: {
            IndexBanner,
            IndexCounting,
            IndexServe,
            IndexRepresent,
            IndexStatements,
            IndexVideo,
            IndexNews,
        },
        created() {
            this.banner = banner;
            this.statements = news.statements[this.init];
            this.video = news.video[this.init];
            this.news = news.news;
            // window.addEventListener("scroll", this.scrollListener);
        },
        // methods: {
        //     scrollListener() {
        //         this.$refs.hexagonRight.style.top = `${scrollY * 0.5 - 155}px`;
        //         this.$refs.hexagonLeft.style.bottom = `-${scrollY * 0.5 + 145}px`;
        //     },
        // },
    };
</script>