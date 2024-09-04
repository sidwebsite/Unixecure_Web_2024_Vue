<template>
    <section class="row">
        <!-- 相關新聞 -->
        <div class="col-lg-6 px-lg-0 pt-7 pb-9 bg-white">
            <div class="mw-lg-380 ml-lg-auto">
                <div class="d-flex justify-content-between align-items-center mb-5">
                    <h3>相關新聞</h3>
                    <div class="text-center text-md-left">
                        <RouterLink to="/newsLists" class="btn-block-primary text-primary-800" title="更多相關新聞">更多 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                    </div>
                </div>
                <div class="index-news-item">
                    <div class="index-news-item" v-for="item in newsDispalyData" :key="item.Id">
                        <router-link :to="{ name: 'newsContent', params: { newsId: item.Id }}" :title="item.Name" class="limitLines-2">{{ item.Name }}</router-link>
                        <span class="text-gray-400">{{ item.DataTime }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 活動 -->
        <div class="col-lg-6 px-lg-0 pt-7 pb-9 bg-secondary-50">
            <div class="mw-lg-380 mr-lg-auto">
                <div class="d-flex justify-content-between align-items-center mb-5">
                    <h3>活動</h3>
                    <div class="text-center text-md-left">
                        <RouterLink to="/eventsLists" class="btn-block-primary text-primary-800" title="更多相關新聞">更多 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                    </div>
                </div>
                <div class="index-news-item">
                    <div class="index-news-item" v-for="item in eventsDispalyData" :key="item.Id">
                        <router-link :to="{ name: 'eventsContent', params: { eventsId: item.Id }}" :title="item.Name" class="limitLines-2">{{ item.Name }}</router-link>
                        <span class="text-gray-400">{{ item.DataTime }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['newsData','eventsData' ],
        computed: {
            newsDispalyData() {
                return this.newsData.slice(0, 5)
            },
            eventsDispalyData() {
                return this.eventsData.slice(0, 5)
            }
        },
    }
</script>

<style>

</style>