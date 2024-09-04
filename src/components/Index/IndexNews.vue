<script>
    export default {
        props: ['newsData']
    }
</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-5">
                <h3>相關新聞</h3>
                <div class="text-center text-md-left">
                    <RouterLink to="/newsLists" class="btn-block-primary text-primary-800" title="更多相關新聞">更多 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                </div>
            </div>
            <div class="index-news-item">
                <div class="index-news-item" v-for="item in newsData.slice(0,5)" :key="item.Id">
                    <router-link :to="{ name: 'newsContent', params: { newsId: item.Id }}">{{ item.Name }}</router-link>
                    <span class="text-gray-400">{{ item.DataTime }}</span>
                </div>
            </div>
        </div>
    </div>
</template>