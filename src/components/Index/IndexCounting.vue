<template>
    <div ref="counting" class="row counting">
        <div class="col-md-4">
            <div class="text-center mb-4 mb-md-0">
                <span class="index-number d-block mb-3 fw-bolder"><span class="animate-number">{{ homeNumber }}</span>+</span>
                <span class="d-block fw-bolder fs-6">家自有/代理資安工具</span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="text-center mb-4 mb-md-0">
                <span class="index-number d-block mb-3 fw-bolder"><span class="animate-number">{{ timeNumber }}</span>x24</span>
                <span class="d-block fw-bolder fs-6">小時全天候資安監控</span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="text-center mb-0">
                <span class="index-number d-block mb-3 fw-bolder"><span class="animate-number">{{ percentage }}</span>%</span>
                <span class="d-block fw-bolder fs-6">資安監控續約率</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                positions: 0,
                scrollPositions: 0,
                interval: null,
                delay: 2000,
                homeNumber: 0,
                homeTotal: 30,
                timeNumber: 0,
                timeTotal: 7,
                percentage: 0,
                percentageTotal: 91,
                isUserScrolling: '',
                isLoaded: false
            }
        },
        created() {
            window.addEventListener('scroll', this.startInterval);
        },
        unmounted() {
            window.removeEventListener('scroll', this.startInterval);
        },
        methods: {
            startInterval() {
                const positions = this.$refs.counting.offsetTop
                this.isUserScrolling  = scrollY >= positions;
                if(this.isUserScrolling && !this.isLoaded) {
                    this.homeCounting()
                    this.timeCounting()
                    this.percentageCounting()
                    this.isLoaded = true
                }
            },
            homeCounting() {
                let startVal = 0
                const total = this.homeTotal
                const delay = Math.floor(this.delay / total);
                const interval = window.setInterval(() => {
                    startVal += 1;
                    this.homeNumber = startVal
                    if (startVal === total) {
                        window.clearInterval(interval);
                    }
                }, delay)
            },
            timeCounting() {
                let startVal = 0
                const total = this.timeTotal
                const delay = Math.floor(this.delay / total);
                const interval = window.setInterval(() => {
                    startVal += 1;
                    this.timeNumber = startVal
                    if (startVal === total) {
                        window.clearInterval(interval);
                    }
                }, delay)
            },
            percentageCounting() {
                let startVal = 0
                const total = this.percentageTotal
                const delay = Math.floor(this.delay / total);
                const interval = window.setInterval(() => {
                    startVal += 1;
                    this.percentage = startVal
                    if (startVal === total) {
                        window.clearInterval(interval);
                    }
                }, delay)
            },
        }
    }
</script>

<style>

</style>