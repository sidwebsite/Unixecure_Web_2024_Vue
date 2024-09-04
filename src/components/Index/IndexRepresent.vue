<template>
    <div class="row mb-6 align-items-center">
        <div class="col-lg-4 col-md-6 mb-3" v-for="item in represents" :key="item.Id">
            <router-link :to="`/${item.name}`" :title="item.name" class="d-block text-center text-lg-left text-md-right">
                <figure class="figure">
                    <img :src="`./index/${item.pic}`" class="img-fluid" :alt="item.name">
                </figure>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            represents: [
                {
                    Id: '1',
                    name: 'SsecurityScorecard',
                    pic: 'index_securityScorecard.png',
                },
                {
                    Id: '2',
                    name: 'Rapid7',
                    pic: 'index_rapid7.png',
                },
                {
                    Id: '3',
                    name: 'skyhigh',
                    pic: 'index_skyhigh.png',
                },
                {
                    Id: '4',
                    name: 'illumio',
                    pic: 'index_illumio.png',
                },
                {
                    Id: '5',
                    name: 'neithnet',
                    pic: '/index_neithnet.png',
                },
                {
                    Id: '6',
                    name: 'opswat',
                    pic: 'index_opswat.png',
                }
            ]
        }
    }
}
</script>

<style>

</style>