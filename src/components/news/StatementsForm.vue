<template>
    <div class="bg-gray-100-50 px-5 py-4 mb-6">
        <h4 class="text-center mb-3">欲獲得完整版《全域聯防終極指南》請留下您的資訊，將有專人與您聯繫。</h4>
        <Form>
            <!-- 聯絡人姓名 -->
            <div class="mb-4">
                <label for="FormName" class="form-label"><span class="text-alarm">*</span>聯絡人姓名</label>
                <Field type="text" class="form-control mw-380" id="FormName" v-model="forms.FormName" name="FormName" :rules="isRequired" placeholder="請輸入聯絡人姓名" />
                <ErrorMessage class="text-alarm" name="FormName" />
            </div>
            <!-- 電子信箱 Email -->
            <div class="mb-4">
                <label for="FormEmail" class="form-label"><span class="text-alarm">*</span>電子信箱 Email</label>
                <Field type="email" class="form-control mw-380" id="FormEmail" v-model="FormEmail" name="FormEmail" :rules="validateEmail" placeholder="請輸入電子信箱 Email" />
                <ErrorMessage class="text-alarm" name="FormEmail" />
            </div>
            <!-- 部門 -->
            <div class="mb-4">
                <label for="" class="form-label"><span class="text-alarm">*</span>部門</label>
                <select class="form-select mw-380">
                    <option selected>請選擇部門</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <!-- 公司統一編號 -->
            <div class="mb-4">
                <label for="" class="form-label">公司統一編號</label>
                <input type="text" class="form-control mw-380" id="" placeholder="請輸入統編">
            </div>
            <!-- 貴公司資安預算 -->
            <div class="mb-4">
                <label for="" class="form-label">貴公司資安預算</label>
                <select class="form-select mw-380">
                    <option selected>請選擇</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <!-- 地區 -->
            <div class="mb-4">
                <label for="" class="form-label">地區</label>
                <select class="form-select mw-380">
                    <option selected>請選擇地區</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <!-- 訊息得知管道（複選） -->
            <div class="mb-4">
                <label for="" class="form-label"><span class="text-alarm">*</span>訊息得知管道（複選）</label>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="message1" value="" name="message">
                    <label class="form-check-label" for="message1">報章雜誌</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="message2" value="" name="message">
                    <label class="form-check-label" for="message2">展覽/研討會</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="message3" value="" name="message">
                    <label class="form-check-label" for="message3">社群網路</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="message4" value="" name="message">
                    <label class="form-check-label" for="message4">友人推薦</label>
                </div>
                <!-- 業務推薦 -->
                <div class="form-check mb-1">
                    <input class="form-check-input" type="checkbox" id="message5" value="" name="message">
                    <label class="form-check-label" for="message5">業務推薦</label>
                </div>
                <input type="text" class="form-control mw-380 mb-3" id="" placeholder="請輸入推薦業務姓名">
                <!--  -->
                <div class="form-check mb-1">
                    <input class="form-check-input" type="checkbox" id="message6" value="" name="message">
                    <label class="form-check-label" for="message6">其他</label>
                </div>
                <textarea class="form-control" id="" rows="3" placeholder="請輸入其他得知管道"></textarea>
            </div>
            <!-- 有興趣的議題（複選） -->
            <div class="mb-4">
                <label for="" class="form-label"><span class="text-alarm">*</span>有興趣的議題（複選）</label>
                <div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue1" value="" name="issue">
                        <label class="form-check-label" for="issue1">資通安全法</label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue2" value="" name="issue">
                        <label class="form-check-label" for="issue2">資安法規監管</label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue3" value="" name="issue">
                        <label class="form-check-label" for="issue3">資安託管服務</label>
                    </div>
                </div>
                <div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue4" value="" name="issue">
                        <label class="form-check-label" for="issue4">數據安全</label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue5" value="" name="issue">
                        <label class="form-check-label" for="issue5">零信任</label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue6" value="" name="issue">
                        <label class="form-check-label" for="issue6">公司治理</label>
                    </div>
                </div>
                <div class="form-check mb-1">
                    <input class="form-check-input" type="checkbox" id="issue7" value="" name="issue">
                    <label class="form-check-label" for="issue7">其他</label>
                </div>
                <textarea class="form-control" id="" rows="3" placeholder="請輸入其他想了解的項目"></textarea>
            </div>
            <!-- 客戶隱私權政策 -->
            <div class="mb-3">
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="agree" value="">
                    <label class="form-check-label" for="agree">我同意</label>
                </div>
                <RouterLink to="/copyright" class="text-decoration-none mb-0">客戶隱私權政策</RouterLink>
                <span class="text-alarm">*</span>
            </div>
            <!--  -->
            <div class="text-center">
                <button class="btn btn-contact">我要下載</button>
            </div>
        </Form>
    </div>
</template>

<script>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    export default {
        data() {
            return {
                errorMessages: {
                    required: '此欄位不能為空白',
                    email: '請輸入正確電子信箱格式',
                    phone: '請輸入正確電話格式',
                    select: '此欄位必須選擇'
                },
                forms: {
                    FormName: '',
                }
            }
        },
        components: {
            Form,
            Field,
            ErrorMessage 
        },
        methods: {
            isRequired(value) {
                if (!value) {
                    return this.errorMessages.required;
                }
                return true
            },
            validateEmail(value) {
                if (!value) {
                    return this.errorMessages.required;
                }
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!regex.test(value)) {
                    return this.errorMessages.email;
                }
                // All is good
                return true;
            },
            validateTel(value) {
                if (!value) {
                    return this.errorMessages.required;
                }
                const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-#\s\\./0-9]*$/g;
                if (!regex.test(value) || value.length < 7) {
                    return this.errorMessages.phone;
                }
                // All is good
                return true;
            },
            // clearTextarea(checked) {
            //     this.otherChecked = !this.otherChecked;
            //     this.otherChecked === false ? this.isDisabled = true :  this.isDisabled = false
            //     checked = this.isDisabled
            //     console.log(checked)
            // },
            onSubmit() {
                // const api = 'https://10.13.202.198:7070/api/contact_us/insert';
                // this.axios.post(api, values).then((response) => {
                //     console.log(response.data)
                // }).catch(err => {
                //     console.log(err)
                // })
            },
        }
    }
</script>