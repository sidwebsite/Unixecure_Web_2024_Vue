<template>
    <div id="pagination" class="pagination">
        <button class="pagination-button" title="Previous page" aria-label="Previous page" @click="currentPage(1)" v-show="pageInit !== 1">
            <i class="fa-solid fa-angles-left"></i>
        </button>
        <button class="pagination-button" title="Previous page" aria-label="Previous page" @click="prevPage(pageInit)" v-show="pageInit !== 1">
            <i class="fa-solid fa-angle-left"></i>
        </button>
        <ul class="pagination-numbers">
            <li class="number" v-for="page in total" :key="page" :class="{ 'active': page === pageInit }" @click.prevent="currentPage(page)"><span>{{ page }}</span></li>
        </ul>
        <button class="pagination-button" title="Next page" aria-label="Next page" @click="nextPage(pageInit)" v-show="pageInit !== total">
            <i class="fa-solid fa-angle-right"></i>
        </button>
        <button class="pagination-button" title="Next page" aria-label="Next page" @click="currentPage(total)" v-show="pageInit !== total">
            <i class="fa-solid fa-angles-right"></i>
        </button>
    </div>
</template>

<script>
export default {
    props: ['total', 'pageInit'],
    methods: {
        prevPage(numPage) {
            if (this.pageInit !== 1) {
                numPage -= 1
                this.$emit('emit-page', numPage)
            }
            this.scrollTo()
        },
        nextPage(numPage) {
            if (this.pageInit !== this.total) {
                numPage += 1
                this.$emit('emit-page', numPage)
            }
            this.scrollTo()
        },
        currentPage(numPage) {
            this.$emit('emit-page', numPage)
            this.scrollTo()
        },
        scrollTo() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>