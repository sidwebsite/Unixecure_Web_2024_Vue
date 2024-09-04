<script>
    export default {
        props: ['statementsData']
    }
</script>

<template>
    <div class="row index-statements">
        <div class="col-md">
            <article>
                <h3 class="mb-5">{{ statementsData.Name }}</h3>
                <p class="text-justify mb-5">{{ statementsData.Profile }}</p>
                <div class="mb-5 text-center text-md-left">
                    <router-link :to="`/statementsContent/${statementsData.Id}`" class="btn-block-primary text-primary-800" title="前往下載">前往下載 <i class="fa-solid fa-arrow-right-long"></i></router-link>
                </div>
            </article>
        </div>
        <div class="col-md-auto">
            <figure class="figure text-center text-lg-right text-md-left">
                <img :src="`./pic/statements/${statementsData.picDownloadPath}`" class="w-100" alt="...">
            </figure>
        </div>
    </div>
</template>