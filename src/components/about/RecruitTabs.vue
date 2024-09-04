<template>
    <div class="tabs mb-6 row">
        <div class="col-md-auto">
            <ul class="tabs-nav mb-4">
                <li><button type="button" @click="navCilck('item1')" :class="{ active: isItem === 'item1' }" class="btn text-center fs-6 fw-bolder py-2 px-3 w-100 d-block">薪資保險</button></li>
                <li><button type="button" @click="navCilck('item2')" :class="{ active: isItem === 'item2' }" class="btn text-center fs-6 fw-bolder py-2 px-3 w-100 d-block">休假制度</button></li>
                <li><button type="button" @click="navCilck('item3')" :class="{ active: isItem === 'item3' }" class="btn text-center fs-6 fw-bolder py-2 px-3 w-100 d-block">福利補助</button></li>
                <li><button type="button" @click="navCilck('item4')" :class="{ active: isItem === 'item4' }" class="btn text-center fs-6 fw-bolder py-2 px-3 w-100 d-block">健康休閒</button></li>
                <li><button type="button" @click="navCilck('item5')" :class="{ active: isItem === 'item5' }" class="btn text-center fs-6 fw-bolder py-2 px-3 w-100 d-block">生育補助</button></li>
            </ul>
        </div>
        <div class="col-md tab-content">
            <div class="tab-pane fade" :class="{ active: isItem === 'item1', 'show': isItem === 'item1' }">
                <article class="bg-white-80 border border-white py-3 px-4">
                    <div class="boon-icon text-center text-primary mb-3"><i class="fa-solid fa-money-bill"></i></div>
                    <h3 class="text-center mb-3">薪資保險</h3>
                    <ul class="pl-4">
                        <li>固定薪資（含本薪、職務加給、伙食津貼）12 個月，每月 20 日提前發放當月薪資</li>
                        <li>視個人績效表現發放年終獎金、績效獎金、盈餘分紅</li>
                        <li>勞保、健保、退休金提撥</li>
                        <li>免費團保：醫療險、防癌險、意外險及壽險</li>
                        <li>眷屬團保優惠</li>
                    </ul>
                </article>
            </div>
            <div class="tab-pane fade" :class="{ active: isItem === 'item2', 'show': isItem === 'item2' }">
                <article class="bg-white-80 border border-white py-3 px-4">
                    <div class="boon-icon text-center text-primary mb-3"><i class="fa-solid fa-island-tropical"></i></div>
                    <h3 class="text-center mb-3">休假制度</h3>
                    <ul class="pl-4">
                        <li>周休二日、人性化管理</li>
                        <li>彈性上下班時間制度：自由選擇 8:30－9:30～17:30-18:30</li>
                        <li>優於勞基法的特別休假</li>
                        <li>正職同仁到職當年最多享有 9 天年假（依到職比例計算）</li>
                        <li>正職人員生日當月享一日生日假</li>
                    </ul>
                </article>
            </div>
            <div class="tab-pane fade" :class="{ active: isItem === 'item3', 'show': isItem === 'item3' }">
                <article class="bg-white-80 border border-white py-3 px-4">
                    <div class="boon-icon text-center text-primary mb-3"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                    <h3 class="text-center mb-3">福利補助</h3>
                    <ul class="pl-4">
                        <li>三節、生日發放禮金或禮券</li>
                        <li>結婚禮金、生育禮金、喪葬補助、旅遊補助</li>
                        <li>社團經費補助</li>
                        <li>集團產品優惠價</li>
                        <li>教育訓練、在職進修補助</li>
                    </ul>
                </article>
            </div>
            <div class="tab-pane fade" :class="{ active: isItem === 'item4', 'show': isItem === 'item4' }">
                <article class="bg-white-80 border border-white py-3 px-4">
                    <div class="boon-icon text-center text-primary mb-3"><i class="fa-solid fa-house-medical"></i></div>
                    <h3 class="text-center mb-3">健康休閒</h3>
                    <ul class="pl-4">
                        <li>員工健康檢查</li>
                        <li>社團活動</li>
                        <li>明亮的辦公室環境</li>
                        <li>不定期舉辦員工活動</li>
                        <li>悅知文化叢書購書優惠</li>
                        <li>恆逸資訊教育訓練中心專業課程優惠價</li>
                    </ul>
                </article>
            </div>
            <div class="tab-pane fade" :class="{ active: isItem === 'item5', 'show': isItem === 'item5' }">
                <article class="bg-white-80 border border-white py-3 px-4">
                    <div class="boon-icon text-center text-primary mb-3"><i class="fa-solid fa-baby-carriage"></i></div>
                    <h3 class="text-center mb-3">生育補助</h3>
                    <ul class="pl-4">
                        <li>集團設立「精誠寶寶快樂成長基金」鼓勵員工生育，每胎最高補助 12 萬，精誠媽媽產假加碼最長 70 天，是台灣資訊服務業首家同時提供加碼有薪假期與生育補助員工福利的企業。</li>
                        <li>不論男性或女性正職同仁，育有二足歲以下子女，每胎最高可領 6 萬元生育補助；超過 35 歲(含)女性同仁生產，或是男性同仁配偶超過 35 歲生產者可領到雙倍補助，最高達 12 萬元。</li>
                        <li>體恤職業婦女辛勞，調高有薪產假天數至 60 天，優於現行法令；若同仁是超過 35 歲的高齡產婦，額外加碼有薪產假天數至 70 天。</li>
                        <li>提供男性同仁陪產假 6 天，若配偶是超過 35 歲的高齡產婦，男性同仁陪產假加碼至 7 天。</li>
                    </ul>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isItem: 'item1',
                count: 1,
                polling: null,
                delay: 5000
            }
        },
        created() {
            this.tabsPlay()
        },
        methods: {
            navCilck(itemName) {
                this.isItem = itemName
                clearInterval(this.polling)
            },
            tabsPlay() {
                this.polling = setInterval(() => {
                    this.count ++
                    this.isItem = `item${this.count}`
                    if(this.count === 5) {
                        this.count = 0
                    }
                }, this.delay)
            }
        }
    }
</script>

<style>

</style>