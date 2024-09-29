<template>
    <ul class="class-group">
        <li v-for="product in productName" :key="product"><router-link :to="`/${productRouter(product)}`">{{ product }}</router-link></li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                productRouters: [
                    {
                        path: 'serveMoc',
                        name: 'MOC'
                    }, 
                    {
                        path:'serveHeis',
                        name: 'HEIS'
                    },
                    {
                        path: 'serveSrmas',
                        name: 'SRMAS'
                    },
                    {
                        path: 'serveSivas',
                        name: 'SIVAS'
                    },
                    {
                        path: 'serveLucas',
                        name: 'LUCAS'
                    },
                    {
                        path: 'serveSesc',
                        name: 'SESC',
                    },
                    {
                        path: 'serveSoc',
                        name: 'SOC'
                    },
                    {
                        path: 'serveCse',
                        name: '資安健檢',
                    },
                    {
                        path: 'cellopoint',
                        name: 'cellopoint',
                    },
                    {
                        path: 'eLock',
                        name: 'eLock'
                    },
                    {
                        path: 'delinea',
                        name: 'delinea'
                    },
                    {
                        path: 'illumio',
                        name: 'illumio'
                    },
                    {
                        path: 'invicti',
                        name: 'invicti'
                    },
                    {
                        path: 'entrust',
                        name: 'entrust'
                    },
                    {
                        path: 'opswat',
                        name: 'OPSWAT'
                    },
                    {
                        path: 'neithnet',
                        name: 'NEITHNET'
                    },
                    {
                        path: 'Rapid7',
                        name: 'Rapid7'
                    },
                    {
                        path: 'tufin',
                        name: 'tufin'
                    },
                    {
                        path: 'claroty',
                        name: 'claroty'
                    },
                ]
            }
        },
        props: ['productName'],
        methods: {
            productRouter(name) {
                let link = ''
                this.productRouters.forEach(item => {
                    name === item.name ? link = item.path : false
                })
                return link
            }
        }
    }
</script>

<style>

</style>