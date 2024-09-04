<template>
    <section class="news-content-lists-block">
        <div class="container">
            <h3 class="text-primary-300 mb-6 text-center">更多影片</h3>
            <div class="row news-content-lists">
                <div class="col-lg-4 col-md-6 list" v-for="item in videoData.slice(0, 3)" :key="item.Id">
                    <router-link :to="{ name: 'videoContent', params: { videoId: item.Id }}" :title="item.Name" class="default-card card">
                        <div class="card-img video-img">
                            <img :src="`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title limitLines-2">{{ item.Name }}</h5>
                            <span class="card-date">{{ item.DataTime }}</span>
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
        props: ['videoData'],
        methods: {
            getId(id) {
                this.$emit('emit-id', id)
            }
        }
    }
</script>