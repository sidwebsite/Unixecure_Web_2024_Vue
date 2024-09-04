<template>
    <section class="pt-9 pb-7 serve-video overflow-hidden">
        <div class="mw-760 position-relative z-index-2">
            <div class="d-flex justify-content-between align-items-center mb-5">
                <h3>{{ productName }} 關聯影片</h3>
                <div class="text-center text-md-left">
                    <RouterLink to="/videoList" class="btn-block-primary text-primary-800" title="更多相關新聞">更多 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                </div>
            </div>
            <div class="row serve-video-lists justify-content-center">
                <!-- item -->
                <div class="col-md-4 item" v-for="item in dispalyData" :key="item.Id">
                    <router-link :to="{ name: 'videoContent', params: { videoId: item.Id }}" class="default-card card" :title="item.Name">
                        <div class="card-img video-img">
                            <img :src="`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title limitLines-2">{{ item.Name }}</h5>
                            <div class="card-date">{{ item.DataTime }}</div>
                            <div class="card-class">
                                <ul class="card-group">
                                    <li v-for="product in item.Tag" :key="product.Tag">{{ product }}</li>
                                </ul>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['videoData', 'productName'],
        computed: {
            dispalyData() {
                return this.videoData.slice(0, 3)
            }
        },
    }
</script>