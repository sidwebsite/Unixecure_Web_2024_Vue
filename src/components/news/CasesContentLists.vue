<template>
    <section class="news-content-lists-block">
        <div class="container">
            <h3 class="text-primary-300 mb-6 text-center">更多案例</h3>
            <div class="row news-content-lists">
                <div class="col-lg-4 col-md-6 list" v-for="item in casesData.slice(0, 3)" :key="item.Id">
                    <router-link :to="{ name: 'casesContent', params: { casesId: item.Id }}" :title="item.Name" class="default-card card">
                        <div class="card-img">
                            <img :src="`pic/cases/${item.picDownloadPath}`" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title limitLines-2">{{ item.Name }}</h5>
                            <div class="card-class align-items-start">
                                <span class="h-auto text-nowrap">{{ item.Industry }}</span>
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
        props: ['casesData'],
        methods: {
            getId(id) {
                this.$emit('emit-id', id)
            }
        }
    }
</script>

<style>

</style>