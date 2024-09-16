<template>
    <div class="aboutUs-bg-color">
        <section>
            <div class="aboutUs-page-title">
                <h1 class="page-title text-white text-center">人才招募</h1>
            </div>
        </section>
        <section class="py-9 position-relative">
            <!-- 精誠集團價值觀 -->
            <div class="mw-600 text-center">
                <h3 class="text-aboutUs-blue mb-5">精誠集團價值觀</h3>
                <p class="mb-5">精誠以「軟體力、數據力、演算力、雲端力、微服務力、資安力」的核心能力，為企業「數位轉型 AI 化」奠定厚實基礎，並延續 2022 年人才培育規劃、持續加碼投資具備 5A 核心技術能力(AP, APP, API, Appliance, Algorithm)及 4C 雲服務架構(上雲、用雲、管雲、護雲)技術組合的人才，以滿足客戶數位轉型需求與期待，創造企業成長第二曲線。</p>
                <a href="https://www.104.com.tw/company/1a2x6bmeqd" target="_blank" class="btn-contact" title="查看職缺">查看職缺</a>
            </div>
        </section>
        <!-- 福利制度 -->
        <section class="py-9 index-serve-bg">
            <!-- background images end -->
            <div class="container-absolute z-index-3">
                <div class="container h-100 position-relative">
                    <span :style="{ 'top': rightTop }" class="recruit-boon-right position-absolute">
                        <img src="../../assets/images/aboutUs/aboutUs_hexagon_right1.svg" alt="">
                    </span>
                    <span :style="{'bottom': left}" class="recruit-boon-left position-absolute">
                        <img src="../../assets/images/aboutUs/aboutUs_hexagon_left1.svg" alt="">
                    </span>
                </div>
            </div>
            <!-- background images end -->
            <div class="mw-760 position-relative z-index-3">
                <h3 class="mb-6 text-center text-aboutUs-blue">福利制度</h3>
                <Tabs></Tabs>
                <div class="d-flex gap-3 justify-content-center flex-wrap">
                    <span class="bg-white text-primary-600 fw-bolder px-2 py-1">零食櫃 <i class="fa-solid fa-candy"></i></span>
                    <span class="bg-white text-primary-600 fw-bolder px-2 py-1">咖啡吧 <i class="fa-solid fa-coffee-pot"></i></span>
                    <span class="bg-white text-primary-600 fw-bolder px-2 py-1">旅遊補助 <i class="fa-solid fa-plane"></i></span>
                    <span class="bg-white text-primary-600 fw-bolder px-2 py-1">教育訓練 <i class="fa-solid fa-chalkboard-user"></i></span>
                    <span class="bg-white text-primary-600 fw-bolder px-2 py-1">社團/活動 <i class="fa-solid fa-planet-ringed"></i></span>
                </div>
            </div>
        </section>
        <!-- 照片集錦 -->
        <section class="py-9 position-relative">
            <!-- background images start -->
            <div class="container-absolute z-index-3">
                <div class="container h-100 position-relative">
                    <span :style="{'top': right}" class="recruit-images-right position-absolute">
                        <img src="../../assets/images/aboutUs/aboutUs_hexagon_right2.svg" alt="">
                    </span>
                </div>
            </div>
            <!-- background images end -->
            <div class="container">
                <div class="row">
                    <div class="col-">
                        <h3 class="mb-6 text-center text-aboutUs-blue">照片集錦</h3>
                        <Pics></Pics>
                        <div class="d-flex gap-3 justify-content-center flex-wrap mt-5">
                            <span class="text-primary fw-bolder px-2 py-1">明亮空間 <i class="fa-solid fa-chair-office"></i></span>
                            <span class="text-primary fw-bolder px-2 py-1">零食櫃/咖啡吧 <i class="fa-solid fa-coffee-pot"></i></span>
                            <span class="text-primary fw-bolder px-2 py-1">教育訓練<i class="fa-solid fa-chalkboard-user"></i></span>
                            <span class="text-primary fw-bolder px-2 py-1">社團/活動 <i class="fa-solid fa-planet-ringed"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 應徵流程 -->
        <section class="py-9 organization bg-white position-relative">
            <!-- background images start -->
            <div class="container-absolute z-index-3">
                <div class="container h-100 position-relative">
                    <span :style="{'top': leftBottom }" class="recruit-process-left position-absolute">
                        <img src="../../assets/images/aboutUs/aboutUs_hexagon_left2.svg" alt="">
                    </span>
                </div>
            </div>
            <!-- background images end -->
            <div class="mw-760 text-center">
                <h3 class="mb-6 text-center text-aboutUs-blue">應徵流程</h3>
                <div class="process">
                    <div class="process-content mb-6">
                        <div class="number">
                            <IconHexagon></IconHexagon>
                            <span>1</span>
                        </div>
                        <div class="process-text">
                            <h4 class="mb-3">選擇職缺</h4>
                            <p>至<a href="https://www.104.com.tw/company/1a2x6bmeqd" target="_blank">徵才連結</a>查詢最新職缺，並投遞履歷表</p>
                        </div>
                    </div>
                    <div class="process-content mb-6">
                        <div class="number">
                            <IconHexagon></IconHexagon>
                            <span>2</span>
                        </div>
                        <div class="process-text">
                            <h4 class="mb-3">履歷篩選</h4>
                            <p>將視職缺需求進行初步篩選，並以電話通知適合人選進行下一關面試</p>
                        </div>
                    </div>
                    <div class="process-content mb-6">
                        <div class="number">
                            <IconHexagon></IconHexagon>
                            <span>3</span>
                        </div>
                        <div class="process-text">
                            <h4 class="mb-3">面試邀約</h4>
                            <p>以 E-mail 或是電話通知面試<br />確定面試時間及地點<br />並請應徵者回填面試資料</p>
                        </div>
                    </div>
                    <div class="process-content mb-6">
                        <div class="number">
                            <IconHexagon></IconHexagon>
                            <span>4</span>
                        </div>
                        <div class="process-text">
                            <h4 class="mb-3">結果通知</h4>
                            <p>面試後一到兩周內會通知面試結果<br />若錄取將 E-mail 提供錄取通知書</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--  -->
        <section class="py-9 position-relative">
            <div class="mw-600 text-center">
                <h1 class="mb-6 text-center"><span class="d-lg-block">探索您的潛力，</span>發展資安領域的未來。</h1>
                <a href="https://www.104.com.tw/company/1a2x6bmeqd" target="_blank" class="btn-contact" title="加入我們">加入我們</a>
            </div>
        </section>
    </div>    
</template>

<script>
    import Tabs from '../../components/about/RecruitTabs.vue'
    import Pics from '../../components/about/RecruitPics.vue'
    import IconHexagon from '@/components/icons/IconHexagon.vue';

    export default {
        data() {
            return {
                rightTop: '-345px',
                left: '-96px',
                right: '-12px',
                leftBottom: '-86px'
            }
        },
        components: {
            Tabs,
            Pics,
            IconHexagon
        },
        created() {
            window.addEventListener('scroll', this.scrollListener)
        },
        methods: {
            scrollListener() {
                let value = scrollY;
                this.rightTop = `${(value * 0.5) - 345}px`;
                this.left = `-${(value * 0.3) + 96}px`;
                this.right = `${(value * 0.5) - 203}px`;
                this.leftBottom = `${(value * 0.3) - 86}px`;
            }
        }
    }
</script>