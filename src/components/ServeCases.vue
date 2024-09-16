<template>
    <section class="py-7 bg-primary-50 serve-cases overflow-hidden">
        <div class="mw-760 position-relative z-index-2">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center mb-5">
                        <h3>相關案例</h3>
                        <div class="text-center text-md-left">
                            <RouterLink to="/casesLists" class="btn-block-primary text-primary-800" title="更多相關新聞">更多 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="serve-cases-lists">
                <!-- item -->
                <router-link :to="{ name: 'casesContent', params: { casesId: item.Id }}" v-for="item in dispalyData" :key="item.Id" :title="item.Name" class="strip-card card">
                    <div class="row no-gutters flex-md-row-reverse">
                        <div class="col-md-6">
                            <div class="card-img">
                                <div class="bg-img">
                                    <img :src="`pic/cases/${item.picDownloadPath}`" class="img-fluid">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title limitLines-3">{{ item.Name }}</h5>
                                <div class="card-class">
                                    <span>{{ item.Industry }}</span>
                                    <ul class="card-group">
                                        <li v-for="product in item.Tag" :key="product.Tag">{{ product }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['casesData'],
        computed: {
            dispalyData() {
                return this.casesData.slice(0, 2)
            }
        },
    }
</script>

<style>

</style>