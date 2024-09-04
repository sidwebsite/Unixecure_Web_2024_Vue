<template>
    <div class="row">
        <div class="col-md-auto">
            <div class="represent-filter-nav">
                <button type="button" class="btn d-block fs-6 fw-bolder px-3 py-2" :class="{'active': isBtnActive === 'all'}" @click="isBtnActive = 'all'">全部（{{ totalFun }}）</button>
                <button type="button" v-for="btn in buttons" :key="btn" :class="{'active': isBtnActive === btn }" @click="filterItem(btn)" class="btn d-block fs-6 fw-bolder px-3 py-2">{{ btn }}（{{typeNumerFun(btn)}}）</button>
            </div>
        </div>
        <div class="col-md">
            <div class="row row-gap-3">
                <div class="col-md-6 item" v-for="item in listData" :key="item.Id" :class="{'show':  isBtnActive === item.typeName || isBtnActive === 'all', 'hide': isBtnActive !== item.typeName}">
                    <router-link :to="item.link" :title="item.Name" class="represent-lists-card backdrop-blur-60 bg-white-80 boder border-white p-4 h-100">
                        <figure class="figure">
                            <img :src="`./product/${item.product}_small.png`" class="img-fluid" :alt="item.product">
                        </figure>
                        <h5 v-html="item.Name"></h5>
                        <p class="text-gray-400">{{ item.typeName }}</p>
                    </router-link >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                beforeArr: [],
                buttonGroup: [],
                isBtnActive: 'all',
                isShow: false,
                isHide: false
            }
        },
        props: ['listData'],
        computed: {
            totalFun() {
                let total = 0
                total = this.listData.length
                return total 
            },
            buttons() {
                const data = this.listData 
                const beforeArr = this.beforeArr
                const afterArr = []
                // const buttonData = []
                data.forEach(button => {
                    beforeArr.push(button.typeName)
                })
                beforeArr.forEach(val => {
                    if(afterArr.indexOf(val) === -1) {
                        afterArr.push(val)
                    } 
                })
                return afterArr
            },
            idItem() {
                return console.log()
            }
        },
        methods: {
            typeNumerFun(typeName) {
                let filtered = this.beforeArr.filter(item => {
                    return (typeName === item);
                });
                return filtered.length
            },
            filterItem(name) {
                this.isBtnActive = name
            }
        }
    }
</script>